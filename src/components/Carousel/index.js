import React, { useState, useRef, useEffect } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

export default function Carousel({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Touch handlers for swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      } else if (e.key === 'ArrowRight') {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [slides.length]);

  const currentSlideData = slides[currentSlide];

  return (
    <div className={styles.carouselContainer}>
      <div 
        className={styles.carousel}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Main slide content */}
        <div className={styles.slideContent}>
          {currentSlideData.image && (
            <div className={styles.imageContainer}>
              <img
                src={useBaseUrl(currentSlideData.image)}
                alt={currentSlideData.title}
                className={styles.slideImage}
              />
            </div>
          )}
          
          <div className={styles.textContent}>
            {currentSlideData.title && (
              <h2 className={styles.slideTitle}>{currentSlideData.title}</h2>
            )}
            {currentSlideData.content && (
              <div className={styles.slideText}>{currentSlideData.content}</div>
            )}
            {currentSlideData.steps && (
              <ol className={styles.stepsList}>
                {currentSlideData.steps.map((step, idx) => (
                  <li key={idx} className={styles.stepItem}>{step}</li>
                ))}
              </ol>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className={styles.navigation}>
          <button
            className={styles.navButton}
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            ← Previous
          </button>
          
          <div className={styles.dots}>
            {slides.map((_, idx) => (
              <button
                key={idx}
                className={`${styles.dot} ${idx === currentSlide ? styles.activeDot : ''}`}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          
          <button
            className={styles.navButton}
            onClick={nextSlide}
            aria-label="Next slide"
          >
            Next →
          </button>
        </div>

        {/* Slide counter */}
        <div className={styles.counter}>
          {currentSlide + 1} / {slides.length}
        </div>
      </div>
    </div>
  );
}

