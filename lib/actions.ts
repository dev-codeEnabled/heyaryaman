"use server"

import { connectToDatabase } from "@/lib/mongodb"

export async function sendContactForm(formData) {
  try {
    const { db } = await connectToDatabase()

    const result = await db.collection("messages").insertOne({
      ...formData,
      createdAt: new Date(),
    })

    return { success: true, id: result.insertedId }
  } catch (error) {
    console.error("Error sending contact form:", error)
    throw new Error("Failed to send message")
  }
}
