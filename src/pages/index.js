import React from 'react';
import 'semantic-ui-css/semantic.css';
import { Header, Container, Button, Grid, List, Message } from 'semantic-ui-react';

import Task from '../components/Task';
import NewTaskForm from '../components/NewTaskForm';
import EditTaskForm from '../components/EditTaskForm';
import MessageDismissibleBlock from '../components/Mesage';
import ProgressBar from '../components/Progress';

const HomePage = () => {

  const initialNewTask = {
    name:'',
    color:'',
    category:''
  }

    const [newTaskOpen, setNewTaskOpen] = React.useState(false);
    const [newTask, setNewTask] = React.useState(initialNewTask);
    const [list, setList] = React.useState([]);

    function openNewTask() {
        setNewTaskOpen(true);
    }

    function closeNewTask() {
        setNewTaskOpen(false);
    }

    function showNewTaskOpen(){
      console.log(newTaskOpen);
    }

    function addNewTask(){
      const listClone = [ ...list];
      listClone.push(newTask);
      setList(listClone);
      setNewTask(initialNewTask);
      closeNewTask();
    }

    // const taskList = [];

    // list.forEach((task, index) =>{
    //   taskList.push(
    //     <Task 
    //     key={`${task.name}-${index}`}
    //     name={task.name}
    //     color={task.color}/>
    //   );
    // });

    const [displayEdit, setDisplayEdit] = React.useState(-1);

    function openEditTask(index){
      setDisplayEdit(index);
    }

    function closeEditTask(){
      setDisplayEdit(-1);
    }

    function editTask(index, newValues){
      console.log('edit', index);
      const newList = list.map((task, i) => {
        if(i !== index) return task;
        return {
         name: newValues.name,
         color: newValues.color,
         category: newValues.category
        }
      })
      setList(newList);
      closeEditTask();
    }

    

    const taskList = list.map((task, index)=> {
      return <Task
      key={`${task.name}-${index}`}
      name={task.name}
      color={task.color}
      category={task.category}
      openEditTask={openEditTask}
      deleteTask={deleteTask}
      index={index}
      />
    })
    
    function deleteTask(index){
      if (list.length <= 1){
        setList([]);
      } else {
        const emptyList = list.filter((task, i) => {
          return i !== index;
        });
        setList(emptyList);
      }
    }
    ;

    

    return (
        <React.Fragment>
            <Container>
                <Grid>
                    <Grid.Column width='4'>
                        <Button icon='bars' onClick={showNewTaskOpen}></Button>
                    </Grid.Column>
                    <Grid.Column width='8'>
                        <Header textAlign='center' as='h1'>
                            Todo List
                        </Header>
                    </Grid.Column>
                    <Grid.Column textAlign='right' width='4'>
                        <Button
                            color='green'
                            icon='plus'
                            onClick={openNewTask}
                        ></Button>
                    </Grid.Column>
                </Grid>


                {newTaskOpen ? (
                    <NewTaskForm closeNewTask={closeNewTask}
                    newTask={newTask}
                    setNewTask={setNewTask}
                    addNewTask={addNewTask} />
                ) : null}

                {displayEdit > -1 ? (
                  <EditTaskForm index={displayEdit}
                  list={list}
                  closeForm={closeEditTask}
                  editTask={editTask}
                  />
                ): null}

                <List>
                    {taskList}
                </List>
               <MessageDismissibleBlock></MessageDismissibleBlock>
               <ProgressBar></ProgressBar>
            </Container>
        </React.Fragment>
    );
};

export default HomePage;