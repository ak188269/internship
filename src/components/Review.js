import React from 'react'
import Rating from './Rating'
import "./Review.css"

function Review({rating=3}) {
  return (
 <>
 <div className="review-box">
 <div id='arrow'></div>
 <div id="review-container">
    <div className="review-child client">
        
        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80" alt="" className="client-photo" /> 
        <span className="client-name">XYZ Singh <br /><Rating/></span> 
    </div>
    <div className="review-child client-rating">
        <div className="rating">Engagement 
       &nbsp; 
       <Rating/>
        </div>
        <div className="rating">
Lead 
Response  &nbsp;  
<Rating/>
        </div>
        <div className="rating">
     Target Aud. &nbsp;  
<Rating/>
        </div>
   
    </div>
    <div className="review-child">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus cumque facere odit, id fugit accusamus ducimus nesciunt architecto repellat dolores voluptatum modi minima eius magni obcaecati consequuntur harum? Impedit natus quas temporibus quam ex maiores sapiente voluptas facere iste doloremque?
    </div>
    </div>
    </div>
    </>
  )
}

export default Review