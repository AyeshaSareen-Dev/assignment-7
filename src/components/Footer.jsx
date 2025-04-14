import React from 'react';
import AuctionGallery from '/assets/AuctionGallery.png'
const Footer = () => {
    return (
        
        <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10 py-[120px] gap-y-4">
            <img src={AuctionGallery} alt="" />
            <nav className="grid grid-flow-col gap-4">
                <a className="link link-hover">Bid</a>
                <a className="link link-hover">Win</a>
                <a className="link link-hover">Own</a>
            </nav>
            <nav className="grid grid-flow-col gap-4">
                <a className="link link-hover">Home</a>
                <a className="link link-hover">Auctions</a>
                <a className="link link-hover">Categories</a>
                <a className="link link-hover">How does it work</a>
            </nav>
            <aside>
                <p>© {new Date().getFullYear()} AuctionGallery. All rights reserved</p>
            </aside>
        </footer>
        
    );
};

export default Footer;