import mongoose from "mongoose";
import ProductsService from "../src/services/products.dao.js";
import Assert from "assert";
import config from "../src/config.js";


const conection = await mongoose.connect(config.MONGODB_URI);
const assert = Assert.strict;
const dao = new ProductsService()


describe("Testing products Dao", function() {
  before(function () {
    this.dao = dao;
  });
  beforeEach(function () {
    this.timeout(5000);
  });
  it("El dao debe devolver un arreglo", async function () {
    console.log(this.dao);
    const result = await this.dao.get();
    assert.strictEqual(Array.isArray(result), true);
  });
});
