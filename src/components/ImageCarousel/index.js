"use client"

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import Modal from '../Modal';

const ImageCarousel = ({ images }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [selectedImage, setSelectedImage] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const lengthImages = images?.length ?? 1;

    const nextImage = () => {
        setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImage((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const openModal = (image) => {
        setSelectedImage(image);
        setShowModal(true);
        // console.log('Imagem clicada:', images[currentImage]);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="relative">
            {images.map((image, index) => (
                <div
                    key={index}
                    className="relative cursor-pointer"
                    onClick={() => openModal(image)}
                >
                    <Image
                        src={images[currentImage].src}
                        alt={images[currentImage].name}
                        layout="responsive"
                        width={200}
                        height={200}
                        className="transition duration-300 transform hover:scale-110 h-52"
                        onClick={openModal}
                    />
                    {/* 
                    <div className="mt-2">
                        <h3 className="text-lg font-semibold">{images[currentImage].name}</h3>
                        <p>{images[currentImage].description}</p>
                    /div> 
                    */}
                    {lengthImages > 1 &&
                        <>
                            <div className="absolute inset-y-0 left-0 flex items-center justify-center">
                                <button
                                    className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none"
                                    onClick={prevImage}
                                >
                                    <ChevronLeftIcon className="h-6 w-6" />
                                </button>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center justify-center">
                                <button
                                    className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none"
                                    onClick={nextImage}
                                >
                                    <ChevronRightIcon className="h-6 w-6" />
                                </button>
                            </div>
                        </>
                    }
                </div>
            ))}
            {showModal && (
                <Modal image={selectedImage} closeModal={closeModal} />
            )}
        </div>
    );
};

export default ImageCarousel;
