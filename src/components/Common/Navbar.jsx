import React from 'react'
import Dropdown from '../Dropdown'

const Navbar = () => {
    return (
        <div className=' pt-[72px]'>
            <div className="flex justify-between items-center">
                <h1 className=' text-[22px] font-bold leading-7 text-[#052E16]'>Feed</h1>
                <Dropdown />
            </div>
        </div>
    )
}

export default Navbar
