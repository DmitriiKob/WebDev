import {useState} from 'react'

const ArrayInput = () => {
    const [array,  setArray] = useState('')
    const [length, setLength] = useState(0)
    const getResult = () => {
        const a = array.split(' ').map(i=>Number(i))
        let check = false
        console.log(a)
        for(let i = 0; i < array.length; i++){
            if(a[i] < a[Number(length)]){
                check = true
                alert(a[i])
                break
            }
        }
        if(check === false){
            alert(0)
        }
    }
    
    return (
        <div>
            <input onChange={(event) => setArray(event.target.value)} type="text" value={array}/>
            <input onChange={(event) => setLength(event.target.value)} type="text" value={length} />
            <button onClick={getResult}>click</button>
        </div>
    )
}

export default ArrayInput