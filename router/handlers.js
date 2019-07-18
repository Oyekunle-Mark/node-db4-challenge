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

module.exports = {
  getRecipes,
};
