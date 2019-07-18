const badUrl = (req, res) =>
  res.status(404).json({
    status: 404,
    message: 'Bad, bad URL!',
  });

module.exports = {
  badUrl,
};
