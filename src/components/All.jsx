import React from 'react'
const All = () => {
    return (
        <div className=' max-w-[394px] mx-auto px-4 pt-[22px]'>
            <div className=' flex items-center gap-2 justify-center'>
                <button className=' max-w-[98px] w-full rounded-[4px] py-2 bg-[#F0FDF4] shadow-[1px_1px_0px_0px_#052E1633]  active:shadow-[2px_2px_0px_0px_#0C0A0980_inset] flex justify-center font-normal text-base leading-4 border-[1px] text-[#052E16] border-solid border-[#052E1633]'>
                    All
                </button>
                <button className=' w-full rounded-[4px] p-[8px_6px] max-w-[109px] bg-[#F0FDF4] shadow-[1px_1px_0px_0px_#052E1633]  active:shadow-[2px_2px_0px_0px_#0C0A0980_inset] flex justify-center font-normal text-base leading-4 border-[1px] text-[#052E16] border-solid border-[#052E1633]'>
                    Leaderboard
                </button>
            </div>
            <div className='  mt-4'>
                <div className=' bg-[#F0FDF4] rounded-[4px] p-2 flex items-center justify-between'>
                    <div className=' flex items-center'>
                        <img src={FishGreen} alt="fishgreen" />
                    </div>
                    <div>
                        <p>16982 attacked</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default All