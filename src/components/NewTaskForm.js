import React from 'react';

import { Segment, Header, Form, Select, Button, Input, Icon, Dropdown } from 'semantic-ui-react';

const NewTaskForm = ({ closeNewTask, newTask, setNewTask, addNewTask }) => {

  function changeNewTask(e, {value, name}) {
    const newTaskClone = {...newTask};
    newTaskClone[name] = value;
    setNewTask(newTaskClone);
  }

    return (
        <React.Fragment>
            <Segment>
                <Header as='h2'>New Task</Header>
                <Form>
                    <Form.Field
                        control={Input}
                        label='Task Name'
                        placeholder='Enter task name...'
                        value={newTask.name}
                        onChange={changeNewTask}
                        name='name'
                    />
                    <Form.Field
                        control={Select}
                        label='Task Color'
                        placeholder='Choose task color...'
                        options={[
                            { text: 'Red', value: 'red' },
                            { text: 'Yellow', value: 'yellow' },
                            { text: 'Green', value: 'green' },
                        ]}
                        value={newTask.color}
                        onChange={changeNewTask}
                        name='color'
                    />
                    <Form.Field
                    control={Select}
                    label='Task Category'
                    placeholder='Choose Task Category...'
                    options={[
                        {text: 'Event', value: 'Event'},
                        {text: 'Meeting', value: "Meeting"},
                        {text: 'Social', value: 'Social'}
                    ]}
                    value={newTask.category}
                    onChange={changeNewTask}
                    name='category'
                    />
                    <Button.Group fluid>
                        <Button type='button' onClick={closeNewTask} color='red'>Cancel</Button>
                        <Button.Or></Button.Or>
                        <Button onClick={addNewTask} type='button' color='green'>Add Task</Button>
                    </Button.Group>
                </Form>
            </Segment>
        </React.Fragment>
    );
};

export default NewTaskForm;