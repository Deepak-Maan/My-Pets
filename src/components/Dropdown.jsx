import React, { useState } from 'react';
import { PetLogo } from './Common/Icons';
import { Colors } from './Common/Helper';

const Dropdown = () => {
    const [selectedColor, setSelectedColor] = useState('#36985');
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative inline-block text-left">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex justify-between items-center rounded-md border border-[#E4F3E9] shadow-sm px-[6px] py-[7.5px] bg-[#F0FDF4] text-sm font-medium h-[27px] w-[100px] text-gray-700 focus:outline-none ">
                <div className="pr-2">
                    <PetLogo />
                </div>
                <span className="flex items-center  text-base font-normal text-[#052E16]">{selectedColor}</span>
                <svg className={`-mr-1 h-5 w-5 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
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
