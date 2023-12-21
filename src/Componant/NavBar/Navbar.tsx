import React, {Component} from 'react';
import '../../popup.css';
import logo from '../../../src/Images/Capture-removebg-preview (1).png';
import iconHome from '../../Images/home.png';
import iconContact from '../../Images/contact.png';
import iconAbout from '../../Images/about.png';

import {Link} from "react-router-dom";

export class Navbar extends Component {
    handleRefresh = () => {
        window.location.reload();
    };
    render() {
        return (
            <div className="p-3 bg-amber-600 flex justify-between items-center"  >

                {/*<h1 className="text-2xl text-secondary text-white font-bold font-serif text-[40px]">
                    <span className="jumping-letters">I & H Sugar Sweets</span>

                </h1>*/}

                <img className=" h-15 max-w-full ml-5 pt-5 min-w-0 jumping-letters" src={logo}
                     alt=""/>




                <ul className="list-none flex mt-1">
                    <li className="flex items-center mr-4 text-4xl font-bold text-white
                                    hover:text-red-600 cursor-pointer
                                    transition duration-500 ease-in-out
                                    transform transition-transform hover:scale-125 font-mono">
                        {/* Home Icon */}
                        <img className="w-5 h-5 mr-2 min-w-0" src={iconHome} alt="Home Icon" />
                        <a href="/" onClick={this.handleRefresh}>Home</a>
                    </li>
                    <li className="flex items-center mr-4 text-4xl font-bold text-white
                                    hover:text-red-600 cursor-pointer
                                    transition duration-500 ease-in-out
                                    transform transition-transform hover:scale-125 font-mono">
                        {/* Contact Icon */}
                        <img className="w-5 h-5 mr-2 min-w-0" src={iconContact} alt="Contact Icon" />
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="flex items-center mr-4 text-4xl font-bold text-white hover:text-red-600 cursor-pointer
                                    transition duration-500 ease-in-out
                                    transform transition-transform hover:scale-125 font-mono">
                        {/* About Icon */}
                        <img className="w-10 h-6 mr-2 min-w-0" src={iconAbout} alt="About Icon" />
                        <Link to="/about">About</Link>
                    </li>
                </ul>



                <button className="text-40 h-10 text-gray-600
                        bg-white pl-3 pr-3 rounded-md flex-shrink-0
                        transform transition-transform hover:scale-125 font-mono
                        hover:text-white hover:bg-green-600  font-bold ">
                    <Link to="/login">Sign In</Link>
                </button>

            </div>
        );
    }
}
