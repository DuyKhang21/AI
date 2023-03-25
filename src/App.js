import React from 'react'
import {Footer,Blog,Header,Features,Posibility,WhatGpt3} from './containers'
import {Cta, Brand,Navbar} from './components'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>       
      </div>
      <Brand/>
      <WhatGpt3/>
      <Features/>
      <Posibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App