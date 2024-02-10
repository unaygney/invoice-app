import { login } from "@/lib/firebase";
import { SignJWT } from "jose";
import { getJwtSecretKey } from "@/lib/auth";

export default async function handler(req, res) {
  const { loginEmail, loginPassword } = req.body;

  if (!loginEmail || !loginPassword) {
    res.status(400).json("No Prompt Provided!");
  }

  try {
    const loginUser = await login(loginEmail, loginPassword);
    const token = await new SignJWT({
      email: loginEmail,
      role: "user",
      id: loginUser.uid,
    })
      .setProtectedHeader({
        alg: "HS256",
      })
      .setIssuedAt()
      .setExpirationTime("1h")
      .sign(getJwtSecretKey());

    res.setHeader("Set-Cookie", `token=${token}; HttpOnly; Secure; Path=/;`);

    res.status(200).json({
      success: true,
      message: "User data received successfully",
      user: loginUser,
    });
  } catch (error) {
    console.log("Error Processing user data", error);
    res.status(500).json({ success: false, message: "Interval Server Error" });
  }
}
