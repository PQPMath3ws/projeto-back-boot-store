import express from "express";
import { ObjectId } from "mongodb";

import { getDbInstance } from "../config/database.js";

import errors from "../const/errors.js";

const router = express.Router();

router.all("/api/get-user-cart", async (req, res) => {
    if (req.method !== "GET") return res.status(errors[405].code).send(errors[405]);
    const requestID = req.headers["x-request-id"];
    if (!requestID) {
        errors[400].message = "missing x-request-id id in headers";
        return res.status(errors[400].code).send(errors[400]);
    }
    let cart = await getDbInstance().collection("cart").find({userId: ObjectId(requestID)}).toArray();
    for (let i = 0; i < cart.length; i++) {
        delete cart[i].userId;
        cart[i].product = await getDbInstance().collection("products").findOne({_id: ObjectId(cart[i].productId)});
        delete cart[i].productId;
    }
    return res.status(200).send(cart);
});

router.all("/api/addCart/:id", async (req, res) => {
    if (req.method !== "POST") return res.status(errors[405].code).send(errors[405]);
    const { id } = req.params;
    if (!id) {
        errors[400].message = "missing product id in params";
        return res.status(errors[400].code).send(errors[400]);
    }
    const requestID = req.headers["x-request-id"];
    if (!requestID) {
        errors[400].message = "missing x-request-id id in headers";
        return res.status(errors[400].code).send(errors[400]);
    }
    try {
        const existsUser = await getDbInstance().collection("user_experience").findOne({_id: ObjectId(requestID)});
        if (!existsUser) {
            errors[400].message = "user not found in server.";
            return res.status(errors[400].code).send(errors[400]);
        }
        const product = await getDbInstance().collection("products").findOne({_id: ObjectId(id)});
        if (!product) {
            errors[400].message = "product not found in server.";
            return res.status(errors[400].code).send(errors[400]);
        }
        await getDbInstance().collection("cart").insertOne(
            {
                userId: existsUser._id,
                productId: product._id,
                amount: 1,
            }
        );
        return res.status(200).send({code: 200, message: "item added to cart successfully"});
    } catch (_) {
        errors[400].message = "invalid \"user_id\" or \"product_id\" in request.";
        return res.status(errors[400].code).send(errors[400]);
    }
});

router.all("/api/removeCart/:id", async (req, res) => {
    if (req.method !== "DELETE") return res.status(errors[405].code).send(errors[405]);
    const { id } = req.params;
    if (!id) {
        errors[400].message = "missing product id in params";
        return res.status(errors[400].code).send(errors[400]);
    }
    const requestID = req.headers["x-request-id"];
    if (!requestID) {
        errors[400].message = "missing x-request-id id in headers";
        return res.status(errors[400].code).send(errors[400]);
    }
    try {
        const existsUser = await getDbInstance().collection("user_experience").findOne({_id: ObjectId(requestID)});
        if (!existsUser) {
            errors[400].message = "user not found in server.";
            return res.status(errors[400].code).send(errors[400]);
        }
        const deleted = await getDbInstance().collection("cart").deleteOne({_id: ObjectId(id)});
        if (deleted.deletedCount === 0) {
            errors[400].message = "no cart product removed.";
            return res.status(errors[400].code).send(errors[400]);
        }
        return res.status(200).send({code: 200, message: "cart product deleted successfully"});
    } catch (_) {
        errors[400].message = "missing product id in params";
        return res.status(errors[400].code).send(errors[400]);
    }
});

export default router;