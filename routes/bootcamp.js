const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ id: 1, message: `GET all bootcamps` });
});

router.post('/', (req, res) => {
  res.status(200).json({ id: 1, message: `Create bootcamp` });
});

router.put('/:id', (req, res) => {
  res
    .status(200)
    .json({ id: 1, message: `Udate bootcamp with ${req.params.id}` });
});

router.patch('/:id', (req, res) => {
  res
    .status(200)
    .json({ id: 1, message: `Udate bootcamp with ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
  res
    .status(200)
    .json({ id: 1, message: `Delete bootcamp with ${req.params.id}` });
});

router.get('/:id', (req, res) => {
  res
    .status(200)
    .json({ id: 1, message: `Get bootcamp with ${req.params.id}` });
});

module.exports = router;
