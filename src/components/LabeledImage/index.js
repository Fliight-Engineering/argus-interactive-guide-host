import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

/**
 * LabeledImage component for displaying images with positioned labels
 * 
 * @param {string} src - Image source path (relative to static folder)
 * @param {string} alt - Alt text for the image
 * @param {Array} labels - Array of label objects with:
 *   - text: Label text
 *   - position: {top, left, right, bottom} in percentage or pixels
 *   - arrowTo?: {x, y} - Position where arrow should point (in %)
 * @param {string} className - Additional CSS classes
 */
export default function LabeledImage({ src, alt, labels = [], className = '' }) {
  const imageUrl = useBaseUrl(src);

  return (
    <div className={`${styles.labeledImageContainer} ${className}`}>
      <div className={styles.imageWrapper}>
        <img src={imageUrl} alt={alt} className={styles.image} />
        {labels.map((label, index) => (
          <React.Fragment key={index}>
            {label.arrowTo && (
              <svg
                className={styles.arrow}
                style={{
                  position: 'absolute',
                  left: label.position?.left || label.position?.right ? 
                    (label.position.left ? label.position.left : `calc(100% - ${label.position.right})`) : '50%',
                  top: label.position?.top || label.position?.bottom ?
                    (label.position.top ? label.position.top : `calc(100% - ${label.position.bottom})`) : '50%',
                }}
              >
                <line
                  x1="0"
                  y1="0"
                  x2={`${label.arrowTo.x}%`}
                  y2={`${label.arrowTo.y}%`}
                  stroke="currentColor"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                />
                <defs>
                  <marker
                    id={`arrowhead-${index}`}
                    markerWidth="10"
                    markerHeight="10"
                    refX="9"
                    refY="3"
                    orient="auto"
                  >
                    <polygon points="0 0, 10 3, 0 6" fill="currentColor" />
                  </marker>
                </defs>
              </svg>
            )}
            <div
              className={styles.label}
              style={{
                top: label.position?.top,
                left: label.position?.left,
                right: label.position?.right,
                bottom: label.position?.bottom,
              }}
            >
              <span className={styles.labelText}>{label.text}</span>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

