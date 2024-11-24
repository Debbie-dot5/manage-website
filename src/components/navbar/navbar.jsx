import { useState } from 'react'
import  './navbar.css'


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
      };



    return (
        <header className="nav">
            <div className='iconcont'> 
                <img src="/logo.svg" alt="icon" />
            </div>
     
            <div className='hamburger' onClick={toggleMenu}>
  {isOpen ? (
    <img src="public\images\icon-close.svg" alt="Close icon" />
  ) : (
    <img src="public\images\icon-hamburger.svg" alt="Hamburger icon" />
    
  )}
</div>
            {isOpen && (
                <>
                 <div className="overlay" onClick={closeMenu} />
                 <nav className='menu'>
          <ul>
          <li><a href="#home">Pricing</a></li>
          <li><a href="#about">Product</a></li>
          <li><a href="#services">About Us</a></li>
          <li><a href="#contact">Careers</a></li>
          <li><a href="#contact">Community</a></li>
                </ul>
            </nav>

             </>
            )}
           


        <button className='btncont'>Get started</button>
      
        </header>
    )
}

export default Navbar