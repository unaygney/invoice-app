import ViewContainer from "@/containers/ViewContainer";
import { verifyJwtToken } from "@/lib/auth";
import { headers } from "next/headers";
import { getToken } from "@/utils/helper";
import { getDataWithUid } from "@/lib/firebase";
import { notFound, redirect } from "next/navigation";

export default async function ViewPage({ params }) {
  const token = await getToken(headers().get("cookie"));
  const payload = await verifyJwtToken(token);
  const data = await getDataWithUid(payload?.id);
  const filteredData = await data.invoices.find(
    (item) => item.id === params.id
  );

  if (!token || !payload || !data) {
    redirect("/login");
  }

  // if filtered data is empty
  if (!filteredData) {
    return notFound();
  }

  return <ViewContainer params={params.id} data={filteredData} />;
}
