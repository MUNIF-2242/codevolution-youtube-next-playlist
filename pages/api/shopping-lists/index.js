import { shoppingLists } from '@/data/shopping-list';

export default function handler(req, res) {
  res.status(200).json(shoppingLists);
}
