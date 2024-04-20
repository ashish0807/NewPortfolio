import React, { useState } from "react";
import './Navbar.css';
import logo from '../../assets/logo-transparent.png';
import menu from '../../assets/menu.png';
import cv from '../../assets/ashish_sde_cv1.pdf';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return(
        <nav className="navbar">
            <img src={logo} alt="logo" className='logo'/>
            {/* These are the links on the Navbar */}
            <div className="desktopMenu">
                <span className="desktopMenuListItem" onClick={()=> {
                document.getElementById('intro').scrollIntoView({behaviour: 'smooth'});
            }}>Home</span>
                <span  className="desktopMenuListItem" onClick={()=> {
                document.getElementById('skills').scrollIntoView({behaviour: 'smooth'});
            }}>About</span>
                <span  className="desktopMenuListItem" onClick={()=> {
                document.getElementById('works').scrollIntoView({behaviour: 'smooth'});
            }}>Projects</span>
                <span  className="desktopMenuListItem" onClick={()=> {
                document.getElementById('tech').scrollIntoView({behaviour: 'smooth'});
            }}>Portfolio</span>
            </div>

            <a href={cv} download class="btn" style={{fontSize:"0.8rem"}}>Download CV</a>

            <button className="desktopMenuBtn" onClick={()=> {
                document.getElementById('contactPage').scrollIntoView({behaviour: 'smooth'});
            }}>
                <img src="" alt="" className="desktopMenuImg" />
                Contact Me
            </button>


            <img src={menu} alt="Menu" className="mobMenu" onClick={()=>setShowMenu(!showMenu)}  />
            <div className="navMenu" style={{display: showMenu? 'flex' : 'none'}}>
                <span className="listItem" onClick={()=> {
                document.getElementById('intro').scrollIntoView({behaviour: 'smooth'});
                setShowMenu(false);
            }}>Home</span>
                <span  className="listItem" onClick={()=> {
                document.getElementById('skills').scrollIntoView({behaviour: 'smooth'});
                setShowMenu(false);
            }}>About</span>
                <span  className="listItem" onClick={()=> {
                document.getElementById('works').scrollIntoView({behaviour: 'smooth'});
                setShowMenu(false);
            }}>Projects</span>
                <span  className="listItem" onClick={()=> {
                document.getElementById('tech').scrollIntoView({behaviour: 'smooth'});
                setShowMenu(false);
            }}>Portfolio</span>
            <span className="listItem" onClick={()=> {
                document.getElementById('contactPage').scrollIntoView({behaviour: 'smooth'});
                setShowMenu(false);
            }}>Contact</span>
            </div>



        </nav>
    )
}

export default Navbar;