import React from "react";
import DashboardContainer from "@/containers/DashboardContainer";
import { getOrders } from "@/lib/firebase";

function Dashboard() {
  const orders = getOrders();

  return <DashboardContainer orders={orders} />;
}

export default Dashboard;
