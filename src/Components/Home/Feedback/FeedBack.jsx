import React from 'react'
import './FeedBack.scss'
import notfound from '../../../assets/images/Navbar/notfound.png'
import { Link } from 'react-router-dom'
function FeedBack() {
  return (
    <div className='feedback'>
        <div className='feedback__main'>
          <img src={notfound} alt="" />
          <h5>There is no feedback yet.</h5>
          <p>Got a suggestion? Found a bug that needs to be squashed? <br /> We love hearing about new ideas to improve our app.</p>
          <button onClick={() => document.querySelector(".link").click()}>
            <Link to="/add" className='link'> + Add Feedback</Link>
          </button>
        </div>
    </div>
  )
}

export default FeedBack