import db from '../models'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
require('dotenv').config()

const hashPassword = password => bcrypt.hashSync(password, bcrypt.genSaltSync(12))

export const registerService = ({email, password}) => new Promise(async(resolve, reject) => {
    try {
        const response = await db.User.findOrCreate({
            where: {email},
            defaults: { // find by email, if cannot find -> create new with email, pswrd
                email,
                password: hashPassword(password)
            }
        })
         // create token new is created, token exprires in 2 days
        const token = response[1] && jwt.sign({id: response[0].id, email:response[0].email}, process.env.SECRET_KEY, {expiresIn: '2d'})
        resolve({
            err: token? 0 : 2,
            msg: token ? 'Đăng ký thành công !' : 'Email đã được sử dụng. Hãy thử tên khác !',
            token: token || null
        })
    } catch (error) {
        reject(error)
    }
})

export const loginService = ({email, password}) => new Promise(async(resolve, reject) => {
    try {
        const response = await db.User.findOne({
            where: {email},
            raw: true  // return an object with data found or null
        })
        const isCorrectPassword = response && bcrypt.compareSync(password, response.password)
        // create token new is created, token exprires in 2 days
        const token = isCorrectPassword && jwt.sign({id: response.id, email:response.email}, process.env.SECRET_KEY, {expiresIn: '2d'}) 
        resolve({
            err: token? 0 : 2,
            msg: token ? 'Đăng nhập thành công !' : response ? 'Mật khẩu chưa chính xác !' : 'Không tìm thấy email !',
            token: token || null
        })
    } catch (error) {
        reject(error)
    }
})