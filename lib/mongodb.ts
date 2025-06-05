import { MongoClient } from "mongodb"

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/portfolio"
const MONGODB_DB = process.env.MONGODB_DB || "portfolio"

// Check if we have a cached connection
let cachedClient: any = null
let cachedDb: any = null

export async function connectToDatabase() {
  // If we have a cached connection, use it
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb }
  }

  // If no cached connection, create a new one
  const client = await MongoClient.connect(MONGODB_URI)
  const db = client.db(MONGODB_DB)

  // Cache the connection
  cachedClient = client
  cachedDb = db

  return { client, db }
}
