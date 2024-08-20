import ordersModel from "../models/orders.models.js";

class OrdersService {
  constructor() {}

  async get() {
    try {
      return await ordersModel.find().lean();
    } catch (err) {
      return err.message;
    }
  }

  async add(data) {
    try {
      return await ordersModel.create(data);
    } catch (err) {
      return err.message;
    }
  }

  async update(id, data) {
    try {
      return await ordersModel.updateOne({ _id: id }, { $set: data });
    } catch (err) {
      return err.message;
    }
  }

  async delete(id) {
    try {
      return await ordersModel.deleteOne({ _id: id });
    } catch (err) {
      return err.message;
    }
  }
}

export default OrdersService;
