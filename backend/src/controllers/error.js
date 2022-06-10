import { ApiError } from '../utils/error.js'

export const errorHandler = (error, req, res, next) => {
  console.error(error)

  if (res.writableEnded) return next()

  if (error instanceof ApiError) {
    return res.status(error.statusCode).json({
      message: error.rawMessage,
    })
  }

  res.status(500).end()
}
