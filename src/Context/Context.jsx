import { createContext, useState } from "react";
const Context = createContext()
function Provider({ children }) {
    const [count, setCount] = useState(0)
    const [data , setData] = useState([])
    const [feedCount , setFeedCount] = useState(0)
    const [feedData1 , setFeedData1] = useState([])
    const [feedData2 , setFeedData2] = useState([])
    const [category, setCategory] = useState(window.localStorage.getItem('category') ? window.localStorage.getItem('category') : 'Feature')

    return (
        <Context.Provider value={{
            count, 
            setCount , 
            data , 
            setData ,
            feedCount , 
            setFeedCount,
            feedData1 , 
            setFeedData1,
            feedData2,
            setFeedData2,
            category,
            setCategory,
            }}>
            {children}
        </Context.Provider>
    )
}
export { Context, Provider }