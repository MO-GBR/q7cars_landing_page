import React, { useState } from 'react'
import { navLinks } from '../Constants/index'
import { useScroll } from '../Hooks/useScroll'

const Header = () => {
  const [{scrollY}] = useScroll();

  const [ toggle, setToggle ] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <div className={`header ${scrollY > 100 ? "navBg" : ""}`}>
      <div className='flex items-center justify-between max-lg:w-full -mt-7'>
        <div className='flexCenter'>
          <img
            src='logo.png'
            className='logo'
          />
          <p>Cars</p>
        </div>
        <img src='Shape8.svg' className='hidden h-auto max-w-full mr-7 w-[80px] max-lg:block' onClick={toggleMenu} alt='menu' />
      </div>
      <div className='mr-10'>
        <ul className='navUl'>
          {
            navLinks.map((item, index) => (
              <li key={index}>
                <a href={item.href} className='hoverLink'>
                  {item.link}
                </a>
              </li>
            ))
          }
        </ul>
        { toggle &&
          <ul className='navUlMobile g1'>
            {
              navLinks.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className='hoverLink'>
                    {item.link}
                  </a>
                </li>
              ))
            }
          </ul>
        }
      </div>
    </div>
  )
}

export default Header