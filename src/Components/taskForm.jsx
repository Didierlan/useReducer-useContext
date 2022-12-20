import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { useNavigate, useParams } from 'react-router-dom'
import { Alert } from '@mui/material';
import AlertTitle from '@mui/material/AlertTitle';
import { Stack } from '@mui/system';


const TaskForm = () => {

    const { addTask, updateTask, tasks } = useContext(GlobalContext);

    const [task, setTask] = useState({
        id: '',
        title: '',
        description: '',
    });

    const navigate = useNavigate();
    const params = useParams()



    const handleChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value })

    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.id) {
            updateTask(task)
        } else {
            addTask(task)
        }

        navigate('/')

    }
    let taskFonud = undefined

    useEffect(() => {


        taskFonud = tasks.find(task => task.id == params.id)

        if (taskFonud) {
            setTask(taskFonud)
            console.log('editing');
        } else {
            console.log('creating')
        }


    }, [params.id, tasks])





    return (
        <div>



            <div className='flex justify-center items-center h-3/4 '>
                <form className='bg-gray-900 p-10' onSubmit={handleSubmit}>
                    <h2 className='mb-7 text-2xl'>{task.id ? 'Editing a  ' : 'A '} Task</h2>

                    <div className='mb-5'>
                        <input
                            type='text'
                            name='title'
                            onChange={handleChange}
                            value={task.title}
                            placeholder='Whrite a title'
                            className='py-2 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full'>

                        </input>

                    </div>

                    <div className='mb-5'>
                        <textarea
                            name='description'
                            placeholder='Whrite a description'
                            onChange={handleChange}
                            value={task.description}
                            rows='2'
                            className='py-2 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full'>

                        </textarea>

                    </div>
                    <button
                        className='py-2 px-4 bg-blue-400 hover:bg-blue-500 text-white rounded w-full mt-3'>
                        {task.id ? 'Edit ' : 'Create '} Task

                    </button>


                </form>


            </div>
        </div>
    );
}

export default TaskForm;
