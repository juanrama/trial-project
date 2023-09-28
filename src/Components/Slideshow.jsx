import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image'
import fish1 from '../images/fresh-fish1.jpg'
import fish2 from '../images/fresh-fish2.jpg'
import fish3 from '../images/fresh-fish3.jpg'

const slideImages = [
    {
        url: fish1,
    },

    {
        url: fish2,
    },

    {
        url: fish3,
    }

];

//konfigurasi style dari slideshow
const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '700px',
    backgroundSize: 'cover',
    marginTop: '50px'
}


//Fitur slideshow pada web
function Slideshow() {
  return (
    <div id = 'slideshow' className='slide-container'>
        <Fade>
            {slideImages.map((image,index) => (
                <div key = {index}>
                    <div style={{ ...divStyle, backgroundImage : `url(${image.url})` }}>

                    </div>
                </div>
            ))}
        </Fade>
    </div>
  )
}

export default Slideshow