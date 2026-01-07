import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";
import { FaReact, FaDatabase, FaCloud, FaRobot } from "react-icons/fa";
import { supabase } from "../../lib/supabase";

const servicesData = [
  {
    icon: <FaRobot />,
    title: "Generative AI Applications",
    description:
      "Building AI-powered applications using LLM APIs, chatbots, and prompt-based workflows for real-world use cases.",
  },
  {
    icon: <FaReact />,
    title: "Web & SaaS Development",
    description:
      "Developing modern web and SaaS applications using React, Tailwind CSS, and clean component-based architecture.",
  },
  {
    icon: <FaDatabase />,
    title: "Backend & Databases",
    description:
      "Designing backend logic, authentication, and databases using Supabase and REST APIs.",
  },
  {
    icon: <FaCloud />,
    title: "Deployment & Cloud",
    description:
      "Deploying and managing applications using cloud platforms like Vercel with scalable and reliable setups.",
  },
];

const Services = () => {
  const fullText = "Services as GenAI Developer";
  const [displayedText, setDisplayedText] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText.charAt(index));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(""), 3000);
  };

  const handleDownload = async (e) => {
    e.preventDefault();
    if (!name || !email) {
      showToast("Please fill in both name and email!");
      return;
    }

    const firstName = name.trim().split(" ")[0].toLowerCase();
    if (!email.toLowerCase().includes(firstName)) {
      showToast("Name and email do not match!");
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("contacts").insert([
        {
          name,
          email,
          subject: "Resume Download",
          message: "User downloaded resume",
        },
      ]);

      if (error) {
        showToast("Something went wrong. Try again.");
        setIsSubmitting(false);
        return;
      }

      const link = document.createElement("a");
      link.href = "/resume.pdf";
      link.download = "Neeraj_Kumar_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setName("");
      setEmail("");
      setShowModal(false);
      showToast("✅ Resume downloaded successfully!");
    } catch {
      showToast("Unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative h-full flex flex-col overflow-hidden">
      {/* Toast */}
      {toast && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-600 bg-opacity-95 text-white px-6 py-3 rounded-lg shadow-2xl z-50 animate-slideDown">
          {toast}
        </div>
      )}

      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/hero.webm" type="video/webm" />
      </video>

      <div className="absolute inset-0 bg-black/30 z-10"></div>

      {/* Content */}
      <div className="container mx-auto relative z-20 flex flex-col items-center pt-[120px] md:pt-[140px]">
        <Circles />

        {/* Typewriter Heading */}
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center">
          {displayedText}
          <span className="inline-block w-1 bg-white animate-blink ml-1"></span>
        </h1>

        {/* Services Grid */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full px-6 lg:px-0"
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.1 * index)}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-accent hover:text-black transition-all duration-300"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-white/80">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Download Button */}
        <motion.button
          onClick={() => setShowModal(true)}
          variants={fadeIn("up", 0.6)}
          className="mt-16 px-8 py-4 bg-accent text-black font-medium rounded-full hover:bg-white hover:text-accent transition-all duration-300"
        >
          Download Resume
        </motion.button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 w-11/12 max-w-md">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Enter your details
            </h2>
            <form className="flex flex-col gap-4" onSubmit={handleDownload}>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-accent text-black"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-accent text-black"
                required
              />
              <div className="flex justify-between mt-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded-full border border-gray-400 text-gray-700"
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

      <Bulb />

      <style jsx>{`
        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
        @keyframes slideDown {
          0% { transform: translate(-50%, -100%); opacity: 0; }
          100% { transform: translate(-50%, 0); opacity: 1; }
        }
        .animate-slideDown {
          animation: slideDown 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Services;
