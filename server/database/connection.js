const mongoose = require('mongoose')
const { MongoMemoryServer } = require('mongodb-memory-server')

const databaseUrl =
  process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/argentBankDB'

let memoryServer

const isLocalConnectionRefused = error =>
  /ECONNREFUSED/.test(String(error)) &&
  /^mongodb:\/\/(localhost|127\.0\.0\.1)/.test(databaseUrl)

module.exports = async () => {
  try {
    await mongoose.connect(databaseUrl)
    console.log('Database successfully connected')
    return
  } catch (error) {
    if (!isLocalConnectionRefused(error)) {
      console.error(`Database Connectivity Error: ${error}`)
      throw error
    }

    console.warn(
      'Local MongoDB is not available, starting an in-memory database instead.'
    )

    memoryServer = await MongoMemoryServer.create()
    const memoryDatabaseUrl = memoryServer.getUri('argentBankDB')

    await mongoose.connect(memoryDatabaseUrl)
    console.log('In-memory database successfully connected')
  }
}
