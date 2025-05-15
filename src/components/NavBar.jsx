import React, { useState } from 'react'

const NavBar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const ToggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

  return (
    <>
    <header>
        <nav>

            {/* desktop navigation */}
            <div className="logo">
                <a href="">
                    <img src="./SN.svg" alt="logo" />
                </a>
            </div>
            <div className="nav-items">
                <ul>
                    <li><a href="#work">Work</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="./Sheetal-Naik-resume.pdf" target="_blank">Resume</a></li>
                </ul>
            </div>
            

            {/* mobile navigation */}

            {
                menuOpen && (
                    <div className="mobile-menu-items">
                        <ul>
                            <li><a href="#work">Work</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li><a href="./Sheetal-Naik-resume.pdf" target="_blank">Resume</a></li>
                        </ul>
                    </div>
                )
            }

            <div className="menu-items">
                <button onClick={ToggleMenu}>{menuOpen ? "X" : "☰"}</button>
            </div>
        </nav>
    </header>
    </>
  )
}

export default NavBar
