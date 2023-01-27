import { openDbConnection } from "./config/database.js";
import initializeExpressServer from "./config/express.js";
import { registerSomeProducts } from "./services/RegisterProducts.js";

openDbConnection(async (error) => {
    if (error) throw Error("Falha ao conectar ao banco de dados!");
    else {
        initializeExpressServer();
        await registerSomeProducts();
    }
});