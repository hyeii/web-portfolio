"use client";

import { useEffect, useState } from "react";
import TypewriterComponent, { TypewriterClass } from "typewriter-effect";

const MainText = () => {
  return (
    <div className="h-full">
      <TypewriterComponent
        options={{
          strings: ["Hi, I'm Front-end Developer"],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default MainText;
