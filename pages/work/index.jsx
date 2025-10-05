import { motion } from "framer-motion";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import WorkSlider from "../../components/WorkSlider";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="h-full bg-gradient-to-b from-black/80 to-primary/30 py-32 flex items-center relative">
      <Circles />

      <div className="container mx-auto relative z-20">
        <div className="flex flex-col xl:flex-row gap-x-12 gap-y-10 xl:gap-y-0">
          {/* Text Section */}
          <div className="text-center xl:text-left flex flex-col xl:w-[30vw] gap-y-6">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-5xl sm:text-6xl md:text-7xl lg:text-6xl font-extrabold text-white"
            >
              My <span className="text-accent">Projects</span>
            </motion.h2>

            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-white/70 text-base sm:text-lg leading-relaxed max-w-[500px] mx-auto xl:mx-0"
            >
              Explore <span className="text-accent font-semibold">6 hand-picked projects</span> 
              that highlight my journey in{" "}
              <span className="text-accent font-semibold">Frontend Development</span>,{" "}
              <span className="text-accent font-semibold">Problem Solving (DSA)</span>, and{" "}
              leveraging <span className="text-accent font-semibold">AI tools</span> to craft 
              modern, interactive, and user-friendly web applications. Each project demonstrates 
              my passion for building and learning core computer science concepts like{" "}
              <span className="text-accent font-semibold">OOPs, DBMS, SQL, and CN</span>.
            </motion.p>

            <motion.p
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-accent font-semibold uppercase tracking-wider text-sm sm:text-base mt-2"
            >
              Click any project to view details or explore it live 🚀
            </motion.p>
          </div>

          {/* Slider Section */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>

      <Bulb />
    </div>
  );
};

export default Work;
