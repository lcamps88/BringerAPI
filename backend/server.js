import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import User from './routes/tokenRoute.js'
const app = express()

dotenv.config()

app.use(express.json())

app.use(cors())

app.use('/api/jwt', User)

app.get('/', (req, res) => {
  res.send('API is running...')
})



const PORT = process.env.PORT || 5005

app.listen(PORT, console.log(`Server running on port ${PORT}`))
