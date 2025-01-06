import './../../css/NavBar.css'
import React from 'react'
import {Link} from 'react-router-dom';
var NavBar=()=>{
    return (
        <header>
            <nav>
                <ul>

                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to ='/gallery'>Gallery</Link></li>
                    <li><Link to='/use-effect'>Use effect</Link></li>
                    <li><Link to='/use-ref'>Use Ref</Link></li>
                    <li><Link to='/use-con'>Use Context</Link></li>
                    <li><Link to='/use-memo'>Use Memo</Link></li>
                    <li><Link to='/contact'>Conatct</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/signup'>SignUp</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default NavBar