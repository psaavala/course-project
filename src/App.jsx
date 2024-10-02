import { useState } from 'react'
import MyHeader from './header.jsx'
import pigpic from './pig.png'


function App() {
  

  return (
    <div>
      <MyHeader image={pigpic} title="Welcome to product page!"></MyHeader>
    </div>
  )
}

export default App
