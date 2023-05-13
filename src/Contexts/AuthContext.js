import React, { createContext, useEffect, useReducer } from 'react'
import { redirect } from "react-router-dom";
import { signIn, getProfile} from '../Api'

const initialState = {
    isAuthenticated: false,
    isInitialised: false,
    user: null,
}

const isValidToken = (token) => {
    if (!token) {
        return false
    }

    return true
}

const setSession = (token) => {
    if (token) {
        localStorage.setItem('usertoken', token)
    } else {
        localStorage.removeItem('usertoken')
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'INIT': {
            const { isAuthenticated, user } = action.payload
            return {
                ...state,
                isAuthenticated,
                isInitialised: true,
                user,
            }
        }
        case 'LOGIN': {
            const { user } = action.payload
            return {
                ...state,
                isAuthenticated: true,
                user,
            }
        }
        case 'LOGOUT': {
            return {
                ...state,
                isAuthenticated: false,
                user: null,
            }
        }
        case 'REGISTER': {
            const { user } = action.payload

            return {
                ...state,
                isAuthenticated: true,
                user,
            }
        }
        default: {
            return { ...state }
        }
    }
}

const AuthContext = createContext({
    ...initialState,
    login: () => Promise.resolve(),
    logout: () => { },
})

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const login = async(email,pass) => {
        const response = await signIn(email,pass)
        const { token } = response.data[0]
        setSession(token)
        dispatch({
            type: 'LOGIN',
            payload: {
                user: response.data[0],
            },
        })
        return response
    }

    const logout = () => {
        setSession(null)
        dispatch({ type: 'LOGOUT' })
        redirect("/");
    }

    useEffect(() => {
        (async () => {
            try{
                const token = window.localStorage.getItem('usertoken')
                if (token && isValidToken(token)) {
                    setSession(token)
                    const response = await getProfile()
                    dispatch({
                        type: 'INIT',
                        payload: {
                            isAuthenticated: true,
                            user: response,
                        },
                    })
                } else {
                    dispatch({
                        type: 'INIT',
                        payload: {
                            isAuthenticated: false,
                            user: null,
                        },
                    })
                }
    
            } catch(e){
                dispatch({
                    type: 'INIT',
                    payload: {
                        isAuthenticated: false,
                        user: null,
                    },
                })
            }
            
        })()
    }, [])

    return (
        <AuthContext.Provider
            value={{
                ...state,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext