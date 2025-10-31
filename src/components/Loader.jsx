import { Html } from '@react-three/drei';
import { useProgress } from '@react-three/drei';
import React from 'react';

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center className="text-xl font-normal text-center">
      {progress}% Loaded
    </Html>
  );
};

export default Loader;
