import React from "react";
import Announce from "../components/Announce";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

function Cart() {
  return (
    <div>
      <Announce />
      <Navbar />
      <div className="p-5">
        <div className="flex justify-center text-5xl">Cart</div>
        <div className="flex items-center justify-between mt-4">
          <button className="btn bg-white text-[#f92e9e] border-2 border-[#f92e9e] hover:bg-white hover:text-[#16ffbd] hover:border-[#16ffbd]">
            Continue Shopping
          </button>

          <div className="flex underline text-lg hover:cursor-pointer">
            <p className="mr-5">Items in your Cart : 3</p>
            <p>Whitlist Item : 0</p>
          </div>
          <button className="btn">Checkout</button>
        </div>
        {/* central div */}
        <div className="flex mt-7">
          <div className="flex flex-col flex-1">
            {/* list of products  */}
            <div>
              <div> 
              
            </div>
              <div>Product quantity and price</div>
            </div>
          </div>
          <div>Summary</div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Cart;
