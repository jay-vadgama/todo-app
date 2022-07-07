import React from 'react'
import { Button } from 'react-bootstrap';


function FilterButton(props) {
    return (
        <Button
            className="btn CustomFilterBtn text-white"
            aria-pressed={props.isPressed}
            onClick={() => props.setFilter(props.name)}
        >
            <span className="visually-hidden">Show </span>
            <span>{props.name}</span>
            <span className="visually-hidden"> tasks</span>
        </Button>
    )
}

export default FilterButton;