import { useLayoutEffect, useState } from "react"
import './style.scss'
const DnD = () => {
    const [cords, setCords] = useState([0 , 0])
    const getCords = (event) => {
        console.log(event)
    }
    const mouseUp = (event) => {
        console.log(event)
    }
    const drag = (event) => {
        if(event.pageX > 0 && event.pageY > 0){
            setCords([event.pageX, event.pageY])
        }
    }
      
    return (
        <div  className="dndContainer" onMouseUp={mouseUp}>
            <div className="dndEl" draggable onDrag={drag} onMouseDown={getCords} style={{left:cords[0]+"px", top:cords[1]+"px"}}></div>
        </div>
    )
}
export default DnD