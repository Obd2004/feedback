import React from 'react'
import './RoadMap.scss'

function RoadMap() {
  return (
    <div className='roadMap'>
        <nav className='roadMap__nav'> 
          <h5>Roadmap</h5>
          <a href="#">View</a>
        </nav>
        <ul className='roadMap__list'>
          <li>
            <h6>Planned</h6>
            <h5>0</h5>
          </li>
          <li>
            <h6>In-Progress</h6>
            <h5>0</h5>
          </li>
          <li>
            <h6>Live</h6>
            <h5>0</h5>
          </li>
        </ul>
    </div>
  )
}

export default RoadMap