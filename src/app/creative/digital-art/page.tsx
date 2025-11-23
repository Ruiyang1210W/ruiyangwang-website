'use client';

import { useState } from 'react';
import Navbar from '@/components/navbar';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

export default function DigitalArt() {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const artworks = [
    { id: 8, title: 'Xiya Cyberpunk Concept', description: 'Xiya character in cyberpunk world', image: '/digital/Xiya cyberpunk concept.JPG' },
    { id: 12, title: 'Yuriy Cyberpunk Concept', description: 'Yuriy character in cyberpunk world', image: '/digital/Yuriy cyberpunk concept.jpg' },
    { id: 2, title: 'Dragon Boat Festival', description: 'Dragon Boat Festival themed illustration', image: '/digital/Dragon Boat Festival.jpg' },
    { id: 4, title: 'Snake Year Cyberpunk', description: 'Year of the Snake in Night City, Cyberpunk', image: '/digital/Snake year cyberpunk.JPG' },
    { id: 10, title: 'Xiya & Yuriy Dragon Year', description: 'Xiya, Yuriy and LOOP in Year of the Dragon', image: '/digital/Xiya Yuriy dragon year.JPG' },
    { id: 9, title: 'Xiya Mid-Autumn Cyberpunk', description: 'Mid-Autumn Festival- Xiya in cyberspace', image: '/digital/Xiya midautumn cyberpunk.jpg' },
    { id: 5, title: 'The Band AU Concept', description: 'Band AU character concept', image: '/digital/The band AU concept.JPG' },
    { id: 6, title: 'Vacation 1', description: 'Vacation themed artwork part 1', image: '/digital/vacation1.JPG' },
    { id: 7, title: 'Vacation 2', description: 'Vacation themed artwork part 2', image: '/digital/vacation2.JPG' },
    { id: 11, title: "Yuriy and Xiya's Date", description: 'Character date scene', image: "/digital/Yuriy and Xiya's date.JPG" },
    { id: 1, title: 'Chiikava Version', description: 'Character artwork in cute animal style', image: '/digital/Chiikava version.JPG' },
    { id: 3, title: 'Early Concept', description: 'Early character concept design', image: '/digital/early concept.JPG' },
  ];

  const gradients = [
    'from-purple-400 to-pink-600',
    'from-blue-400 to-cyan-600',
    'from-green-400 to-teal-600',
    'from-orange-400 to-red-600',
    'from-pink-400 to-purple-600',
    'from-indigo-400 to-blue-600',
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="animate-fadeIn">
            {/* Header */}
            <div className="mb-12">
              <Link
                href="/#creative"
                className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-4 font-medium"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                {t('creative.backToCreative')}
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                🎨 {t('creative.categories.digitalArt.title')}
              </h1>
              <p className="text-xl text-gray-600 mb-2">
                {t('creative.categories.digitalArt.description')}
              </p>
              <p className="text-sm text-gray-500">
                © 2025 Ruiyang Wang. All artwork is original. All rights reserved.
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
