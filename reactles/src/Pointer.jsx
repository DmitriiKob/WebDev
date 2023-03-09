import { useState,useLayoutEffect } from "react";
const Pointer = () => {
    const [position, setPosition] = useState([0,0])
    useLayoutEffect(()=>{
        const handleMove = (event) => {
            setPosition([event.clientX, event.clientY])
        }
    window.addEventListener('pointermove', handleMove)
    }, [])
    return(
        <div style={{transform:`translate(${position[0] + 'px'}, ${position[1] + 'px'})`}} 
        className={'pointer'}>1</div>
    )
}

export default Pointer