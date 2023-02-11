import {useState} from 'react'
const Input = (props) => {
    const [text, setText] = useState(props.defoultValue)
    return <>
        <input value={text} type={'text'} onChange={(event)=> setText(event.target.value)} /> 
        <div>{text+props.extraValue}</div>
        <button onClick={()=> setText(props.defoultValue)}>Set Defoult</button>
    </>
}

export default Input
