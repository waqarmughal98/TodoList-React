import { useState } from 'react';
import './App.css';



function App() {
  let [inputList, setInputList] = useState("");
  let [items, setItem] = useState([]);


  const inputEvent = (event) => {
    setInputList(event.target.value)
  }
  
  const listOfItems = () => {
    setItem( (oldItem) => {
      return[...oldItem, inputList]
    })
  }

  return (
    <>
      <div className="bg">
        <div className="center_div">
          <br/> 
          <h1> Todo List</h1>
          <br/>
          <input type="text" placeholder="Add an Item" onChange={inputEvent} />
          <button onClick={listOfItems}>+</button>

          <ol>
            {/* <li>{addedItem}</li> */}

            {items.map( (itemVal) => {
              return <li>{itemVal}</li>
            } )}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
