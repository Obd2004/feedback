import React, { useContext } from 'react'
import './Comments.scss'
import { Container } from 'reactstrap'
import { Context } from '../../../Context/Context'
import personImg from '../../../assets/images/comments/personImg.png'
import { personData } from '../../../PersonData/PersonData'
function Comments() {
  const { count, data } = useContext(Context)
  return (
    <div className='comments'>
      <Container>
        <div className="comments__wrapper">
          <div className="comments__wrapper__title">
            <h5 >{count != '' ? count : 0} Comments</h5>
          </div>

          {
            data?.map((e, i) => (
              <ul key={i} className='comments__wrapper__list'>
                <li className='list__item'>
                  <li className='img'>
                    {personData?.map((e) => (
                      <img key={e.id} src={personImg} alt="" />
                    ))}
                  </li>
                  <li className='main'>
                    <li className='navbarr'>
                      {personData?.map((e) => (
                        <div className='userInfo'  key={e.id}>
                          <h5>{e.name}</h5>
                          <p>{e.email}</p>
                        </div>
                      ))}
                      <div className='reply'>
                        <p>Reply</p>
                      </div>
                    </li>
                    <li className='comment'>
                        <p>{e}</p>
                    </li>
                  </li>
                </li>
              </ul>
            ))
          }

        </div>
      </Container>
    </div>
  )
}

export default Comments