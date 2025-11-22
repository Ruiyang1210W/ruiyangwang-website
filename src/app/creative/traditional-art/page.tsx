'use client';

import { useState } from 'react';
import Navbar from '@/components/navbar';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

export default function TraditionalArt() {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const artworks = [
    { id: 4, title: 'Xiya Cyberpunk Postercard', description: 'Xiya character postercard design', image: '/traditional/Xiya Cyberpunk Postercard.png' },
    { id: 8, title: 'Yuriy Cyberpunk Postercard', description: 'Yuriy character postercard design', image: '/traditional/Yuriy Cyberpunk Postercard.png' },
    { id: 7, title: 'Yuriy Comic Style', description: 'Yuriy character in comic style and he is fine', image: '/traditional/Yuriy comic style.png' },
    { id: 2, title: 'Manga Style OCs', description: 'Original characters in manga style', image: '/traditional/Manga style OCs.png' },
    { id: 3, title: 'Star Wars AU', description: 'Star Wars alternate universe concept', image: '/traditional/StarWars AU.png' },
    { id: 5, title: 'Xiya with Rogue AI Friends', description: 'Cake with hand made drawings', image: '/traditional/Xiya with her Rogue AI friends -Cake with hand made drawings.jpg' },
    { id: 9, title: 'Yuriy & Xiya in Garden', description: 'illustration with garden', image: '/traditional/Yuriy Xiya in garden.png' },
    { id: 1, title: 'Drew This When LA Blackout', description: 'Artwork created during LA blackout', image: '/traditional/Drew this when LA blackout.png' },
    { id: 6, title: 'Yuriy and Xiya Turn to Cats', description: 'Characters as cats', image: '/traditional/Yuriy and Xiya turn to cats.png' },
  ];

  const gradients = [
    'from-blue-400 to-cyan-600',
    'from-teal-400 to-green-600',
    'from-cyan-400 to-blue-600',
    'from-green-400 to-teal-600',
    'from-sky-400 to-blue-600',
    'from-emerald-400 to-teal-600',
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="animate-fadeIn">
            {/* Header */}
            <div className="mb-12">
              <Link
                href="/#creative"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4 font-medium"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                {t('creative.backToCreative')}
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                ✏️ {t('creative.categories.traditionalArt.title')}
              </h1>
              <p className="text-xl text-gray-600">
                {t('creative.categories.traditionalArt.description')}
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
