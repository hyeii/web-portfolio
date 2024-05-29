"use client";

import Image from "next/image";
import { useState } from "react";
import ImageModal from "./ImageModal";
import Slider from "react-slick";

interface props {
  imageList: string[];
}

const ImageList = ({ imageList }: props) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [nowImage, setNowImage] = useState<string>("");

  const handleModal = (imageURL: string) => {
    setNowImage(imageURL);
    setOpenModal(true);
  };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "1px",
    slidesToShow: 4,
    speed: 500,
  };

  return (
    <>
      {/* <div className="overflow-x-auto whitespace-nowrap"> */}
      <div className="slider-container">
        <Slider {...settings}>
          {imageList.map((imageURL, index) => (
            <div key={index} className="inline-block m-3 cursor-pointer">
              <Image
                src={imageURL}
                alt={imageURL}
                className="rounded-xl"
                layout="fixed"
                height={120}
                width={200}
                onClick={() => handleModal(imageURL)}
              />
            </div>
          ))}
        </Slider>
        {openModal && nowImage !== "" ? (
          <ImageModal
            imageURL={nowImage}
            setOpenModal={() => setOpenModal}
            openModal={openModal}
            nowImage={setNowImage}
          />
        ) : null}
      </div>
      {/* </div> */}
    </>
  );
};

export default ImageList;
