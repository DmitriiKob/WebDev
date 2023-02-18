import {useState} from 'react'
const CheckBox = () => {
    const [check, setCheck] = useState(false)
    return <>
    <input type={'checkbox'} checked={check} onClick={()=> setCheck(!check) } />
    {check ? <span>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde rem, quo suscipit veritatis laudantium delectus modi eum iure recusandae nisi fuga, optio iusto fugiat vel eaque veniam, facilis assumenda ratione.
    </span>: <span>Empty</span>}
    </> 
}

export default CheckBox

