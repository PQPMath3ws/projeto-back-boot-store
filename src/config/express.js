import cors from "cors";
import express from "express";

import { closeDbConnection } from "./database.js";

import AllRoutes from "../routes/All.js";
import ProductsRoutes from "../routes/Products.js";
import ShoppingRoutes from "../routes/Shopping.js";
import UserRoutes from "../routes/User.js";

const app = express();
let server = null;

async function onShutDownServer() {
    if (server) {
        closeDbConnection((error) => {
            if (error) throw Error("Falha ao desconectar do banco de dados!");
            server.close(() => {
                process.exit(0);
            });
        });
    }
}

function initializeServer() {
    if (!server) {
        app.use(cors());
        app.use(express.json());

        app.use(UserRoutes);
        app.use(ProductsRoutes);
        app.use(ShoppingRoutes);
        app.use(AllRoutes);

        server = app.listen(5000);
    }

    process.on("SIGTERM", onShutDownServer);
    process.on("SIGINT", onShutDownServer);
}

export default initializeServer;