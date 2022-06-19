import React from "react";
import cloudlogo1 from './cloudlogo1.jpg'
import cloudlogo2 from './cloudlogo2.jpg'
import cloudlogo3 from './cloudlogo3.jpg'
import cloudlogo4 from './cloudlogo4.jpg'

function Index() {
    return (
        <div className="container mx-auto pt-16">
            <div className="w-11/12 xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto sm:mb-10 mb-16">
                <h1 className=" xl:text-5xl md:text-3xl text-xl text-center text-gray-800 font-extrabold mb-5 pt-4">What is Fortnite</h1>
                <p className="text-base md:text-lg lg:text-xl text-center text-gray-600 font-normal xl:w-10/12 xl:mx-auto">Fortnite is a survival game where 100 players fight against each other in player versus player combat to be the last one standing. It is a fast-paced, action-packed game, not unlike The Hunger Games, where strategic thinking is a must in order to survive. There are an estimated 125 million players on Fortnite.</p>
            </div>
            <div className="xl:py-16 lg:py-16 md:py-16 sm:py-16 px-15 flex flex-wrap">
                <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r :border-r border-gray-200 xl:pb-10 pb-16 items-center">
                    <img src={cloudlogo1} alt />
                </div>
                <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r border-gray-200 xl:pb-10 pb-16 items-center">
                    <img src={cloudlogo2} alt />
                </div>
                <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b border-gray-200 xl:pb-10 pb-16 pt-4 items-center">
                    <img src={cloudlogo3} alt />
                </div>
                <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center lg:border-b xl:border-b lg:border-l xl:border-l border-gray-200 xl:pb-10 pb-16 items-center">
                    <img src={cloudlogo4} alt />
                </div>
             
            </div>
        </div>
    );
}

export default Index;
