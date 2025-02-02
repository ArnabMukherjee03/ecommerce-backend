import express from 'express'
import dotenv from 'dotenv'
import logger from './config/logger'
import morgan from 'morgan'
import { morganFormat } from './config/constant'

dotenv.config()

const app = express()

app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(' ')[0],
          url: message.split(' ')[1],
          status: message.split(' ')[2],
          responseTime: message.split(' ')[3],
        }
        logger.info(JSON.stringify(logObject))
      },
    },
  })
)

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Server is healthy',
    timestamp: new Date(),
  })
})

export default app