module.exports = (mongoose) => {
  const infoSchema = mongoose.Schema({
    value: Number,
    uom: String,
  });
  const optionSchema = mongoose.Schema({
    price: Number,
    uom: String,
    value: Number,
  });

  const Fruit = mongoose.model(
    "fruit",
    mongoose.Schema({
      _id: String,
      categoryId: String,
      name: String,
      description: String,
      uom: String,
      price: Number,
      info: infoSchema,
      options: [optionSchema],
      relations: [String],
      images: [String],
    })
  );

  return Fruit;
};
