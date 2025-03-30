// src/components/topbar.tsx
import { FC } from 'react';
import "./albums.css"
import VinylCover from "./vinylcover/vinylcover";
import { albums, Album } from '@/lib/library';
import { useAudioPlayer } from '@/hooks/useAudioPlayer';

const Albums: FC = () => {
    const audioPlayer = useAudioPlayer(); 

    const handlePlayAlbum = (album: Album) => {
        if (album.songs.length > 0) {
            const playlist = album.songs.map(song => ({
                url: song.url,
                songInfo: {
                    name: song.title,
                    artist: album.artist,
                    coverUrl: album.coverUrl,
                    palette: album.palette
                }
            }));
            
            audioPlayer.setPlaylist(playlist);
            audioPlayer.playTrack(0);
        }
    };

    return (
        <div className='albm flex flex-col pb-6 pt-4 px-4 h-full w-full bg-amber-200'>
            <div className='album-title text-center text-2xl font-bold'>
                Featured Albums
            </div>
            <div className="flex flex-wrap gap-8 mt-8 mb-8 w-full justify-center">
                {albums.map((album) => (
                    <VinylCover 
                        key={`${album.name}-${album.artist}`}
                        imageSrc={album.coverUrl}
                        text={`${album.name} - ${album.artist}`}
                        onPlay={() => handlePlayAlbum(album)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Albums;