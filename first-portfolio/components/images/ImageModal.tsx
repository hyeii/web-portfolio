"use client";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

interface props {
  imageURL: string;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  openModal: boolean;
  nowImage: Dispatch<SetStateAction<string>>;
}

const ImageModal = ({ imageURL, setOpenModal, openModal, nowImage }: props) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [imageSize, setImageSize] = useState<{ width: number; height: number }>(
    { width: 0, height: 0 }
  );

  useEffect(() => {
    if (imageURL) {
      const img = new window.Image();
      img.src = imageURL;
      img.onload = () => {
        setImageSize({ width: img.naturalWidth, height: img.naturalHeight });
      };
    }

    const handleClickOutside = (
      event: React.BaseSyntheticEvent | MouseEvent
    ) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        nowImage("");
        console.log("웨않되");
        setOpenModal(false);
      }
    };
    if (openModal) document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openModal, modalRef]);

  const aspectRatio = imageSize.width / imageSize.height;
  const modalWidth = `calc(60vh * ${aspectRatio})`;
  const modalHeight = "60vh";

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-20 z-[999]">
        <div
          ref={modalRef}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[999]"
          style={{ width: modalWidth, height: modalHeight }}
        >
          <Image
            src={imageURL}
            alt={imageURL}
            className="rounded-xl"
            width={imageSize.width}
            height={imageSize.height}
            layout="responsive"
          />
        </div>
      </div>
    </>
  );
};

export default ImageModal;
