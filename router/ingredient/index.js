const router = require('express').Router();

const Model = require('../../model');

router.get('/:id/recipes', (req, res) => {
  const { id } = req.params;

  Model.getRecipeByIngredient(id)
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
});

module.exports = router;
