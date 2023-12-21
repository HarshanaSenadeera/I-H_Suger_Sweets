import {Component} from "react";
import '../../go.css';

export class Contact extends Component{

    render() {
        return (

            <div className="flex-shrink-0">
                <div className="h-auto pt-5 pb-5
                                pl-10 mx-auto">

                    <div className="p-2">
                        <h2 className="pb-3 text-3xl
                                   text-amber-600
                                   underline
                                   decoration-2 font-bold
                        ">Contact Us</h2>
                        <p className="pb-3 text-[20px] animate-slide-in-left">
                            Got a technical issue?
                            Want to contact us?
                            Please let us assist you..
                           </p>
                    </div>

                    <form className="h-auto p-2
                                    ">
                        <div className="pb-2">
                            <label className="text-[7px]">
                                Your Email:</label>
                            <input className="
                                               border-[1px]
                                               border-green-200"
                                   type="email"/>
                        </div>

                        <div className="pb-2">
                            <label className="text-[7px]">
                                Your Subject:</label>
                            <input className="
                                               border-[1px]
                                               border-green-200"
                                   type="text"/>
                        </div>

                        <div className="p-2">
                            <label className="text-[7px]">
                                Your Message:</label>
                            <textarea className="
                                               border-[1px]
                                               border-green-200"/>
                        </div>

                        <div className="mt-2">
                            <button type="button"
                                    className="mt-5 p-[5px]
                                               bg-green-400
                                               text-[7px]">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}