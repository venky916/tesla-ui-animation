import React, { useState } from 'react';
import teslaLogo from '../assets/Tesla Logo.png';
import carOutline from '../assets/carOutline.png';
import mainCar from '../assets/mainCar.png';
import carSideView from '../assets/carsideview.png';
import { StarOutlined, PlayCircleFilled } from '@ant-design/icons';
import carVideo from '../assets/carVideo.png';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const slideFadeInOut = {
  hidden: { opacity: 0, x: 100 }, // Start off-screen (right) and invisible
  visible: { opacity: 1, x: 0 }, // Fade in and slide to the center
  exit: { opacity: 0, x: -100 }, // Fade out and slide out to the left
};

const DetailScreen = () => {
  const [up, setUp] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="font-montserrat h-screen overflow-hidden">
      <div>
        <div
          onClick={() => navigate('/')}
          className="relative top-10 px-20 hover:cursor-pointer"
        >
          <img src={teslaLogo} alt="tesla" />
        </div>
      </div>

      <div className="relative flex items-center">
        <div className="px-10 ">
          <div className="absolute bottom-2">
            <img src={carOutline} alt="caroutline" />
          </div>
          <div className="absolute bottom-2 z-10 flex flex-col gap-4">
            <div
              className={`w-44 h-44 border ${
                !up ? 'border-[##B8B8B8]' : 'border-black'
              }`}
              onClick={() => setUp(!up)}
            ></div>
            <div
              className={`w-44 h-44 border ${
                up ? 'border-[##B8B8B8]' : 'border-black'
              }`}
              onClick={() => setUp(!up)}
            ></div>
          </div>
        </div>

        <motion.div
          initial={!up ? { y: '70%' } : { y: '-70%' }} // Adjust sliding range
          animate={!up ? { y: '-70%' } : { y: '70%' }} // Adjust sliding range
          transition={{ duration: 0.8 }} // Control the speed of the animation
        >
          <img src={mainCar} alt="maincar" className="-rotate-90" />
        </motion.div>

        <div className="flex flex-col justify-center items-start gap-10">
          <h1 className="text-6xl font-bold italic">MODEL X</h1>
          {up ? (
            <div className="h-80">
              <motion.div
                key="carsideview"
                variants={slideFadeInOut}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.8 }} // Control the speed of the animation
              >
                <img src={carSideView} alt="car" />
              </motion.div>
            </div>
          ) : (
            <motion.div
              key="infoSection"
              variants={slideFadeInOut}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.8 }} // Control the speed of the animation
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
                <div className="relative left-40">
                  <img
                    src={carVideo}
                    alt="carvideo"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <PlayCircleFilled className="text-white text-4xl" />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          <button className="relative bg-black px-4 py-2 text-white">
            BOOK TEST RIDE
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailScreen;
