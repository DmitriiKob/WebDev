import { useState, useEffect } from 'react'

const Awesomeinput = () => {
    const [numberOfCharacters, setNumberOfCharacters] = useState(0)

   useEffect( () => {
    if(numberOfCharacters >= 20){
        alert('false')
    }
   }, [numberOfCharacters])

  const getResult = (event) => {
    setNumberOfCharacters(event.target.value.length)
  }
  const alreadyInInput = () => {
    alert(numberOfCharacters)
  }

   return (
    <div>
      <input type="text" onChange={getResult} />
      <button onClick={alreadyInInput}>click</button>
    </div>
  )
}

export default Awesomeinput