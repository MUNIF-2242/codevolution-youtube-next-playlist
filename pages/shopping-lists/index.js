import { useState } from 'react';

function ShoppingListsPage() {
  const [shoppingLists, setShoppingLists] = useState([]);
  const fetchShoppingLists = async () => {
    const response = await fetch('/api/shopping-lists');
    const data = await response.json();
    setShoppingLists(data);
  };
  return (
    <>
      <button onClick={fetchShoppingLists}>Load Shopping Lists</button>
      {shoppingLists.map((shoppingList) => (
        <li key={shoppingList.id}>{shoppingList.title}</li>
      ))}
    </>
  );
}

export default ShoppingListsPage;
