import React from "react";
import StarsCanvas from "../canvas/Stars";
import { Canvas } from "@react-three/fiber";
import Experience from "../Experience";
import { motion } from "framer-motion";
import { sideInFromLeft } from "@/utils/motion";

const HeroSection = () => {
  return (
    <div className="bg-black h-[700px] relative z-0 p-20 rounded-b-[10rem] ">
      <StarsCanvas />{" "}
      <Canvas camera={{ position: [1, 1.5, 3.5], fov: 80 }} shadows>
        <Experience />
      </Canvas>
      <div className="absolute top-56 w-[50%] text-white text-left">
        <h1 className=" font-extrabold   tracking-wider text-[2.8rem]">
          GRAM TARANGA INCLUSIVE DEVELOPEMENT SERVICES
        </h1>

        <motion.p
          initial={{ x: -200 }}
          animate={{ x: -0.5 }}
          variants={sideInFromLeft(0.5)}
          className="w-[80%] text-slate-300 mt-2 font-poppins text-base font-light"
        >
          A Social Entrepreneurial Outreach of Centurion University of
          Technology & Management
        </motion.p>
      </div>
    </div>
  );
};

export default HeroSection;
