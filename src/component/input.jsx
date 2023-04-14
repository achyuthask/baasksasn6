import React, { useState } from "react";
import mystore from "../redux/store";

const Input=()=>{
       const[state,setState]   = useState();
    const callDispatch=()=>{
            mystore.dispatch({
                type:"name",
                username: state,
            })
    }
    return(<>
     <div style={{marginTop:"100px",textAlign:"centre"}}>
        <input type="text" onChange={(e)=>{setState(e.target.value)}}></input>
        <button onClick={callDispatch}>submit</button>
     </div>
    </>);
}
export default Input;