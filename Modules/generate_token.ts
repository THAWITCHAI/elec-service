import jwt from "jsonwebtoken"

const sign_token = async (data: object | any) => {
    const token = await jwt.sign({ token: data }, String(process.env.PRIVATE_KEY), { algorithm: 'HS256' })
    console.log(token)
    return token
}

export = sign_token