import React, { useState } from 'react';
import teslaLogo from '../assets/Tesla Logo.png';
import carOutline from '../assets/carOutline.png';
import mainCar from '../assets/mainCar.png';
import carSideView from '../assets/carsideview.png';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, easeInOut } from 'framer-motion';
import SlideComponent from '../components/SlideComponent';
import EmptyBox from '../components/EmptyBox';

// Slide animations
const slideFadeInOut = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};

const fadeOut = {
  enter: { opacity: 0.5 },
  visible: { opacity: 1 },
  exit: { opacity: 0.5 },
};

const DetailScreen = () => {
  const [up, setUp] = useState(false);
  const [animate, setAnimate] = useState(false); // State to trigger background animation
  const navigate = useNavigate();

  const handlePageClick = (e) => {
    // Check if the Tesla logo or interactive divs are not clicked
    if (
      !e.target.closest('.tesla-logo') && // Class for Tesla logo
      !e.target.closest('.interactive-div') // Class for interactive divs
    ) {
      setAnimate(true); // Trigger animation
      setTimeout(() => {
        setAnimate(false); // Revert animation after 500ms
      }, 500);
    }
  };

  return (
    <motion.div
      className="font-montserrat h-screen overflow-hidden"
      variants={fadeOut}
      animate="visible"
      onClick={handlePageClick} // Trigger animation when page is clicked
    >
      <span
        onClick={() => navigate('/')}
        className="tesla-logo relative top-10 left-20 inline-block overflow-hidden"
      >
        <img
          src={teslaLogo}
          alt="tesla"
          className={`hover:cursor-pointer p-2 ${
            animate ? 'bg-blue-200/50' : 'bg-transparent'
          }`}
        />
      </span>

      <div className="relative flex items-center">
        <div className="px-10">
          <div className="absolute bottom-2">
            <img src={carOutline} alt="caroutline" />
          </div>
          <div className="relative top-16 -left-2 z-10 flex flex-col gap-4">
            <EmptyBox
              isUp={up}
              animate={animate && !up}
              onClick={ () => setUp(true) }
            />
            <EmptyBox
              isUp={!up}
              animate={animate && up}
              onClick={() => setUp(false)}
            />
          </div>
        </div>

        <motion.div
          initial={!up ? { y: '-50%' } : { y: '-70%' }} // Adjust sliding range
          animate={!up ? { y: '-70%' } : { y: '70%' }} // Adjust sliding range
          transition={{ duration: 1 }} // Control the speed of the animation
        >
          <img
            src={mainCar}
            alt="maincar"
            className="-rotate-90 h-auto relative -left-20"
          />
        </motion.div>

        <div className="relative -left-36 flex flex-col justify-center items-start gap-10">
          <h1 className="text-6xl font-bold italic">MODEL X</h1>
          <AnimatePresence mode="wait">
            {up ? (
              <motion.div
                key="carsideview"
                variants={slideFadeInOut}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.6, ease: easeInOut }}
              >
                <div className="h-80">
                  <img src={carSideView} alt="car" />
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="infoSection"
                variants={slideFadeInOut}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.6, ease: easeInOut }}
              >
                <SlideComponent />
              </motion.div>
            )}
          </AnimatePresence>
          <button className="relative bg-black px-4 py-2 text-white">
            BOOK TEST RIDE
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default DetailScreen;
