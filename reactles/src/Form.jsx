import {useState} from 'react'
const Form = () => {
    const [formData,setFormData] = useState({login:"",password:""})
    return <form onSubmit={(event)=>{
        event.preventDefault()
        console.log(formData)
    }}>
        <input type="text" onChange={(event)=>setFormData((prev)=>({...prev,login:event.target.value}))} />
        <input type="text"  onChange={(event)=>setFormData((prev)=>({...prev,password:event.target.value}))} />
        <button>Submit</button>
    </form>
}

export default Form

