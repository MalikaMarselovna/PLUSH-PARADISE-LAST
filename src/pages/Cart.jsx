import React from "react";
import Counter from "../components/Counter";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <div>
      <div className="p-5">
        <div className="flex justify-center text-5xl text-[#f92e9e] ">Cart</div>
        <div className="flex items-center justify-between mt-4">
          <Link to="/" className="btn bg-white text-[#f92e9e] border-2 border-[#f92e9e] hover:bg-white hover:text-[#16ffbd] hover:border-[#16ffbd]">
            Continue Shopping
          </Link>

          <div className="flex underline text-lg hover:cursor-pointer">
            <p className="mr-5">Items in your Cart : 2</p>
            <p>Whitlist Item : 0</p>
          </div>
          <button className="btn">Checkout</button>
        </div>
        <hr className=" mt-7 mb-7"/>
        {/* central div */}
        <div className="flex mt-7">
          <div className="flex flex-col flex-1">
            {/* list of products  */}
            <div className="flex w-[100%] h-auto items-center">
              <div className="product flex self-start pl-5">
                <img
                  src="https://i.pinimg.com/564x/97/bc/a7/97bca741624e09603d6a0b0967d42ee1.jpg"
                  alt="product_img"
                  className="w-[7.5rem] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] easy-in duration-300"
                />
              </div>
              <div className="description flex flex-col ml-5 h-auto justify-between ">
                <p className="mb-5">
                  <b className="mr-2">ID:</b>12345666
                </p>
                <p className="mb-5">
                  <b className="mr-2">Product:</b>Cute lamb
                </p>
                <p className="flex item-center justify-start mb-5">
                  <b className="">Color:</b>
                  <div className="bg-white-600 w-[20px] h-[20px] rounded-full border-2 p-[10px] cursor-pointer ml-5 hover:border-[#f92e9e]"></div>
                </p>
                <p className="mb-5">
                  <b className="mr-2">Size:</b> large
                </p>
              </div>
              <div className="flex flex-col justify-center items-center flex-auto">
                <Counter />
                <p className="flex items-center justify-center text-4xl mt-3">
                  <b>$70</b>
                </p>
              </div>
            </div>
            <hr className=" mt-7 mb-7"/>
            <div className="flex w-[100%] h-auto items-center">
              <div className="product flex self-start pl-5">
                <img
                  src="https://i.pinimg.com/564x/97/bc/a7/97bca741624e09603d6a0b0967d42ee1.jpg"
                  alt="product_img"
                  className="w-[7.5rem] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] easy-in duration-300"
                />
              </div>
              <div className="description flex flex-col ml-5 h-auto justify-between ">
                <p className="mb-5">
                  <b className="mr-2">ID:</b>12345666
                </p>
                <p className="mb-5">
                  <b className="mr-2">Product:</b>Cute lamb
                </p>
                <p className="flex item-center justify-start mb-5">
                  <b className="">Color:</b>
                  <div className="bg-white-600 w-[20px] h-[20px] rounded-full border-2 p-[10px] cursor-pointer ml-5 hover:border-[#f92e9e]"></div>
                </p>
                <p className="mb-5">
                  <b className="mr-2">Size:</b> large
                </p>
              </div>
              <div className="flex flex-col justify-center items-center flex-auto">
                <Counter />
                <p className="flex items-center justify-center text-4xl mt-3">
                  <b>$70</b>
                </p>
              </div>
            </div>
       
          </div>
          <div className="flex-[0.4] w-auto h-[100%] border-2 border-[#f92e9e] rounded-md shadow-lg flex flex-col items-center p-5">
            <h1 className="text-[2rem]">Summary</h1>
            <div className="flex justify-between mt-3 w-[100%]">
                <p>Subtotal</p>
                <p>$140</p>
            </div>
            <div className="flex justify-between mt-3 w-[100%]">
                <p>Shipping</p>
                <p>$140</p>
            </div>
            <div className="flex justify-between mt-3 w-[100%]">
                <p>Shipping discount</p>
                <p>$140</p>
            </div>
            <div className="flex justify-between mt-3 w-[100%] text-3xl font-bold">
                <p>Total</p>
                <p>$140</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
