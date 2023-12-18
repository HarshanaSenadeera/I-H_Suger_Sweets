// Navbar.js or Navbar.tsx
import React from 'react';
import '../../popup.css';
import logo from '../../../src/Images/Capture-removebg-preview (1).png'

export class Navbar extends React.Component {
    render() {
        return (
            <div className="p-3 bg-rose-400 flex justify-between items-center"  >

                {/*<h1 className="text-2xl text-secondary text-white font-bold font-serif">
                    <span className="jumping-letters">I & H Sugar Sweets</span>

                </h1>*/}

                <img className="h-15 w-100 ml-1 pt-1 jumping-letters" src={logo}
                     alt=""/>

                <ul className="list-none flex mt-1">
                    <li className="mr-2 text-20 font-bold text-white
                        hover:text-red-600 cursor-pointer
                        transition duration-1000 ease-in-out
                        transform transition-transform hover:scale-125 font-mono">
                        Home
                    </li>
                    <li className="mr-2 text-20 font-bold text-white
                        hover:text-red-600 cursor-pointer
                        transition duration-1000 ease-in-out
                        transform transition-transform hover:scale-125 font-mono">
                        Contact
                    </li>
                    <li className="mr-2 text-20 font-bold text-white hover:text-red-600 cursor-pointer
                        transition duration-1000 ease-in-out
                        transform transition-transform hover:scale-125 font-mono">
                        About
                    </li>
                </ul>

                <button className="text-40 h-10 text-[#e6f0e6]
                        bg-white pl-3 pr-3 rounded-md
                        transform transition-transform hover:scale-110
                        hover:text-tertiary hover:bg-green-600  font-bold">
                    Sign In
                </button>

            </div>
        );
    }
}
