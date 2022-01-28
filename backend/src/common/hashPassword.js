import bcrypt from 'bcryptjs';

const hashPassword = (password) => {
    const salt = bcrypt.genSaltSync(10);
    const passwordBcrypt = bcrypt.hashSync(password, salt);
    return passwordBcrypt;
}

export default hashPassword;