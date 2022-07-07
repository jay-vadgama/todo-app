import React from 'react'
import { Card } from 'react-bootstrap';


function CustomCard(props) {
    return (
        <Card className="CustomCard">
            <Card.Title className="CardTitleTxt">{props.CardTitle}</Card.Title>

            {props.children}

        </Card>
    )
}

export default CustomCard