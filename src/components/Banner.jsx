// Images
import Image from "../assets/avatar.svg";
//Icons
import { FaGithub, FaYoutube, FaDribbble } from "react-icons/fa";
// Type animation
import { TypeAnimation } from "react-type-animation";
//Motion
import { motion } from "framer-motion";
//Variants
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center lg:text-left font-secondary">
            {/* Heading */}
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="font-bold text-[55px] leading-[0.8] lg:text-[110px]"
            >
              BEN <span>AYDEN</span>
            </motion.h1>
            {/* Sub-heading */}
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="mr-4 text-white">I am a</span>
              <TypeAnimation
                sequence={[
                  "Developer",
                  2000,
                  "Designer",
                  2000,
                  "Youtuber",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            {/* Sub-heading-paragraph */}
            <motion.p
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
              odit necessitatibus illo magni reprehenderit minus?
            </motion.p>
            {/* Buttons */}
            <motion.div
              variants={fadeIn("up", 0.9)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex items-center mx-auto lg:mx-0 gap-x-6 max-w-max mb-12 "
            >
              <button className="btn btn-lg">Contact Me</button>
              <a href="work" className="text-gradient btn-link">
                My Portfolio
              </a>
            </motion.div>
            {/* Socials */}
            <motion.div
              variants={fadeIn("up", 1.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="home">
                <FaYoutube />
              </a>
              <a href="home">
                <FaGithub />
              </a>
              <a href="home">
                <FaDribbble />
              </a>
            </motion.div>
          </div>
          {/* Hero image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
