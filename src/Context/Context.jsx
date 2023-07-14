import { createContext, useState } from "react";

const Context = createContext()


const ContextComponent = ({children}) => {
    const [state,setState] = useState()
    const contextStore = {
        state,
        setState
    }
    return (
        <Context.Provider value={contextStore}>
            {children}
        </Context.Provider>
    )
}

export default ContextComponent 