import bcrypt from 'bcryptjs'
const hash_password = async (password: string) => {
    const hash = await bcrypt.hash(password, 10);
    return hash
}

const compare_password = (password: string, password_hash: string) => {
    bcrypt.compare(password, password_hash, function (err, result) {
        result == true
    });
    return
}

export default {
    hash_password,
    compare_password
}