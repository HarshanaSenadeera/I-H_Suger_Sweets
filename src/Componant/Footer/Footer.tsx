import {Component} from "react";

export class Footer extends Component{

    render() {
        return (
            <div className="p-1 bg-amber-400 flex justify-center">

                <p className="text-[15px] text-[#e6f0e6]
                              pr-2 pt-1 hover:text-red-600 font-bold font-mono cursor-pointer">
                    Copyright @ Harshana Senadeera 2023</p>
            </div>
        );
    }


}