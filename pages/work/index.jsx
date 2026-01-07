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
              Explore <span className="text-accent font-semibold">AI-powered and full-stack projects</span>{" "}
              that showcase my experience building{" "}
              <span className="text-accent font-semibold">Generative AI applications</span>,{" "}
              <span className="text-accent font-semibold">interactive web platforms</span>, and{" "}
              real-world solutions using{" "}
              <span className="text-accent font-semibold">LLM APIs, chatbots, and backend systems</span>.
              These projects reflect my focus on writing clean code, solving problems, and applying{" "}
              <span className="text-accent font-semibold">core CS concepts</span> such as{" "}
              <span className="text-accent font-semibold">OOP, DBMS, SQL, and Computer Networks</span>.
            </motion.p>

            <motion.p
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-accent font-semibold uppercase tracking-wider text-sm sm:text-base mt-2"
            >
              Click on any project to view details or explore it live 🚀
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
