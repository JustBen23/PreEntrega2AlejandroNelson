import { useState } from 'react'
import './App.css'
import { H1 } from './components/H1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <H1 />
    </div>
  )
}

export default App
