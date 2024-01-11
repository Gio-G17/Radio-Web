import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll';


function Navbar() {
  //const image = require('../../../images/content-test-thumbnail-1.png');
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const scrollToAbout = () => {
    scroll.scrollMore(500, { duration: 1000 });
  };

  const scrollToShop = () => {
    scroll.scrollMore(500, { duration: 1000 });
  };
  const scrollToContact = () => {
    scroll.scrollMore(500, { duration: 1000 });
  };
  



  return (
    <nav>
      
      <div className="logo" onClick={scrollToTop}>
      <img src={require('../assets/images/logo1.png')} alt="logo" className='logo1'/>
      </div>
        
      <div onClick={scrollToTop}>Home</div>
      <div onClick={scrollToAbout}>About Us</div>
      <div onClick={scrollToShop}>Shop</div>
      <div onClick={scrollToContact}>Contact Us</div>

        
        
      <div className='nav-icon'>
      
          <img src={require('../assets/images/icon-whatsapp.png')} alt="logo" className='icon-wp'/>
          <img src={require('../assets/images/icon-yt.png')} alt="logo" className='icon-yt'/>
      
      </div>
      
      <div className='nav-icon'>
          <img src={require('../assets/images/icon-instagram.png')} alt="logo" className='icon-insta'/>
          <img src={require('../assets/images/icon-fb.png')} alt="logo" className='icon-fb'/>
      </div>
    
    </nav>
  )
}

export default Navbar