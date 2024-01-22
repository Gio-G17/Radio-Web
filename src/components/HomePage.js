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
    
    <div class="home-page">

      
        <div class="ppdiv-icon">
          <img src={on ? pauseIcon : playIcon} alt="play" onClick={pauseplay} class="pp-icon" />
        </div>


        <div class='volumehand'>

          <img src={isMuted || volume === 0 ? MuteIcon : UnmuteIcon} alt="play" onClick={handleMuteToggle} class='munm-icons' />
          
          <div class = 'slider'>
            <input
                className="vlslider"
                type="range"
                min="0"
                max="100"
                step="1"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
            />
          </div>
        </div>



        <div>
          <p class = 'disc'>LIT Radio <br></br>
          Streaming from <br></br>
          the heart of <br></br>
          Beirut, Lebanon
          </p>
        </div>



    </div>



  );
}

export default HomePage;
