import { Router } from "express";

import { checkOut } from '../controllers/userCheckout.js'
import { validateSchema } from '../middlewares/validateSchema.js'
import { userCheckoutSchema } from '../schemas/userCheckoutSchema.js'

const cartRouter = Router()

cartRouter.post('/checkout', validateSchema(userCheckoutSchema), checkOut)

export default cartRouter