import { useState, useRef, useEffect } from "react";
const FormFocus = () => {
    const [active, setActive] = useState(0)
    
    const firstRef = useRef()
    const secondtRef = useRef()
    const thirdRef = useRef()
    const refMap = [firstRef, secondtRef, thirdRef]
    useEffect(()=>{
        refMap[active].current.focus()
    }, [active, refMap])
    return (
        <form action="">
            {refMap.map(ref=><input type="text" ref={ref}/>)}
            {/* <input type="text" ref={firstRef}/>
            <input type="text" ref={secondtRef} />
            <input type="text" ref={thirdRef} /> */}
            <button type="button" onClick={()=>active < 2 ? setActive(active+1): setActive(0)}>Next</button>
        </form>
    )
}
export default FormFocus