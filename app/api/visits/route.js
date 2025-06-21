import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("portfolio");           // ✅ Database
    const collection = db.collection("visits");  // ✅ Collection

    // Ensure the counter exists first
    const existing = await collection.findOne({ name: "profile" });

    let updatedCount;

    if (existing) {
      // ✅ Increment existing count
      const updateResult = await collection.updateOne(
        { name: "profile" },
        { $inc: { count: 1 } }
      );

      updatedCount = existing.count + 1;
    } else {
      // ✅ Insert the first visit
      await collection.insertOne({ name: "profile", count: 1 });
      updatedCount = 1;
    }

    return new Response(JSON.stringify({ visits: updatedCount }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("❌ Visit counter error:", error);
    return new Response(
      JSON.stringify({ message: "DB error", error: error.message }),
      { status: 500 }
    );
  }
}
