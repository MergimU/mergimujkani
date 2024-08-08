'use client';

import { useState, useEffect } from 'react';

export default function BackgroundAnimation() {
  const [bgAnimation, setBgAnimation] = useState({
    mobileSize: 768,
    bgOverlayPosition: {
      x: 0,
      y: 0,
    },
    mouseMoveStarted: false,
  });

  // Handle mouse movement events
  const handleMouseMove = (e: MouseEvent) => {
    setBgAnimation({
      ...bgAnimation,
      bgOverlayPosition: {
        x: e.clientX + window.scrollX,
        y: e.clientY + window.scrollY,
      },
      mouseMoveStarted: true,
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setBgAnimation({
      ...bgAnimation,
      bgOverlayPosition: { ...bgAnimation.bgOverlayPosition },
      mouseMoveStarted: false,
    });
  };

  // Add and remove event listener based on window size on mount and resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= bgAnimation.mobileSize) {
        window.addEventListener('mousemove', handleMouseMove);
      } else {
        window.removeEventListener('mousemove', handleMouseMove);
        setBgAnimation({
          ...bgAnimation,
          bgOverlayPosition: { x: 0, y: 0 },
          mouseMoveStarted: false, // Reset mouse move state
        });
      }
    };

    handleResize();

    // Cleanup function to remove event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, [bgAnimation.mobileSize]); // Dependency array for resize check

  return (
    <div
      className='background'
      onMouseLeave={handleMouseLeave}>
      {bgAnimation.mouseMoveStarted && (
        <div
          className='background__overlay-bg'
          style={{
            left: `${bgAnimation.bgOverlayPosition.x - 100}px`,
            top: `${bgAnimation.bgOverlayPosition.y - 100}px`,
          }}></div>
      )}
    </div>
  );
}
