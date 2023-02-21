import { useState } from 'react'
import { useEffect } from 'react'

const toggle = (array, value) => {
  if(array.includes(value)){
    return array.filter(f=>f!=value)
  } else{
    return [...array, value]
  }
}
const Radio = (props) => {
  const [selectedOption, setSelectedOption] = useState([])

  const change = (event) => {
    setSelectedOption(toggle(selectedOption,event.target.value))
  }
  // const error = (event) => {
  //   if(selectedOption.length === 3 || selectedOption.includes(event.target.value)){
  //     alert('error')
  //   }
  // }

  useEffect(() => {
    if (selectedOption.length === 3) {
      alert('error')
    }
    console.log(selectedOption)
}, [selectedOption.length])
  
  return (
    <div>
      <label>
        <input type="checkbox" value="option1" checked={selectedOption.includes('option1')} onChange={change} />
        <p>Option 1</p>
      </label>

      <label>
        <input type="checkbox" value="option2" checked={selectedOption.includes('option2')} onChange={change} />
        <p>Option 2</p>
      </label>

      <label>
        <input type="checkbox" value="option3" checked={selectedOption.includes('option3')} onChange={change} />
        <p>Option 3</p>
      </label>

      {selectedOption.includes('option1') && <p>This is Option 1</p>}
      {selectedOption.includes('option2') && <p>This is Option 2</p>}
      {selectedOption.includes('option3') && <p>This is Option 3</p>}
      
    
    </div>
  )
}

export default Radio;
