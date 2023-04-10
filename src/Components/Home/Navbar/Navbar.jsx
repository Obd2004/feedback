import React, { useContext } from 'react'
import './Navbar.scss'
import logo from '../../../assets/images/Navbar/logo.png'
import { Link } from 'react-router-dom'
import { Context } from '../../../Context/Context'
function Navbar() {
  const { text, setText } = useContext(Context)


  return (
    <div className='navbar'>
      <div className="navbar__left">
        <div className="navbar__left__logo">
          <img src={logo} alt="" />
          <h4>0 Suggestions</h4>
        </div>
        <div className="navbar__left__select">
          <h6>Sort By :</h6>
          <select >
            <option value="most">Most</option>
            <option value="most">koprik</option>
          </select>
        </div>
      </div>
      <div className="navbar__right">
        <button onClick={() => document.querySelector(".link").click()}>
          <Link to="/add" className='link'>+ Add Feedback</Link>
        </button>
      </div>
    </div>
  )
}

export default Navbar