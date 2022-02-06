import React, { SVGProps } from "react";

const Characteristic = ({ svg, text }: { svg: React.ClassicElement<SVGProps<any>>; text: string; }) => {
    return (
        <div className='relative flex items-center w-20 h-20'>
            <div className=''>
                {svg}
            </div>
            <div className='prose prose-p:text-slate-200'>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default Characteristic;