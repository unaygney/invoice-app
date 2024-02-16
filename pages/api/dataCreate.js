import { checkEmptyFields, getToken } from "@/utils/helper";
import { verifyJwtToken } from "@/lib/auth";
import { addInvoiceToUserDoc } from "@/lib/firebase";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const token = getToken(req.headers.cookie);
    const { id } = await verifyJwtToken(token);

    if (!token && !id) {
      res.status(401).json({ message: "Unauthorized : Invalid Token or UID!" });
    }
    //? is all data keys has a key proporties?
    if (checkEmptyFields(req.body)) {
      await addInvoiceToUserDoc(id, req.body);
      res.status(200).json({ message: "Data created successfully!" });
    }
  }
  // * only accepted post method
  res.status(400).json({ message: "only accepted post method" });
}
