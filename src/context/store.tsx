import React, { createContext, useReducer, useEffect } from 'react'

const initialState = JSON.parse(localStorage.getItem('state') as string) || {
  result: {},
  isLoading: false,
  currentUser: null,
}
interface IContextProps {
  state: any
  dispatch: any
}

export const StoreContext = createContext({} as IContextProps)

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_RESULT':
      return {
        ...state,
        result: action.payload,
        isLoading: false,
      }

    case 'IS_LOADING':
      return {
        ...state,
        isLoading: true,
      }
    case 'NOT_LOADING':
      return {
        ...state,
        isLoading: false,
      }
    case 'SET_USER':
      return {
        ...state,
        currentUser: action.payload,
        isLoading: false,
      }

    default:
      return state
  }
}
export const StoreProvider = (props: any) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state))
  }, [state])
  return (
    <StoreContext.Provider value={{ state, dispatch } as any}>
      {props.children}
    </StoreContext.Provider>
  )
}
