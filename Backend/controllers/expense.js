const Expense = require('../models/expense');

exports.postExpense = async (req, res, next) => {
  const { amount, description, category } = req.body;
  const expense = await Expense.create({ amount, description, category });
  res.send({ newExpenseDetails: expense });
};

exports.getExpense = async (req, res, next) => {
  const allExpense = await Expense.findAll();
  res.send({ allExpenseDetails: allExpense });
};

exports.deleteExpense = async (req, res, next) => {
  const id = req.params.id;
  Expense.destroy({
    where: {
      id: id,
    },
  });
};
