//Motion
import { motion } from "framer-motion";
//Variants
import { fadeIn } from "../variants";
//Image
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0 lg:justify-between"
          >
            {/* Text */}
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest <br />
                Work
              </h2>
              <p className="max-w-sm mb-8">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
                doloremque exercitationem inventore ducimus. Animi cum harum
                necessitatibus laborum excepturi ad.
              </p>
              <button className="btn btn-sm">View all my projects</button>
            </div>
            {/* Image */}
            <div className="group relative overflow-hidden border-2 border-white/20 rounded-xl">
              <div>
                {/* Overlay */}
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 cursor-pointer"></div>
                {/* Image */}
                <img
                  src={Img1}
                  alt=""
                  className="group-hover:scale-125 transition-all duration-500"
                />
                {/* Pre-Title */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">UI/UX Design</span>
                </div>
                {/* Title */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">Project Title</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 lg:mb-0 lg:justify-between"
          >
            {/* Image */}
            <div className="group relative overflow-hidden border-2 border-white/20 rounded-xl">
              <div>
                {/* Overlay */}
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 cursor-pointer"></div>
                {/* Image */}
                <img
                  src={Img2}
                  alt=""
                  className="group-hover:scale-125 transition-all duration-500"
                />
                {/* Pre-Title */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">Web Development</span>
                </div>
                {/* Title */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">Project Title</span>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="group relative overflow-hidden border-2 border-white/20 rounded-xl">
              <div>
                {/* Overlay */}
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 cursor-pointer"></div>
                {/* Image */}
                <img
                  src={Img3}
                  alt=""
                  className="group-hover:scale-125 transition-all duration-500"
                />
                {/* Pre-Title */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">Fullstack Development</span>
                </div>
                {/* Title */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">Project Title</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
