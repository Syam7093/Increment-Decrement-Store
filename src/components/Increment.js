import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setvalue } from '../slices/incSlice';

const Increment = () => {
    const button={
        margin:"5px"
        ,backgroundColor:"green"
        ,color:"white",
        borderWidth:"0px",
        borderRadius:"2px",
        padding:"10px",
        fontWeight:"bold"
    }
    
    const dispatch=useDispatch();
    const data=useSelector((state)=>state.reusableStore.value);
    const decrement=()=>{
     dispatch(setvalue({data:false}))
     

    }
    const increment=()=>{
        dispatch(setvalue({data:true}))

        
    }
    const [number,setnumber]=useState([1,2,3,4,5])

    const remove=()=>{
       let num=number.slice(1)
       console.log(num.length,"len")
      num.push(number[0])
       
       setnumber(num)
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

        <div>
            <div>
                {number?.map((e)=>{
                    return (
                        <button style={button}>{e}</button>
                    )
                })}
                <div>
                <button style={button} onClick={()=>{
                    remove()
                }}>RemoveItem & AddLast</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Increment