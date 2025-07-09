"use client"

import { useEffect } from 'react';
import Image from 'next/image';

export default function Modal({ image, description, closeModal }) {
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

    useEffect(() => {
        // Trap focus inside modal when open
        const handleTabKey = (e) => {
            if (e.key === 'Tab') {
                const focusableElements = document.querySelectorAll(
                    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                );
                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];

                if (e.shiftKey && document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement.focus();
                } else if (!e.shiftKey && document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement.focus();
                }
            }
        };

        document.addEventListener('keydown', handleTabKey);
        return () => {
            document.removeEventListener('keydown', handleTabKey);
        };
    }, []);

    return (
        <div 
            className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 z-50 h-90"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
            <div className="bg-white p-4 rounded-lg shadow-lg max-w-3xl w-full">
                {image.src &&
                    <Image
                        src={image.src}
                        alt={image.name}
                        width={500}
                        height={500}
                        loading="lazy"
                        className='w-full h-full max-w-md max-h-md object-contain mx-auto'
                    />
                }
                <div className="mt-4 text-black">
                    <h3 id="modal-title" className="text-lg font-semibold">{image.name}</h3>
                    <p>{description}</p>
                </div>
                <button
                    className="mt-4 py-2 px-4 bg-red-400 hover:bg-red-500 text-white font-semibold rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                    onClick={closeModal}
                    aria-label="Fechar modal"
                    autoFocus
                >
                    Fechar
                </button>
            </div>
        </div>
    );
};
