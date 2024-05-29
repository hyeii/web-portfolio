"use client";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";

interface props {
  imageURL: string;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  openModal: boolean;
  nowImage: Dispatch<SetStateAction<string>>;
}

const ImageModal = ({ imageURL, setOpenModal, openModal, nowImage }: props) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (
      event: React.BaseSyntheticEvent | MouseEvent
    ) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        nowImage("");
        setOpenModal(false);
      }
    };
    if (openModal) document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openModal, modalRef]);

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-10 z-[999]">
        <div
          ref={modalRef}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 z-[999] text-base bg-white shadow-md rounded-[30px] w-2/3 h-3/5 flex justify-center"
        >
          <Image
            src={imageURL}
            alt={imageURL}
            className="rounded-xl"
            width={1000}
            height={300}
            objectFit="contain"
          />
        </div>
      </div>
    </>
  );
};

export default ImageModal;
