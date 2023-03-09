import {useState, useRef, useEffect} from 'react'
const Input = (props) => {
    const [text, setText] = useState(props.defoultValue)
    const inputRef = useRef()
    const message = useRef('Lorem ipsum, dolor sit amet consectetur adipisicing elit.')
    useEffect(() => {
        inputRef.current.focus()
    })
    console.log(message)
    return <>
       <h1>Try tap your Name</h1>
       <input onChange={(event)=>{
        message.current = event.target.value
       }} ref={inputRef} type={'text'} /> 
       <input value={text} type={'text'} onChange={(event)=> setText(event.target.value)} /> 
        <div>{text+props.extraValue}</div>
        <button onClick={()=> setText(props.defoultValue)}>Set Defoult</button>
    </>
}

export default Input
