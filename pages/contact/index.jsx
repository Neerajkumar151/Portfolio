import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { fadeIn } from "../../variants";
import { useState } from "react";

import toast, { Toaster } from "react-hot-toast"; // import toast

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
  event.preventDefault();
  setIsLoading(true);

  const form = event.target;
  const formData = new FormData(form);

  const name = formData.get("name")?.trim();
  const email = formData.get("email")?.trim();
  const subject = formData.get("subject")?.trim();
  const message = formData.get("message")?.trim();

  if (!name || !email || !subject || !message) {
    toast.success("Please fill all the fields 😊");
    setIsLoading(false);
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    toast.success("Please enter a valid email 😊");
    setIsLoading(false);
    return;
  }

  toast.success("Thank you! I will get back to you ASAP 🚀");
  form.reset();
  setIsLoading(false);
};


  return (
    <div className="relative h-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0 pointer-events-none"
      >
        <source src="/videos/skills-bg.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-primary/20 z-10 pointer-events-none"></div>

      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full relative z-20">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12 text-white"
          >
            Let's <span className="text-accent">connect.</span>
          </motion.h2>

          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            onSubmit={handleSubmit}
            autoComplete="off"
            autoCapitalize="off"
          >
            {/* input group */}
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input bg-white/0 text-white placeholder-white/70 border border-white/40 focus:bg-white/30 focus:border-accent focus:outline-none shadow-md"
                disabled={isLoading}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                className="input bg-white/0 text-white placeholder-white/70 border border-white/40 focus:bg-white/30 focus:border-accent focus:outline-none shadow-md"
                disabled={isLoading}
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input bg-white/0 text-white placeholder-white/70 border border-white/40 focus:bg-white/30 focus:border-accent focus:outline-none shadow-md"
              disabled={isLoading}
              required
            />
            <textarea
              name="message"
              placeholder="Message..."
              className="textarea bg-white/0 text-white placeholder-white/70 border border-white/40 focus:bg-white/30 focus:border-accent focus:outline-none shadow-md"
              disabled={isLoading}
              required
            />
            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group relative bg-white/10 text-white hover:bg-accent hover:text-black"
              disabled={isLoading}
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-10 transition-all duration-500">
                Let's talk
              </span>

              <BsArrowRight
                className="-translate-y-[120%] opacity-10 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
              />
            </button>
          </motion.form>
        </div>
      </div>

      {/* Add Toaster component at root */}
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
};

export default Contact;

