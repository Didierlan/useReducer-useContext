import React, { useReducer, useContext } from 'react';
import PropTypes from 'prop-types';


const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET'

const myContext = React.createContext(null);


const Point = () => {
    const state = useContext(myContext);


    return (
        <p>Point {state.count}</p>
    )
        
    
}

const Counter = () => {

    const initState = {
        count: 0
    }


    const reducer = (state, action) => {

        switch (action.type) {
            case INCREMENT:
                return {
                    count: state.count + action.payload.quantity
                }
            case DECREMENT:
                return {
                    count: state.count - action.payload.quantity

                }

            case RESET:
                return {
                    count: 0
                }

            default:
                return state;
        }

    }

    const [state, dispatch] = useReducer(reducer, initState)



    return (

        <myContext.Provider value={state}>

            <div>
                <Point></Point>

                <button onClick={() => dispatch({
                    type: INCREMENT,
                    payload: {
                        quantity: 2
                    }
                })
                }>INCREMENT</button>

                <button onClick={() => dispatch({
                    type: DECREMENT,
                    payload: {
                        quantity: 1
                    }
                })
                }>DECREMENT</button>

                <button onClick={() => dispatch({ type: RESET })}>RESET</button>

            </div>
        </myContext.Provider>

    );
};


Counter.propTypes = {

};


export default Counter;
