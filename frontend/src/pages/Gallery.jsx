import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { galleryImages } from '../mock';

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Gallery
            </h1>
            <p className="text-xl text-emerald-100">
              Moments of hope, compassion, and community service captured through our journey
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image) => (
              <Card
                key={image.id}
                className="group cursor-pointer overflow-hidden border-2 border-gray-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-xl"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm font-medium">{image.alt}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Every Picture Tells a Story
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Behind every image is a story of transformation, hope, and community. These moments represent the collective efforts of our volunteers, donors, and beneficiaries working together to create positive change.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { stat: '20000+', label: 'Meals Served' },
                { stat: '5000+', label: 'Lives Impacted' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">{item.stat}</div>
                  <div className="text-gray-700 font-medium">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Close"
          >
            <X className="h-6 w-6 text-white" />
          </button>
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.url}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />
            <p className="text-white text-center mt-4 text-lg">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
};
