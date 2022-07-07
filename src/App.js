import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomForm from "./components/CustomForm";
import FilterButton from "./components/FilterButton";
import Todo from './components/Todo';
import { nanoid } from 'nanoid';
import CustomCard from './components/CustomCard'
import Heading from './components/Heading';
import { Container, Row, Col, Button } from 'react-bootstrap';

const FILTER_MAP = {

  Active: task => !task.completed,
  Completed: task => task.completed,
  All: () => true
};
const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {
  // console.log(props.tasks)

  const [tasks, setTasks] = useState(() => {
    // get the todos from localstorage
    const savedTodos = localStorage.getItem("todos");
    // if there are todos stored
    if (savedTodos) {
      // return the parsed JSON object back to a javascript object
      return JSON.parse(savedTodos);
      // otherwise
    } else {
      // return an empty array
      return [];
    }
  });

  const [filter, setFilter] = useState('Active');


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(tasks));
  }, [tasks]);


  function addTask(name) {
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {

      if (id === task.id) {

        return { ...task, completed: !task.completed }
      }
      return task;
    });
    setTasks(updatedTasks);
  }


  function deleteTask(id) {
    // console.log(id)
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }

  function editTask(id, newName) {
    const editedTaskList = tasks.map(task => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        return { ...task, name: newName }
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  function deleteAlltask() {
    console.log('btn clicked')
    localStorage.removeItem("todos");
    setTasks([]);
  }

  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map(task => (
      <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    ));


  const filterList = FILTER_NAMES.map(name => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  var headingText;
  if (taskList.length === 0) {
    headingText = `- No task Found`;
  } else if (taskList.length !== 1 ? 'tasks' : 'task') {
    const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
    headingText = `${taskList.length} ${tasksNoun} remaining`;
  }

  return (
    <>
      <Heading title='TO DO APP' />
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8} sm={12}>
            <CustomCard CardTitle='Add your tasks..'>
              <CustomForm addTask={addTask} />
              <Container className='center FilterBtnDiv'>
                {filterList}
              </Container>
              <hr />
              <h5 id="list-heading">{headingText}</h5>
              <hr />
              {/* eslint-disable-next-line */}
              <ul role="list">
                {taskList}
              </ul>
              <div className='rightBtn mb-3'>
                <Button onClick={deleteAlltask} className="CustomAddBtn">Delete All</Button>
              </div>
            </CustomCard>
          </Col>
        </Row>
      </Container>
    </>

  );
}

export default App;
