"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { socials } from "./Socials";

const HeroSection = () => {
  return (
    <section className="">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-4xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-white bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              Hello I'm
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Valentine",
                1000,
                "a Web Developer",
                1000,
                // "Mobile Developer",
                // 1000,
                // "UI/UX Designer",
                // 1000,
              ]}
              wrapper="span"
              speed={10}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Web Developer with 2+ years of experience in crafting dynamic
            designs and ideas into clean, responsive and user-friendly web
            applications.
          </p>
          <div className=" flex items-center gap-6 justify-center w-full sm:w-fit mb-6  text-white">
            {socials.map((social, index) => {
              const Icon = social.icon;
              return (
                <Link
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:scale-110 hover:text-white border p-1 rounded-full transition duration-300 ease-in-out"
                >
                  <Icon size={30} />
                </Link>
              );
            })}
            <Link href="mailto:nnaemeka.obiefuna@gmail.com" target="_blank" rel="noopener noreferrer">
            <button className="border rounded-md p-1.5 cursor-pointer hover:scale-110 hover:bg-white hover:text-gray-800">
              Let's Talk{" "}
            </button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/Hero-removebg-preview.png"
              alt="hero image"
              className="absolute rounded-full object-contain transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
