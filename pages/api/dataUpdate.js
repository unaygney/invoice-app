import { getToken } from "@/utils/helper";
import { verifyJwtToken } from "@/lib/auth";
import { getDataWithUid, updateDataFromFirebase } from "@/lib/firebase";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const token = getToken(req.headers.cookie);
    const { id } = await verifyJwtToken(token);

    if (!token && !id) {
      res.status(401).json({ message: "Unauthorized : Invalid Token or UID!" });
    }
    let allData = await getDataWithUid(id);

    if (!allData) {
      return res.status(404).json({ message: "Data not found." });
    }

    let indexOfData = await allData.invoices.findIndex(
      (elem) => elem.id === req.body
    );
    await updateDataFromFirebase(id, indexOfData);
    res.status(200).json({ message: "Data updated successfully." });
  }
}
