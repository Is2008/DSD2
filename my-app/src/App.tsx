import { useState } from 'react'
import './App.css'
import { Provider } from './components/ui/provider'
import Entrance from './components/entrance'
import Parts from './components/parts'
import Main from './components/mains'

function App() {
  return (
    <Provider>
      <Entrance></Entrance>
      <Parts></Parts>
      <Main></Main>
    </Provider>
  )
}

export default App
