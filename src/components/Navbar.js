import React, {useState} from 'react'
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
    scroll.scrollMore(1500, { duration: 1000 });
  };
  const scrollToContact = () => {
    scroll.scrollMore(500, { duration: 1000 });
  };
  
  function openSocialMedia() {
    var socialMediaUrl = 'https://www.example.com';
    window.open(socialMediaUrl, '_blank');
  }

  const [menuOpen, setMenuOpen] = useState(false)
  
  return (
    
    <div>
        <nav>
          
            <div class='nav-bar'>
            
                <div class="logo" onClick={scrollToTop}>
                    <img src={require('../assets/images/logo1.png')} alt="logo1" class='logo'/>
                </div>

            <ul className={menuOpen ? "open" : ""}>

                <div class='nav-elmnts'>
                    <div onClick={scrollToTop} class='home-btn'>Home</div>
                    <div onClick={scrollToAbout} class='abt-btn'>About Us</div>
                    <div onClick={scrollToShop} class='shop-btn'>Shop</div>
                    <div onClick={scrollToContact} class='cont-btn'>Contact Us</div>
                </div>
                </ul>
                <div class='nav-icons'>

                    <div class='nav-icons1'>
                        <img src={require('../assets/images/icon-whatsapp.png')} alt="logo" class='icon-wp'/>
                        <img src={require('../assets/images/icon-yt.png')} alt="logo" class='icon-yt'/>
                    </div>
                
                    <div class='nav-icons2'>
                        <img src={require('../assets/images/icon-instagram.png')} alt="logo" class='icon-insta'/>
                        <img src={require('../assets/images/icon-fb.png')} alt="logo" class='icon-fb'/>
                    </div>

                </div>

                <div 
                class = 'menu-button' 
                onClick={()=> {
                  setMenuOpen(!menuOpen);

                }}>
                  <img src={require('../assets/images/icon-menu.png')} alt="menu1" class='menu'/>
                </div>

            </div>

               
          
        </nav>

      </div>
  )
}

export default Navbar