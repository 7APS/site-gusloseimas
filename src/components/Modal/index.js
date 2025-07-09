"use client"

import { useEffect } from 'react';
import Image from 'next/image';

export default function Modal({ image, description, closeModal }) {
    // Store previous active element to restore focus when modal closes
    useEffect(() => {
        const previousActiveElement = document.activeElement;

        // Prevent scrolling of background content
        document.body.style.overflow = 'hidden';

        return () => {
            // Restore scrolling when modal closes
            document.body.style.overflow = '';

            // Restore focus to previous element when modal closes
            if (previousActiveElement) {
                previousActiveElement.focus();
            }
        };
    }, []);

    useEffect(() => {
        const handleEscapeKey = (event) => {
            // Close modal on "Escape" key press
            if (event.key === 'Escape' || event.keyCode === 27) {
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

    // Handle click outside to close
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    return (
        <div 
            className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 z-50 h-90 animate-fadeIn"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onClick={handleBackdropClick}
        >
            <div 
                className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full animate-scaleIn"
                onClick={(e) => e.stopPropagation()} // Prevent clicks inside from closing
            >
                {image.src &&
                    <div className="relative">
                        <Image
                            src={image.src}
                            alt={image.name}
                            width={500}
                            height={500}
                            loading="lazy"
                            className='w-full h-full max-w-md max-h-md object-contain mx-auto'
                        />
                        <button
                            className="absolute top-2 right-2 bg-red-400 hover:bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-red-500"
                            onClick={closeModal}
                            aria-label="Fechar imagem"
                        >
                            ✕
                        </button>
                    </div>
                }
                <div className="mt-4 text-black">
                    <h3 id="modal-title" className="text-xl font-semibold">{image.name}</h3>
                    <p className="mt-2 text-gray-700">{description}</p>
                </div>
                <div className="mt-6 flex justify-end">
                    <button
                        className="py-2 px-6 bg-red-400 hover:bg-red-500 text-white font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                        onClick={closeModal}
                        aria-label="Fechar modal"
                        autoFocus
                    >
                        Fechar
                    </button>
                </div>
            </div>
        </div>
    );
};
