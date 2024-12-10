'use client';
import React from 'react';
import Navbar from './components/Navbar';
import Image from 'next/image';
import { motion } from 'framer-motion'; 
import HeroSectionImage from './asset/download.png';
import aboutImage from './asset/25ae4f07-23e6-48c0-bace-70f4f3980905.jpg';
import {  FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa';
import { MdContactPhone, MdOutlineEmail } from 'react-icons/md';
import { GrResume } from 'react-icons/gr';

const Home = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
  };

  function ClickHere() {
    window.open('.download.png', '_blank');
  }

  function sendEmail() {
    window.location.href = 'mailto areejhassan550@gmail.com?subject=Hello';
  }

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <motion.div
        id="home"
        className="w-full h-screen flex flex-col lg:flex-row items-center justify-center bg-gradient-to-r from-sky-300 via-black to-white-400 px-4"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div className="w-full lg:w-[50%] text-white text-center lg:text-left" variants={fadeInUp}>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Hemloo! </h1>
          <p className="text-lg lg:text-xl mb-6">Welcome to my Digital Portfolio </p>
          <h1 className="text-5xl lg:text-6xl font-extrabold">I am Areej Hassan</h1>
          <h2 className="text-2xl lg:text-3xl font-medium mt-2">Web-Developer</h2>
        </motion.div>
        <motion.div className="mt-8 lg:ml-10" variants={fadeInUp}>
          <Image
            width={300}
            height={300}
            src={HeroSectionImage}
            alt="profile image"
            className="border-4 border-white rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
          />
        </motion.div>
      </motion.div>

      {/* About Section */}
      <motion.div id="about" className="bg-white py-20 px-4" initial="hidden" whileInView="visible" variants={fadeInUp}>
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl lg:text-4xl font-bold mb-10 text-gray-800">About Me</h1>
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <Image
              alt="about pic"
              width={250}
              height={250}
              src={aboutImage}
              className="rounded-lg shadow-lg mb-8 lg:mb-0"
            />
            <p className="lg:ml-10 text-lg leading-relaxed max-w-lg text-start">
            👋 Hello! I am Areej Hassan, a driven Developer and an insquisitive student at GIAIC.As a passionate creator,I am excited to share my collection of projects,experiencesand achievements with you.
<br /><br />
 this portfolio represent my journey as a Developer,and i m eager to showcase my skills ,creativityand dedication to inovation.
<br /><br />
proficent in HTML,CSS,JS,TYPESCRIPT,C,C++.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        id="skills"
        className="bg-gray-100 py-20 px-4"
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl lg:text-4xl font-bold mb-10 text-black">My Skills</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Skill Item */}
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              variants={fadeInUp}
            >
              <h2 className="text-2xl font-bold mb-2 text-sky-700">HTML</h2>
              <p className="text-gray-600 mb-4">Proficient in building responsive layouts.</p>
            </motion.div>
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              variants={fadeInUp}
            >
              <h2 className="text-2xl font-bold mb-2 text-sky-700">CSS</h2>
              <p className="text-gray-600 mb-4">Skilled in creating beautiful designs.</p>
            </motion.div>
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              variants={fadeInUp}
            >
              <h2 className="text-2xl font-bold mb-2 text-sky-700">JavaScript</h2>
              <p className="text-gray-600 mb-4">Experienced in building dynamic web applications.</p>
            </motion.div>
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              variants={fadeInUp}
            >
              <h2 className="text-2xl font-bold mb-2 text-sky-700">React</h2>
              <p className="text-gray-600 mb-4">Strong knowledge in building interactive UIs.</p>
            </motion.div>
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              variants={fadeInUp}
            >
                            <h2 className="text-2xl font-bold mb-2 text-sky-700">Next.js</h2>
              <p className="text-gray-600 mb-4">Adept at building fast, server-rendered applications.</p>
            </motion.div>
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              variants={fadeInUp}
            >
              <h2 className="text-2xl font-bold mb-2 text-sky-700">Tailwind CSS</h2>
              <p className="text-gray-600 mb-4">Familiar with utility-first CSS for rapid styling.</p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Projects Section */}
      <motion.div
        id="projects"
        className="bg-white py-20 px-4"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl lg:text-4xl font-bold mb-10 text-black">Projects</h1>
          <p className="text-lg leading-relaxed mb-8">Here are some of my recent projects:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Project Card Example */}
            <motion.div
              className="bg-gray-100 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              variants={fadeInUp}
            >
              <h2 className="text-2xl font-bold mb-2 text-sky-700">Project Name</h2>
              <p className="text-gray-600 mb-4">A brief description of the project goes here.</p>
              <a href="#" className="text-sky-600 hover:underline">View Project</a>
            </motion.div>
            {/* Add more project cards as needed */}
          </div>
        </div>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        id="contact"
        className="bg-gradient-to-r from-sky-400 to-black py-20 px-4"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl lg:text-4xl font-bold mb-10 text-white">Contact Me</h1>
          <p className="text-lg mb-6 text-white">I’d love to hear from you! Get in touch through any of the options below:</p>
          <div className="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-8">
            <button onClick={ClickHere} className="flex items-center bg-white text-sky-700 rounded-lg p-3 shadow-md hover:shadow-lg transition duration-300">
              <MdContactPhone className="mr-2" /> WhatsApp
            </button>
            <button onClick={sendEmail} className="flex items-center bg-white text-sky-700 rounded-lg p-3 shadow-md hover:shadow-lg transition duration-300">
              <MdOutlineEmail className="mr-2" /> Email
            </button>
            <a href="#" className="flex items-center bg-white text-sky-700 rounded-lg p-3 shadow-md hover:shadow-lg transition duration-300">
              <GrResume className="mr-2" /> Resume
            </a>
          </div>
          <div className="mt-8 flex justify-center space-x-6">
            <a href="#" className="text-white text-2xl hover:text-pink-300"><FaLinkedin /></a>
            <a href="#" className="text-white text-2xl hover:text-pink-300"><FaFacebook /></a>
            <a href="#" className="text-white text-2xl hover:text-pink-300"><FaGithub /></a>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="bg-gray-800 py-4">
        <div className="max-w-5xl mx-auto text-center text-white">
          <p>&copy; {new Date().getFullYear()} . All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Home;

