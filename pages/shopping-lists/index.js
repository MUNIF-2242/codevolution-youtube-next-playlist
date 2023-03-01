import { useState } from 'react';

function ShoppingListsPage() {
  const [shoppingLists, setShoppingLists] = useState([]);
  const [shoppingList, setShoppingList] = useState('');
  const fetchShoppingLists = async () => {
    const response = await fetch('/api/shopping-lists');
    const data = await response.json();
    setShoppingLists(data);
  };

  const submitShoppingList = async () => {
    const response = await fetch('/api/shopping-lists', {
      method: 'POST',
      body: JSON.stringify({ shoppingList }),
      headers: {
        'Content-type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data);
  };
  return (
    <>
      <input
        type='text'
        value={shoppingList}
        onChange={(e) => setShoppingList(e.target.value)}
      />
      <button onClick={submitShoppingList}>Add</button>
      <button onClick={fetchShoppingLists}>Load Shopping Lists</button>
      {shoppingLists.map((shoppingList) => (
        <li key={shoppingList.id}>{shoppingList.title}</li>
      ))}
    </>
  );
}

export default ShoppingListsPage;
