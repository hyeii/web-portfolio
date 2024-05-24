"use client";

import { useEffect, useState } from "react";
import TypewriterComponent, { TypewriterClass } from "typewriter-effect";

const MainText = () => {
  return (
    <TypewriterComponent
      options={{
        strings: ["Hi, I'm Front-end Developer"],
        autoStart: true,
        loop: true,
      }}
    />
  );
};

export default MainText;
