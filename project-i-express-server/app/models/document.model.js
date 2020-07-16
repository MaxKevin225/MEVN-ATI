module.exports = (mongoose) => {
  let schema = mongoose.Schema(
    {
      productKind: String,
      productionDate: String,
    },
    { timestamp: true },
  );

  schema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  return mongoose.model('document', schema);
};