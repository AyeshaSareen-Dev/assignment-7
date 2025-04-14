import React from 'react';
import BidItem from './BidItem';
import {FaRegHeart } from 'react-icons/fa';
const BidsItems = ({bids}) => {
    const [addedBids, setAddedBids] = React.useState([]);
    const [clickedIds, setClickedIds] = React.useState([]);
    const [totalPrice, setTotalPrice] = React.useState(0);
    // console.log(bids);
    const handleClick = ({bid}) => {
        if(!clickedIds.includes(bid.id)){
            setClickedIds([...clickedIds, bid.id]);
            setAddedBids([...addedBids, bid]);
            setTotalPrice(totalPrice + bid.currentBidPrice);
        }
        
    }


    // handleRemoveItem
    return (
        <div className='px-[54px] pt-[100px] pb-[64px] bg-[#DCE5F3]'>
            <div className='space-y-2 pb-4'>
            <h1 className='text-3xl text-[#0E2954]'>Active Auctions</h1>
            <p>Discover and bid on extraordinary items</p>
            </div>
            <div className='flex justify-between gap-4 '>
            <div className='flex-2/3'>
            
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
           
                <table className="table text-[16px]  text-[#0E2954]">
                    {/* head */}
                    <thead className='text-[20px] text-black text-center'>
                    <tr>
                        <th className='font-semibold text-left'>Items</th>
                        <th className='font-semibold'>Current Bid</th>
                        <th className='font-semibold'>Time Left</th>
                        <th className='font-semibold'>Bid Now</th>
                    </tr>
                    </thead>
                    <tbody>
                    {bids.map((bid) => {
                        return <BidItem 
                        key={bid.id} 
                        bid={bid} 
                        handleClick={handleClick}
                        isFavorite={clickedIds.includes(bid.id)}
                        />;
                    })}
                    
                    </tbody>
                </table>
            </div>
        </div>
        <div className='flex-1/3'>
            
        </div>
            </div>
            
        </div>
    );
};

export default BidsItems;