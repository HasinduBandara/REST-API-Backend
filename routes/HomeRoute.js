const express = require('express');
const router = express.Router();
const CardPayment = require('../model/Home.js');

// Create a card payment
router.post('/', async (req, res) => {
  try {
    const cardPayment = new CardPayment(req.body);
    await cardPayment.save();
    res.send(cardPayment);
  } catch (error) {
    res.status(500).send(error);
  }
});



// Get all card payments
router.get('/', async (req, res) => {
  try {
    const cardPayments = await CardPayment.find({});
    res.send(cardPayments);
  } catch (error) {
    res.status(500).send(error);
  }
});



// Get a card payment by ID
router.get('/:id', async (req, res) => {
  try {
    const cardPayment = await CardPayment.findById(req.params.id);
    if (!cardPayment) {
      return res.status(404).send();
    }
    res.send(cardPayment);
  } catch (error) {
    res.status(500).send(error);
  }
});




// Update a card payment by ID
router.patch('/:id', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = [
    'cardholderName',
    'cardNumber',
    'expirationDate',
    'cvv',
    'amount',
    'description',
    'date'
  ];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' });
  }

  try {
    const cardPayment = await CardPayment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!cardPayment) {
      return res.status(404).send();
    }
    res.send(cardPayment);
  } catch (error) {
    res.status(500).send(error);
  }
});




// Delete a card payment by ID
router.delete('/:id', async (req, res) => {
  try {
    const cardPayment = await CardPayment.findByIdAndDelete(req.params.id);
    if (!cardPayment) {
      return res.status(404).send();
    }
    res.send(cardPayment);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
