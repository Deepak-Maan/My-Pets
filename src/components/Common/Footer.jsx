import React, { useState } from 'react';
import { footerData } from './Helper';

const Footer = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div className="max-w-[394px] mx-auto px-4">
            <div className='flex w-full justify-center bg-[#F0FDF4] py-2'>
                {footerData.map((data, index) => (
                    <div
                        key={index}
                        className={`w-[70px] h-[53px] flex flex-col items-center justify-center cursor-pointer rounded ${activeIndex === index ? 'bg-[#DCFCE7]' : ''
                            }`}
                        onClick={() => setActiveIndex(index)}
                    >
                        <img src={data.Icon} alt="Icons" />
                        <p className='text-[#052E16] text-[11px] font-normal leading-3'>{data.Name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Footer;
