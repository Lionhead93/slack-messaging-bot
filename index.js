import dotenv from 'dotenv'
import express from 'express'
import messages from './api/messages/index.js'

dotenv.config()

const PORT = process.env.PORT

const app = express()

app.use(express.json())

app.use('/message', messages)

app.listen(PORT, () => console.log(`App running on port ${PORT}`))
