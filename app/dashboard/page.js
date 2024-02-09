import React from "react";
import DashboardContainer from "@/containers/DashboardContainer";
import { verifyJwtToken } from "@/lib/auth";
import { headers } from "next/headers";
import { getToken } from "@/utils/helper";
import { getDataWithUid } from "@/lib/firebase";
import { notFound } from "next/navigation";

export default async function Dashboard() {
  const token = await getToken(headers().get("cookie"));
  const payload = await verifyJwtToken(token);
  const data = await getDataWithUid("5a61a25925cbb65e");

  if (!data) {
    notFound();
  }

  return <DashboardContainer data={data} />;
}
