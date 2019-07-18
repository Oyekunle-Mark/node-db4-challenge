const Model = require('../model');

const getRecipes = (req, res) =>
  Model.getRecipes()
    .then(recipes =>
      res.status(200).json({
        status: 200,
        data: recipes,
      }),
    )
    .catch(() =>
      res.status(500).json({
        status: 500,
        message: 'Cannot get recipes.',
      }),
    );

const getShoppingList = (req, res) => {
  const { id } = req.params;

  Model.getShoppingList(id)
    .then(recipe =>
      res.status(200).json({
        status: 200,
        data: recipe,
      }),
    )
    .catch(() =>
      res.status(500).json({
        status: 500,
        message: 'Cannot get shopping list',
      }),
    );
};

const getInstructions = (req, res) => {
  const { id } = req.params;

  Model.getInstructions(id)
    .then(steps =>
      res.status(200).json({
        status: 200,
        data: steps,
      }),
    )
    .catch(() =>
      res.status(500).json({
        status: 500,
        message: 'Cannot get instructions',
      }),
    );
};

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
};
