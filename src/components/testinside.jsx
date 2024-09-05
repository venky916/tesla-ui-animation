import React from 'react';
import teslaLogo from '../assets/Tesla Logo.png';
import mainCar from '../assets/mainCar.png';
import { DownCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { div } from 'framer-motion/client';

const HomeScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="font-montserrat">
      <div className="absolute flex items-center justify-center w-full mx-auto my-24">
        <h1 className="text-[250px] text-black/50  italic font-extrabold opacity-20">
          MODEL X
        </h1>
      </div>

      <div>
        <div className="relative z-10 top-10 px-20 ">
          <img src={teslaLogo} alt="tesla" />
        </div>
      </div>
      <div className="relative flex flex-col justify-center items-center w-full h-full gap-10 mt-10">
        <h1 className="font-extrabold italic text-6xl">MODEL X</h1>
        <div className="w-[672px] h-[316px]">
          <img src={mainCar} alt="maincar" />
        </div>
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
          className="border border-black  w-56 h-14 px-14 py-4 font-medium text-base"
        >
          Checkout →
        </button>
      </div>
    </div>
  );
};

export default HomeScreen;
