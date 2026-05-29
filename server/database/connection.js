const mongoose = require('mongoose')
const { MongoMemoryServer } = require('mongodb-memory-server')
const databaseUrl =
  process.env.DATABASE_URL || 'mongodb://localhost/argentBankDB'

module.exports = async () => {
  let primaryConnectionError

  try {
    await mongoose.connect(databaseUrl)
    console.log('Database successfully connected')
    return
  } catch (error) {
    primaryConnectionError = error
    console.warn(
      `Primary database connection failed (${databaseUrl}). Falling back to mongodb-memory-server.`
    )
    console.warn(error.message)
  }

  try {
    const memoryServer = await MongoMemoryServer.create()
    const memoryDbUrl = memoryServer.getUri()
    await mongoose.connect(memoryDbUrl)
    console.log('Database successfully connected (in-memory fallback)')
  } catch (fallbackError) {
    console.error(`Database Connectivity Error: ${fallbackError}`)
    throw primaryConnectionError || fallbackError
  }
}