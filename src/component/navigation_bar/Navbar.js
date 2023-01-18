import React from 'react'

import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Signup from '../form_validation/Signup.js';
import Join from '../form_validation/Join.js';
import Rewards from '../rewards/Rewards.js';
import Logo from "../logo/starbucks.png"
import Menu from '../menu/Menu.js';
import Main from '../main/Main.js';
import Gift from '../Gift.js';
import "../style.css"

function Navbar() {
  const handleClick = event => {
    // 👇️ toggle class on click
    event.currentTarget.classList.toggle('active-btn');
    
   
  };
  let activeStyle = {
    borderBottom:  "4px solid green",
    display: "block"
  };
  
 
  return (
    <div >
      <Router>
        <div >
     <nav className='navbar'>
     <nav className='nav'>
        <nav className='nav-1'>
          <ul>
          <li>
                <NavLink >
                <img className='mainlogo' src={Logo} alt="" /> 

                </NavLink >
              </li>
              <li>
                <NavLink to="/menu"  style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink to="/rewards"  style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
                  Rewards
                </NavLink>
              </li>
              <li>
                <NavLink to="/giftcard"   style={({ isActive }) =>
              isActive ? activeStyle: undefined
            }>
                 Gift Card 
                </NavLink>
              </li>


          </ul>      
          </nav>
          <nav className='nav-2' >
            <ul>
              <li>
                <NavLink to="/signup">
                <button className='sign-btn' onClick={handleClick} >Sign in</button>
                </NavLink>
              </li>
              <li>
                <NavLink to="/join">
                <button className='join-btn'>Join now</button>
                </NavLink>
              </li>
      
              
            </ul>
          </nav>
         </nav>
     </nav>

          <Routes>
            <Route path='/' element={<Main/>}></Route>
            <Route path='/giftcard' element={< Gift />}></Route>
            <Route path='/rewards' element={<Rewards/>}></Route>
            <Route path='/menu' element={< Menu />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/join' element={< Join />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default Navbar