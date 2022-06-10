export class ApiError extends Error {
  constructor(message, statusCode = 500) {
    super(`HTTP ${statusCode}: ${message}`)
    this.statusCode = statusCode
    this.rawMessage = message
  }
}