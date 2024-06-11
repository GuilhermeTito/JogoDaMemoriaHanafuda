import { useState } from 'react'
import './App.css'
import JogoDaMemoria from './components/JogoDaMemoria'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <JogoDaMemoria/>
    </div>
  )
}

export default App