module.exports = (req, res, next) => {
  const apiKey = req.headers["x-api-key"];

  if (!apiKey || apiKey !== "SECRET123") {
    return res.status(401).json({
      message: "Unauthorized - Invalid API Key"
    });
  }

  next();
};
