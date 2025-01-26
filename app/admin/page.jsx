"use client";

import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import Loader from "@/components/Loader";
import AdminDashboard from "@/components/AdminDashboard";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <Loader />;
  } else if (status === "unauthenticated") {
    redirect("/login");
  } else if (status === "authenticated" && session?.user?.role !== "admin") {
    redirect("/");
  }
  return (
    <div className="min-h-screen bg-gray-100 ">
      <AdminDashboard/>       
    </div>
  );
}
