import {useState} from 'react'

const Hello = () => {
    const [list,setList] = useState([''])
    const [text, setText] = useState('')
    return (<><ul>
        {list.map((item, key) => <li key={item + key}>{item}</li>)}
    </ul>,
   
    <input type="text" value={text} onChange={(event)=>setText(event.target.value)} />, 
    <button onClick={() => setList((prev)=>[...prev, text])}> add {text}</button> </>)
}
export default Hello 