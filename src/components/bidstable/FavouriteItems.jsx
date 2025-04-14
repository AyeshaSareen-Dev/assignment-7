import React from 'react';
import { RxCross2 } from 'react-icons/rx';

const FavouriteItems = ({bid}) => {
    return (
        
            <tr className='border-t-2 border-gray-200'>
            <td className='flex gap-4 justify-between'>
                    <img className='' src={bid.image} alt="" /> 
                    <div className='space-y-2'>
                        <h1>{bid.title}</h1>
                        <div className='flex gap-4'>
                            <p>${bid.currentBidPrice}</p>
                            <p>Bids:{bid.bidsCount}</p>
                        </div>
                    </div>
                    <span><RxCross2 /></span>
            </td>
        </tr>
        
    );
};

export default FavouriteItems;