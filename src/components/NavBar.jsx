import React from 'react'

const NavBar = () => {
  return (
    <>
    <header>
        <nav>
            <div className="logo">
                <a href="">
                    <img src="./SN.svg" alt="logo" />
                </a>
            </div>
            <div className="nav-items">
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Work</a></li>
                    <li><a href="#">Chucker</a></li>
                </ul>
            </div>
            <div className="menu-items">
                <button>Menu</button>
            </div>
        </nav>
    </header>
    </>
  )
}

export default NavBar