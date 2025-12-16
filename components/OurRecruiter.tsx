import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import image3 from '@assets/banner/ankur.jpg';
import image2 from '@assets/banner/ashpreet.jpg';
import image1 from '@assets/banner/ourrec.jpg';

const OurRecruiter: React.FC = () => {
  const slides = [
    { id: 1, image: image1, alt: 'Recruiter Portrait' },
    { id: 2, image: image3, alt: 'Placement Drive' },
    { id: 3, image: image2, alt: 'Campus Interaction' },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect((): (() => void) => {
    const interval = setInterval((): void => {
      setCurrentSlide((prev: number): number => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);

    return (): void => {
      clearInterval(interval);
    };
  }, [slides.length]);

  return (
    <section className="bg-gray-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative h-[500px] overflow-hidden rounded-2xl shadow-2xl md:h-[600px]">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'z-10 opacity-100' : 'z-0 opacity-0'
              }`}
            >
              <Image
                alt={slide.alt}
                layout="fill"
                objectFit="cover"
                priority={index === 0}
                quality={100}
                src={slide.image}
              />
            </div>
          ))}

          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-center text-white">
            <div className="absolute bottom-8 flex space-x-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-2.5 rounded-full shadow-sm transition-all duration-300 ${
                    index === currentSlide ? 'w-8 bg-white' : 'w-2.5 bg-white/70 hover:bg-white'
                  }`}
                  type="button"
                  onClick={(): void => {
                    setCurrentSlide(index);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurRecruiter;
