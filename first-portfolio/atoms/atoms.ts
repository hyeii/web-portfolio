import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const mainState = atom<boolean>({
  key: "isMain",
  default: true,
});

export const mainCompoState = atom<string>({
  key: "mainCompo",
  default: "main",
});
