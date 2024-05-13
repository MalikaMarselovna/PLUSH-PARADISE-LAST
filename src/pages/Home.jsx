import React from 'react'
import Announce from '../components/Announce';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Menu from '../components/Menu';


function Home() {
  return (
    <div>
        <Announce/>
        <Navbar/>
        {/* <Menu/> */}
        <Slider/>
        <Categories/>
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}
 
export default Home;