import React, { useState } from "react";
import { Form, Button, Row, Col } from 'react-bootstrap';

function CustomForm(props) {

    // useState for task name
    const [name, setName] = useState('');

    // handle inputs of Add task Form
    function handleChange(e) {
        // console.log(e.target.value);
        setName(e.target.value);
    }

    // Add-form submit
    function handleSubmit(e) {
        e.preventDefault();
        if (name !== '') {
            props.addTask(name);
            setName("");
        } else {
            alert("Task can't be Empty!!");
        }

    }

    return (
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col lg={9} md={9} sm={9} xs={7}>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            name="text"
                            value={name}
                            autoComplete="off"
                            onChange={handleChange}
                            placeholder='Enter your task...'
                        />
                    </Form.Group>
                </Col>
                <Col lg={3} md={3} sm={3} xs={5} className='center'>
                    <Button type="submit" className="CustomAddBtn">Add</Button>
                </Col>
            </Row>
        </Form>
    );
}

export default CustomForm;
