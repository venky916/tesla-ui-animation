import React, { useState, useEffect, useRef } from 'react';
import teslaLogo from '../assets/Tesla Logo.png';
import mainCar from '../assets/mainCar.png';
import { DownCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const bgVariant = {
  enter: {
    opacity: 0,
    scale: 0.8,
    x: '+10%',
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
    scale: 0.8,
    x: '10%',
    y: '-40%',
    transition: { duration: 0.8 },
  },
};

const carVariant = {
  enter: {
    opacity: 0,
    scale: 1.2,
    rotate: -90,
    x: '+20%',
    y: '+20%',
    transition: { duration: 0.8 },
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    rotate: 0,
    transition: { duration: 0.8 },
  },
  exit: {
    opacity: 0,
    scale: 1.2,
    rotate: -90,
    x: '-20%',
    y: '-20%',
    transition: { duration: 0.8 },
  },
};

const HomeScreen = () => {
  const [animateButton, setAnimateButton] = useState(false);
  const navigate = useNavigate();
  const buttonRef = useRef(null);

  // Handle click event on the entire screen except the Checkout button
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setAnimateButton(true);

        // Remove the animation after the fade-out effect
        setTimeout(() => {
          setAnimateButton(false);
        }, 1000); // Match the duration of the fade-out transition
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="font-montserrat">
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
          <img src={teslaLogo} alt="tesla" />
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
          Order Online for <span className="underline">Touchless Delivery</span>
        </h6>
        <DownCircleOutlined className="text-black/25 text-4xl" />
      </div>

      {/* Checkout Button with Conditional Animation */}
      <div className="absolute right-32 bottom-[325px]">
        <motion.button
          ref={buttonRef}
          onClick={() => navigate('/detail')}
          className="border border-black w-56 h-14 px-14 py-4 font-medium text-base"
          animate={{
            backgroundColor: animateButton ? '#BFDBFE80' : '#FFFFFF',
          }}
          transition={{
            duration: 1, // Controls the speed of the fade-out effect
          }}
        >
          Checkout →
        </motion.button>
      </div>
    </div>
  );
};

export default HomeScreen;
