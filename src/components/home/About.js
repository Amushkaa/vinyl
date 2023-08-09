import React from 'react'
import image_first from '../../img/about.png'
import image_second from '../../img/about-2.png'

export default function About() {
  return (
    <>
    <div className='about'>
    <div className='container'>
        <h2>about us</h2>
        <div className='about-wrapper'>
            <div style={{backgroundImage:`url(${image_first})`}} className='about-img__first'></div>
            <div className='about-wrapper-second'>
            <div className='about-text-wrapper'>
                <h3>The first and only shop in Genovia</h3>
                <div className='about-text'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</div>
                <button className='button button-white'>Find out more</button>
            </div>
             <div style={{backgroundImage:`url(${image_second})`}} className='about-img__second'></div></div>
        </div>
        </div>
    </div>
    </>
  )
}
