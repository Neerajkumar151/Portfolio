import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { supabase } from "../lib/supabase";
import Socials from "../components/Socials";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState("");

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(""), 3000); // hide after 3s
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) {
      showToast("Please fill in both name and email!");
      return;
    }

    // Extract first name
    const firstName = name.trim().split(" ")[0].toLowerCase();

    if (!email.toLowerCase().includes(firstName)) {
      showToast(`Either Your name or Email is Incorrect!!!!`);
      return;
    }

    setIsSubmitting(true);

    try {
      // Save to Supabase
      const { error } = await supabase.from("contacts").insert([
        {
          name,
          email,
          subject: "Resume Download",
          message: "User downloaded resume",
        },
      ]);

      if (error) {
        console.error("Error saving contact:", error.message);
        showToast("Something went wrong! Try again.");
        setIsSubmitting(false);
        return;
      }

      // Trigger resume download
      const link = document.createElement("a");
      link.href = "/resume.pdf";
      link.download = "Neeraj_Kumar_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Reset form and close modal
      setName("");
      setEmail("");
      setShowModal(false);

      showToast("✅ Resume downloaded successfully!");
    } catch (err) {
      console.error(err);
      showToast("Unexpected error occurred. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <header className="absolute z-30 w-full items-center px-16 xl:px-0 xl:h-[90px]">
      {/* Toast */}
{toast && (
  <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-600 bg-opacity-95 text-white px-6 py-3 rounded-lg shadow-2xl z-50 animate-slideDown">
    {toast}
  </div>
)}


      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* Logo */}
          <Link href="/">
            <Image src="/logo.svg" alt="logo" width={300} height={60} priority />
          </Link>

          {/* Right side */}
          <div className="flex items-center gap-x-6">
            <Socials />
            <button
              onClick={() => setShowModal(true)}
              className="px-5 py-2 rounded-full border border-white/50 text-white hover:bg-accent hover:border-accent transition-all duration-300 font-medium"
            >
              Download Resume
            </button>
          </div>
        </div>
      </div>

      {/* Modal Form */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 w-11/12 max-w-md relative">
            <h2 className="text-2xl font-semibold mb-4 text-center">Enter your details</h2>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent text-black placeholder-gray-400"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent text-black placeholder-gray-400"
                required
              />
              <div className="flex justify-between mt-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded-full border border-gray-400 text-gray-700 hover:bg-gray-100 transition"
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-full bg-accent text-black font-medium hover:bg-white hover:text-accent transition"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : "Download"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Toast animation */}
      <style jsx>{`
        @keyframes slideDown {
          0% { transform: translate(-50%, -100%); opacity: 0; }
          100% { transform: translate(-50%, 0); opacity: 1; }
        }
        .animate-slideDown {
          animation: slideDown 0.5s ease-out forwards;
        }
      `}</style>
    </header>
  );
};

export default Header;
