import React, { useState } from 'react'
import "../selectDrop/select.css"
const Select = () => {

  const [isOpenSelect,setisOpenSelect] = useState(true);
    
  const openSelect=()=>{
    setisOpenSelect (!isOpenSelect);
  }

  return (
    <>

<div className="selectDrop cursor position relative">
                  <span className='openSelect' onClick={openSelect}>All Categories
                     </span>   
      {/*  here utber take selectdrop and i took dropdown  */}  

      {
        isOpenSelect ===true && 
        <div className="dropdown">   
        <div className="searchField">
            <input type="text" />
    
        </div>
        <ul className="searchResults">
  <li onClick={() => setisOpenSelect(false)}>Milks and Dairies</li>
  <li onClick={() => setisOpenSelect(false)}>Wines & Drinks</li>
  <li onClick={() => setisOpenSelect(false)}>Clothing & beauty</li>
  <li onClick={() => setisOpenSelect(false)}>Fresh Seafood</li>
  <li onClick={() => setisOpenSelect(false)}>Pet Foods & Toy</li>
  <li onClick={() => setisOpenSelect(false)}>Fast food</li>
  <li onClick={() => setisOpenSelect(false)}>Baking material</li>
  <li onClick={() => setisOpenSelect(false)}>Vegetables</li>
  <li onClick={() => setisOpenSelect(false)}>Fresh Fruit</li>
  <li onClick={() => setisOpenSelect(false)}>Bread and Juice</li>
  <li onClick={() => setisOpenSelect(false)}>Milks and Dairies</li>
  <li onClick={() => setisOpenSelect(false)}>Wines & Drinks</li>
  <li onClick={() => setisOpenSelect(false)}>Clothing & beauty</li>
  <li onClick={() => setisOpenSelect(false)}>Fresh Seafood</li>
</ul>

    </div>
      }

    
</div>
    </>
  )
}

export default Select