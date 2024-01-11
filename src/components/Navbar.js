import React from 'react'


function Navbar() {
  //const image = require('../../../images/content-test-thumbnail-1.png');

  return (
    <nav>
      <ul>
        <div>1</div>
        <div className='logo-home'><img src={require('../assets/images/logo1.png')} alt="logo" className='logo1'/></div>
        <div>Home</div> 
        <div>About Us</div>
        <div>Shop</div>
        <div>Contact Us</div> 
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div className='nav-icon'>
          <img src={require('../assets/images/icon-whatsapp.png')} alt="logo" className='icon-wp'/>
          <img src={require('../assets/images/icon-yt.png')} alt="logo" className='icon-yt'/>
        </div>
        <div className='nav-icon'>
          <img src={require('../assets/images/icon-instagram.png')} alt="logo" className='icon-insta'/>
          <img src={require('../assets/images/icon-fb.png')} alt="logo" className='icon-fb'/>
        </div>
      </ul>
    </nav>
  )
}

export default Navbar