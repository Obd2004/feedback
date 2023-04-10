import React from 'react'
import './Navbar.scss'
import { Container } from 'reactstrap'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='navbarFeed'>
      <Container>
        <div className="navbarFeed__main">
          <div className="navbarFeed__main__title">
            <Link to='/add'><span>{`${"<"}`}</span> Go Back</Link>
          </div>
          <div className="navbarFeed__main__btn">
            <button>Edit Feedback</button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Navbar