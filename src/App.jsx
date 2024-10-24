import { useState } from 'react'
import MyHeader from './header.jsx'
import pigpic from './pig.png'
import ProductForm from './productform.jsx'


function App() {
  

  return (
    <div>
      <MyHeader image={pigpic} title="Welcome to product page!"></MyHeader>
      <ProductForm />
    </div>
  )
}

export default App
