import React from 'react'
import logo from '../img/logo-black.svg';

export default function Footer() {
  return (
     <div className='footer'>
    <div className='container'>
          <div className='footer-line'></div>
            <div className='footer-wrapper'>
                <div style={{backgroundImage:`url(${logo})`}} className='footer-logo'></div>
                <div className='footer-wrapper-second'>
                <div className='footer-terms'>
                    <div className='footer-terms__item'>Terms of use</div>
                    <div className='footer-terms__item'>Privacy Policy</div>
                </div>
                <div className='footer-copy'>© Vinyl Records 2023</div>
                </div>
            </div>
        </div>
    </div>
  )
}
