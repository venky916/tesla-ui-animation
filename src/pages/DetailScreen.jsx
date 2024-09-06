import React, { useState } from 'react';
import teslaLogo from '../assets/Tesla Logo.png';
import carOutline from '../assets/carOutline.png';
import mainCar from '../assets/mainCar.png';
import carSideView from '../assets/carsideview.png';
import { StarOutlined, PlayCircleFilled } from '@ant-design/icons';
import carVideo from '../assets/carVideo.png';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, easeInOut, delay } from 'framer-motion';

// Slide animations
const slideFadeInOut = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};

const fadeOut = {
  hidden: { opacity: 0.5 },
  visible: { opacity: 1 },
  exit: { opacity: 0.5 },
  transition: { duration: 0.8 },
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
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={handlePageClick} // Trigger animation when page is clicked
    >
      <span
        onClick={() => navigate('/')}
        className={`tesla-logo relative top-10 left-20  inline-block overflow-hidden `}
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
            {/* First div */}
            <div
              className={`interactive-div w-44 h-44 border-2 ${
                !up ? 'border-[#B8B8B8]' : 'border-black'
              } ${!up && animate ? 'bg-blue-200/50 ' : 'bg-transparent'}`} // Change background only if up is false
              onClick={() => setUp(true)}
            ></div>

            {/* Second div */}
            <div
              className={`interactive-div w-44 h-44 border-2 ${
                up ? 'border-[#B8B8B8]' : 'border-black'
              } ${up && animate ? 'bg-blue-200/50 ' : 'bg-transparent'}`} // Change background only if up is true
              onClick={() => setUp(false)}
            ></div>
          </div>
        </div>

        <motion.div
          initial={!up ? { y: '0%' } : { y: '-70%' }} // Adjust sliding range
          animate={!up ? { y: '-70%' } : { y: '70%' }} // Adjust sliding range
          transition={{ duration: 0.5 }} // Control the speed of the animation
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
                transition={{ duration: 0.8, ease: easeInOut }}
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
                transition={{ duration: 0.5, ease: easeInOut }}
              >
                <div className="flex flex-1 justify-between items-center h-80">
                  <div>
                    <p className="text-wrap w-56">
                      Model X is one of the safest SUVs ever. Built from the
                      ground up as an electric vehicle, the body, chassis,
                      restraints and battery technology provide a very low
                      probability of occupant injury.
                    </p>
                    <div className="flex flex-col justify-between items-start gap-10">
                      <div className="mt-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <StarOutlined
                              key={i}
                              style={{ fontSize: '24px', color: '#000000' }}
                            />
                          ))}
                        </div>
                        <p>5-Star Safety</p>
                      </div>
                      <div>
                        <h6 className="font-medium text-4xl">371mi</h6>
                        <h4>Range</h4>
                      </div>
                    </div>
                  </div>
                  <div className="relative left-36">
                    <img
                      src={carVideo}
                      alt="carvideo"
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 flex items-center justify-center left-20">
                      <PlayCircleFilled className="text-white text-6xl" />
                    </div>
                  </div>
                </div>
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
