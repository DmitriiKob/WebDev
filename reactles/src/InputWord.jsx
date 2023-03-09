import { useState, useEffect, useRef } from "react";

InputWord = () => {
    const [text, setText] = useState("")

    return (
        <input type="text" value={text}/>
    )
}

export default InputWord