import {Component} from "react";

export class Logging extends Component {
    render() {
        return (
            <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-opacity-80" style={{ backgroundImage: 'url("/background.jpg")' }}>
                <div className="w-96 p-8 border rounded-md bg-white bg-opacity-50">
                    <h2 className="text-3xl font-bold underline mb-4">Sign In</h2>
                    <form className="space-y-4">
                        <div className="flex flex-col">
                            <label className="text-lg font-bold">Email:</label>
                            <input
                                className="w-full border-2 border-green-200 p-2 rounded-md bg-opacity-50"
                                type="email"
                                placeholder="Your email"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-lg font-bold">Password:</label>
                            <input
                                className="w-full border-2 border-green-200 p-2 rounded-md bg-opacity-50"
                                type="password"
                                placeholder="Your password"
                            />
                        </div>

                        <div className="flex justify-center">
                            <button className="w-full h-10 text-white bg-blue-700 rounded-md transform transition-transform hover:scale-105 font-mono hover:text-white hover:bg-green-600 font-bold">
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>
            </div>


        );
    }
}