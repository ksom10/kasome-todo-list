import React from 'react';

import { List, Grid, Label, Button, Checkbox } from 'semantic-ui-react';

const Task = ({ name, color, category, openEditTask, deleteTask, index }) => {
    // console.log(name, color);

    function editCurrentTask(){
      openEditTask(index);

    }

    return (
        <React.Fragment>
            <List.Item>
                <Grid columns='3'>
                    <Grid.Column>
                        <Label color={color} size='big'>
                            {name}
                        </Label>
                    </Grid.Column>
                    <Grid.Column textAlign='center'>
                        <Label color='blue' size='big'>
                            {category}
                        </Label>
                    </Grid.Column>
                    <Grid.Column textAlign='right'>
                        <Button onClick={deleteTask} icon='trash' color='red'></Button>
                        <Button onClick={editCurrentTask} icon='pencil' color='orange'></Button>
                    </Grid.Column>
                </Grid>
            </List.Item>
        </React.Fragment>
    );
};

export default Task;