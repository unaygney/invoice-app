import { createUser } from "@/lib/firebase";

export default async function handler(req, res) {
  const promt = req.body;
  if (!promt) {
    res.status(400).json("Prompt must not be empty");
    return;
  }
  try {
    const createNewUser = await createUser(promt.email, promt.password);
    res.status(200).json("User created successfully");
  } catch (error) {
    res.status(500).json("Internal Server Error");
  }
}
