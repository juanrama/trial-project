import React from 'react'
import videoBg from '../video/ocean.mp4'

function Header() {
  return (
    <div id = 'main'>
        <video id = 'background-video' src={videoBg} autoPlay loop muted></video>
        <div className='name'>
            <h2>MARI MAKAN</h2>
            <h1><span>IKAN</span>SEGAR</h1>
            <div className='header-btns'>
                <a href="#" className='header-btn'>BUY FISH</a>
            </div>
        </div>

    </div>
  )
}

export default Header