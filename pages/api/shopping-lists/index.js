import { shoppingLists } from '@/data/shopping-list';

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(shoppingLists);
  } else if (req.method === 'POST') {
    const shoppingList = req.body.shoppingList;
    const newShoppingList = {
      id: Date.now(),
      title: shoppingList,
    };
    shoppingLists.push(newShoppingList);
    res.status(201).json(newShoppingList);
  }
}
