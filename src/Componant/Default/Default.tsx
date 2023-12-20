import React, {Component} from "react";
import {Navbar} from "../NavBar/Navbar";
import {Content} from "../Content/Content";
import {Footer} from "../Footer/Footer";

export class Default extends Component{

    render() {
        return (

            <>
                <Navbar/>
                <Content/>
                <Footer/>
            </>
        );
    }
}