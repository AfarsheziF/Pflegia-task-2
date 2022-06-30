import React, { useState, useEffect } from 'react';

import logo from './logo.svg';
import './App.css'

import List from './Components/list';
import ListInput from './Components/ListInput';

function App() {
  const [items, setItems] = useState([]);

  const AddNewItem = item => {
    console.log(item);
    setItems([...items, item]);
  }

  const RemoveItem = item => {
    var filteredItems = items.filter(e => e.id !== item.id);
    setItems(filteredItems)
  }

  return (
    <div style={{ padding: 10 }}>
      <h1>React Todo list</h1>
      <ListInput onSubmit={AddNewItem}></ListInput>
      <h3>ToDo: {items.length}</h3>
      <List items={items} onDelete={RemoveItem}></List>
    </div>
  );
}

export default App;
