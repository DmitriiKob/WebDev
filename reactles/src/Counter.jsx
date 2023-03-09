import { useRef, useState } from "react";
const Counter = () => {
    const [num, setNum] = useState(0)
    const count = useRef(0)
    console.log(count)
    const handleClick = () => {
        count.current++
        setNum(num+1)
        console.log(count.current)
    }
    return (
        <button onClick={handleClick}>{num}</button>
    )
}

export default Counter