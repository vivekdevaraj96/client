import React, {createContext, useReducer} from 'react';
import appReducer from './AppReducer'

// initial state
const initialState={
    transactions:[
    ]
}
// create context
export const GlobalContext=createContext(initialState);

// provider
export const GlobalProvider=({children})=>{
    const [state,dispatch]=useReducer(appReducer, initialState);

   

    function deleteTransaction(id){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload: id
        })
    }

    function addTransaction(transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return (<GlobalContext.Provider value={{
        transactions:state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}