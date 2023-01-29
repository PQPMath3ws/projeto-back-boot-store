import { getDbInstance } from "../config/database.js"

export async function checkOut(req, res) {
    //variables from front side
    const { user } = req.headers
    //const { cartUser } = req.body

    //variables of function

    const timeElapsed = Date.now();
    const today = new Date(timeElapsed).toLocaleDateString("pt-BR");

    try {
        await getDbInstance.collection('userPurchases').insertOne({
            user: user,
            date: today,
            //valueTotal: cartUser.valueTotal,
            //freight: cartUser.freight,
            //products: cartUser.products
        })

        res.status(201).send('Sua compra foi finalizada com sucesso')
    } catch (error) {
        res.status(500).status(error)
    }

}

