let visitCount = 0;

export default function handler(req, res) {
  if (req.method === "GET") {
    visitCount += 1;
    res.status(200).json({ visits: visitCount });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
