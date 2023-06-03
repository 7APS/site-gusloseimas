"use client"

import { useEffect } from 'react';
import Image from 'next/image';

export default function Modal({ image, closeModal }) {
    useEffect(() => {
        const handleEscapeKey = (event) => {
            // fechar modal ao precionar "esc"
            if (event.keyCode === 27) {
                closeModal();
            }
        };
        document.addEventListener('keydown', handleEscapeKey);
        return () => {
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, [closeModal]);

    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-4">
                {image.src &&
                    <Image
                        src={image.src}
                        alt={image.name}
                        width={800}
                        height={600}
                    />
                }
                <div className="mt-4">
                    <h3 className="text-lg font-semibold">{image.name}</h3>
                    <p>{image.description}</p>
                </div>
                <button
                    className="mt-4 py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded"
                    onClick={closeModal}
                >
                    Fechar
                </button>
            </div>
        </div>
    );
};
