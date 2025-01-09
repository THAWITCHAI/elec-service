import bcrypt from 'bcrypt'
const hash_password = async (password: string) => {
    const hash = await bcrypt.hash(password, 10);
    return hash
}

const compare_password = () => {
    return
}

export default {
    hash_password,
    compare_password
}