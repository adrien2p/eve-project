import React from "react";
import RullerSvg from "../components/svg/ruller";
import GenderSvg from "../components/svg/gender";
import Baby from "../components/baby/Baby";
import Characteristic from "../components/characteristic/Characteristic";

export default function Home() {
    return (
        <div
            className='w-screen h-screen flex flex-col items-center bg-gradient-to-r from-gray-700 via-gray-900 to-black'>
            <section className="prose prose-slate lg:prose-xl m-20">
                <h1 className='text-white text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600'>Hello My name is Eve</h1>
            </section>

            <section className='flex flex-row justify-center h-full w-full'>
                <div className='w-1/3 h-full'>
                    <Characteristic svg={<RullerSvg width={'100px'} height={'100px'} fill='#ec4899'/>} text={'51cm'}/>
                    <Characteristic svg={<GenderSvg fill='#ec4899'/>} text={'Féminin'}/>
                </div>
                <div className='w-1/3 h-full'>
                    <Baby/>
                </div>
            </section>
        </div>
    );
}