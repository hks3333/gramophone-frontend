import { FC, useState, useEffect } from 'react';
import { songs } from '@/lib/library';
import { useAudioPlayer } from '@/hooks/useAudioPlayer';
import { RefreshCw } from 'lucide-react';
import './recommendations.css';

const Recommendations: FC = () => {
  const audioPlayer = useAudioPlayer();
  const [recommendedSongs, setRecommendedSongs] = useState<typeof songs>([]);

  const getRandomSongs = () => {
    const shuffled = [...songs].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 10);
  };

  // Initialize recommendations only once when component mounts
  useEffect(() => {
    setRecommendedSongs(getRandomSongs());
  }, []); // Empty dependency array means this runs once on mount

  const handleRefresh = () => {
    setRecommendedSongs(getRandomSongs());
  };

  const handleSongClick = (index: number) => {
    // Create a playlist starting from the clicked song and including all remaining songs
    const playlist = recommendedSongs.slice(index).map(track => ({
      url: track.songUrl,
      songInfo: {
        name: track.name,
        artist: track.artist,
        coverUrl: track.coverUrl,
        palette: [] // You might want to add palette colors later
      }
    }));
    
    audioPlayer.setPlaylist(playlist);
    audioPlayer.playTrack(0);
  };

  return (
    <div className="recommendations-container">
      <div className="recommendations-header">
        <h2 className="recommendations-title">Recommended for you</h2>
        <button 
          className="refresh-button"
          onClick={handleRefresh}
        >
          <RefreshCw size={16} />
          <span>Refresh</span>
        </button>
      </div>
      <div className="recommendations-list">
        {recommendedSongs.map((song, index) => (
          <div 
            key={index} 
            className="recommendation-item"
            onClick={() => handleSongClick(index)}
          >
            <div className="recommendation-cover">
              <img 
                src={song.coverUrl} 
                alt={song.name}
                className="cover-image"
              />
            </div>
            <div className="recommendation-info">
              <p className="song-name">{song.name}</p>
              <p className="artist-name">{song.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations; 