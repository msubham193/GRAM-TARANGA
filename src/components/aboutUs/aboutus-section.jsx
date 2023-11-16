import { sideInFromRight } from "@/utils/motion";
import { motion, useInView } from "framer-motion";
import Drone1 from "../../assets/drone1.svg";
import Drone2 from "../../assets/drone2.svg";
import Drone3 from "../../assets/drone3.jpg";
import { useRef } from "react";

const AboutUsSection = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  return (
    <div className="h-screen w-full p-10 mt-7">
      <div className=" text-center ">
        {" "}
        <h1 className=" font-bold  font-poppins text-4xl">About Us</h1>
        <p className="text-slate-600 font-poppins text-lg mt-3">
          About Gramtarang Inclusive Development Services
        </p>
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate="visible"
        className="flex flex-col justify-center items-center gap-10 "
      >
        <div className="flex gap-20  justify-center p-10 ">
          <motion.div
            style={{
              transform: isInView ? "none" : "translateX(-100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            initial="initial"
            className="  p-3  w-[40%]"
          >
            Gram Txarang Inclusive Development Services Private Limited (GTIDS)
            is a certified Fintech Company incorporated under company’s act in
            April 2011. It is started by people with extensive experience in
            rural development space and even pioneered and executed many rural
            development initiatives successfully. GTIDS is committed to meet the
            challenge of mainstreaming rural India which does not have access to
            proper access to market-led and affordable financial solutions.
            GTIDS worked as a sub-contractor for Atyati Technology till June
            2019 & recruited over 8500 Bank Mitras in 25,000 villages across 14
            states for 13 Banks. GTIDS opened over 1.6 Crore no-frills accounts,
            mobilized Fixed Deposits tuning 200 Crores, savings tuning 2,000
            Crores and collected over 400 crore NPAs from the beneficiaries on
            behalf of Partner Banks. GTIDS disbursed more than Rs 400 Crore
            Microfinance loans to over 1,60,000 beneficiaries under Mudhra
            Scheme.
          </motion.div>
          <motion.div
            style={{
              transform: isInView ? "none" : "translateX(100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className=" w-[40%]"
          >
            <img src={Drone1} alt="" className="h-[400px] w-[500px]" />
          </motion.div>
        </div>
        <div className="flex gap-20  justify-center p-10">
          <motion.div
            style={{
              transform: isInView ? "none" : "translateX(-100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="  p-3  w-[40%]"
          >
            <img src={Drone2} alt="" className="h-[400px] w-[500px]" />
          </motion.div>
          <motion.div variants={sideInFromRight(0.5)} className=" w-[40%]">
            Gram Tarang Inclusive Development Services Private Limited (GTIDS)
            is a certified Fintech Company incorporated under company’s act in
            April 2011. It is started by people with extensive experience in
            rural development space and even pioneered and executed many rural
            development initiatives successfully. GTIDS is committed to meet the
            challenge of mainstreaming rural India which does not have access to
            proper access to market-led and affordable financial solutions.
            GTIDS worked as a sub-contractor for Atyati Technology till June
            2019 & recruited over 8500 Bank Mitras in 25,000 villages across 14
            states for 13 Banks. GTIDS opened over 1.6 Crore no-frills accounts,
            mobilized Fixed Deposits tuning 200 Crores, savings tuning 2,000
            Crores and collected over 400 crore NPAs from the beneficiaries on
            behalf of Partner Banks. GTIDS disbursed more than Rs 400 Crore
            Microfinance loans to over 1,60,000 beneficiaries under Mudhra
            Scheme.
          </motion.div>
        </div>
        <div className="flex gap-20  justify-center p-10">
          <motion.div
            style={{
              transform: isInView ? "none" : "translateX(-100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="  p-3  w-[40%]"
          >
            Gram Tarang Inclusive Development Services Private Limited (GTIDS)
            is a certified Fintech Company incorporated under company’s act in
            April 2011. It is started by people with extensive experience in
            rural development space and even pioneered and executed many rural
            development initiatives successfully. GTIDS is committed to meet the
            challenge of mainstreaming rural India which does not have access to
            proper access to market-led and affordable financial solutions.
            GTIDS worked as a sub-contractor for Atyati Technology till June
            2019 & recruited over 8500 Bank Mitras in 25,000 villages across 14
            states for 13 Banks. GTIDS opened over 1.6 Crore no-frills accounts,
            mobilized Fixed Deposits tuning 200 Crores, savings tuning 2,000
            Crores and collected over 400 crore NPAs from the beneficiaries on
            behalf of Partner Banks. GTIDS disbursed more than Rs 400 Crore
            Microfinance loans to over 1,60,000 beneficiaries under Mudhra
            Scheme.
          </motion.div>
          <motion.div
            style={{
              transform: isInView ? "none" : "translateX(100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className=" w-[40%]"
          >
            <img src={Drone3} alt="" className="h-[400px] w-[500px]" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUsSection;
