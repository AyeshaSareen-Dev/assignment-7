import React from 'react';
import bannerimg from '/assets/Banner-min.jpg';

const Banner = () => {
  return (
    <div>
      <div
            className="hero place-items-start pt-[200px] min-h-[600px]"
            style={{
            backgroundImage: `url(${bannerimg})`,
            }}>
            <div className="bg-opacity-60"></div>
            <div className="hero-content  text-white justify-start pl-[54px] w-full ">
            <div className="max-w-[500px]">
                <h1 className="mb-5 text-4xl font-semibold">
                Bid on Unique Items from Around the World
                </h1>
                <p className="mb-5 font-[200] text-[18px]">
                Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions
                </p>
                <button className="btn rounded-4xl">Explore Auctions</button>
            </div>
            </div>
      </div>
    </div>
  );
};

export default Banner;
