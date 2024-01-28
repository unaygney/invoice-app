// catches post data from login page
export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const data = req.body;
      console.log("Received data:", data);
      res
        .status(200)
        .json({ success: true, message: "User data received successfully" });
    } catch (error) {
      console.error("Error processing user data:", error);
      res
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ success: false, message: "Method Not Allowed" });
  }
}
