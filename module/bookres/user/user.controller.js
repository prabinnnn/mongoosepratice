const usermodel = require("./user.model");
const create = (payload) => {
  return usermodel.create(payload);
};
const get = () => {
  return usermodel.find();
};
const getByid = ({ _id }) => {
  return usermodel.findOne({ _id });
};
const updateByid = ({ _id }, payload) => {
  return usermodel.updateOne({ _id }, payload);
};
const deleteByid = ({ _id }) => {
  return usermodel.deleteOne({ _id });
};
module.exports = { create, get, getByid, updateByid, deleteByid };
