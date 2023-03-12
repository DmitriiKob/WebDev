import { useState, useEffect, useRef } from "react";

const FormGenerator = () => {
    const [activeType, setActiveType] = useState('')
    const [defaultValue, setDefaultValue] = useState('')
    const [inputList, setInputList] = useState([])
    const add = () =>{
        setInputList(prev=>[...prev, {type:activeType, value:defaultValue}])
        setActiveType('')
        setDefaultValue('')
    }
    return(
        <div>
        <div>
            <select onChange={(event)=>setActiveType(event.target.value)}>
                <option value="">Input Type</option>
                <option value="text">Text</option>
                <option value="number">Number</option>
                <option value="Email">Email</option>
                <option value="password">password</option>
            </select>
            <input type="text" placeholder="default Value" onChange={(event)=>setDefaultValue(event.target.value)}/>
            <button onClick={add}>Add</button>
        </div>
        <div>
            {activeType}
            {defaultValue}
        </div>
        </div>
    )
}

export default FormGenerator