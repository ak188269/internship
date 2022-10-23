import React from 'react'
import "./Stat.css"
import { FaAngleRight} from "react-icons/fa";
function Stat() {
  return (
   <>
   <div id="stat-container">
    <span  className='child'>Today`s Earning</span>
    <span className='child' id='price'>$14,000</span>
    <span className='child' ><FaAngleRight id='right-angle'/></span>
   </div>
   </>
  )
}

export default Stat