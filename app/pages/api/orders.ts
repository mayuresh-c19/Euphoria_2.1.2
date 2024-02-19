const express = require('express');
const cors = require('cors');
const app = express();

// Use cors() middleware to allow cross-origin requests
app.use(cors());

// Use express.json() middleware to parse JSON data in POST requests
app.use(express.json());

app.post('/api/orders', (req: { body: { amount: any; currency: any; }; }, res: { json: (arg0: { id: string; amount: any; currency: any; }) => void; }) => {
  // Create an order and send a response
  const order = {
    id: 'order_id',
    amount: req.body.amount,
    currency: req.body.currency,
  };
  res.json(order);
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});