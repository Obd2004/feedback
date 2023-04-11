import React, { useContext } from 'react'
import './Option.scss'
import { Container } from 'reactstrap'
import { Context } from '../../../Context/Context'

function Option() {
    const { feedCount, category ,feedData1 ,feedData2 } = useContext(Context)
    return (
        <div className='option'>
            <Container>
                { 
                    feedData1?.map((e , i) => (
                        <ul className='option__list' key={i}>
                            <li className='option__list__counter'>
                                <h5>{feedCount != '' ? feedCount : 0}</h5>
                            </li>
                            <li className='option__list__title'>
                                <h5>{e}</h5>
                                {feedData2?.map((k, s)=> <p key={s}>{k}</p>)}
                                <h6>{category}</h6>
                            </li>
                            <li className='option__list__comment'>
                                <h4>{feedCount}</h4>
                            </li>
                        </ul>
                    ))
                }
            </Container>
        </div>
    )
}

export default Option