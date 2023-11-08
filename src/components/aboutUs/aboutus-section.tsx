import { sideInFromLeft, sideInFromRight } from "@/utils/motion";
import { motion } from "framer-motion";
import React from "react";

const AboutUsSection = () => {
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
        initial="hidden"
        animate="visible"
        className="flex flex-col justify-center items-center gap-10 "
      >
        <div className="flex gap-20  justify-center p-10">
          <motion.div variants={sideInFromLeft(0.5)} className="  p-3 shadow-md w-[40%]">
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
            variants={sideInFromRight(0.5)}
            className="bg-red-100 w-[40%]"
          >
            nf .jebkjfbbef
          </motion.div>
        </div>
        <motion.div variants={sideInFromLeft(0.5)}>
          kdwjbfwufbwdvbwbieb
        </motion.div>
        <motion.div variants={sideInFromLeft(0.5)}>
          kdwjbfwufbwdvbwbieb
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutUsSection;
