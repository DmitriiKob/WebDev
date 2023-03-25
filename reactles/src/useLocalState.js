import { useState, useEffect } from "react";

const useLocalState = (defaultData, dataName) => {
    const [data, setData] = useState(window.localStorage.getItem(dataName)? JSON.parse(window.localStorage.getItem(dataName)): defaultData)
    useEffect(()=>{
        window.localStorage.setItem(dataName, JSON.stringify(data))
    }, [data, data.length])
    return [data, setData]
}

export default useLocalState