import React from 'react'
import Slider from '../Components/Slider/Slider';
import NavbarPage from '../Components/Navbar/NavbarPage';
import ShoppingItems from '../Components/ShoppingItems/ShoppingItems';

const Home = () => {
  return (
    <div >
      <NavbarPage/>
      <Slider />
      < ShoppingItems />
      
    </div>
  )
}

export default Home;
