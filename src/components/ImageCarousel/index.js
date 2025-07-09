"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Modal from "../Modal";

const ImageCarousel = ({ images, description }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const lengthImages = images?.length ?? 1;

  const nextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
    // console.log("Imagem clicada:", images[currentImage]);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="relative">
      <div className="relative items-center flex justify-center">
        <Image
          src={images[currentImage].src}
          alt={images[currentImage].name}
          width={200}
          height={200}
          loading="lazy"
          className="transition duration-300 transform hover:scale-110 h-64 w-64 rounded object-cover pt-8 mx-auto"
          onClick={() => openModal(images[currentImage])}
        />
        {lengthImages > 1 && (
          <>
            <div className="absolute inset-y-0 left-0 flex items-center justify-center">
              <button
                className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={prevImage}
                aria-label="Imagem anterior"
                tabIndex={0}
              >
                <ChevronLeftIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center justify-center">
              <button
                className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={nextImage}
                aria-label="Próxima imagem"
                tabIndex={0}
              >
                <ChevronRightIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </>
        )}
      </div>
      {showModal && <Modal image={selectedImage} description={description} closeModal={closeModal} />}
    </div>
  );
};

export default ImageCarousel;
