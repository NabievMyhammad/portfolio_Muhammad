import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Main from './components/main/Main'
import  Footer from './components/footer/Footer'
import  'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
<div>
  <Header/>
  <Main/>
  <Footer/>

</div>
  )
}

export default App
