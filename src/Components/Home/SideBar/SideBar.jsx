import React from 'react'
import './SideBar.scss'
function SideBar() {
  return (
    <div className='sidebar'>
      <section className='sidebar__board'>
        <h4>Frontend Mentor</h4>
        <h5>Feedback Board</h5>
      </section>
      <section className='sidebar__table'>
        <ul className='sidebar__table__list'>
          <li>
            <button>All</button>
            <button>UI</button>
            <button>UX</button>
          </li>
          <li>
            <button>Enhancement</button>
            <button>Bug</button>
          </li>
          <li>
            <button>Feature</button>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default SideBar