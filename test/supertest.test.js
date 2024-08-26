import {expect} from "chai";
import supertest from "supertest";

const requester = supertest('http://localhost:8000')

describe('Testing app', ()=>{
  describe('Test de productos', ()=>{
    it('Traer productos',async ()=>{


      const {statusCode, ok,_body} = await requester.get('/api/products')

      console.log(statusCode)
    })
  })
})