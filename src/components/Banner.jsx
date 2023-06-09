// Images
import HeroImage from "../assets/hero.png";
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
          <div className="flex-1 text-center lg:text-left font-primary">
            {/* Heading */}
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="font-bold text-[55px] leading-[0.5] lg:text-[55px] mb-4"
            >
              <span className="text-[80px] tracking-widest block">JERICK</span>
              <br />
              <span>MALUNGCUT</span>
            </motion.h1>
            {/* Sub-heading */}
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 lg:mb-3 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="mr-4 text-white">I&apos;m a</span>
              <TypeAnimation
                sequence={[
                  "Developer",
                  2000,
                  "UI/UX Designer",
                  2000,
                  "Tech Support",
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
              className="mb-8 max-w-lg mx-auto lg:mx-0 font-secondary"
            >
              Welcome to my digital realm! With a diverse skill set encompassing
              development, UI/UX design, and IT support, I&apos;m here to turn
              ideas into reality. Let&apos;s collaborate and bring your vision
              to life.
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
          </div>
          {/* Hero image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[682px] relative z-50"
          >
            <img src={HeroImage} alt="Jerick Malungcut" />
          </motion.div>
        </div>
      </div>

      {/* Circle Animation */}
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </section>
  );
};

export default Banner;
