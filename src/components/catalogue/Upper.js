import React from 'react'
import { Link } from 'react-router-dom'

export default function Upper() {
  return (
    <div className='upper'>
        <div className='container'>
            <div className='bread'>
                <Link to="/" className='bread-item'>Home </Link>
                <Link to="/catalogue" className='bread-item'>/ Catalogue</Link>
            </div>
            <div className='upper-wrapper'>
                <h1>Catalogue</h1>
            </div>
        </div>
    </div>
  )
}
