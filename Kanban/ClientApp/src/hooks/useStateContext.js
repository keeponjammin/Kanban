import React, {createContext, useContext, useState} from 'react'


export const stateContext = createContext();

const getFreshContext =()=>{
    return {
        userId:0,
        //userName:'',
        selectedBoardIndex: 0,
    }
}

export default function useStateContext() {
    const {context,setContext} = useContext(stateContext);
    return {
        context,
        setContext: obj => { setContext({ ...context,...obj })}
    };
}

export function ContextProvider({children}) {
    const [context, setContext] = useState(getFreshContext())
  return (
    <stateContext.Provider value={{context, setContext}}>
        {children}
    </stateContext.Provider>
  )
}
