import './index.scss'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faEnvelope, faHome, faSuitcase, faUser, faClose } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, } from "@fortawesome/free-brands-svg-icons"
import { useState } from 'react'


const Sidebar = () => {
   const [showNav, setShowNav] = useState(false);


   const handleToggleNav = () => {
      
      setShowNav(prev => !prev)
   }



   return (


      <div className='nav-bar'>

         <nav className={showNav ? 'mobile-show' : ''} >
            <NavLink
               onClick={handleToggleNav}
               exact="true" activeclassname="active" to="/"
            >
               <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>

            <NavLink
               onClick={handleToggleNav}
               activeclassname="active" className="about-link" to="/about"
            >
               <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>

            <NavLink
               onClick={handleToggleNav}
               activeclassname="active"
               className="portfolio-link"
               to="/portfolio">
               <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
            </NavLink>

            <NavLink
               onClick={handleToggleNav}
               activeclassname="active"
               className="contact-link"
               to="/contact">
               <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>

            <div
               onClick={handleToggleNav}
            >
               <FontAwesomeIcon
                  icon={faClose}
                  color="#ffd700"
                  size='3x'
                  className='close-icon'
               />
            </div>

         </nav>


         <ul >
            <li>
               <a
                  target='_blank'
                  rel="noreferrer"
                  href='https://github.com/Danjuma011/'

               >
                  <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
               </a>
            </li>
            <li>
               <a
                  target='_blank'
                  rel="noreferrer"
                  href='https://www.linkedin.com/in/danjuma-kuti-634282208/'
               >
                  <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
               </a>
            </li>
         </ul>

         {
            !showNav &&
            <FontAwesomeIcon
               onClick={handleToggleNav}
               icon={faBars}
               size='3x'
               color='#ffd700'
               className='hamburger-icon'
            />
         }


      </div>
   )
}

export default Sidebar