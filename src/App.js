import './assets/css/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './views/Home';
import Carrito from './views/Carrito';
import Pizza from './views/Pizza';
import Contexto from './context/Context'
import { useEffect, useState } from 'react';


function App() {
  const [pizzas, setPizzas] = useState([]);
  const [total, setTotal] = useState(0);
  const [carro, setCarro] = useState([]);

  const pizzaJson = async () => {
    const res = await fetch('pizzas.json');
    const datos = await res.json();
    setPizzas([...datos]);
  }


useEffect(() => {
  pizzaJson();
}, [])


const agregarAlCarro = (id) => {
  const index = carro.findIndex(item => item.id === id)
  const pizza = pizzas.find(item => item.id === id);

  if(index < 0){
    carro.push({id:id, nombre:pizza.name, imagen:pizza.img, cantidad:1, precioTotal: pizza.price})
    setCarro([...carro])
  }

  if(index >= 0){
    carro[index].cantidad++;
    carro[index].precioTotal = carro[index].cantidad*(pizza.price);
    setCarro([...carro])
  }
  valorTotal()
}

const restarAlCarro = (id) => {
  const index = carro.findIndex(item => item.id === id)
  const pizza = pizzas.find(item => item.id === id);

  if(index >= 0){
    carro[index].cantidad--;
    carro[index].precioTotal = carro[index].cantidad*(pizza.price);
    setCarro([...carro])
  }

  if(carro[index].cantidad < 0){
    carro[index].cantidad = 0
    carro[index].precioTotal = 0
  }
  valorTotal()
}

const eliminarCarrito = (id) => {
  const index = carro.findIndex(item => item.id === id)
  carro.splice(index,1)
  setCarro(carro)
console.log(carro)
  valorTotal()

}

const valorTotal = () => {
  const total = carro.reduce((sum, value) => (typeof value.precioTotal == "number" ? sum + value.precioTotal : sum), 0);
  setTotal(total);
}

  return (
    <div className="App">
      <Contexto.Provider value={{pizzas, total, carro, agregarAlCarro, restarAlCarro, eliminarCarrito}}>
        <BrowserRouter>
            <Navbar></Navbar>
            <Routes>
              <Route path='/' element= {<Home />}></Route>
              <Route path='/Carrito' element= {<Carrito />}></Route>
              <Route path='/Pizza/:id' element= {<Pizza />}></Route>
              <Route path='*' element = {<h1>no encontrada</h1>}></Route>
            </Routes>
            <Footer></Footer>
        </BrowserRouter>
      </Contexto.Provider>
    </div>
  );
}

export default App;
