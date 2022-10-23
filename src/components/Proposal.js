import React from 'react'
import "./Proposal.css"
function Proposal() {
  return (
   <>
   <div id="proposal-container">
   <img   className='photos' src="https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
   <div className='card-content'>
    <span className="card-title"> 
    
    This is a title of the page </span> <span className='card-price'>$12,000 </span>  <br /> <br />
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam corrupti hic magni ipsam accusantium sunt!
    </div>
   </div>
   </>
  )
}

export default Proposal