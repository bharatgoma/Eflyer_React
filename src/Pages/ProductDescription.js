import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Navbar from '../Components/Navbar/NavbarPage';


const ProductDescription = (props) => {

    const value = useLocation();
   

    useEffect(() => {
        const fetchData = async() => {
            const url = `https://fakestoreapi.com/products/${value.state.id}`;
            let data = await fetch(url);
            let parsedData = await data.json()
            setData(parsedData)
        }
        fetchData()
    })    
   
    const [data, setData] = useState([])
    
  return (
    <>
    <Navbar/>
      <div className="container px-10 py-10 lg:my-12 lg:mx-auto sm:mx-auto sm:px-4 xsm:mx-auto xsm:px-2 flex justify-center items-center md:flex-col lg:flex-row sm:flex-col xsm:flex-col">
        <div className="image w-[20rem] py-10">
            <img src={data.image} alt="" />
        </div>
        <div className="description-content mx-32 flex flex-col xsm:w-[250px] ">
            <div className="category my-4 px-5 font-bold text-lg bg-yellow-500 self-center">{data.category}</div>
            <hr />
            <div className="title text-2xl font-semibold">{data.title}</div>
            {/* <div className="rating my-5">Rating: {data.rating.rate}/5</div> */}
            <div className="description my-12">
                Description: {data.description}
            </div>
            <hr />
            <div className="price font-bold text-2xl">$ {data.price}</div>
            <div><span className='hover:underline hover:cursor-pointer'>EMI options Available</span></div>
            <div className="buttons my-4 flex">
                <button className="px-8 text-white bg-orange-400 rounded-lg hover:bg-yellow-400">Buy Now</button>
                <button className="px-8 py-2 mx-2 text-white  bg-gray-600 hover:bg-[#b1aeae] rounded-lg">Add to Cart</button>
            </div>
        </div>    
      </div>
      
    </>
  )
}

export default ProductDescription
