import React from 'react'
import "../header/header.css"
import { IoSearchOutline } from "react-icons/io5";
import Select from '../selectDrop/select';
// import Logo from "../../src/assets/images/i1.jpeg";


const Header = () => {
  return (
    <>
        <header>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-2">
                <img src="i1.jpeg" alt="nahi hai" srcset=""  className='i1'/>
              </div>

              {/* header search  start here */}
              <div className="col-sm-5">
              <div className="headerSearch d-flex align-items-center">
                <Select/>
               
               

               <div className="search">
                <input type="text" placeholder='Search for items ...' />
                <IoSearchOutline className='searchIcon' />
               </div>
              </div>
              </div>

              {/* header search end here */}
            </div>
          </div>

        </header>
    </>
  )
}

export default Header