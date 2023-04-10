import React from 'react'
import './Option.scss'
import { Container } from 'reactstrap'
function Option() {
    return (
        <div className='option'>
            <Container>
                <h4 className='option__notFound'>Option Not Found</h4>
            </Container>
        </div>
    )
}

export default Option