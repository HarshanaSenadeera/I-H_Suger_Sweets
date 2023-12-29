import React, {Component} from 'react';
import '../../popup.css';
import logo from '../../../src/Images/Capture-removebg-preview (1).png';

import {Link} from "react-router-dom";

export class Navbar extends Component {
    handleRefresh = () => {
        window.location.reload();
    };
    render() {
        return (
            <div className="p-4 bg-amber-600 flex justify-between items-center ">

                <img className="h-14 max-w-full ml-5 jumping-letters min-w-0" src={logo} alt="I & H Sugar Sweets" />

                <ul className="flex items-center space-x-4">
                    <li className="text-xl font-bold text-white hover:text-red-600 transition-transform hover:scale-105">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="text-xl font-bold text-white hover:text-red-600 transition-transform hover:scale-105">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="text-xl font-bold text-white hover:text-red-600 transition-transform hover:scale-105">
                        <Link to="/about">About</Link>
                    </li>
                </ul>

                <button className="text-xl h-10 text-gray-600 bg-white px-4
                rounded-md transition-transform hover:scale-105
                font-mono hover:text-white
                hover:bg-green-600 font-bold min-w-0 min-h-0">
                    <Link to="/login">Sign In</Link>
                </button>
            </div>

        /*<div className="bg-gray-100 min-h-screen">
            {/!* Header Section *!/}
            <header className="bg-amber-600 text-white p-4">
                <div className="container mx-auto flex items-center justify-between">
                    <Link to="/">
                        <img className="h-16" src={logo} alt="I & H Sugar Sweets" />
                    </Link>
                    <nav className="flex items-center space-x-4">
                        <Link to="/">Home</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/about">About</Link>
                        <Link to="/login" className="bg-white text-gray-800 px-4 py-2 rounded-md">Sign In</Link>
                    </nav>
                </div>
            </header>
        </div>*/

        );
    }
}
