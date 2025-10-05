import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaReact,
} from "react-icons/fa";
import {
  SiFigma,
  SiMongodb,
  SiMysql,
  SiC,
  SiCplusplus,
  SiVisualstudiocode,
  SiGithub,
  SiGit,
  SiLeetcode,
  SiGeeksforgeeks,
} from "react-icons/si";

import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [FaHtml5, FaCss3, FaJs, FaReact, SiMysql, SiFigma, SiMongodb],
      },
      { title: "Languages", icons: [SiC, SiCplusplus] },
      {
        title: "Tools & Platforms",
        icons: [SiGithub, SiVisualstudiocode, SiGit, SiLeetcode, SiGeeksforgeeks],
      },
    ],
  },
  {
    title: "Achievements",
    info: [
      {
        title: "Completed 10-week Cloud Computing Virtual Internship by Amazon AWS",
        stage: "2024",
      },
      {
        title: "Built 4+ full-stack projects including Skydrive (Cloud Storage App)",
        stage: "2023 - 2025",
      },
      {
        title: "Active problem solver on LeetCode & GFG, improving DSA skills daily",
        stage: "2024 - Present",
      },
    ],
  },
  {
    title: "Experience",
    info: [
      {
        title: "Frontend Developer (Next.js + Firebase Stack)",
        stage: "2023 - Present",
      },
      {
        title: "Hackathon Participant - Bajaj Finserv Health Hackathon (AI + Node.js)",
        stage: "2025",
      },
    ],
  },
  {
    title: "Education",
    info: [
      {
        title: "B.Tech in Information Technology - G.L. Bajaj Institute of Technology & Management",
        stage: "2022 - 2026",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="relative h-full py-28 text-center xl:text-left overflow-hidden">
      {/* Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-[-40%] left-0 w-full h-[140%] object-cover z-0 pointer-events-none"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>

      <div className="absolute top-[-40%] left-0 w-full h-[140%] bg-primary/5 z-10 pointer-events-none"></div>
      <Circles />

      <div className="container mx-auto h-full flex flex-col xl:flex-row items-center justify-center gap-x-12 gap-y-10 relative z-10 px-4">
        
        {/* Left Section */}
        <div className="flex-1 flex flex-col justify-center items-center xl:items-start text-white">
          {/* Heading */}
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            className="text-3xl md:text-4xl xl:text-[2.8rem] font-bold mb-4 leading-snug text-center xl:text-left"
          >
            neeraj kumar. <br />
            <span className="text-accent">Passion</span> drives innovation,<br />
            and innovation builds the future.
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[560px] text-sm md:text-base leading-relaxed text-white/80 mb-8 text-center xl:text-left"
          >
            I’m <span className="text-accent font-semibold">Neeraj Kumar</span>, a final-year IT student at 
            <span className="text-accent font-semibold"> G.L. Bajaj Institute of Technology and Management</span>. 
            I specialize in <span className="font-semibold">frontend development</span> and love building 
            <span className="font-semibold"> interactive, AI-powered SaaS web applications</span>. 
            I’m passionate about improving my <span className="font-semibold">DSA skills</span>, exploring 
            <span className="font-semibold"> modern tech stacks</span> like Next.js + Firebase,cler,supabase, and building 
            products that merge <span className="font-semibold">design, technology, and innovation</span>.
          </motion.p>

          {/* Counters */}
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center xl:text-left"
          >
            {[
              { end: 6, label: "Completed Projects" },
              { end: 2, label: "Virtual Internships by AWS and Cisco" },
              { end: 300, label: "DSA Problems Solved on Leetcode and GFG" },
              { end: 2, label: "Hackathons Participated" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center xl:items-start">
                <div className="text-2xl md:text-3xl xl:text-4xl font-extrabold text-accent">
                  <CountUp start={0} end={item.end} duration={3} />
                </div>
                <div className="text-xs uppercase tracking-wide max-w-[120px] text-white/70 mt-1">
                  {item.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Section */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          className="flex flex-col w-full xl:max-w-[45%] bg-white/5 p-6 rounded-2xl backdrop-blur-md"
        >
          {/* Tabs */}
          <div className="flex gap-x-6 justify-center xl:justify-start mb-6">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                onClick={() => setIndex(itemI)}
                className={`capitalize cursor-pointer xl:text-lg relative pb-1 
                after:content-[''] after:absolute after:bottom-0 after:left-0 
                after:h-[2px] after:w-0 after:bg-accent after:transition-all
                ${index === itemI ? "text-accent after:w-full" : "text-white/60 hover:text-white"}
                `}
              >
                {item.title}
              </div>
            ))}
          </div>

          {/* Info */}
          <div className="space-y-4 text-white/70">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex flex-col md:flex-row md:items-center gap-2 text-center xl:text-left"
              >
                <div className="font-light">{item.title}</div>
                {item.stage && <span className="hidden md:inline-block">-</span>}
                <div>{item.stage}</div>
                <div className="flex gap-x-4 justify-center md:justify-start">
                  {item.icons?.map((Icon, iconI) => (
                    <Icon key={iconI} className="text-2xl text-white" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
