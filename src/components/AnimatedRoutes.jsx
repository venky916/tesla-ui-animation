import React from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import HomeScreen from '../pages/HomeScreen';
import DetailScreen from '../pages/DetailScreen';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/detail" element={<DetailScreen />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
