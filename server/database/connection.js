const mongoose = require('mongoose')
const { MongoMemoryServer } = require('mongodb-memory-server')

let mongoServer = null
const databaseUrl = process.env.DATABASE_URL || 'mongodb://localhost/argentBankDB'

module.exports = async () => {
  try {
    // Try to connect to the provided MongoDB URL
    try {
      await mongoose.connect(databaseUrl)
      console.log('Database successfully connected to MongoDB')
    } catch (error) {
      // If connection fails, use in-memory MongoDB
      console.log('MongoDB not available, starting in-memory database...')
      mongoServer = await MongoMemoryServer.create()
      const mongoUri = mongoServer.getUri()
      await mongoose.connect(mongoUri)
      console.log('Database successfully connected to mongodb-memory-server')
    }
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`)
    throw new Error(error)
  }
}

// Cleanup on process exit
process.on('exit', async () => {
  if (mongoServer) {
    await mongoServer.stop()
  }
})