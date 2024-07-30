import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  
};

export const incSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    
      setvalue:(state,action)=>{
        const {data}=action.payload
        console.log(data,"ss")
        let some;
        if(data)
        {
          some=state.value +1
        }
        else{
          if(state.value>0)
          {
            some=state.value -1
          }
          else{
            some=state.value 
          }
          
            
            
           
          
          
        }
        state.value=some

        
      }
      
    },

    
    
       
    
    
  
});

export const { setvalue} = incSlice.actions;
