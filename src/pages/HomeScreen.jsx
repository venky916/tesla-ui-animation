import React from 'react';
import teslaLogo from '../assets/Tesla Logo.png';
import mainCar from '../assets/mainCar.png';
import { DownCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const bgVariant = {
  enter: {
    opacity: 0,
    scale: 0.8, // Adjust scale for a smoother transition
    x: '+20%',
    y: '-40%',
    transition: { duration: 0.8 },
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.8 },
  },
  exit: {
    opacity: 0,
    scale: 0.8, // Keep scale consistent with `enter`
    x: '20%',
    y: '-40%',
    transition: { duration: 0.8 },
  },
};

const carVariant = {
  enter: {
    opacity: 0,
    scale: 1.2, // Adjust scale for a smoother transition
    rotate: -90, // Rotate by 90 degrees (not percentage)
    x: '+20%',
    y: '+20%',
    transition: { duration: 0.8 },
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    rotate: 0, // Reset rotation to 0 degrees when visible
    transition: { duration: 0.8 },
  },
  exit: {
    opacity: 0,
    scale: 1.2, // Keep scale consistent with `enter`
    rotate: -90, // Rotate by -90 degrees when exiting
    x: '-20%',
    y: '-20%',
    transition: { duration: 0.8 },
  },
};


const HomeScreen = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="font-montserrat"
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="absolute flex items-center justify-center w-full mx-auto my-24"
        variants={bgVariant}
        animate="visible"
        exit="exit"
      >
        <h1 className="text-[250px] text-black/50 italic font-extrabold opacity-20">
          MODEL X
        </h1>
      </motion.div>

      <div>
        <div className="relative z-10 top-10 px-20">
          <img src={teslaLogo} alt="tesla"/>
        </div>
      </div>
      <div className="relative flex flex-col justify-center items-center w-full h-full gap-10 mt-10">
        <h1 className="font-extrabold italic text-6xl">MODEL X</h1>
        <motion.div
          className="w-[672px] h-[316px]"
          variants={carVariant}
          animate="visible"
          exit="exit"
        >
          <img src={mainCar} alt="maincar" />
        </motion.div>
        <h6>
          Order Online for
          <span className="underline">Touchless Delivery</span>
        </h6>
        <DownCircleOutlined className="text-black/25 w-6 h-6" />
      </div>

      <div className="absolute right-32 bottom-80">
        <button
          onClick={() => {
            navigate('/detail');
          }}
          className="border border-black w-56 h-14 px-14 py-4 font-medium text-base"
        >
          Checkout →
        </button>
      </div>
    </motion.div>
  );
};

export default HomeScreen;
