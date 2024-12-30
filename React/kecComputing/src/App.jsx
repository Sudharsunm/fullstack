import './App.css'
import Home from './assets/Components/FunctionalComponents/Home'
import ClassCompEg from './assets/Components/ClassComponents/ClassCompEg'
import About from './assets/Components/FunctionalComponents/About'
import Contact from './assets/Components/FunctionalComponents/Contact'
import Gallery from './assets/Components/FunctionalComponents/Gallery'
import NavBar from './assets/Components/FunctionalComponents/NavBar'
import {BrowserRouter,Routes,Route}from 'react-router-dom'
function App() {

  return (
      <div>
        <BrowserRouter>
        <NavBar/> 
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About college="KEC" clg1="Arts"/>}/>
              <Route path='/gallery' element={<Gallery/>}/>    
              <Route path='/contact' element={<Contact/>}/>       
             </Routes>
        </BrowserRouter>

        
      </div>
  )
}

export default App
