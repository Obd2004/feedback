import React, { useContext, useRef } from 'react'
import './AddFeedBackk.scss'
import { Context } from '../../Context/Context'
import { Link } from 'react-router-dom'
import logoPlus from '../../assets/images/addFeedback/logoPlus.png'
function AddFeedBackk() {

  const { feedCount,
    setFeedCount,
    feedData,
    setFeedData
  } = useContext(Context)

  const value1 = useRef()
  const value2 = useRef()

  const formSubmit = (e)=>{
    e.preventDefault()
    if(value1.current.value === '' && value2.current.value == ''){
      value1.current.style.border = '1px solid red'
      value2.current.style.border = '1px solid red'

  }else{
      // setCount(count + 1)
      // data.push(inpValue.current.value)
      // setData(data)
      // inpValue.current.style.border = 'none'
      // inpValue.current.value = ''
  }
  }

  return (
    <div className='addFeedback'>
      <div className="addFeedback__back">
        <Link to="/"><span>{`${"<"}`}</span>Go Back</Link>
      </div>
      <div className="addFeedback__wrapper">
        <div className="addFeedback__wrapper__form">
          <div className="addFeedback__wrapper__form__title">
            <img src={logoPlus} alt="" />
            <h4>Create New Feedback</h4>
          </div>
          <form onSubmit={formSubmit} action="#">
            <b>Feedback Title</b>
            <label htmlFor="description">Add a short, descriptive headline</label>
            <input ref={value1} type="text" />
            <b>Category</b>
            <label htmlFor="category">Choose a category for your feedback</label>
            <select>
              <option value="ui">UI</option>
              <option value="ux">UX</option>
            </select>
            <b>Feedback Detail</b>
            <label htmlFor="include">Include any specific comments on what should be improved, added, etc.</label>
            <textarea ref={value2} />
            <div>
              <Link className='btn1' to="/">Cancel</Link>
              <button type='submit' className='btn2'><Link to="/detail">Add Feedback</Link></button>
            </div>
          </form>
        </div>  
      </div>
    </div>
  )
}

export default AddFeedBackk