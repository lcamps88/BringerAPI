import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import bcrypt from 'bcryptjs'
import User from '../data.js'

export const authUser = asyncHandler(async (req, res, next) => {
  try {
    const { user, password } = req.body
    console.log("user:",user , password);

    const users = await User.find(({ user }) => user === user)

    if (users && (await bcrypt.compareSync(password, users.password))) {
      res.json({
        id: users._id,
        user: users.user,
        name: users.name,
        token: generateToken(users.id),
      })
    } else {
      res.status(401)
      throw new Error('Invalid email or password')
    }
  } catch (error) {
    next(error)
  }
})


export const getUsers = asyncHandler(async (req, res, next) => {
    try {
      const user = await User.find(({id})=>id=== req.params.id)
  
      if (user) {
        res.json({
            id: user.id,
            user: user.user,
            name: user.name,
            token: generateToken(user.id),
        })
      } else {
        res.status(404)
        throw new Error('User not found')
      }
    } catch (error) {
      next(error)
    }
  })
  