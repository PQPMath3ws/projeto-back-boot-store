import { getDbInstance } from "../config/database.js"

export async function checkOut(req, res) {
    //variables from front side
    const { user, valueTotal, freight, products } = req.body

    //variables of function

    const timeElapsed = Date.now();
    const today = new Date(timeElapsed).toLocaleDateString("pt-BR");

    try {
        await getDbInstance.collection('userPurchases').insertOne({
            user: user,
            date: today,
            valueTotal: valueTotal,
            freight: freight,
            products: products
        })

        res.status(201).send('Sua compra foi finalizada com sucesso')
    } catch (error) {
        res.status(500).status(error)
    }

}

