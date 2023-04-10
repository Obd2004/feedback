import React, { useContext, useRef } from 'react'
import './AddComment.scss'
import { Container } from 'reactstrap'
import { Context } from '../../../Context/Context'
function AddComment() {
    const { count , setCount, data , setData  } = useContext(Context)
    const inpValue = useRef()

    const handleSubmit = (e)=>{
        e.preventDefault()

        if(inpValue.current.value === ''){
            inpValue.current.style.border = '1px solid red'

        }else{
            setCount(count + 1)
            data.push(inpValue.current.value)
            setData(data)
            inpValue.current.style.border = 'none'
            inpValue.current.value = ''
        }
        
    }

    return (
        <div className='addComment'>
            <Container>
                <div className="addComment__wrapper">
                    <div className="addComment__wrapper__title">
                        <h5>Add Comment</h5>
                    </div>
                    <form onSubmit={handleSubmit} className='addComment__wrapper__form' action="#">
                        <input
                            ref={inpValue}
                            type="text"
                            placeholder='Type your comment here'
                        />
                        <button
                            type='submit'
                            className='addComment__wrapper__form__btn'>
                            Post Comment
                        </button>
                    </form>
                </div>
            </Container>
        </div>
    )
}

export default AddComment