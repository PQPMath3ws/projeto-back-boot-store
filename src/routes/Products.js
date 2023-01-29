import express from "express";
import { ObjectId } from "mongodb";

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

router.all("/api/get-product/:id", async (req, res) => {
    if (req.method !== "GET") return res.status(errors[405].code).send(errors[405]);
    const { id } = req.params;
    if (!id) {
        errors[400].message = "missing product id in params";
        return res.status(errors[400].code).send(errors[400]);
    }
    try {
        const product = await getDbInstance().collection("products").findOne({_id: ObjectId(id)})
        if (!product) {
            errors[400].message = "product not found in server.";
            return res.status(errors[400].code).send(errors[400]);
        }
        return res.status(200).send(product);
    } catch (_) {
        errors[400].message = "invalid id param.";
        return res.status(errors[400].code).send(errors[400]);
    }
});

export default router;