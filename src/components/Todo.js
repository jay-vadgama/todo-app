import React, { useState } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash, faXmarkCircle, faCircleCheck } from '@fortawesome/free-solid-svg-icons'

function Todo(props) {
    const [isEditing, setEditing] = useState(false);
    const [newName, setNewName] = useState('');

    function handleChange(e) {
        setNewName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (newName !== '') {
            props.editTask(props.id, newName);
            setNewName("");
            setEditing(false);
        } else {
            alert("Task can't be Empty!!");
        }

    }


    const editingTemplate = (
        <>
            <p htmlFor={props.id}> New name for <b>{props.name}</b> </p>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col lg={9} md={9} sm={9} xs={7} className='RemovePaddingRight'>
                        <Form.Group>
                            <Form.Control
                                type="text"
                                id={props.id}
                                value={newName}
                                onChange={handleChange}
                                placeholder='Rename this task..' />
                        </Form.Group>
                    </Col>
                    <Col lg={3} md={3} sm={3} xs={5} className='center RemovePaddingLeft'>
                        <Button type="submit" className="SaveBtn">
                            <FontAwesomeIcon className='text-center SaveIcon' icon={faCircleCheck} />
                            <span className="visually-hidden">new name for {props.name}</span>
                        </Button>
                        <Button className="CloseBtn" onClick={() => setEditing(false)}>
                            <FontAwesomeIcon className='CloseIcon' icon={faXmarkCircle} />
                            <span className="visually-hidden">renaming {props.name}</span>
                        </Button>
                    </Col>
                </Row>
            </Form>
        </>
    );

    const viewTemplate = (
        <div className="block">
            <div className='left'>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check
                        type="checkbox"
                        id={props.id}
                        defaultChecked={props.completed}
                        onChange={() => props.toggleTaskCompleted(props.id)}
                        label={props.name} />
                </Form.Group>
            </div>
            <div className='right'>
                <Button className="CustomViewBtn" onClick={() => setEditing(true)}>
                    <FontAwesomeIcon className='CustomIcon' icon={faEdit} />
                    <span className="visually-hidden">{props.name}</span>
                </Button>
                <Button className="CustomViewBtn" onClick={() => props.deleteTask(props.id)} >
                    <FontAwesomeIcon className='CustomIcon' icon={faTrash} />
                    <span className="visually-hidden">{props.name}</span>
                </Button>
            </div>
        </div>
    );


    return (
        <li className="list">{isEditing ? editingTemplate : viewTemplate}</li>

    )
}

export default Todo