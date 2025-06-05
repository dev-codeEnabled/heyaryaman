import { NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/mongodb"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Connect to MongoDB
    const { db } = await connectToDatabase()

    // Insert the message
    const result = await db.collection("messages").insertOne({
      name,
      email,
      subject,
      message,
      createdAt: new Date(),
    })

    return NextResponse.json({
      success: true,
      messageId: result.insertedId,
    })
  } catch (error) {
    console.error("Error in contact API:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
