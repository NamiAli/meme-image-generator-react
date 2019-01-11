import React from 'react';
import headerImg from '../images/meme.jpg'
function Header() {

	 return (

              <header>
                  <img src={headerImg} />
                  <p>Meme Generator</p>
              </header>
	 	)
}

export default Header;