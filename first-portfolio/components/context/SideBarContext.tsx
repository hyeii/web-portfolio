"use client";

import { createContext, useContext } from "react";

const SideBarContext = createContext<boolean>(true);
// true : 메인
// false : 이외

export const SideBarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <SideBarContext.Provider value={true}>{children}</SideBarContext.Provider>
  );
};

export const useSideBarContext = () => useContext(SideBarContext);
