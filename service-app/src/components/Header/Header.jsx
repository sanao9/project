import React, {useState} from 'react';
import Logo from "../assets/logo.jpg"

const Header = () => {
    const [isMenuOpen,setIsMenuOpen] = {useState}(false);

    const togglemenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }


    const navItems = [
        {link: "Home", Path: "home"},
        {link: "AboutUs", Path: "home"},
        {link: "Catagory", Path: "catagory"},
        {link: "Login", Path: "login"},
    ]
  return (
    <>
    <nav className='bg-white md:px-14 p-4 max-w-screen-2xl border-b max-auto text-primary'>
        <div className='text-lg container mx-auto flex justify-between items-center font-medium'>
            <div className='flex space-x-14 items-center'>
                <a href = "/" className='text-2x1 font-semibold flex items-center space-x-3 text-primary'><img src={Logo} alt="logo"/></a>
                {/*showing navitems using map */}
                <ul className='md:flex space-x-12 hidden'>
                    {
                        navItems.map(({link,Path})=><a key={link}href={Path} className='block hover:text-gray-300'>{link}</a>)
                    }
                </ul>
            </div>

                    {/*language and */}
            <div  className='space-x-12 hidden md:flex items-center'>
            <a href="/" className='hidden lg:flex items-center hover:text-secondary'><span>Language</span></a>
                <button className='bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600'>Sign up</button>

            </div>
            {/*menu btn.only display on mobile */}
            <div className='md:hidden'>
                <button onClick={togglemenu} className='text-white focus:outline-none focus:text-gray-300'>
                   
                </button>

            </div>
        </div>
    </nav>
    <div className={`space-y-4 px-4 pt-24 bg-secondary ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>

                    {
                        navItems.map(({link,Path}) => <a key={link} href={Path} className='block hover:text-gray=300'>{link} </a> )
                    }
    </div>

</>
  );
};

export default Header
