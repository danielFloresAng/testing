import { Router } from "express";
import nodemailer from "nodemailer";

import OrderController from "../controllers/orderManager.js";
import config from "../config.js";
import { verifyRequired } from "../services/utils.js";

const router = Router();
const controller = new OrderController()

const transport = nodemailer.createTransport({
  service: 'gmail',
  port: 587,
  auth: {
      user: config.GMAIL_APP_USER,
      pass: config.GMAIL_APP_PASS
  }
});

router.get('/mail', async (req, res) => {
  try {
     
      const confirmation = await transport.sendMail({
          from: `Sistema Coder <${config.GMAIL_APP_USER}>`, 
          to: 'email@destino.com',
          subject: 'Pruebas Nodemailer',
          html: '<h1>Prueba 01</h1>'
      });
      res.status(200).send({ status: 'OK', data: confirmation });
  } catch (err) {
      res.status(500).send({ status: 'ERR', data: err.message });
  }
});

router.get("/", (req, res) => {
  try {
    res.status(200).send({ server: config.SERVER, playloat: "GET" });
  } catch (error) {}
});

export default router;
