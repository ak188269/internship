import React from 'react'
import { FaRegStar,FaStar} from "react-icons/fa";
function Rating({rating=3}) {
  return (<>
    {Array(rating)
        .fill()
        .map((_, i) => (
        //   <span>⭐️</span>
        <FaStar style={{color:"rgb(255,164,28)"}}/>
        ))}
         {Array(5-rating)
            .fill()
            .map((_, i) => (
            <FaRegStar />
            ))}
        </>
  )
}

export default Rating