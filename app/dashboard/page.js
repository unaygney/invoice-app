import React from "react";
import DashboardContainer from "@/containers/DashboardContainer";
import { headers } from "next/headers";

export default async function Dashboard() {
  const headersList = headers();
  console.log(headersList);

  return <DashboardContainer />;
  // return (
  //   <div>
  //     <h1>Hello</h1>
  //     <pre>{JSON.stringify(Array.from(headersList.entries()), null, 2)}</pre>
  //   </div>
  // );
}
