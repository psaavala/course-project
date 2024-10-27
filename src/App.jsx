import MyHeader from './header.jsx'
import pigpic from './pig.png'
import ProductForm from './ProductForm.jsx'


function App() {
  

  return (
    <div>
      <MyHeader image={pigpic} title="Welcome to product page!"></MyHeader>
      <ProductForm />
    </div>
  )
}

export default App
