import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {Home} from "../../Pages/Home/Home";
import {About} from "../../Pages/About/About";
import {Contact} from "../../Pages/Contact/Contact";

export class Content extends Component{

    render() {
        return (

            <div className="mx-auto">
                <Routes>
                    <Route path="/" Component={Home}></Route>
                    <Route path="/about" Component={About}></Route>
                    <Route path="/contact" Component={Contact}></Route>
                </Routes>
            </div>
        );
    }
}