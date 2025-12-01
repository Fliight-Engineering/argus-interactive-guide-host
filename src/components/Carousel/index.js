import React, { useState, useRef, useEffect } from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

export default function Carousel({ slides, backLink = '/quick-start/' }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  
  // Call useBaseUrl for ALL slides to ensure consistent hook calls
  // This prevents "Rendered more hooks than during the previous render" errors
  // We MUST call useBaseUrl the same number of times every render
  const imageUrls = slides.map((slide) => {
    // Always call useBaseUrl - use the image path if it exists, otherwise empty string
    return useBaseUrl(slide.image || '');
  });
  
  const processedSlides = slides.map((slide, index) => ({
    ...slide,
    imageUrl: slide.image ? imageUrls[index] : null
  }));

  const nextSlide = () => {
    if (currentSlide < processedSlides.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
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

    if (distance > minSwipeDistance && currentSlide < processedSlides.length - 1) {
      nextSlide();
    } else if (distance < -minSwipeDistance && currentSlide > 0) {
      prevSlide();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    // SSR-safe: only add event listeners on client-side
    if (typeof window === 'undefined') {
      return;
    }

    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft' && currentSlide > 0) {
        setCurrentSlide((prev) => prev - 1);
      } else if (e.key === 'ArrowRight' && currentSlide < processedSlides.length - 1) {
        setCurrentSlide((prev) => prev + 1);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [processedSlides.length, currentSlide]);

  const currentSlideData = processedSlides[currentSlide];
  const isFirstSlide = currentSlide === 0;
  const isLastSlide = currentSlide === processedSlides.length - 1;

  return (
    <div className={styles.carouselContainer}>
      <div 
        className={styles.carousel}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Close button */}
        <Link
          to={backLink}
          className={styles.closeButton}
          aria-label="Close and return to Quick Start"
        >
          ×
        </Link>

        {/* Main slide content */}
        <div className={styles.slideContent}>
          {currentSlideData.imageUrl && (
            <div className={styles.imageContainer}>
              <img
                src={currentSlideData.imageUrl}
                alt={currentSlideData.title || 'Slide image'}
                className={styles.slideImage}
              />
            </div>
          )}
          
          <div className={styles.textContent}>
            {currentSlideData.title && (
              <h2 className={styles.slideTitle}>{currentSlideData.title}</h2>
            )}
            {currentSlideData.content && (
              <div className={`${styles.slideText} ${currentSlideData.warning ? styles.warningHighlight : ''}`}>
                {currentSlideData.content}
              </div>
            )}
            {currentSlideData.steps && (
              <ul className={currentSlideData.noNumbers ? styles.stepsListNoNumbers : styles.stepsList}>
                {currentSlideData.steps.map((step, idx) => (
                  <li key={idx} className={styles.stepItem}>{step}</li>
                ))}
              </ul>
            )}
            {currentSlideData.table && (
              <table className={styles.infoTable}>
                <thead>
                  <tr>
                    {currentSlideData.table.headers.map((header, idx) => (
                      <th key={idx}>{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {currentSlideData.table.rows.map((row, rowIdx) => (
                    <tr key={rowIdx}>
                      {row.map((cell, cellIdx) => (
                        <td key={cellIdx}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className={styles.navigation}>
          <button
            className={`${styles.navButton} ${isFirstSlide ? styles.navButtonDisabled : ''}`}
            onClick={prevSlide}
            disabled={isFirstSlide}
            aria-label="Previous slide"
          >
            ◀
          </button>
          
          <div className={styles.dots}>
            {processedSlides.map((_, idx) => (
              <button
                key={idx}
                className={`${styles.dot} ${idx === currentSlide ? styles.activeDot : ''}`}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          
          <button
            className={`${styles.navButton} ${isLastSlide ? styles.navButtonDisabled : ''}`}
            onClick={nextSlide}
            disabled={isLastSlide}
            aria-label="Next slide"
          >
            ▶
          </button>
        </div>

        {/* Slide counter */}
        <div className={styles.counter}>
          {currentSlide + 1} / {processedSlides.length}
        </div>
      </div>
    </div>
  );
}

