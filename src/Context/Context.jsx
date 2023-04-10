import { createContext, useEffect, useState } from "react";
const Context = createContext()
function Provider({ children }) {
    const [count, setCount] = useState(0)
    const [data , setData] = useState([])
    const [feedCount , setFeedCount] = useState(0)
    const [feedData , setFeedData] = useState([])
    const [category, setCategory] = useState(window.localStorage.getItem('category') ? window.localStorage.getItem('category') : 'Feature')
    return (
        <Context.Provider value={{
            count, 
            setCount , 
            data , 
            setData ,
            feedCount , 
            setFeedCount,
            feedData , 
            setFeedData
            }}>
            {children}
        </Context.Provider>
    )
}
export { Context, Provider }