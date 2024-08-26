import mongoose from "mongoose";
import ProductsService from "../src/services/products.dao.js";
import config from "../src/config.js";
import { expect } from "chai";

const conection = await mongoose.connect(config.MONGODB_URI);
// const expect = chai.expect;
const dao = new ProductsService();

describe("Testing con chai", function () {
  before(function () {});

  it("Obtener array de productos", async function () {
    const result = await dao.get();
    expect(Array.isArray(result)).to.be.ok;
  });
});
