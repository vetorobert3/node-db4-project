  
const express = require('express');

const Recipes = require('./recipes-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Recipes.find()
  .then(recipe => {
    res.json(recipe);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get recipe' });
  });
});

module.exports = router;