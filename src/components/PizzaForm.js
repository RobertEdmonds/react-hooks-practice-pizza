import React, {useState, useEffect} from "react";

function PizzaForm({editPizza, handleChangeOfPizza}) {
  const [topping, setTopping] = useState("")
  const [size, setSize] = useState("Small")
  const [isVegetarian, setIsVegetarian] = useState(false)

  useEffect(()=> {
    setTopping(editPizza.topping)
    setSize(editPizza.size)
    setIsVegetarian(editPizza.vegetarian)
  },[editPizza])


  function handleSubmit(e){
    e.preventDefault()
    const formData = {
      topping: topping,
      size: size,
      vegetarian: isVegetarian
    }
    fetch(`http://localhost:3001/pizzas/${editPizza.id}`,{
      method: "PATCH",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(resp => resp.json())
    .then(newItem => handleChangeOfPizza(newItem))
  }


  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value= {topping}
            onChange={(e => setTopping(e.target.value))} 
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" value={size} onChange={e => setSize(e.target.value)}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              onChange= {() => setIsVegetarian(true)}
              checked={isVegetarian}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              onChange={()=> setIsVegetarian(false)}
              checked={!isVegetarian}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
