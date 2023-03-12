import { useState, useRef } from "react";

const TimeClick = () => {
    const [click, setClick] = useState(0)
    const btnRef = useRef(0)

    const refBestScore = useRef(0)
    const onClick = () => {
        if(click === 0){
            setClick(1)
            setTimeout(()=>{
                setClick(2)
            }, 1000)
        }
        if(click === 1){
            btnRef.current = btnRef.current + 1
        }
        if(click === 2){
            alert(btnRef.current)
        }
        if(btnRef.current > refBestScore.current){
            refBestScore.current = btnRef.current
        }
    }
    const onReset = () => {
        setClick(0)
        btnRef.current = 0
    }
    return (
        <div>
        <button type="button" onClick={onClick}>Click</button>
        <button type="button" onClick={onReset}>Reset</button>
        <p>{btnRef.current}</p>
        <p>Best Score: {refBestScore.current}</p>
        </div>
    )
}
export default TimeClick