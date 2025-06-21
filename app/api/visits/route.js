// import clientPromise from "@/lib/mongodb";

// export default async function handler(req, res) {
//   if (req.method !== "GET") {
//     return res.status(405).json({ message: "Only GET allowed" });
//   }

//   try {
//     const client = await clientPromise;
//     const db = client.db("portfolio"); // 👈 database name
//     const collection = db.collection("visits"); // 👈 collection name

//     const result = await collection.findOneAndUpdate(
//       { name: "profile" },        // filter
//       { $inc: { count: 1 } },     // increment
//       { upsert: true, returnDocument: "after" }
//     );

//     const count = result?.value?.count ?? 1;

//     res.status(200).json({ visits: count });
//   } catch (error) {
//     console.error("Visit Counter Error:", error);
//     res.status(500).json({ message: "Database Error" });
//   }
// }

let visitCount = 0;

export async function GET() {
  visitCount += 1;

  return new Response(JSON.stringify({ visits: visitCount }), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}
