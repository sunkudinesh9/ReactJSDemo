import React, {useState} from "react";
import Context from "./Context"

const Provider = (props) =>{
    const[mission, setMission] = useState({
        mname: "Go to Russia",
        agent: "007",
        accept: "Not accepted"
    })
    return(
        <Context.Provider
        value={{
            data:mission,
            isMissionAccepted: () => {
                setMission({...mission, accept: "Accepted"})
            }
        }}
        >
            {props.child}
        </Context.Provider>
    )
    
}

export default Provider;