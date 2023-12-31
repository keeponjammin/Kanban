import React, {createContext, useContext, useEffect, useState} from 'react'


export const stateContext = createContext();

const getFreshContext =()=>{
    if(localStorage.getItem('context') === null){
        localStorage.setItem('context', JSON.stringify({
            boardDataIndex: -1,
            selectedBoardIndex: -1,
            selectedBoardTitle: '',
            selectedBoardDescription: '',
            userId:-1,
            userName:'',
            createdBoards: 0,
        }))  
    }
    return JSON.parse(localStorage.getItem('context'))
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

    useEffect(()=>{
        localStorage.setItem('context', JSON.stringify(context))
    },[context])

  return (
    <stateContext.Provider value={{context, setContext}}>
        {children}
    </stateContext.Provider>
  )
}
