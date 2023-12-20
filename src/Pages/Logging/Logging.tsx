import {Component} from "react";
import background from "../../../public/background .jpg"

export class Logging extends Component {
    render() {
        return (
            <div className="flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/background.jpg")' }}>
                <div className="w-96 mt-4 mb-4 pl-9 border-black-500 rounded-md bg-white bg-opacity-50" >
                    <h2 className="pt-2 pb-2 text-3xl underline decoration-2">Sign In</h2>
                    <form className="p-2">
                        <div className="p-2">
                            <label className="text-[20px] font-bold rounded-md" >Email:</label>
                            <input
                                className="w-full border-[2px] border-green-200 p-1 bg-opacity-50"
                                type="email"
                            />
                        </div>

                        <div className="p-2">
                            <label className="text-[20px] font-bold rounded-md">Password:</label>
                            <input
                                className="w-full border-[2px] border-green-200 p-1 bg-opacity-95"
                                type="password"
                            />
                        </div>
                        <div className="mt-2 flex justify-center items-center rounded-md" >
                            <button className="text-40 h-10 text-white
                        bg-blue-700 pl-3 pr-3 rounded-md
                        transform transition-transform hover:scale-125 font-mono
                        hover:text-white hover:bg-green-600  font-bold">
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        );
    }
}