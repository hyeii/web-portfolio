"use client";

import { createContext, useContext, useState } from "react";

interface SideBarContextProps {
  isMain: boolean;
  setIsMain: (isMain: boolean) => void;
}

const SideBarContext = createContext<SideBarContextProps | undefined>(
  undefined
);
// true : 메인
// false : 이외

export const SideBarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isMain, setIsMain] = useState<boolean>(true);
  return (
    <SideBarContext.Provider value={{ isMain, setIsMain }}>
      {children}
    </SideBarContext.Provider>
  );
};

export const useSideBarContext = () => {
  const context = useContext(SideBarContext);
  if (!context) {
    throw new Error("useSideBarContext must be used within a SideBarProvider");
  }
  return context;
};
