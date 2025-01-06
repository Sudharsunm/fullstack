import './App.css'
import Home from './assets/Components/FunctionalComponents/Home'
import ClassCompEg from './assets/Components/ClassComponents/ClassCompEg'
import About from './assets/Components/FunctionalComponents/About'
import Contact from './assets/Components/FunctionalComponents/Contact'
import Gallery from './assets/Components/FunctionalComponents/Gallery'
import NavBar from './assets/Components/FunctionalComponents/NavBar'
import {BrowserRouter,Routes,Route}from 'react-router-dom'
import UseEffect from './assets/Components/FunctionalComponents/UseEffect'
import UseRef from './assets/Components/FunctionalComponents/UseRef'
import UseContext from './assets/Components/FunctionalComponents/UseContext'
import UseMemo from './assets/Components/FunctionalComponents/UseMemo'
import Login from './assets/Components/FunctionalComponents/LoginSignup/Login'
import SignUp from './assets/Components/FunctionalComponents/LoginSignup/SignUp'
function App() {

  return (
      <div>
        <BrowserRouter>
        <NavBar/>  
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About college="KEC" clg1="Arts and Naturopathy"/>}/>
              <Route path='/gallery' element={<Gallery/>}/>    
              <Route path='/use-effect' element={<UseEffect/>}/>
              <Route path='/use-ref' element={<UseRef/>}/>  
              <Route path='/use-con' element={<UseContext/>}/>
              <Route path='/use-memo' element={<UseMemo/>}/>  
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/login' element={<Login/>}/>   
              <Route path='/signup' element={<SignUp/>}/>      
             </Routes>
        </BrowserRouter>

        
      </div>
  )
}

export default App
