import React from "react";

function Pizza({size, topping, vegetarian, item, handleEditButton}) {
  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian? "Is Vegetarian" : "Not Vegetarian"}</td>
      <td>
        <button type="button" className="btn btn-primary" onClick={() => handleEditButton(item)}>
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
