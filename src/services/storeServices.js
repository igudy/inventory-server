const Store = require("../model/storeModel");

const createStoreService = async (data) => {
  const result = await Store.create(data);
  return result;
};

const getStoreServices = async (data) => {
  const result = await Store.find({});
  return result;
};

const getStoreByIdServices = async (id) => {
  const result = await Store.findById(id);
  return result;
};

const deleteStoreByIdServices = async (id) => {
  const result = await Store.deleteOne({ _id: id });
  return result;
};

const updateStoreByIdServices = async (id, data) => {
  const result = await Store.updateOne(
    { _id: id },
    { $set: data },
    { runValidators: true }
  );
  return result;
};

// Export the functions at the bottom
module.exports = {
  createStoreService,
  getStoreServices,
  getStoreByIdServices,
  deleteStoreByIdServices,
  updateStoreByIdServices,
};
