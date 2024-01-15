import React, { useState } from 'react';
import playIcon from '../assets/images/play-icon.png';
import pauseIcon from '../assets/images/pause-icon.png';
import MuteIcon from '../assets/images/mute-icon.png';
import UnmuteIcon from '../assets/images/unmute-icon.png';

import './HomePage.css';

function HomePage() {

  const [on, setOn] = useState(false);
  const [volume, setVolume] = useState(50);
  const [isMuted, setIsMuted] = useState(false);

  const pauseplay = () => {
    setOn(!on);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseInt(e.target.value, 10);
    setVolume(newVolume);
    setIsMuted(false);
  };

  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
    setVolume(isMuted ? 50 : 0);
  };

  

  return (
    
    <div className="home-page">
      <div className="pp-icon">
        <img src={on ? pauseIcon : playIcon} alt="play" onClick={pauseplay} />
      </div>

      <>
        <img src={isMuted || volume === 0 ? MuteIcon : UnmuteIcon} alt="play" onClick={handleMuteToggle} />
        <label>
          <input
          className="slider"
            type="range"
            min="0"
            max="100"
            step="1"
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            
          />
          <div>Volume: {isMuted ? 'Muted' : `${volume}%`}</div>
        </label>
      </>
    </div>
  );
}

export default HomePage;
