import React from "react";
import Pizza from "./Pizza";

function PizzaList({pizza, handleEditButton}) {
  const displayPizza = pizza.map(item => {
    return <Pizza key={item.id} size={item.size} topping={item.topping} vegetarian={item.vegetarian} item={item} handleEditButton={handleEditButton}/>
  })
 
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {
          displayPizza
        }
      </tbody>
    </table>
  );
}

export default PizzaList;
