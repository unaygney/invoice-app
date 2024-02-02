import { login } from "@/lib/firebase";

export default async function handler(req, res) {
  const { loginEmail, loginPassword } = req.body;

  if (!loginEmail || !loginPassword) {
    res.status(400).json("No Prompt Provided!");
  }

  try {
    const loginUser = await login(loginEmail, loginPassword);
    const userToken = loginUser.uid;

    res.setHeader(
      "Set-Cookie",
      `token=${userToken}; HttpOnly; Secure; Path=/; Max-Age=3600`
    );

    res.status(200).json({
      success: true,
      message: "User data received successfully",
    });
  } catch (error) {
    console.log("Error Processing user data", error);
    res.status(500).json({ success: false, message: "Interval Server Error" });
  }
}
