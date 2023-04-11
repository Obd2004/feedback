import React, { useContext, useEffect, useRef } from 'react'
import './AddFeedBackk.scss'
import { Context } from '../../Context/Context'
import { Link, useNavigate } from 'react-router-dom'
import logoPlus from '../../assets/images/addFeedback/logoPlus.png'

function AddFeedBackk() {

  const navigate = useNavigate()

  const { feedCount,
    setFeedCount,
    feedData1,
    setFeedData1,
    feedData2,
    setFeedData2,
    category,
    setCategory,
    // data1,
    // data2,
  } = useContext(Context)
  const value1 = useRef()
  const value2 = useRef()

  useEffect(() => {
    window.localStorage.setItem('category', category)
  }, [category])


  const options = ['Feature', 'UI', 'UX', 'Enhancement', 'Bug']
  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  const handleChange1 = (e) => {
    setFeedData1(e.target.value);
  };
  const handleChange2 = (e) => {
    setFeedData2(e.target.value);
  };

  const formSubmit = (e) => {
    window.localStorage.setItem('feedData1', feedData1)
    window.localStorage.setItem('feedData2', feedData2)
    e.preventDefault()
    if (value1.current.value === '' && value2.current.value === '') {
      value1.current.style.border = '1px solid red'
      value2.current.style.border = '1px solid red'
    } else {

      const data1 = [window.localStorage.getItem('feedData1') ? window.localStorage.getItem('feedData1') :window.localStorage.getItem('feedData1')]
      const data2 = [window.localStorage.getItem('feedData2') ? window.localStorage.getItem('feedData2') : window.localStorage.getItem('feedData2')]
      setFeedData1(data1)
      setFeedData2(data2)
      setFeedCount(feedCount + 1)
      value1.current.style.border = 'none'
      value2.current.style.border = 'none'
      value1.current.value = ''
      value2.current.value = ''
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
            <input onChange={handleChange1} ref={value1} type="text" />
            <b>Category</b>
            <label htmlFor="category">Choose a category for your feedback</label>
            <select defaultValue={category} onChange={handleChange}>
              {
                options?.map((e, i) => (
                  <option key={i} value={e}>{e}</option>
                ))
              }
            </select>
            <b>Feedback Detail</b>
            <label htmlFor="include">Include any specific comments on what should be improved, added, etc.</label>
            <textarea onChange={handleChange2} ref={value2} />
            <div>
              <Link className='btn1' to="/">Cancel</Link>
              <button
                onClick={() => navigate(`${feedData1 != '' ? '/detail' : '/add'}`)}
                type='submit' className='btn2'
              >
                <a href="#" onClick={() => document.querySelector('.btn2').click()}>Add</a>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddFeedBackk