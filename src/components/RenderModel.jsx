"use client";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import React, { Suspense } from "react";

const RenderModel = ({ children, className }) => {
  return (
    <Canvas
      className={clsx("w-screen h-screen -z-10 relative", className)}
      shadows={false}
      dpr={[1, 1.5]}
      gl={{ antialias: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={1.1} />
      <directionalLight position={[4, 6, 5]} intensity={2.2} color="#bfefff" />
      <pointLight position={[-5, 2, 3]} intensity={1.7} color="#9a7bff" />
      <Suspense fallback={null}>{children}</Suspense>
    </Canvas>
  );
};

export default RenderModel;
