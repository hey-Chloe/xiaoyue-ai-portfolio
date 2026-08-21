"use client";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import React, { Suspense } from "react";

const RenderModel = ({ children, className }) => {
  return (
    <Canvas
      className={clsx("w-screen h-screen -z-10 relative", className)}
      shadows={false}
      dpr={[1, 2]}
      // dpr is the device pixel ratio. Here we are setting it to 1 and 2 for retina displays to prevent blurriness in the model rendering on high resolution screens.
    >
      <ambientLight intensity={1.15} />
      <directionalLight position={[4, 6, 5]} intensity={2.1} color="#fff7d6" />
      <pointLight position={[-4, 2, 3]} intensity={0.8} color="#fefe5b" />
      <Suspense fallback={null}>{children}</Suspense>
    </Canvas>
  );
};

export default RenderModel;
