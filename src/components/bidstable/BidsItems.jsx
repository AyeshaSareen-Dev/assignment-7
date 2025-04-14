import React from 'react';
import BidItem from './BidItem';
import { toast } from 'react-toastify';
import {FaRegHeart } from 'react-icons/fa';
import FavouriteItems from './FavouriteItems';
const BidsItems = ({bids}) => {
    const [addedBids, setAddedBids] = React.useState([]);
    const [clickedIds, setClickedIds] = React.useState([]);
    const [totalPrice, setTotalPrice] = React.useState(0);
    // console.log(bids);
    const handleClick = ({bid}) => {
        if(!clickedIds.includes(bid.id)){
            setClickedIds([...clickedIds, bid.id]);
            toast(`${bid.title} added to favorites!`);
            setAddedBids([...addedBids, bid]);
            setTotalPrice(totalPrice + bid.currentBidPrice);
        }
        
    }


    const handleRemoveItem = (bid) => {
        setAddedBids(addedBids.filter((item) => item.id !== bid.id));
        setClickedIds(clickedIds.filter((item) => item !== bid.id));
        setTotalPrice(totalPrice - bid.currentBidPrice);
    }
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
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table text-[16px] text-[#0E2954]">
                    <thead className='text-[20px] text-black text-center'>
                        {/* head */}
                        <tr>
                            <th className='flex gap-2 items-center justify-center font-semibold'>
                                <FaRegHeart className='fill-[#0E2954]' /><span className=' text-[#0E2954]'>Favourite Items</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            addedBids.length === 0 ? (
                                <tr className='border-t-2 border-gray-200'>
                                    <td className='text-center px-4 pb-8 pt-16'>
                                        <h1 className='text-2xl'>No Favorite Items yet</h1>
                                        <p>Click the heart icon on any item to add it to your favorites</p>
                                    </td>
                                </tr>
                            ) : (
                                addedBids.map((bid) => {
                                    return <FavouriteItems key={bid.id} bid={bid} handleRemoveItem={handleRemoveItem}/>;
                                })
                            )
                        }
                        <tr className='border-t-2 border-gray-200'>
                            <td className='text-xl flex justify-between font-semibold'>
                                <span>Total Bids Amount: </span>
                                {totalPrice === 0 ? (
                                        <span>${totalPrice}</span>
                                    ) : (
                                        <span>${totalPrice.toLocaleString()}.00</span>
                                    )
                                }
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
            </div>
            
        </div>
    );
};

export default BidsItems;