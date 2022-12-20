import { ADD_TASK, CHECKED, DELETE_TASK, NOTERMINDAS, TERMINDAS, UPDATE_TASK } from "./GlobalContext";


const taskReducer = (state, action) => {
    console.log(state, action)

    switch (action.type) {
        case ADD_TASK:
            return {

                tasks: [...state.tasks, action.payload]
            }

        case DELETE_TASK:
            return {
                tasks: state.tasks.filter(task => task.id !== action.payload)
            }

        case CHECKED:
            return {
                tasks: state.tasks.map(task => task.id === action.payload ? { ...task, done: !task.done } : task)
            }


        case UPDATE_TASK:
            const updateTask = state.tasks.map(task => {
                if (task.id === action.payload.id) {
                    task.title = action.payload.title
                    task.description = action.payload.description
                }
                return task
            });

            return {
                tasks: updateTask
            }


        case TERMINDAS:
            return {
                tasks: state.tasks.filter(task => task.done === true)
            }


        case NOTERMINDAS:
            return {
                tasks: state.tasks.filter(task => task.done === false)
            }

        default:
            return state.tasks;
    }





}



export default taskReducer;