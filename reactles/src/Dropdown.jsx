import { useState, useEffect } from 'react'

const DropdownContent = (props) =>{
    
    return (
        <div>{props.children}</div>
    )
}
const Dropdown = () =>{
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenEffect, setIsOpenEffect] = useState(null)
    useEffect(()=>{
            if(isOpenEffect !== null){const confirm = window.confirm('Are you sure?')
            if(confirm){
                setIsOpen(p=>!p)
            }}
    }, [isOpenEffect])
    return (
        <div>
            <button onClick={()=>setIsOpenEffect(!isOpen)}>click</button>
            {/* {isOpen?<DropdownContent><span>Hello</span></DropdownContent> : ''} */}
            {isOpen&&<DropdownContent callBack={setIsOpen}><span>Hello</span></DropdownContent>}

        </div>
    )
}

export default Dropdown