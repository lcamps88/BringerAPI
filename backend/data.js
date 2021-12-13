import bcrypt from 'bcryptjs'

const users = [
    {
        id: '1',
        user: 'token1',
        name: 'Rose',
        password: bcrypt.hashSync('123456', 10),
    }
]

export default users

//pm.environment.set("TOKEN", pm.response.json().token)