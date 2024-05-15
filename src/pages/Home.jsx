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
        <Products/>
    </div>
  )
}
 
export default Home;