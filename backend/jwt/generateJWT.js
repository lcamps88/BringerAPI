import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../data.js'

export const protectToken = asyncHandler(async (req, res, next) => {
  let token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1]
      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      const users = await User.find(({ id }) => id === decoded.id)

      console.log('decoded: ', decoded.id)
      console.log('user', users.id)

      console.log('token', token)
      next()
    } catch (error) {
      console.error(error)
      res.status(401)
      throw new Error('Not authorized, token failed')
    }
  }
  if (!token) {
    res.status(401)
    throw new Error('Not authorized, no token')
  }
})
