import './App.css';
import { useState ,useEffect} from 'react';
import Stat from "./components/Stat"
import Proposal from './components/Proposal';
import Review from './components/Review';

function App() {
  return (
   <>
   <div id="logo">Logo</div>
   <header>
    <a href="#"  className='links'>Home</a><a href="#" className='links'>Login</a><a href="#" className='links'>Contact Us</a><a href="#" className='links'>About Us</a>
   </header>
    <button id='verify-btn'>Verify Account</button>
  <h3 style={{textDecoration:"underline"}}>Your Statistics</h3>
  <div id="statistics" className='cards'>
<Stat></Stat>
<Stat></Stat>
<Stat></Stat>
  </div>
  <h3 style={{textDecoration:"underline"}}>Some Proposals</h3>
  <div id="proposals" className='cards'>
<Proposal/>
<Proposal/>
<Proposal/>
<Proposal/>
<Proposal/>
<Proposal/>
  </div>
  <h3 style={{textDecoration:"underline"}}>Our client Reviews Proposals</h3>
  <div id="reviews" >
<Review/>
<Review/>
<Review/>
  </div>
   </>
  );
}

export default App;
