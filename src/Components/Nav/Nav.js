import React from 'react';
import logo from '../../logo-white.png'

const Nav = ({aboutToggled, aboutCallBack}) => (
    
        <section className='nav'>

            <div className='nav-logo'> 

                <img src={logo}></img>
 
            </div>
            
            <div onClick={()=> aboutCallBack()} className={`nav-about ${aboutToggled ? 'toggled': null }`}>
                <span>ABOUT</span>
            </div>

        </section>
)


export default Nav;