import React from 'react';
import { Link } from 'react-router-dom';
import {HiOutlineViewGridAdd} from 'react-icons/hi'

const Heading = () => {
    return (
        <div>

            <div className='flex item-center mb-10'>

                 <Link to="/">
                    <h5 className='text-gray-100 font-bold text-2x1'>Task app</h5>
                </Link> 


                <div className='flex-grow text-right px-4 py-2 m-2 '>
                    <Link to="/add">
                    <button className='bg-blue-400 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-xl inline-flex items-center'>
                    <HiOutlineViewGridAdd />
                        Add Task
                    </button>
                    </Link>


                </div>
            </div>



        </div>
    );
}

export default Heading;
