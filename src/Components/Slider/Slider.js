import React from 'react';
import './slider.css';
import backgroundImage from '../../assets/shopping-cart-with-wooden-elements.jpg';
import SearchBar from '../SearchBar/SearchBar';



const Slider = () => {


    return (
        <>

            <div className='picscontainer group'>
                <div
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                    className='mainpic'
                ></div>
            </div>


            <div className='flex justify-center'>
                <SearchBar />
            </div>
        </>
    )
}

export default Slider
