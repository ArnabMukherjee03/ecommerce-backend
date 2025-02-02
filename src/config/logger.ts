import { createLogger, format, transports } from 'winston'
const { combine, timestamp, json, colorize } = format

// Custom format for console logging with colors
const consoleLogFormat = format.combine(
  format.colorize(),
  format.printf((info) => {
    const { level, message, timestamp } = info as {
      level: string;
      message: unknown;
      timestamp: string;
    }
    const messageString = typeof message === 'object' ? JSON.stringify(message) : message
    return `${timestamp} [${level}]  ${messageString}`
  })
)

const logger = createLogger({
  level: 'info',
  format: combine(colorize(), timestamp(), json()),
  transports: [
    new transports.Console({
      format: consoleLogFormat,
    }),
    new transports.File({ filename: 'app.log' }),
  ],
})

export default logger