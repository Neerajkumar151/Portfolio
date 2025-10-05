import Link from "next/link";

import {
  RiGithubLine,
  RiLinkedinLine,
  RiTwitterLine,
  RiMailFill
} from "react-icons/ri";

import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si"; // new imports

export const socialData = [
  {
    name: "Twitter",
    link: "https://x.com/neerajkumar1715",
    Icon: RiTwitterLine,
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/neerajkumar1517/",
    Icon: RiLinkedinLine,
  },
  {
    name: "Mail",
    link: "mailto:thakurneerajkumar17@gmail.com",
    Icon: RiMailFill,
  },
  {
    name: "Github",
    link: "https://github.com/Neerajkumar151",
    Icon: RiGithubLine,
  },
  {
    name: "LeetCode",
    link: "https://leetcode.com/u/neerajkumar17/",
    Icon: SiLeetcode,
  },
  {
    name: "GFG",
    link: "https://www.geeksforgeeks.org/user/thakurneeraj1517/",
    Icon: SiGeeksforgeeks,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
