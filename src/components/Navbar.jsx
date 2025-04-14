import React from 'react';
import notification from '/assets/notification.png'
import avatar from '/assets/avatar.png'
import auctionGallery from '/assets/AuctionGallery.png'
const Navbar = () => {
    return (
        <div className=' border-b-2 border-gray-500'>
            <div className="navbar bg-base-100 justify-between w-11/12 mx-auto">
            <div className="">
                <img src={auctionGallery} alt="ee" />
            </div>
            <ul className='flex gap-4 items-center text-[22px]'>
                <li><a>Home</a></li>
                <li><a>Auctions</a></li>
                <li><a>Categories</a></li>
                <li><a>How it works</a></li>
            </ul>

            <div className='flex gap-4 items-center'>
                <img className='' src={notification} alt="" />
                <img className='' src={avatar} alt="" />
            </div>
        </div>
        </div>
        
                    
    );
};

export default Navbar;