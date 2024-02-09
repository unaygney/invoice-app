import React from "react";
import DashboardContainer from "@/containers/DashboardContainer";
import { getDataWithUid } from "@/lib/firebase";

export default async function Dashboard() {
  const uid = "v3HlQacRvaMUGNAirLC8PXx5LYk1";
  const data = await getDataWithUid(uid);
  console.log(data);
  return <DashboardContainer />;
}
