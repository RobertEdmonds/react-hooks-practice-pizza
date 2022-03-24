import React, {useEffect, useState} from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [getPizza, setGetPizza] = useState([])
  const [editPizza, setEditPizza] = useState({})

  useEffect(() => {
    fetch('http://localhost:3001/pizzas')
    .then(resp => resp.json())
    .then(item => setGetPizza(item))
  }, [])

  function handleEditButton(itemToEdit){
    setEditPizza(itemToEdit)
  }

  function handleChangeOfPizza(editedPizza){
    const updatedList = [...getPizza].map(pizza => {
      if(pizza.id === editedPizza.id){
        return editedPizza
      }else{
        return pizza
      }
    })
    setGetPizza(updatedList)
  }

  return (
    <>
      <Header />
      <PizzaForm editPizza={editPizza} handleChangeOfPizza={handleChangeOfPizza}/>
      <PizzaList pizza={getPizza} handleEditButton={handleEditButton}/>
    </>
  );
}

export default App;
