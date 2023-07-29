import React from "react";

import "./navbar.css";

const NavbarPage = () => {
   
    const Menu = () => {
    return (

        <div className="container">
            <div className="blackbelt">
                <ul className="list">
                    <li><a href="/" className="hover:text-blue-400">Home</a></li>
                    <li><a href="#">Best Sellers</a></li>
                    <li><a href="#">Gift Ideas</a></li>
                    <li><a href="#">New Releases</a></li>
                    <li><a href="#">Today's Deals</a></li>
                    <li><a href="#">Customer Service</a></li>
                </ul>
            </div>
        </div>



    );
    }

    return (
        <div>
          <div >
            <div className="flex d-none d-lg-block ">
              <Menu />
            </div>
          </div>
    
          
        </div>
      );
};

export default NavbarPage;
