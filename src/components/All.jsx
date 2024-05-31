import React, { useState } from 'react';
import { data, leaderboardData } from './Common/Helper';

const All = () => {
    const [activeTab, setActiveTab] = useState('all');

    return (
        <div className='max-w-[361px] bg-[#DCFCE7] mx-auto pt-[22px]'>
            <div className='flex items-center gap-2 justify-center'>
            <button
                    onClick={() => setActiveTab('all')}
                    className={`max-w-[98px] w-full rounded-[4px] py-2 flex justify-center font-normal text-base leading-4 border-[1px] border-solid border-[#052E1633] ${
                        activeTab === 'all' ? 'bg-[#DCFCE7] text-[#052E16] border-[#052E1633] shadow-[2px_2px_0px_0px_#0C0A0980_inset]' : 'bg-[#F0FDF4] text-[#052E16] border-[#052E1633] shadow-[1px_1px_0px_0px_#052E1633]'
                    }`}
                >
                    All
                </button>
                <button
                    onClick={() => setActiveTab('leaderboard')}
                    className={`w-full rounded-[4px] py-2 flex justify-center font-normal text-base leading-4 border-[1px] border-solid border-[#052E1633]  max-w-[109px] ${
                        activeTab === 'leaderboard' ? "" : '  bg-[#F0FDF4] text-[#052E16] border-[#166534] shadow-[1px_1px_0px_0px_#052E1633]'
                    }`}
                >
                    Leaderboard
                </button>
            </div>
            <div className='mt-4 h-[634px] overflow-y-scroll overflow_y'>
                {activeTab === 'all' && (
                    data.map((item) => (
                        <div key={item.id} className='bg-[#F0FDF4] rounded-[4px] p-2 flex items-center justify-between mb-2'>
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
                    ))
                )}
                {activeTab === 'leaderboard' && (
                    leaderboardData.map((items) => (
                        <div key={items.id} className='bg-[#F0FDF4] rounded-[4px] p-2 flex items-center justify-between mb-2'>
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
                            <button className={` border rounded-[6px] max-w-[100px] w-full shadow-[1px_1px_0px_0px_#16653480] flex items-center justify-between  border-solid p-[9.5px_16px]  border-[#16653480] ${items.opacity}`}>
                                <img src={items.img} alt="shield" />
                                <span className='font-normal text-xs leading-[14.52px] tracking-[1%] text-black'>{items.text}</span>
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default All;
