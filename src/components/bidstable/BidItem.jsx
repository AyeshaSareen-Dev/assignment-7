import React from 'react';
import {FaRegHeart } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
const BidItem = ({ bid, handleClick, isFavorite }) => {
    return (
      <tr className='border-t-2 border-gray-200'>
        <td className='flex gap-4 items-center '>
          <img src={bid.image} alt={bid.title} />
          <span>{bid.title}</span>
        </td>
        <td className='text-center'>{bid.currentBidPrice}</td>
        <td className='text-center'>{bid.timeLeft} left</td>
        <td className='text-center align-middle'>
          <button
            onClick={() => handleClick({ bid })}
            disabled={isFavorite}
            className={isFavorite ? "cursor-not-allowed" : "cursor-pointer"}
          >
            {isFavorite ? (
              <IoMdHeart className="fill-red-500" size={20} />
            ) : (
              <FaRegHeart className="fill-red-500" />
            )}
          </button>
        </td>
      </tr>
    );
  };
  

export default BidItem;