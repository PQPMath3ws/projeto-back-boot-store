import express from "express";

import { getDbInstance } from "../config/database.js";

import errors from "../const/errors.js";

const router = express.Router();

router.all("/api/get-products", async (req, res) => {
    if (req.method !== "GET") return res.status(errors[405].code).send(errors[405]);
    const products = await getDbInstance().collection("products").find().toArray();
    return res.status(200).send({
        gato: products.filter(products => products.category === "gato"),
        cachorro: products.filter(products => products.category === "cachorro"),
        roedores: products.filter(products => products.category === "roedores"),
        vale_presente: products.filter(products => products.category === "vale-presente"),
    });
});

export default router;