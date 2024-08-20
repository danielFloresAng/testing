import OrdersService from "../services/orders.dao.js";
import CartService from "../services/carts.dao.js";

const service = new OrdersService();
const cartService = new CartService();

class orderDTO {
  constructor(data) {
    this.data = data;
    this.data.number = Date.now() + Math.floor(Math.random() * 10000 + 1);
    this.data.status = "pending";

    let total = 0.0;
    this.data.products.forEach((element) => {
      total += element.price;
    });
    this.data.totalPrice = total;
  }
}

class OrderController {
  constructor() {}

  async get() {
    try {
      return await service.get();
    } catch (err) {
      return err.message;
    }
  }

  async getCartsProducts(id) {
    try {
      return await cartService.getOne(id);
    } catch (err) {
      return err.message;
    }
  }

  async add(data) {
    try {
      const cartProducts = await this.getCartsProducts(data.products);
      data.products = cartProducts.products.filter((product) =>
        data.products.includes(product.id)
      );

      const normalized = new orderDTO(data);
      return await service.add(normalized.data);
    } catch (err) {
      return err.message;
    }
  }

  async update(id, data) {
    try {
      return await service.update(id, data);
    } catch (err) {
      return err.message;
    }
  }

  async delete(id) {
    try {
      return await service.delete(id);
    } catch (err) {
      return err.message;
    }
  }
}

export default OrderController;
