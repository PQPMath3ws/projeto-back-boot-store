import express from "express";

import { getDbInstance } from "../config/database.js";

import errors from "../const/errors.js";

const router = express.Router();

router.all("/api/new-user", async (req, res) => {
    if (req.method !== "GET") return res.status(errors[405].code).send(errors[405]);
    const user = await getDbInstance().collection("user_experience").insertOne(
        {
            ip: req.ip,
            created: new Date(),
        }
    );
    return res.status(200).send({
        token: user.insertedId,
    });
});

export default router;