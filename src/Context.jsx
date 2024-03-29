import axios from "axios";
import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { reducer } from "./reducer/reducer";

const GlobalStates = createContext()

const initialState = {
    favs: JSON.parse(localStorage.getItem('favs')) || [],
    dentists: [],
    theme: JSON.parse(localStorage.getItem('theme')) || {palette: {type: 'dark',
        primary: {
          main: '#3f51b5',
        },
        secondary: {
          main: '#f50057',
        },
      }}
    // theme: true o false
}

const Context = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {            
            dispatch({type: 'GET_DENTISTS', payload: res.data})
        })
    }, [])
    
    useEffect(() => {
        localStorage.setItem('favs', JSON.stringify(state.favs))
    }, [state.favs])
    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(state.theme))
    }, [state.theme])

    return (
        <GlobalStates.Provider value={{state, dispatch}}>
            {children}
        </GlobalStates.Provider>
    )
}

export default Context

export const useGlobalStates = () => useContext(GlobalStates)