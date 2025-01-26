"use client";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import UserDashboard from "@/components/UserDashboard";

const Home = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session?.user?.role === "admin") {
      router.push("/admin");
    }
  }, [session, router]);

  return <UserDashboard role={session?.user} />;
};

export default Home;
