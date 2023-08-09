import React from 'react'
import MainPart from '../components/catalogue/MainPart'
import Upper from '../components/catalogue/Upper'
import Footer from '../components/Footer'
import HeaderBlack from '../components/HeaderBlack'

export default function Catalogue() {
  return (
    <div className='App'>
        <HeaderBlack/>
        <Upper/>
        <MainPart/>
        <Footer/>
    </div>
  )
}
