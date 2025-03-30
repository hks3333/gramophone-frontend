import { useState, useRef } from 'react';
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
} from "@/components/ui/drawer";
import "./playercontrols.css"
import { useAudioPlayer } from '@/hooks/useAudioPlayer';
import { Blurhash } from "react-blurhash";
import { GradientBackground } from '@/components/GradientBackground';
import { Volume2, VolumeX, SkipBack, SkipForward, Play, Pause, ChevronUp } from 'lucide-react';

export const PlayerDrawer = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const coverImageRef = useRef<HTMLImageElement>(null);
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
    setVolume
  } = useAudioPlayer();
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

  return (
    <div className="fixed flex-shrink-0 bottom-0 left-0 right-0 z-50">
      <Drawer 
        direction="bottom" 
        open={isExpanded} 
        onOpenChange={setIsExpanded}
      >
        <DrawerTrigger asChild>
          {/* Mini Player */}
          <div className="w-full bg-background border-t rounded-t-3xl p-2 cursor-pointer">
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
                  onClick={toggleMute}
                  className="text-muted-foreground hover:text-foreground transition"
                >
                  {isMuted || volume === 0 ? (
                    <VolumeX size={16} />
                  ) : (
                    <Volume2 size={16} />
                  )}
                </button>

                <div 
                  className="w-24 h-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300 transition"
                  onClick={handleVolumeChange}
                >
                  <div 
                    className="h-full bg-primary rounded-full" 
                    style={{ width: `${volume * 100}%` }}
                  />
                </div>

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

                {/* Volume controls row */}
                <div className="flex items-center gap-2">
                  <button 
                    onClick={toggleMute}
                    className="text-muted-foreground hover:text-foreground transition"
                  >
                    {isMuted || volume === 0 ? (
                      <VolumeX size={16} />
                    ) : (
                      <Volume2 size={16} />
                    )}
                  </button>

                  <div 
                    className="w-24 h-1 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300 transition"
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
        <DrawerContent className="h-[100dvh] p-0 max-h-none mt-0 ">
          <div className="flex flex-col h-[100dvh] p-6 relative ">
            {isExpanded && (
              <GradientBackground 
                isPlaying={isPlaying} 
                palette={currentSong?.palette || []}
              />
            )}
            {/* Header with close button */}
            <div className="flex justify-end mb-4 ">
              <button onClick={() => setIsExpanded(false)}>
                Close
              </button>
            </div>

            {/* Main content */}
            <div className="flex flex-col items-center flex-1 gap-8 mt-8">
              {/* Album Art */}
              <div className="w-78 h-78 rounded-lg overflow-hidden">
                {!isImageLoaded && (
                  <div className="w-full h-full">
                    <Blurhash
                      hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
                      width={256}
                      height={256}
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
                  className="relative h-2 w-full bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300 transition"
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
                    className="w-32 h-1 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300 transition"
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
        </DrawerContent>
      </Drawer>
    </div>
  );
};