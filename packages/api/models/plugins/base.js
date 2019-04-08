const base = (schema) => {
  const opts = {
    getters: true,
    virtuals: true,
    versionKey: false,
  };

  schema.set('toJSON', opts);
  schema.set('toObject', opts);
};

export default base;
