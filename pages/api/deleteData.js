import { getToken } from "@/utils/helper";
import { verifyJwtToken } from "@/lib/auth";
import {
  addInvoiceToUserDoc,
  deleteDataFromFirebase,
  getDataWithUid,
} from "@/lib/firebase";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const token = await getToken(req.headers.cookie);
    const { id } = await verifyJwtToken(token);
    console.log(req.body);
    //? token and id is valid?
    if (!token) {
      res.status(401).json({ message: "Unauthorized : Token is not valid!" });
    }
    if (!id) {
      res.status(401).json({ message: "Unauthorized : ID is not valid!" });
    }
    //* if everything ok. So delete it
    let allData = await getDataWithUid(id);

    if (!allData) {
      return res.status(404).json({ message: "Data not found." });
    }

    let indexOfData = await allData.invoices.findIndex(
      (elem) => elem.id === req.body
    );
    await deleteDataFromFirebase(id, indexOfData);

    res.status(200).json({ message: "Data deleted successfully." });
  } else {
    res.status(405).json({ message: "Method not allowed." });
  }
}
