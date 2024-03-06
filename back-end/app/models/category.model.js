module.exports = (mongoose) => {
  const Category = mongoose.model(
    "category",
    mongoose.Schema({
      _id: String,
      name: String,
    })
  );

  return Category;
};
