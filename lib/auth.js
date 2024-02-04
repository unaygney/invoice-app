import { jwtVerify } from "jose";

export const getJwtSecretKey = () => {
  const secretKey = process.env.REACT_APP_SECURE_KEY;
  if (!secretKey) {
    throw new Error("JWT secret key is not available");
  }
  return new TextEncoder().encode(secretKey);
};

export async function verifyJwtToken(token) {
  try {
    const key = getJwtSecretKey();
    const { payload } = await jwtVerify(token, key);
    return payload;
  } catch (error) {
    console.error("Token verification failed:", error);
    return null;
  }
}
