"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AdminDashboard = () => {
  const handleViewApplications = () => {
    alert("Navigating to view user applications!");
    // Replace with navigation logic, such as a router.push('/applications') if using Next.js
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white flex flex-col items-center">
      {/* Logo and Visionary Statement */}
      <section className="flex flex-col items-center justify-center py-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/smit.png"
            alt="Saylani Logo"
            width={150}
            height={150}
          />
        </motion.div>
        <h1 className="text-4xl font-bold mt-6 text-center">
          Saylani Welfare International Trust
        </h1>
        <p className="text-lg font-semibold mt-4 text-center text-gray-700 dark:text-gray-300 max-w-3xl">
          <strong>
            Empowering communities through compassion, innovation, and
            unwavering commitment to eradicating poverty and uplifting lives.
          </strong>
        </p>
      </section>

      {/* Admin Control Section */}
      <section className="mt-10">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleViewApplications}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all"
        >
          View User Applications
        </motion.button>
      </section>

      {/* Footer */}
      <footer className="p-6 bg-gray-800 text-white text-center mt-auto w-full">
        &copy; 2025 Saylani Welfare International Trust. All rights reserved.
      </footer>
    </div>
  );
};

export default AdminDashboard;