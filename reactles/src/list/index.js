import { useMemo, useState } from "react";
import Item from "./Item";
const userList = [{
    id: 1,
    name: 'John'
},
{
    id: 2,
    name: 'Max'
},
{
    id: 3,
    name: 'Ivan'
}]
const List = () => {
    const [list, setList] = useState(userList)
    const [text, setText] = useState('')
    const handleDelete = (id) => () => {
        setList(list.filter((f) => f.id != id))
    }
    return (
        <div>
        <ul>{list.map((item)=>{
            return (<Item id={item.id} key={item.id} name={item.name} handleDelete={handleDelete(item.id)}/>)
        })}</ul>
        <input  value={text} onChange={(event)=>setText(event.target.value)}/>
        <button onClick={()=>{
            setList((prev)=>[...prev, {id:prev.lenght + 1, name:text}])
            setText('')
        }}>Click</button>
        </div>
    )
}

export default List                                