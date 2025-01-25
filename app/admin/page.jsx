"use client";

import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import Loader from "@/components/Loader";

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
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-6">Admin Panel</h1>
       
    </div>
  );
}
