
import React, { useState, useEffect } from 'react';

const DEFAULT_FALLBACK_URL = "https://images.unsplash.com/photo-1607434472257-d9f8e57a643d?w=400";

export default function ProjectImage({ src, alt, className, fallbackSrc = DEFAULT_FALLBACK_URL }) {
  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    // When the src prop changes (e.g., when a new project is selected in the modal),
    // this effect updates the state to the new image source.
    setCurrentSrc(src);
  }, [src]);

  const handleImageError = () => {
    // If the browser fails to load the image at `currentSrc`, this function is called.
    // It updates the state to use the fallback URL.
    // The check prevents an infinite loop if the fallback image itself is also broken.
    if (currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    }
  };

  return (
    <img
      // If currentSrc is a valid string, it's used.
      // If currentSrc is falsy (null, undefined, empty string), the fallback URL is used.
      src={currentSrc || fallbackSrc}
      alt={alt} 
      className={`${className} border-2 border-slate-200 transition-colors duration-300 group-hover:border-purple-600/30`}
      style={{ borderRadius: '7px' }}
      onError={handleImageError} 
    />
  );
}
