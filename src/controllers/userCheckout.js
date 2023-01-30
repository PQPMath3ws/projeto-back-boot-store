import { ObjectId } from "mongodb";
import { getDbInstance } from "../config/database.js"

export async function checkOut(req, res) {
    //variables from front side
    const { user, valueTotal, freight, products } = req.body

    //variables of function

    const timeElapsed = Date.now();
    const today = new Date(timeElapsed).toLocaleDateString("pt-BR");

    try {
        await getDbInstance().collection('userPurchases').insertOne({
            userId: user,
            date: today,
            valueTotal: valueTotal,
            freight: freight,
            products: products
        })

        await getDbInstance().collection("cart").deleteMany({userId: ObjectId(user)});

        res.status(201).send('Sua compra foi finalizada com sucesso')
    } catch (error) {
        res.status(500).status(error)
    }

}

