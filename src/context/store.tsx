import React, { createContext, useReducer } from 'react'

const initialState = {
  result: {},
}
interface IContextProps {
  state: any
  dispatch: any
}

export const StoreContext = createContext({} as IContextProps)

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_RESULT':
        console.log({
            ...state,
            result: action.payload,
          })
      return {
        ...state,
        result: action.payload,
      }
    default:
      return state
  }
}
export const StoreProvider = (props: any) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <StoreContext.Provider value={{ state, dispatch } as any}>
      {props.children}
    </StoreContext.Provider>
  )
}
