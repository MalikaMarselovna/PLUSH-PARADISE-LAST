import React from "react";
import Announce from "../components/Announce";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

function ProductPage() {
  return (
    <div>
      <Announce />
      <Navbar />
      <div className="flex justify-center ">
        <div className="flex flex-1 items-center justify-center">
            <img src="https://i.pinimg.com/564x/e4/e1/ce/e4e1ce38a0d40ed975ae76a77ad3cce7.jpg"
             alt="product_image"
             className="w-[80%] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] easy-in duration-300" 
             
             />
        </div>
        <div
        className="flex-[1.3] flex items-start justify-items-start flex-col mt-10">
            <h1 className="title text-[40px] text-[#f92e9e] ">Cute crochet Teddy Bear in a pink dress  </h1>
            <p className="pr-[4rem] text-justify  mt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. At ut facilis corrupti, saepe aspernatur consequatur fugit! Consectetur natus id corrupti mollitia quia inventore, libero, molestias magnam est in nostrum nihil.
            Eveniet ad harum, explicabo laborum vitae temporibus repellendus neque cumque quo incidunt, quibusdam atque eum, eius molestiae pariatur voluptates facilis omnis. Labore mollitia in nulla libero sunt accusamus minus vitae?</p>
            <p className="mt-7 text-3xl "> Price: <b className="text-[#16ffbd]">$70</b></p>

            {/* color variants */}
            <div className="flex text-2xl mt-7">
                Colors
                <div className="bg-pink-600 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5"></div>
                <div className="bg-sky-600 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5"></div>
                <div className="bg-white-600 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5"></div>
                <div className="bg-green-600 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5"></div>
            </div>
            <div className="mt-7 text-2xl">
                Size
                <select className="ml-5 border-2">
                    <option selected disablet>Select</option>
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                </select>
            </div>

        </div>
        
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default ProductPage;
