import React, {Component} from "react";
import cake from "../../Images/aboutCake.png";

export class About extends Component{

    render() {
        return (

            <div className="flex-auto flex justify-between">
                <div className="w-1/2 p-8 bg-white rounded-md shadow-md">
                    <h2 className="text-3xl text-amber-600 underline font-bold mb-4"> About Us </h2>
                    <div className="relative">
                        {/*<img className="h-15 w-20 ml-1 pt-1 absolute top-0 right-0 " src={cake}
                                 alt=""/>*/}
                    </div>

                    <p className="text-base text-gray-700">
                        <span style={{ fontSize: '40px' ,color: 'red'}}>W</span>elcome to <b>I & H Sugar Sweets</b>, where passion meets <i>sweetness!</i>
                        At <b>I & H Sugar Sweets</b>, we believe that every moment is worth celebrating,
                        and what better way to celebrate than with a delicious slice of cake?<br/>
                        Our journey began with a simple love for baking, and over the years,
                        it has evolved into a delightful adventure of creating custom cakes that not only taste heavenly
                        but also bring joy to your special occasions.<br/>
                        From elegant wedding cakes to whimsical birthday creations,
                        our talented bakers pour their heart and soul into every masterpiece.<br/>
                        We use only the finest ingredients to ensure each bite is a moment of pure indulgence.
                        As a family-owned business, we take pride in the artistry of our cakes
                        and the happiness they bring to our customers.<br/>
                        Join us in savoring life's sweet moments, one slice at a time.
                        Thank you for choosing <b>I & H Sugar Sweets</b> for your sweet celebrations!
                    </p>
                </div>


                <div className="w-1/2 p-8 bg-white rounded-md shadow-md">
                    <h2 className="text-3xl text-amber-600 underline font-bold mb-4"> About Products </h2>
                    <div className="relative flex">
                        {/*<img className="h-40 w-40 ml-1 pt-1 absolute top-0 right-0 " src={cake}
                             alt=""/>*/}
                    </div>

                    <p className="text-base text-gray-700">
                        Cake is a yummy treat that we often eat on special days like birthdays or parties.<br/>
                        It is sweet and can have many flavors like <b>chocolate</b>, <b>vanilla</b>, or <b>strawberry</b>.
                        <br/>
                        Some cakes have layers with frosting in between.
                        The frosting can be in many colors and often tastes sweet too.<br/>
                        Some cakes might have <b>sprinkles</b>, <b>fruits</b>, or <b>even candies</b> on top.
                        <br/>
                        The main parts of a cake are <b>flour</b>, <b>sugar</b>, <b>eggs</b>, and <b>butter</b>.
                        Sometimes, other things like <b>chocolate</b>, <b>vanilla</b>, <b>fruits</b>, and <b>nuts</b> are added to make
                        it taste even better.
                        <br/>
                        Frosting can be of many flavors like <b>chocolate</b>, <b>strawberry</b>, and <b>vanilla</b>.
                        Cakes also come in many shapes like <b>round</b>, <b>square</b>, or <b>even heart-shaped</b>.
                    </p>
                </div>


            </div>

        );
    }
}