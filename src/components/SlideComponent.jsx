import React from 'react';
import { StarOutlined, PlayCircleFilled } from '@ant-design/icons';
import carVideo from '../assets/carVideo.png';

const SlideComponent = () => {
  return (
    <div className="flex flex-1 justify-between items-center h-80">
      <div>
        <p className="text-wrap w-56">
          Model X is one of the safest SUVs ever. Built from the ground up as an
          electric vehicle, the body, chassis, restraints and battery technology
          provide a very low probability of occupant injury.
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
        <img src={carVideo} alt="carvideo" className="w-full h-auto" />
        <div className="absolute inset-0 flex items-center justify-center left-20">
          <PlayCircleFilled className="text-white text-6xl" />
        </div>
      </div>
    </div>
  );
};

export default SlideComponent;
