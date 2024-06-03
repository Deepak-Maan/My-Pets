import React, { useEffect, useState } from 'react';
import { data, leaderboardData } from './Common/Helper';
import Cartoon from "../assets/svg/Cartoon.svg";
import Sheild2 from "../assets/svg/Sheild2.svg";
import Bulb from "../assets/svg/Bulb.svg";
import Heart from "../assets/svg/Heart.svg";

const All = () => {
    const [activeTab, setActiveTab] = useState('all');
    const [toggle1, setToggle1] = useState(true);
    const [toggle2, setToggle2] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

    const openModal = (content, cursor) => {
        if (cursor === 'cursor-not-allowed') {
            return false; 
        } else if (cursor === '3' || cursor === '9') {
            return false; 
        } else {
            setModalContent(content);
            setIsModalOpen(true);
            return true; 
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalContent(null);
        setIsSecondModalOpen(true);
    };

    const closeSecondModal = () => {
        setIsSecondModalOpen(false);
    };

    useEffect(() => {
        if (isModalOpen || isSecondModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isModalOpen, isSecondModalOpen]);

    return (
        <div className='max-w-[361px] bg-[#DCFCE7] mx-auto pt-[22px] relative'>
            <div className='flex items-center gap-2 justify-center'>
                <button
                    onClick={() => setActiveTab('all')}
                    className={`max-w-[98px] w-full rounded-[4px] py-2 flex justify-center font-normal text-base leading-4 border-[1px] border-solid  ${activeTab === 'all' ? ' border-[#166534] text-[#052E16] bg-[#F0FDF4] shadow-[2px_2px_0px_0px_#0C0A0980_inset] ' : 'bg-[#DCFCE7] opacity-50 text-[#052E16] border-[#052E1633] shadow-[1px_1px_0px_0px_#052E1633] '
                        }`}
                >
                    All
                </button>
                <button
                    onClick={() => setActiveTab('leaderboard')}
                    className={`w-full rounded-[4px] py-2 flex justify-center font-normal text-base leading-4 border-[1px] border-solid  max-w-[109px] ${activeTab === 'leaderboard' ? ' border-[#166534] text-[#052E16] bg-[#F0FDF4] shadow-[2px_2px_0px_0px_#0C0A0980_inset] ' : 'bg-[#DCFCE7] opacity-50 text-[#052E16] border-[#052E1633] shadow-[1px_1px_0px_0px_#052E1633] '
                        }`}
                >
                    Leaderboard
                </button>
            </div>
            <div className='mt-4'>
                {activeTab === 'all' && (
                    <div className='h-[634px] overflow-y-scroll overflow_y'>
                        {data.map((item) => (
                            <div key={item.id} className={`bg-[#F0FDF4] rounded-[4px] p-2 max-h-[50px] flex items-center justify-between mb-1 ${item.loss.includes('lost') ? 'border-[1px] border-solid border-[#F1DBDB33]' : ''}`}>
                                <div className='flex items-center gap-2'>
                                    <img src={item.img} alt="fishgreen" />
                                    <div>
                                        <p className='font-normal leading-[19.36px] text-base text-[#0C0A09]'>16982
                                            <span className='text-[#44403C]'> attacked</span>
                                            <span className='text-[#0C0A09]'> Retardio</span></p>
                                        <p className='font-normal leading-[19.36px] text-base text-[#0C0A09]'>
                                            and <span className={`font-bold ${item.loss.includes('won') ? 'text-[#166534]' : 'text-[#651616]'}`}>{item.loss}</span>
                                        </p>
                                    </div>
                                </div>
                                <p className='font-normal text-xs leading-[14.52px] tracking-[1%] text-[#44403C]'>{item.timeAgo}</p>
                            </div>
                        ))}
                    </div>
                )}
                {activeTab === 'leaderboard' && (
                    <>
                        <div className='flex flex-col mb-4 gap-2'>
                            <div className='flex items-center gap-[6px]'>
                                <div className='relative inline-block w-8 align-middle select-none transition duration-200 ease-in rounded-[54px]'>
                                    <input
                                        type="checkbox"
                                        id="toggle1"
                                        className={`toggle-checkbox absolute top-[18.5%] left-[9%] block w-[9.5px] h-[9.5px] rounded-full appearance-none cursor-pointer transition-transform duration-200 ${toggle1 ? 'bg-[#DCFCE7] shadow-[1px_1px_0px_0px_#16653480]  translate-x-[16px]' : ' bg-[#166534] translate-x-0'}`}
                                        checked={toggle1}
                                        onChange={() => setToggle1(!toggle1)}
                                    />
                                    <label
                                        htmlFor="toggle1"
                                        className={`block overflow-hidden h-4 rounded-full cursor-pointer transition-colors duration-200 ${toggle1 ? 'bg-[#166534] shadow-[2px_2px_0px_0px_#0C0A0980_inset]' : 'bg-[#F0FDF4] shadow-[1px_1px_0px_0px_#16653480]'}`}
                                    ></label>
                                </div>
                                <p className='font-normal text-xs leading-[14.52px] text-[#052E16] tracking-[1%]'>Show Bonkable (32)</p>
                            </div>

                            <div className='flex items-center gap-[6px]'>
                                <div className='relative inline-block w-8 align-middle select-none transition duration-200 ease-in rounded-[54px]'>
                                    <input
                                        type="checkbox"
                                        id="toggle2"
                                        className={`toggle-checkbox absolute top-[18.5%] left-[9%] block w-[9.5px] h-[9.5px] rounded-full appearance-none cursor-pointer transition-transform duration-200 ${toggle2 ? 'bg-[#DCFCE7] shadow-[1px_1px_0px_0px_#16653480]  translate-x-[16px]' : ' bg-[#166534] translate-x-0'}`}
                                        checked={toggle2}
                                        onChange={() => setToggle2(!toggle2)}
                                    />
                                    <label
                                        htmlFor="toggle2"
                                        className={`block overflow-hidden h-4 rounded-full cursor-pointer transition-colors duration-200 ${toggle2 ? 'bg-[#166534] shadow-[2px_2px_0px_0px_#0C0A0980_inset]' : 'bg-[#F0FDF4] shadow-[1px_1px_0px_0px_#16653480]'}`}
                                    ></label>
                                </div>
                                <p className='font-normal text-xs leading-[14.52px] text-[#052E16] tracking-[1%]'>My pets</p>
                            </div>
                        </div>

                        <div className='h-[536px] overflow-y-scroll overflow_y'>
                            {leaderboardData.map((items) => (
                                <div key={items.id} className='bg-[#F0FDF4] rounded-[4px] p-2 flex items-center justify-between mb-1 max-h-[50px]'>
                                    <div className='flex items-center gap-2'>
                                        <div className='rounded-[4px] bg-[#DCFCE7] p-[7.5px_14px] font-bold text-base leading-[19.36px] text-[#0C0A09]'>
                                            #1
                                        </div>
                                        <div>
                                            <p className='font-normal leading-[19.36px] text-base text-[#44403C]'>Based.eth
                                                <span className='text-[#D6D3D1] text-xs leading-[14.52px] tracking-[1%]'> id:  73</span></p>
                                            <p className='font-bold leading-[19.36px] text-base text-[#166534]'>1295059.36
                                                <span className="text-xs leading-[14.52px] font-normal tracking-[1%]"> pts</span>
                                            </p>
                                        </div>
                                    </div>
                                    <button onClick={() => openModal('Bonk Button Content', items.cursor)} className={` border rounded-[6px] max-w-[100px] w-full  duration-300  flex items-center justify-between  border-solid p-[9.5px_16px]  border-[#052E16] ${items.shadow} ${items.opacity} ${items.cursor}`}>
                                        <img src={items.img} alt="shield" />
                                        <span className='font-normal text-xs leading-[14.52px] tracking-[1%] text-black'>{items.text}</span>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>

            {isModalOpen && (
                <div className='fixed inset-0 bg-[#9ED2AECC] max-w-[393px] mx-auto flex items-center justify-center z-50 left-0 top-0'>
                    <div className='bg-[#DCFCE7] rounded-[16px] p-2 max-w-[361px] w-full mx-auto overflow-hidden'>
                        <div className='max-w-[344px] rounded-lg p-4 bg-[#F0FDF4]'>
                            <div className=' flex items-center gap-2 mb-4'>
                                <img src={Cartoon} alt="cartoon" />
                                <span className=' font-bold text-base leading-5 text-[#052E16]'>Asphyxiated</span>
                                <span className=' font-normal text-xs leading-[14.52px] tracking-[1%] p-[2px_6px] bg-[#DCFCE7] text-[#342E2E]'>id: 679</span>
                            </div>
                            <div className=' flex flex-col gap-2'>
                                <div className=' flex items-center gap-2'>
                                    <img src={Sheild2} alt="sheild2" />
                                    <span className=' font-normal text-base leading-5 text-[#342E2E]'>11</span>
                                </div>
                                <div className=' flex items-center gap-2'>
                                    <img src={Bulb} alt="sheild2" />
                                    <span className=' font-normal text-base leading-5 text-[#342E2E]'>10</span>
                                </div>
                                <div className=' flex items-center gap-2'>
                                    <img src={Heart} alt="sheild2" />
                                    <span className=' font-normal text-base leading-5 text-[#342E2E]'>2d 2h 24m 30s</span>
                                </div>
                            </div>
                        </div>
                        <button onClick={closeModal} className='mt-1 p-2 rounded-[8px] w-full flex items-center justify-center py-[10.5px] font-bold text-[22px] leading-[26.63px] tracking-[1%] text-[#F0FDF4] bg-[#166534] after:absolute duration-300 after:bg-white after:h-[50px] after:right-[-100%] after:w-[800px] after:bottom-[-100%] after:rounded-full hover:text-[#166534] hover:border-[#166534] border-[2px] border-transparent overflow-hidden relative hover:after:opacity-100 after:opacity-0 after:duration-300 hover:after:right-[-20%] hover:after:bottom-0'><span className=' relative z-[1]'>Ok</span></button>
                    </div>
                </div>
            )}

            {isSecondModalOpen && (
                <div className='fixed inset-0 bg-[#9ED2AECC] flex items-center justify-center z-50 max-w-[393px] mx-auto'>
                    <div className='bg-[#DCFCE7] rounded-[16px] p-2 max-w-[361px] w-full mx-auto overflow-hidden'>
                        <div className='max-w-[344px] rounded-lg p-4 bg-[#F0FDF4]'>
                            <p className=' font-bold text-base leading-5 text-[#052E16]'>Rules</p>
                            <p className=' mt-4 text-base font-normal leading-5 text-black'>You can attack a pet above your level every 30mins and earn 0.5% of their rewards.
                        <span className=' block'>  A pet can only be attacked once per hour.</span></p>
                        </div>
                        <button onClick={closeSecondModal} className='mt-1 p-2 rounded-[8px] w-full flex items-center justify-center py-[10.5px] font-bold text-[22px] leading-[26.63px] tracking-[1%] text-[#F0FDF4] bg-[#166534] after:absolute duration-300 after:bg-white after:h-[50px] after:right-[-100%] after:w-[800px] after:bottom-[-100%] after:rounded-full hover:text-[#166534] hover:border-[#166534] border-[2px] border-transparent overflow-hidden relative hover:after:opacity-100 after:opacity-0 after:duration-300 hover:after:right-[-20%] hover:after:bottom-0'>
                            <span className=' relative z-[1]'>Ok</span></button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default All;
