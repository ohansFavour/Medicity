import React from 'react'
import ReactDOM from 'react-dom'

// components
import App from './App'

// css
import './index.css'
import { StoreProvider } from './context/store'

const AppContainer = () => {
  return (
    <StoreProvider>
      <App />
    </StoreProvider>
  )
}

ReactDOM.render(<AppContainer/>, document.getElementById('root'))
