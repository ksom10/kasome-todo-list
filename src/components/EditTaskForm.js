import React from "react";
import "semantic-ui-css/semantic.css";
import { Input, Form, Button, Select, Segment, Header } from "semantic-ui-react";

const EditTaskForm = ({ index, list, closeForm, editTask}) => {
    const selectedTask = list[index];
    const [newTask, setNewTask] = React.useState(selectedTask);

    function changeNewTask(e, { name, value }) {
        const newTaskClone = { ...newTask };
        newTaskClone[name] = value;
        setNewTask(newTaskClone);
    }

    function saveChanges(){
        editTask(index, newTask);
    }
    return (
        <React.Fragment>
            <Segment>
                <Header as="h2">Edit Task</Header>
                <Form>
                    <Form.Field 
                    control={Input}
                    label="Task Name"
                    placeholder="Enter Task Name"
                    name="name"
                    value={newTask.name}
                    onChange={changeNewTask}
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
                        <Button type='button' onClick={closeForm} color='red'>Cancel</Button>
                        <Button.Or></Button.Or>
                        <Button onClick={saveChanges} type='button' color='green'>Edit Task</Button>
                    </Button.Group>
                </Form>
            </Segment>
        </React.Fragment>
    );
};

export default EditTaskForm;