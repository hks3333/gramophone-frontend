import { useState, useEffect } from 'react';

interface AudioPlayerState {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  analyser?: AnalyserNode;
  currentUrl?: string;
  currentSong?: {
    name: string;
    artist: string;
    coverUrl: string;
    palette: string[];
  };
  playlist: PlaylistItem[];
  currentTrackIndex: number;
  isExpanded: boolean;
}

interface PlaylistItem {
  url: string;
  songInfo: {
    name: string;
    artist: string;
    coverUrl: string;
    palette: string[];
  };
}

interface PlayOptions {
  url: string;
  songInfo: {
    name: string;
    artist: string;
    coverUrl: string;
    palette: string[];
  };
}

class AudioPlayer {
  private static instance: AudioPlayer;
  private state: AudioPlayerState;
  private audioRef: HTMLAudioElement | null = null;
  private audioContextRef: AudioContext | null = null;
  private analyserRef: AnalyserNode | null = null;
  private listeners: ((state: AudioPlayerState) => void)[] = [];

  private constructor() {
    this.state = {
      isPlaying: false,
      currentTime: 0,
      duration: 0,
      volume: 1,
      currentUrl: undefined,
      playlist: [],
      currentTrackIndex: -1,
      isExpanded: false,
    };
  }

  public static getInstance(): AudioPlayer {
    if (!AudioPlayer.instance) {
      AudioPlayer.instance = new AudioPlayer();
    }
    return AudioPlayer.instance;
  }

  public subscribe(listener: (state: AudioPlayerState) => void) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  private updateState(newState: Partial<AudioPlayerState>) {
    this.state = { ...this.state, ...newState };
    this.listeners.forEach(listener => listener(this.state));
  }

  private stopCurrent() {
    this.audioRef?.pause();
    this.audioRef = null;
  }

  private async initializeAudio(url: string) {
    try {
      this.stopCurrent();

      this.audioRef = new Audio(url);
      this.audioRef.crossOrigin = "anonymous";
      
      this.audioRef.addEventListener('loadedmetadata', () => {
        this.updateState({
          duration: this.audioRef?.duration || 0
        });
      });

      this.audioRef.addEventListener('timeupdate', () => {
        this.updateState({
          currentTime: this.audioRef?.currentTime || 0
        });
      });

      this.audioRef.addEventListener('ended', () => {
        this.next();
      });

      if (!this.audioContextRef) {
        this.audioContextRef = new AudioContext();
        this.analyserRef = this.audioContextRef.createAnalyser();
        this.analyserRef.fftSize = 256;
      }
      
      const source = this.audioContextRef.createMediaElementSource(this.audioRef);
      source.connect(this.analyserRef!);
      this.analyserRef!.connect(this.audioContextRef.destination);

      this.updateState({ currentUrl: url });
    } catch (error) {
      console.error('Error initializing audio:', error);
    }
  }

  public async play(options?: PlayOptions) {
    if (options) {
      const { url, songInfo } = options;
      await this.initializeAudio(url);
      if (this.audioRef) {
        await this.audioRef.play();
        this.updateState({
          isPlaying: true,
          currentUrl: url,
          currentSong: songInfo
        });
      }
    } else if (this.audioRef) {
      await this.audioRef.play();
      this.updateState({ isPlaying: true });
    }
  }

  public pause() {
    this.audioRef?.pause();
    this.updateState({ isPlaying: false });
  }

  public seek(time: number) {
    if (this.audioRef) {
      this.audioRef.currentTime = time;
    }
  }

  public setVolume(value: number) {
    const newVolume = Math.max(0, Math.min(1, value));
    if (this.audioRef) {
      this.audioRef.volume = newVolume;
    }
    this.updateState({ volume: newVolume });
  }

  public getFrequencyData() {
    if (this.analyserRef) {
      const dataArray = new Uint8Array(this.analyserRef.frequencyBinCount);
      this.analyserRef.getByteFrequencyData(dataArray);
      return dataArray;
    }
    return new Uint8Array();
  }

  public getState() {
    return this.state;
  }

  public setPlaylist(songs: PlaylistItem[]) {
    this.updateState({
      playlist: songs,
      currentTrackIndex: 0
    });
  }

  public async playTrack(index: number) {
    if (index >= 0 && index < this.state.playlist.length) {
      const track = this.state.playlist[index];
      await this.play({
        url: track.url,
        songInfo: {
          name: track.songInfo.name,
          artist: track.songInfo.artist,
          coverUrl: track.songInfo.coverUrl,
          palette: track.songInfo.palette
        }
      });
      this.setExpanded(true);
    }
  }

  public async next() {
    const nextIndex = (this.state.currentTrackIndex + 1) % this.state.playlist.length;
    this.updateState({ 
      currentTrackIndex: nextIndex,
      currentSong: this.state.playlist[nextIndex].songInfo 
    });
    await this.playTrack(nextIndex);
  }

  public async previous() {
    const prevIndex = this.state.currentTrackIndex <= 0 
      ? this.state.playlist.length - 1 
      : this.state.currentTrackIndex - 1;
    this.updateState({ 
      currentTrackIndex: prevIndex,
      currentSong: this.state.playlist[prevIndex].songInfo 
    });
    await this.playTrack(prevIndex);
  }

  public setExpanded(expanded: boolean) {
    this.updateState({ isExpanded: expanded });
  }
}

export const useAudioPlayer = () => {
  const [state, setState] = useState<AudioPlayerState>(AudioPlayer.getInstance().getState());
  const player = AudioPlayer.getInstance();

  useEffect(() => {
    const unsubscribe = player.subscribe(setState);
    return unsubscribe;
  }, []);

  return {
    ...state,
    play: (options?: PlayOptions) => player.play(options),
    pause: () => player.pause(),
    seek: (time: number) => player.seek(time),
    setVolume: (value: number) => player.setVolume(value),
    getFrequencyData: () => player.getFrequencyData(),
    next: () => player.next(),
    previous: () => player.previous(),
    setPlaylist: (songs: PlaylistItem[]) => player.setPlaylist(songs),
    playTrack: (index: number) => player.playTrack(index),
    isExpanded: state.isExpanded,
    setExpanded: (expanded: boolean) => player.setExpanded(expanded),
  };
}; 