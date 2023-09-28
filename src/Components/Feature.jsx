import React from 'react'
import Featurebox from './Featurebox'
import fimage1 from '../images/fish-logo.png'
import fimage2 from '../images/fishing-tool.png'
import fimage3 from '../images/medicine.png'

//Menambahkan konten dari featurebox pada container
function Feature() {
  return (
    <div id = 'features'>
        <h1>Our Product</h1>
        <div className='a-container'>
            <Featurebox image = {fimage1} title = ""/>
            <Featurebox image = {fimage2} title = ""/>
            <Featurebox image = {fimage3} title = ""/>
        </div>
    </div>
  )
}

export default Feature