"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Loader from "./Loader";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const UserDashboard = () => {
  const { data: session, status } = useSession();
  const userdata = session?.user;
  const router = useRouter();

  
  // Redirect to /login when session is null (user signs out)
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (!userdata) {
    return <Loader />;
  }
  const loanCategories = [
    {
      title: "Wedding Loans",
      subcategories: ["Valima", "Furniture", "Valima Food", "Jahez"],
      maxLoan: "PKR 5 Lakh",
      loanPeriod: "3 years",
    },
    {
      title: "Home Construction Loans",
      subcategories: ["Structure", "Finishing", "Loan"],
      maxLoan: "PKR 10 Lakh",
      loanPeriod: "5 years",
    },
    {
      title: "Business Startup Loans",
      subcategories: [
        "Buy Stall",
        "Advance Rent for Shop",
        "Shop Assets",
        "Shop Machinery",
      ],
      maxLoan: "PKR 10 Lakh",
      loanPeriod: "5 years",
    },
    {
      title: "Education Loans",
      subcategories: ["University Fees", "Child Fees Loan"],
      maxLoan: "Based on requirement",
      loanPeriod: "4 years",
    },
  ];

  const [modalData, setModalData] = useState({
    visible: false,
    category: "",
  });

  const [userData, setUserData] = useState({
    cnic: "",
    email: "",
    name: "",
    loanAmount: "",
    selectedCategory: "",
  });

  const openModal = (category) => {
    setModalData({ visible: true, category });
  };

  const closeModal = () => {
    setModalData({ visible: false, category: "" });
    setUserData({ cnic: "", email: "", name: "", loanAmount: "", selectedCategory: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = () => {
    alert(
      `Category: ${modalData.category}\nSelected Category: ${userData.selectedCategory}\nLoan Amount: ${userData.loanAmount}\nCNIC: ${userData.cnic}\nEmail: ${userData.email}\nName: ${userData.name}`
    );
    closeModal();
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      {/* Logo Section */}
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
      Empowering communities through compassion, innovation, and unwavering
      commitment to eradicating poverty and uplifting lives.
    </strong>
  </p>
      </section>
        

      {/* Loan Categories Section */}
      <section className="p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Loan Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {loanCategories.map((category, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg"
            >
              <h3 className="text-2xl font-semibold">{category.title}</h3>
              <p className="mt-2">
                <strong>Max Loan:</strong> {category.maxLoan}
              </p>
              <p>
                <strong>Loan Period:</strong> {category.loanPeriod}
              </p>
              <h4 className="font-bold mt-4">Subcategories:</h4>
              <ul className="list-disc ml-5 mt-2 text-sm">
                {category.subcategories.map((sub, subIndex) => (
                  <li key={subIndex}>{sub}</li>
                ))}
              </ul>
              <button
                className="mt-4 w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                onClick={() => openModal(category.title)}
              >
                Proceed
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {modalData.visible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Apply for {modalData.category}</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">CNIC</label>
                <input
                  type="text"
                  name="cnic"
                  value={userData.cnic}
                  onChange={handleInputChange}
                  className="w-full text-black p-2 rounded border dark:border-gray-600"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handleInputChange}
                  className="w-full text-black p-2 rounded border dark:border-gray-600"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={userData.name}
                  onChange={handleInputChange}
                  className="w-full text-black p-2 rounded border dark:border-gray-600"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Loan Amount</label>
                <input
                  type="text"
                  name="loanAmount"
                  value={userData.loanAmount}
                  onChange={handleInputChange}
                  className="w-full text-black p-2 rounded border dark:border-gray-600"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Category</label>
                <select
                  name="selectedCategory"
                  value={userData.selectedCategory}
                  onChange={handleInputChange}
                  className="w-full text-black p-2 rounded border dark:border-gray-600"
                >
                  <option value="">Select a Category</option>
                  {loanCategories.map((cat, idx) => (
                    <option key={idx} value={cat.title}>
                      {cat.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="py-2 px-4 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="p-6 bg-gray-800 text-white text-center">
        &copy; 2025 Saylani Welfare International Trust. All rights reserved.
      </footer>
    </div>
  );
};

export default UserDashboard;