import React, { useState } from 'react';
import { PetLogo } from './Common/Icons';
import { Colors } from './Common/Helper';

const Dropdown = () => {
    const [selectedColor, setSelectedColor] = useState('#36985');
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative inline-block text-left">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex justify-between items-center rounded-[4px] border border-[#E4F3E9] px-[6px] py-[7.5px] bg-[#F0FDF4] text-sm font-medium h-[27px] w-[100px] text-gray-700 focus:outline-none ">
                <div className="pr-2">
                    <PetLogo />
                </div>
                <span className="flex items-center  text-base font-normal text-[#052E16]">{selectedColor}</span>
                <svg className={`-mr-1 h-5 w-5 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} width="7" height="5" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L3.5 4L6 1" stroke="#052E16" stroke-linecap="round" />
                </svg>
            </button>
            {isOpen && (
                <div className="origin-top-right absolute z-10 right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {Colors.map((color) => (
                            <button key={color.code} onClick={() => { setSelectedColor(color.code); setIsOpen(false); }} className="flex items-center px-4 py-2 w-full text-base font-normal text-[#052E16]" role="menuitem" >{color.code} </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
