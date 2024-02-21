const express = require('express');
const expenseController = require('../controllers/expense');
const router = express.Router();
router.post('/', expenseController.postExpense);
router.get('/', expenseController.getExpense);
router.delete('/:id', expenseController.deleteExpense);
module.exports = router;
