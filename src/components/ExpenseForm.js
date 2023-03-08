import React, { useState } from "react";
// import "./ExpenseForm.css";
import FoodItems from "./FoodItems";
const ExpenseForm = () => {
  const [productDetails, setProductDetails] = useState({
    ProductId: "",
    ProductName: "",
    Price: "",
    Category: "",
  });
  const [records, setRecords] = useState([]);
  const updateDetails = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setProductDetails({ ...productDetails, [name]: value });
    console.log(value);
    
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecords = {
      ...productDetails,
      id: new Date().getTime().toString(),
    };
    setRecords([...records, newRecords]);
    setProductDetails({
      ProductId: "",
      ProductName: "",
      Price: "",
      Category: "",
    });
  };
  const whichList=(event)=>{

  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="container">
          <div className="input-class">
            <label>ProductId</label>

            <input
              name="ProductId"
              type="text"
              onChange={updateDetails}
              value={productDetails.ProductId}
            />
          </div>
          <div className="input-class">
            <label>ProductName</label>

            <input
              name="ProductName"
              type="text"
              onChange={updateDetails}
              value={productDetails.ProductName}
            />
          </div>
          <div className="input-class">
            <label>Price</label>

            <input
              name="Price"
              type="select"
              onChange={updateDetails}
              value={productDetails.Price}
            />
          </div>
          <div className="input-class">
            <label>Category</label>

            <select
              name="Category"
              onChange={updateDetails}
              value={productDetails.Category}
            >
              <option value="ElectronicItems">Electronic Items</option>
              <option value="Food Items">Food Items</option>
              <option value="SkinCare Items">SkinCare Items</option>
            </select>
            <br></br>
            <button type="submit" className="btn">
              Register
            </button>
          </div>
        </div>
      </form>
{/* 
      {records.map((currUser) => {
        const { id, ProductId, ProductName, Price, Category } = currUser;
        return (
          <div className="data-styles-container"key={id}>
            <div className="data-styles" >
              <p >
                {ProductId} {ProductName} {Price} 
              </p>
            </div>
          </div>
        );
      })} */}
            <div>
        <div>
            <ul>
                Electronic Items
                <li>
{
      records.map((currUser) => {
        const { id, ProductId, ProductName, Price, Category } = currUser;
        return (
          <div className="data-styles-container"key={id}>
            <div className="data-styles" >
              <p >
                {ProductId} {ProductName} {Price} 
              </p>
            </div>
          </div>
        );
      })}

                </li>
            </ul>
        </div>

        <div>
            <ul>
                Food Items
                <li>

                </li>
            </ul>
        </div>

        <div>
            <ul>
                SkinCare Items
                <li>

                </li>
            </ul>
        </div>
        </div>
    </div>
  );
  
};
export default ExpenseForm;
