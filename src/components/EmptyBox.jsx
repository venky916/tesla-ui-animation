import React from 'react';
import { motion } from 'framer-motion';

const EmptyBox = ({ isUp, animate, onClick }) => {
  return (
    <motion.div
      onClick={onClick} // Trigger onClick handler
      initial={{
        borderBottomColor: '#B8B8B8', // Initial color for bottom border
        borderLeftColor: '#B8B8B8', // Initial color for left border
        borderRightColor: '#B8B8B8', // Initial color for right border
        borderTopColor: '#B8B8B8', // Initial color for top border
      }}
      animate={
        isUp
          ? {
              borderBottomColor: '#000000', // Animate bottom border first
              borderLeftColor: '#000000', // Animate left border next
              borderRightColor: '#000000', // Animate right border next
              borderTopColor: '#000000', // Animate top border last
            }
          : {
              borderBottomColor: '#B8B8B8', // Reset bottom border to default color
              borderLeftColor: '#B8B8B8', // Reset left border to default color
              borderRightColor: '#B8B8B8', // Reset right border to default color
              borderTopColor: '#B8B8B8', // Reset top border to default color
            }
      }
      transition={{
        duration: 1.5, // Total animation time
        times: [0, 0.25, 0.5, 0.75], // Time fractions for each border
        ease: 'easeInOut', // Smooth easing for animation
      }}
      style={{
        borderWidth: '2px', // Border width
        borderStyle: 'solid', // Solid border
        borderColor: '#B8B8B8', // Default border color
      }}
      className={`interactive-div w-44 h-44 border-2 ${
        isUp ? 'border-black' : 'border-[#B8B8B8]' // Conditional border color
      } ${!isUp && animate ? 'bg-blue-200/50' : 'bg-transparent'}`} // Conditional background color
    ></motion.div>
  );
};

export default EmptyBox;
