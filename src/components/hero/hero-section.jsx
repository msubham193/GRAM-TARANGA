import StarsCanvas from "../canvas/Stars";
import { Canvas } from "@react-three/fiber";
import Experience from "../Experience";
import { motion } from "framer-motion";

import { TypeAnimation } from "react-type-animation";
const HeroSection = () => {
  return (
    <div className="bg-black h-[750px] w-screen relative z-0 p-20  ">
      <StarsCanvas />{" "}
      <Canvas camera={{ position: [1, 1.5, 3.5], fov: 80 }} shadows>
        <Experience />
      </Canvas>
      <motion.div
        initial="hidden"
        animate="visible"
        className="absolute top-56 w-[50%] text-white text-left"
      >
        <h1 className=" font-extrabold   tracking-wider text-[2.8rem]">
          GRAM TARANG INCLUSIVE DEVELOPMENT SERVICES
        </h1>

        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "A Social Entrepreneurial Outreach of Centurion University of Technology & Management",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
          ]}
          wrapper="span"
          speed={50}
          style={{
            fontSize: "0.9rem",
            display: "inline-block",
            fontStyle: "oblique",
          }}
          repeat={Infinity}
        />
      </motion.div>
    </div>
  );
};

export default HeroSection;
