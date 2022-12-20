import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import Task from './task';

const TaskList = () => {

    // const { tasks } = useContext(GlobalContext);
    // console.log(tasks)

    return (
        <div className=' flex justify-center'>
            <Task></Task>
        </div>
    );
}

export default TaskList;
