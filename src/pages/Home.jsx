import React from 'react'
import Announce from '../components/Announce';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';



function Home() {
  return (
    <div>
        <Slider/>
        
        <Categories/>
        <h1 className=" mt-10 mb-10 text-4xl font-bold mb-4 flex justify-center text-[#f92e9e]">Our Cute Toys</h1>
        <Products/>
    </div>
  )
}
 
export default Home;