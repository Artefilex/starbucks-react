import React from 'react'
import "../style.css"

function Rewards() {
  return (
    <div>
      <header className='rewards-header'>
        <h4>
          STARBUCKS® REWARDS
        </h4>
      </header>
      <div className='rewards-background'>
        <div className="text-align-rewards">
          <h1>
            FREE COFFEE <br />
            IS A TAP AWAY
          </h1>
          <span>Join now to start earning Rewards.</span>
          <button> <a href="http://localhost:3000/join">Join now</a></button>
          <span>Or join in the app for the best experience</span>
        </div>
      </div>
      <div className='getting-start'>
        <div className='text-div'>
          <h2>Getting started is easy</h2>
          <h6>Earn Stars and get rewarded in a few easy steps.</h6>
        </div>
        <div className='create-acount'>
          <div className='create-step'>
            <h2> 1</h2>
            <h5>Create an account </h5>
            <span>To get started, <a href="http://localhost:3000/join">join now.</a> You can also <a href="http://localhost:3000/join"> join in the app</a> to get access to the full range of Starbucks® Rewards benefits.</span>
          </div>
          <div className='create-step'>
            <h2> 2</h2>
            <h5>Order and pay how you’d like </h5>
            <span> Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways. <a href="http://localhost:3000/join">Learn how </a></span>
          </div>
          <div className='create-step'>
            <h2> 3</h2>
            <h5>Earn Stars, get Rewards</h5>
            <span> As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!</span>
          </div>


        </div>
      </div>

    </div>
  )
}

export default Rewards