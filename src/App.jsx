import { useEffect, useState } from 'react';
import { ToastContainer } from "react-toastify";
import Banner from "./components/Banner";
import BidsItems from "./components/bidstable/BidsItems";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


function App() {
  const [bids, setBids] = useState([]);
  useEffect(() => {
    fetch('/bids.json')
      .then(res => res.json())
      .then(data =>
         {setBids(data);
      })      .catch(err => {
        console.error('Error fetching bids:', err);
      });
  }, []);

  return (
    <>
      <Navbar/>
      <Banner/>
      <BidsItems bids={bids}/>
      <Footer/>
      <ToastContainer />
    </>
  )
}

export default App
