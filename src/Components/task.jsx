import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { GlobalContext } from '../context/GlobalContext';
import { IconButton, Switch } from '@mui/material';
import { MdDelete } from 'react-icons/md'
import { FaRegEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';



const Task = () => {


    const { tasks, deleteTask, checkTask, terminadas, noTerminadas } = useContext(GlobalContext);
    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    const [checked, setChecked] = React.useState(false);

    // const handleChange = (task) => {
    //     //setChecked(e.target.checked);
    //     checkTask(task.id)
    // };


    // function taskCompletedIcon(task) {
    //     console.log('siiiiiiii')
    //     if(task.done){
    //         return (<i onClick={() =>  checkTask(task.id)} className='bi-toggle-on task-action' style={{ color: '#214cce', fontWeight: 'bold' }}></i>)
    //     }else {
    //         return (<i onClick={() => checkTask(task.id)} className='bi-toggle-off task-action' style={{ color: 'grey', fontWeight: 'bold' }}></i>)
    //     }
    // }




    return (
        <div>
            {tasks.map(task => (


                <div className='bg-gray-900 px-20 py-5 text-white shadow-2xl mb-4 flex justify-between rounded-xl' sx={{ maxWidth: 275 }} key={task.id} >
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {task.id}
                        </Typography>
                        <Typography variant="h5" component="div">
                            {task.title}
                        </Typography>
                        <Typography variant="body2">
                            {task.description}
                        </Typography>
                    </CardContent>
                    <CardActions>


                        {/* <button
                            onClick={() => checkTask(task.id)}
                        >
                            {task.done ? 'echa' : 'No culminada'}
                        </button> */}

                        <Button size='small' onClick={() => checkTask(task.id)} variant="contained" href="#contained-buttons">
                            {task.done ? 'echa' : 'No culminada'}
                        </Button>


                        <Link to={`/edit/${task.id}`}>
                            <IconButton
                                color="primary" aria-label="delete" size="large">
                                <FaRegEdit></FaRegEdit>
                            </IconButton>
                        </Link>

                        <IconButton onClick={() => deleteTask(task.id)}
                            color="error" aria-label="delete" size="large">
                            <MdDelete></MdDelete>
                        </IconButton>
                    </CardActions>


                </div>




            ))}

            <div>
                <Stack direction="row" spacing={2}>

                    <Button onClick={terminadas} variant="contained" href="#contained-buttons">
                        Terminadas
                    </Button>


                    <Button onClick={noTerminadas} variant="contained" href="#contained-buttons">
                        No Terminadas
                    </Button>
                </Stack>
            </div>



        </div>


    );
}

export default Task;
