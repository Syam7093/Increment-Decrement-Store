import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setvalue } from '../slices/incSlice';

const Increment = () => {
    const dispatch=useDispatch();
    const data=useSelector((state)=>state.reusableStore.value);
    const decrement=()=>{
     dispatch(setvalue({data:false}))
     

    }
    const increment=()=>{
        dispatch(setvalue({data:true}))

        
    }
  return (
    <div>
        <h1>{data}</h1>
        <button onClick={()=>{
            decrement()
        }}>Decrement</button>
        <button onClick={()=>{
            increment()
        }}>Increment</button>
    </div>
  )
}

export default Increment