import { login } from "@/lib/firebase";
// catches post data from login page
export default async function handler(req, res) {
  // guarding for empty input
  if (!req.email || !req.password) {
    res.status(400).json("No Prompt provided");
  }
  try {
    const data = req.body;
    console.log("Received data:", data);
    const loginUser = await login(data.email, data.password);
    const userToken = loginUser.token;
    console.log(`kullanıcı basariyla giris yaptı ${userToken}`);
    res.status(200).json({
      success: true,
      message: "User data received successfully",
      token: userToken,
    });
  } catch (error) {
    console.error("Error processing user data:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}
