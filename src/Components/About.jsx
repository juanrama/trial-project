import React from 'react'
import aboutimage from '../images/fish-about2.png'

function About() {
  return (
    <div id = 'about'>
        <div className='about-image'>
            <img src={aboutimage} alt="" />
        </div>
        <div className='about-text'>
            <h1>Learn More About US</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aut repudiandae debitis doloribus a culpa, pariatur quod vitae non architecto est optio dolores consectetur amet facere ipsum recusandae molestias magni corporis? Iure harum ex accusamus, consequatur saepe repellendus quas nisi, voluptatibus quae ad tempore aliquam animi asperiores distinctio eaque nihil!</p>
            <button>READ MORE</button>
        </div>
    </div>
  )
}

export default About