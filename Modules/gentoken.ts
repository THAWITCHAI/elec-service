import jwt from "jsonwebtoken"

export async function decode(token: string) {
    try {
        const data_token = await jwt.verify(token, 'shhhhh', { algorithms: ['HS256'] })
        console.log(data_token)
        return data_token
    } catch (error) {
        console.log(error)
        return null
    }
}
export const encode = (data: any) => {
    const token = jwt.sign({ token: data }, 'shhhhh', { algorithm: 'HS256' })
    console.log(token)
    return token
}
