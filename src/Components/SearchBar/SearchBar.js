import React from 'react'
import { Cart, PersonFill, Search } from 'react-bootstrap-icons'
import { useContext } from 'react'
import userContext from '../../Context/UserContext'
import searchContext from '../../Context/SearchContext'
import './searchbar.css';



const SearchBar = () => {

    const [category, setCategory] = useContext(userContext)
    const handleSelect = (e) => {
        e.preventDefault();
        setCategory(document.getElementById('category-select').value);
        // console.log(document.getElementById('category-select').value);
    }

    const [search, setSearch] = useContext(searchContext)
    const handleSearchChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    }

    const handleButton = (e) => {
        e.preventDefault();
        setSearch(document.getElementById('default-search').value)
    }

    let options = [
        { value: "categories", label: "All Categories" },
        { value: "men's clothing", label: "Men's Clothing" },
        { value: "women's clothing", label: "Women's Clothing" },
        { value: "jewelery", label: "Jewelery" },
        { value: "electronics", label: "Electronics" }
    ]


    return (
        <div className='flex flex-col z-3 absolute items-center top-[10%] '>

            <div className="text-white ">
                <h1 style={{ fontSize: '3em', fontWeight: '700' }}>Eflyer</h1>
            </div>

            <div className="flex lg:flex-row justify-center items-center space-x-5 md:flex-col sm:flex-col xsm:flex-col md:space-y-5 sm:space-y-5 xsm:space-y-5">
                <div>
                    <select value={category} onChange={handleSelect} className='bg-gray-900 text-white px-2 py-2 rounded-md outline-none border-none lg:mt-5 cursor-pointer' name="categories" id="category-select">
                        {options.map((option, index) => (
                            <option value={option.value} key={option.value + index}>{option.label}</option>
                        ))};
                    </select>
                </div>
                <div>
                    <form>
                        <div className="relative">
                            <input onSubmit={(e) => e.preventDefault()} onChange={handleSearchChange} value={search} type="search" id="default-search" className="xsm:w-[280px] block w-96 px-11 py-2.5 text-m text-gray-900 border border-gray-600 rounded-lg  hover:outline-blue-400" placeholder="Search any product" />

                            <button onClick={handleButton} type="submit" className="text-white absolute right-0 bottom-0 bg-orange-500 hover:bg-yellow-400 font-medium rounded-md text-sm px-3 py-3"><Search /></button>
                        </div>
                    </form>
                </div>
                <div>

                    <select className='bg-white text-black px-5 py-2 rounded-md outline-none border-none cursor-pointer' name="language" id="language">
                        {/* <option value="English">English</option> */}

                        <option  value="Spanish">English</option>

                        <option value="Spanish">Spanish</option>
                        <option value="French">French</option>
                    </select>
                </div>
                <div className='flex justify-center items-center text-slate-50 hover:text-black font-semibold text-xl cursor-pointer '>
                    <Cart />
                    <p className='mx-2'>Cart</p>
                </div>
                <div className='flex justify-center items-center  text-slate-50 hover:text-black font-semibold text-xl cursor-pointer'>
                    <PersonFill />
                    <p className='mx-2'> Account</p>
                </div>



            </div>
            <div className='my-20 text-center'>
                <p className="lg:text-6xl text-white font-extrabold xsm:text-lg sm:text-lg md:text-xl xsm:mt-0 sm:mt-5">Get Started with <br /> your favourite Shopping Now !</p>
            </div>
            <button className='bg-gray-900 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded flex d-none d-xl-block'>Buy Now</button>
        </div>
    )
}

export default SearchBar
