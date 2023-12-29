import {Component} from "react";
import '../../go.css';
import '../../autoWrite.css'

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
                        <p className="pb-3 text-[20px] animate-slide-in-left font-mono animate-auto-write text-green-600">
                            If you want make own design, please contact us...! We will make for you...!
                        </p>
                    </div>

                    <form className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
                        <div className="mb-4">
                            <label className="block text-lg font-semibold text-gray-700">
                                Your Email:
                            </label>
                            <input
                                className="w-full px-3 py-2 border border-green-200 rounded-md focus:outline-none focus:border-green-400"
                                type="email"
                                placeholder="example@example.com"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-lg font-semibold text-gray-700">
                                Your Subject:
                            </label>
                            <input
                                className="w-full px-3 py-2 border border-green-200 rounded-md focus:outline-none focus:border-green-400"
                                type="text"
                                placeholder="Subject"
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block text-lg font-semibold text-gray-700">
                                Your Message:
                            </label>
                            <textarea
                                className="w-full px-3 py-2 border border-green-200 rounded-md resize-none focus:outline-none focus:border-green-400"
                                placeholder="Type your message here..."
                            />
                        </div>

                        <div>
                            <button
                                type="button"
                                className="w-full py-2 px-4 bg-green-400 text-white font-semibold rounded-md hover:bg-green-500 focus:outline-none focus:shadow-outline-green"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        );
    }
}