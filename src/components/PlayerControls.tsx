import { useAudioPlayer } from '@/hooks/useAudioPlayer';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';

export function PlayerControls() {
  // const { isPlaying, currentTime, play, pause } = useAudioPlayer();

  return (
    <Drawer>
      <DrawerTrigger className="fixed bottom-0 w-full">
        {/* Minimized player view */}
        <div className="h-16 bg-background border-t">
          {/* Basic controls */}
        </div>
      </DrawerTrigger>
      <DrawerContent>
        {/* Expanded player view */}
        {/* Full controls, artwork, etc */}
      </DrawerContent>
    </Drawer>
  );
} 