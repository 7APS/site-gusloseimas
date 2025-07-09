"use client";

import React, { Suspense } from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import logo from '../../public/logoBigger.png';

// Component that uses searchParams
function SearchParamsComponent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  // You can use searchParams here if needed
  
  return null;
}

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 text-center">
      <Suspense fallback={null}>
        <SearchParamsComponent />
      </Suspense>
      
      <div className="mb-8">
        <Image
          src={logo}
          alt="Gusloseimas Logo"
          width={200}
          height={200}
          className="mx-auto"
        />
      </div>
      
      <h1 className="text-4xl font-bold text-red-500 mb-4">Página não encontrada</h1>
      <p className="text-gray-600 mb-8">
        Desculpe, a página que você está procurando não existe.
      </p>
      
      <Link 
        href="/"
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300"
      >
        Voltar para a página inicial
      </Link>
    </div>
  );
}