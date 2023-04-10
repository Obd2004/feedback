import React from 'react'
import './FeedDetail.scss'
import Navbar from '../../Components/FeedDetail/Navbar/Navbar'
import Comments from '../../Components/FeedDetail/Comments/Comments'
import Option from '../../Components/FeedDetail/Option/Option'
import AddComment from '../../Components/FeedDetail/AddComment/AddComment'
function FeedDetail() {
  return (
    <div className='feedBackDetail'>
        <Navbar/>
        <Option/>
        <Comments/>
        <AddComment/>
    </div>
  )
}

export default FeedDetail