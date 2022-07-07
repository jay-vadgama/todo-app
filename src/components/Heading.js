import React from 'react'
import { Container } from 'react-bootstrap'

function Heading(props) {
    return (
        <Container className=" text-center mt-5">
            <h1 className='Text-Animation'><b>{props.title}</b></h1>
        </Container>
    )
}

export default Heading;