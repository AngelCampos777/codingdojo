import { useState } from 'react';
import Todo from './components/Todo'
import List from './components/List'
import './App.css';

function App() {
  const [toDoItems, setToDoItems] = useState([]);
  const addItem = listItem => {
    setToDoItems([...toDoItems, listItem]);
  }
  const handleDelete = (delIdx) => {
    const filtered = toDoItems.filter((todo, i)=> {
        return i !== delIdx;
    });
    setToDoItems(filtered);
}
const handleCheck = (chkIdx) => {
    toDoItems[chkIdx].isComplete = !toDoItems[chkIdx].isComplete;
    setToDoItems([...toDoItems]);
}
  return (
    <div className="App">
      <Todo newItem={addItem}/>
      <List handleDelete={handleDelete} handleCheck={handleCheck} myList={toDoItems}/>
    </div>
  );
}

export default App;
