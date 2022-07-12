import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }
  return (
    <>
     <header>
        <nav className='navbar'>
          <Link to='/' className='navbar-brand'>Fitness App</Link>
          <div className="button"  onClick={handleToggle} >
            {navbarOpen ? <button className="togglex"></button> : <button className="toggle"></button>}
            
          </div>
          <ul className={`nav-list ${navbarOpen ? " showMenu" : "hideMenu"}`}>
            <li className="nav-item">
              <Link to='/'>Home</Link>
            </li>
            <li className="nav-item">
              <Link to='/about'>About</Link>
            </li>
            <li className="nav-item">
              <Link to='/booking'>Bookings</Link>
            </li>
            <li className="nav-item">
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
          <ul className={`nav-action ${navbarOpen ? " showMenu" : "hideMenu"}`}>
            <li className="nav-item">
              <Link to='/sign-in' className='btn-login'>Login</Link>
            </li>
            <li className="nav-item">
              <Link to='/register' className='btn-register'>Register</Link>
            </li>
          </ul>
        </nav>
     </header>
    </>
  )
}

export default Header
