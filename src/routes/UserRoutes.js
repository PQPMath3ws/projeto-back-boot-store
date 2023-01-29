import { Router } from "express";

import { checkOut } from '../controllers/userCheckout.js'

const cartRouter = Router()

cartRouter.post('/checkout', checkOut)

export default cartRouter