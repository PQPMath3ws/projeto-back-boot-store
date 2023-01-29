import joi from 'joi'


export const userCheckoutSchema = joi.object({
    user: joi.string().required(),
    valueTotal: joi.number().required(),
    freight: joi.number().required(),
})