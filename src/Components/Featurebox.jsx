import React from 'react'

//Untuk mengatur konten pada container
function Featurebox(props) {
  return (
    <div className='a-box'>
        <div class = 'a-b-img'>
            <img src={props.image}/>
        </div>
        <div class = 'a-b-text'>
            <h2> {props.title} </h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, pariatur.</p>
        </div>
    </div>
  )
}

export default Featurebox