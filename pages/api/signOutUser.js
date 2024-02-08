export default async function helper(req, res) {
  const { cookie } = req.headers;
  console.log(cookie);

  if (!cookie) {
    res.status(400).json({ message: "You have already logged out." });
    return;
  }
  res.setHeader(
    "Set-Cookie",
    `token=; HttpOnly; Secure; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT`
  );

  res.status(200).json({ message: "Cookie successfully deleted." });
}
