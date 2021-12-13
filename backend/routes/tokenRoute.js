import express from 'express'

import { authUser, getUsers } from '../controller/tokenController.js'

import { protectToken } from '../jwt/generateJWT.js'

const router = express.Router()

router.post('/login', authUser)
router.get('/:id', protectToken, getUsers)

export default router
