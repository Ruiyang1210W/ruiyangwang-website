'use client';

import { useState } from 'react';
import Navbar from '@/components/navbar';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

export default function LogoDesign() {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const artworks = [
    { id: 12, title: 'Xiya the Bassist Logo', description: 'Logo design for Xiya the bassist', image: '/logoDesigns/Xiya the bassist logo.PNG' },
    { id: 11, title: 'Necklace Pick Design', description: 'Custom necklace pick design', image: '/logoDesigns/necklace pick design.png' },
    { id: 6, title: 'Guitar Pick Designs', description: 'Custom guitar pick designs', image: '/logoDesigns/guitar pick designs.png' },
    { id: 1, title: 'CSSA Bronco Bai Lu', description: 'CSSA mascot character design and art', image: '/logoDesigns/CSSA bronco Bai Lu.JPG' },
    { id: 2, title: 'CSSA Bronco Qiu Fen', description: 'CSSA mascot character design and art', image: '/logoDesigns/CSSA bronco Qiu Fen.JPG' },
    { id: 3, title: 'CSSA IG Icon with Mascot', description: 'CSSA Social media icon design', image: '/logoDesigns/cssa ig icon with mascot.jpg' },
    { id: 4, title: 'CSSA Mascot Bronco', description: 'Official CSSA mascot design', image: '/logoDesigns/CSSA Mascot Bronco.png' },
    { id: 7, title: 'Artistic Alley Logo & Icon', description: 'Logo and icon for Artistic Alley', image: '/logoDesigns/Logo and icon for artistic alley.PNG' },
    { id: 9, title: 'Artistic Alley Mascot', description: 'Mascot design for Artistic Alley', image: '/logoDesigns/mascot for artistic alley.PNG' },
    { id: 8, title: 'LoopBreakers Logo', description: 'Logo design for LoopBreakers', image: '/logoDesigns/Logo for LoopBreakers.JPG' },
    { id: 10, title: 'My Mascot Moby', description: 'Personal mascot character Moby', image: '/logoDesigns/my mascot Moby.JPG' },
    { id: 5, title: 'Williams Wildfire Chatbot Logo', description: 'Funny logo for wildfire alert chatbot', image: '/logoDesigns/Funny logo for Williams wild fire chatbot.PNG' },
  ];

  const gradients = [
    'from-orange-400 to-red-600',
    'from-red-400 to-pink-600',
    'from-yellow-400 to-orange-600',
    'from-pink-400 to-red-600',
    'from-orange-400 to-yellow-600',
    'from-red-400 to-orange-600',
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="animate-fadeIn">
            {/* Header */}
            <div className="mb-12">
              <Link
                href="/#creative"
                className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4 font-medium"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                {t('creative.backToCreative')}
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                🎯 {t('creative.categories.logoDesign.title')}
              </h1>
              <p className="text-xl text-gray-600 mb-2">
                {t('creative.categories.logoDesign.description')}
              </p>
              <p className="text-sm text-gray-500">
                © 2025 Ruiyang Wang. All designs are original. All rights reserved.
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {artworks.map((artwork, index) => (
                <div
                  key={artwork.id}
                  className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedImage(index)}
                >
                  <div className="aspect-square overflow-hidden bg-gray-100">
                    <img
                      src={artwork.image}
                      alt={artwork.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                      <h4 className="text-xl font-semibold mb-2">{artwork.title}</h4>
                      <p className="text-sm">{artwork.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Lightbox Modal */}
            {selectedImage !== null && (
              <div
                className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
                onClick={() => setSelectedImage(null)}
              >
                <div className="relative max-w-5xl w-full">
                  <button
                    className="absolute top-4 right-4 text-white hover:text-gray-300 text-4xl font-bold"
                    onClick={() => setSelectedImage(null)}
                  >
                    ×
                  </button>
                  <div className="aspect-square bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center">
                    <img
                      src={artworks[selectedImage].image}
                      alt={artworks[selectedImage].title}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="text-white mt-4 text-center">
                    <h3 className="text-2xl font-bold mb-2">{artworks[selectedImage].title}</h3>
                    <p className="text-gray-300">{artworks[selectedImage].description}</p>
                  </div>

                  {/* Navigation arrows */}
                  <button
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 text-5xl font-bold"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImage((selectedImage - 1 + artworks.length) % artworks.length);
                    }}
                  >
                    ‹
                  </button>
                  <button
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 text-5xl font-bold"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImage((selectedImage + 1) % artworks.length);
                    }}
                  >
                    ›
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
