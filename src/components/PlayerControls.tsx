import { useState, useRef, useEffect } from 'react';
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
} from "@/components/ui/drawer";
import "./PlayerControls.css"
import { useAudioPlayer } from '@/hooks/useAudioPlayer';
import { Blurhash } from "react-blurhash";
import { GradientBackground } from '@/components/GradientBackground';
import { Volume2, VolumeX, SkipBack, SkipForward, Play, Pause, ChevronDown } from 'lucide-react';

export const PlayerDrawer = () => {
  const { 
    isPlaying, 
    currentTime, 
    duration, 
    volume,
    play,
    pause,
    next,
    previous,
    currentSong,
    playlist,
    currentTrackIndex,
    seek,
    setVolume,
    isExpanded,
    setExpanded,
    playTrack
  } = useAudioPlayer();
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const coverImageRef = useRef<HTMLImageElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const previousVolume = useRef(volume);
  
  // Format time helper
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  const handlePlayPause = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isPlaying) {
      pause();
    } else if (currentSong) {
      play();
    }
  };

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    previous();
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    next();
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - bounds.left) / bounds.width;
    const newTime = percent * duration;
    seek(newTime);
  };

  const toggleMute = () => {
    if (isMuted) {
      setVolume(previousVolume.current);
    } else {
      previousVolume.current = volume;
      setVolume(0);
    }
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - bounds.left) / bounds.width;
    const newVolume = Math.max(0, Math.min(1, percent));
    setVolume(newVolume);
    if (newVolume > 0) setIsMuted(false);
  };

  // Add this handler to prevent drawer expansion
  const handleControlClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  // Add image preloading
  useEffect(() => {
    if (currentSong?.coverUrl) {
      const img = new Image();
      img.src = currentSong.coverUrl;
      img.onload = () => setIsImageLoaded(true);
    }
  }, [currentSong?.coverUrl]);

  return (
    <div className="fixed flex-shrink-0 bottom-0 left-0 right-0 z-50">
      <Drawer 
        direction="bottom" 
        open={isExpanded} 
        onOpenChange={setExpanded}
      >
        <DrawerTrigger asChild>
          {/* Mini Player */}
          <div className="w-full border-t-2 border-black rounded-t-3xl p-2 cursor-pointer bg-background">
            <div className="flex items-center justify-between h-24 px-4">
              {/* Track Info */}
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-sm overflow-hidden">
                  {!isImageLoaded && (
                    <div className="w-full h-full">
                      <Blurhash
                        hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
                        width={40}
                        height={40}
                        resolutionX={32}
                        resolutionY={32}
                        punch={1}
                      />
                    </div>
                  )}
                  <img 
                    ref={coverImageRef}
                    src={currentSong?.coverUrl}
                    alt="Album Cover"
                    className={`w-full h-full object-cover ${isImageLoaded ? "visible" : "hidden"}`}
                    onLoad={() => setIsImageLoaded(true)}
                  />
                </div>
                <div className="truncate">
                  <p className="font-medium truncate">{currentSong?.name || 'No track playing'}</p>
                  <p className="text-sm text-muted-foreground truncate">
                    {currentSong?.artist || 'Select a track'}
                  </p>
                </div>
              </div>
              
              {/* Controls */}
              <div className="flex items-center gap-4" onClick={handleControlClick}>
                <button 
                  onClick={handlePrevious}
                  disabled={currentTrackIndex <= 0}
                  className="disabled:opacity-50 hover:text-primary transition"
                >
                  <SkipBack size={20} />
                </button>
                
                <button 
                  onClick={handlePlayPause}
                  className="p-2 rounded-full bg-primary hover:bg-primary/90 transition"
                >
                  {isPlaying ? (
                    <Pause size={20} fill="white" />
                  ) : (
                    <Play size={20} fill="white" />
                  )}
                </button>
                
                <button 
                  onClick={handleNext}
                  disabled={currentTrackIndex >= playlist.length - 1}
                  className="disabled:opacity-50 hover:text-primary transition"
                >
                  <SkipForward size={20} />
                </button>

                <button 
                  onClick={toggleMute}
                  className="text-muted-foreground hover:text-foreground transition ml-4"
                >
                  {isMuted || volume === 0 ? (
                    <VolumeX size={16} />
                  ) : (
                    <Volume2 size={16} />
                  )}
                </button>
                
                <div 
                  className="w-28 h-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300 transition"
                  onClick={handleVolumeChange}
                >
                  <div 
                    className="h-full bg-primary rounded-full" 
                    style={{ width: `${volume * 100}%` }}
                  />
                </div>
              </div>
            </div>
            
            {/* Progress bar */}
            <div className="px-4 pb-2" onClick={handleControlClick}>
              <div 
                className="relative h-3 w-full bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300 transition"
                onClick={handleSeek}
              >
                <div 
                  className="absolute h-full bg-primary rounded-full" 
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>
          </div>
        </DrawerTrigger>



        {/* Expanded Player */}
        <DrawerContent className="h-[100dvh] p-0 max-h-none mt-0">
          <div className="flex h-[100dvh] relative overflow-hidden">
            {isExpanded && (
              <GradientBackground 
                isPlaying={isPlaying} 
                palette={currentSong?.palette || []}
              />
            )}
            
            {/* Left side - Player */}
            <div className="flex-1 flex flex-col">
              {/* Header with close button */}
              <div className="flex justify-end h-24 px-8">
                <button 
                  onClick={() => setExpanded(false)}
                  className="hidden md:block text-muted-foreground hover:text-foreground transition p-4 hover:opacity-70"
                >
                  <ChevronDown size={28} />
                </button>
              </div>

              {/* Main content */}
              <div className="flex flex-col items-center flex-1 gap-8 p-6">
                {/* Album Art */}
                <div className="w-78 h-74 rounded-lg overflow-hidden ">
                  {!isImageLoaded && (
                    <div className="w-full h-full overflow-hidden">
                      <Blurhash
                        hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
                        width={512}
                        height={512}
                        resolutionX={32}
                        resolutionY={32}
                        punch={1}
                      />
                    </div>
                  )}
                  <img 
                    className={`w-full h-full object-cover ${isImageLoaded ? "visible" : "hidden"}`}
                    src={currentSong?.coverUrl}
                    alt={currentSong?.name}
                    onLoad={() => setIsImageLoaded(true)}
                  />
                </div>
                
                {/* Track Info */}
                <div className="text-center">
                  <h2 className="text-2xl font-bold">{currentSong?.name || 'No track playing'}</h2>
                  <p className="text-muted-foreground">{currentSong?.artist || 'Select a track'}</p>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full max-w-md space-y-2">
                  <div 
                    className="relative h-4 w-full bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300 transition overflow-hidden"
                    onClick={handleSeek}
                  >
                    <div 
                      className="absolute h-full bg-primary rounded-full" 
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>
                
                {/* Controls */}
                <div className="flex flex-col items-center gap-6">
                  {/* Main controls row */}
                  <div className="flex items-center gap-8">
                    <button 
                      onClick={handlePrevious}
                      disabled={currentTrackIndex <= 0}
                      className="disabled:opacity-50 hover:text-primary transition"
                    >
                      <SkipBack size={24} />
                    </button>
                    
                    <button 
                      onClick={handlePlayPause}
                      className="p-3 rounded-full bg-primary hover:bg-primary/90 transition"
                    >
                      {isPlaying ? (
                        <Pause size={24} fill="white" />
                      ) : (
                        <Play size={24} fill="white" />
                      )}
                    </button>
                    
                    <button 
                      onClick={handleNext}
                      disabled={currentTrackIndex >= playlist.length - 1}
                      className="disabled:opacity-50 hover:text-primary transition"
                    >
                      <SkipForward size={24} />
                    </button>
                  </div>

                  {/* Volume controls row */}
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={toggleMute}
                      className="text-muted-foreground hover:text-foreground transition"
                    >
                      {isMuted || volume === 0 ? (
                        <VolumeX size={20} />
                      ) : (
                        <Volume2 size={20} />
                      )}
                    </button>

                    <div 
                      className="w-36 h-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300 transition"
                      onClick={handleVolumeChange}
                    >
                      <div 
                        className="h-full bg-primary rounded-full" 
                        style={{ width: `${volume * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Playlist */}
            <div className="hidden lg:block w-96 border-l border-border bg-background/80 backdrop-blur-sm">
              <div className="h-full flex flex-col">
                <div className="p-6 border-b border-border">
                  <h3 className="text-lg font-semibold">
                    {playlist.length > 1 ? 'Up Next' : (currentSong?.artist || 'Playlist')}
                  </h3>
                </div>
                <div className="flex-1 overflow-y-auto">
                  <div className="p-6 space-y-2">
                    {playlist.map((track, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          playTrack(index);
                        }}
                        className={`w-full p-3 rounded-lg flex items-center gap-3 transition ${
                          index === currentTrackIndex
                            ? 'bg-primary/10 text-primary'
                            : 'hover:bg-accent'
                        }`}
                      >
                        <div className="w-10 h-10 rounded-sm overflow-hidden">
                          <img
                            src={track.songInfo.coverUrl}
                            alt={track.songInfo.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 text-left">
                          <p className="font-medium truncate">{track.songInfo.name}</p>
                          <p className="text-sm text-muted-foreground truncate">
                            {track.songInfo.artist}
                          </p>
                        </div>
                        {index === currentTrackIndex && (
                          <div className="text-primary">
                            {isPlaying ? (
                              <Pause size={16} />
                            ) : (
                              <Play size={16} />
                            )}
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};