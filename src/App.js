import { useState } from 'react';
import './App.css';
import Todolist from './components/Todolist';



function App() {

  let [itemList, setItemList] = useState('');
  let [item, setItem] = useState([]);

  const inputEvent = (event) => {
    setItemList(event.target.value);
  }

  const addItem = () => {
    setItem( (oldVal) => {
      return [...oldVal, itemList];
    } );
    setItemList('');
  }

  const deleteItems = (id) => {
    setItem((oldVal)=>{
      return oldVal.filter((errElement, index) => {
        return index !== id;
      });
    })
  }

  return (
    <>
      <div className="bg">
        <div className="center_div">
          <br />
          <h1>Todo List</h1>
          <br />
          <input type="text" placeholder="Add an Item" onChange={inputEvent} value={itemList}/>
          <button onClick={addItem}>+</button>
          <ol>
          {item.map( (itemVal, index) => {
              return <Todolist text={itemVal} key={index} id={index} onSelect={deleteItems}/>
            } )}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
