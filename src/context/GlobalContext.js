import { createContext, useReducer } from "react";
import React from 'react';
import taskReducer from "./taskReducer";
import { v4 } from "uuid";
import { type } from "@testing-library/user-event/dist/type";

export const ADD_TASK = 'ADD_TASK'
export const DELETE_TASK = 'DELETE_TASK'
export const UPDATE_TASK = 'UPDATE_TASK'
export const CHECKED = 'CHECKED'
export const TERMINDAS = 'TERMINDAS'
export const NOTERMINDAS = 'NOTERMINDAS'

let id_task = 3;


const initialState = {
    tasks: [
        {
            id: v4(),
            title: 'task one',
            description: 'new description',
            done: true
        },

        {
            id: v4(),
            title: 'task two',
            description: 'new description 2',
            done: false
        }
    ]
}

export const GlobalContext = createContext(initialState)

const Id = () => {
    return id_task++;
}


export const TaskProvider = ({ children }) => {

    const [state, dispatch] = useReducer(taskReducer, initialState)




    const addTask = (task) => dispatch({ type: ADD_TASK, payload: { ...task, id: v4() , done:false } })
    const deleteTask = (id) => dispatch({ type: DELETE_TASK, payload: id })
    const updateTask = (task) => dispatch({ type: UPDATE_TASK, payload: task })
    const checkTask = (task) => dispatch({ type: CHECKED, payload: task })
    const terminadas = () => dispatch({type:TERMINDAS})
    const noTerminadas = () => dispatch({type:NOTERMINDAS})
    


    return (<GlobalContext.Provider value={
        { ...state, addTask, deleteTask, updateTask, checkTask, terminadas , noTerminadas}}>
        {children}
    </GlobalContext.Provider>)
}

