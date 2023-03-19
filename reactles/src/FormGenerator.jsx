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
            <select value={activeType} onChange={(event)=>setActiveType(event.target.value)}>
                <option value="">Input Type</option>
                <option value="text">Text</option>
                <option value="number">Number</option>
                <option value="Email">Email</option>
                <option value="password">password</option>
                <option value="checkbox">1</option>
            </select>
            <input type="text" placeholder="default Value" 
            onChange={(event)=>setDefaultValue(event.target.value)}
            value={defaultValue}/>
            <button onClick={add}>Add</button>
        </div>
        <div>
                {inputList.map((input, index) => (
                    <div key={index} >
                        <input  type={input.type} defaultValue={input.value}/>
                        <select  onChange={(event)=>setInputList((prev)=>{
                            return prev.map((item, key)=>{
                                if(index === key){
                                    return {...item, type: event.target.value}
                                }
                            })
                        })} ><option value="">Input Type</option>
                            <option value="text">Text</option>
                            <option value="number">Number</option>
                            <option value="Email">Email</option>
                            <option value="password">password</option>
                            <option value="checkbox">Check</option>
                        </select>
                        <button onClick={()=>setInputList((prev)=>{
                            return prev.filter((_, key)=>key !== index)
                        })}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FormGenerator