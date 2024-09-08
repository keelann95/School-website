import React from 'react'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Publication from './components/Publication'
import About from './components/About'
import News from './components/News'
import Gallery from './components/Gallery'

<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet"/>


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/publications' element={<Publication/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/news' element={<News/>}/>
      <Route path='/gallery' element={<Gallery/>}/>

    </Routes>
  )
}

export default App