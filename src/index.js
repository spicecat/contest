import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ContestProvider, UserProvider } from './contexts'

ReactDOM.render(
  <ContestProvider>
    <UserProvider>
      <App />
    </UserProvider>
  </ContestProvider>,
  document.getElementById('root')
);