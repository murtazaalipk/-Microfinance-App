"use client";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Dashboard({}) {
  const { data: session, status } = useSession();
  const userData = session?.user;
  const router = useRouter();

  
  // Redirect to /login when session is null (user signs out)
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (!userData) {
    return <Loader />;
  }

  const { role, name } = userData;

  return (
    <>
      <h1
        className="text-[#5b6571] text-lg font-signika pl-20 mt-10 mb-10"
        >
       
            
            Hi! {name} 
      
      </h1>
      
    </>
  );
}
