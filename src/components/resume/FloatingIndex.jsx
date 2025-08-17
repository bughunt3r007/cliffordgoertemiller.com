
import React, { useState, useEffect, useRef } from 'react';

export default function FloatingIndex({ sections }) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id);
  const buttonRefs = useRef({});
  const sliderRef = useRef(null);

  const handleNavClick = (ref) => {
    if (ref.current) {
      // We add a small offset to account for the fixed header height
      const yOffset = -140;
      const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollOffset = window.innerHeight / 2;
      let currentSectionId = sections[0]?.id;

      for (const section of sections) {
        if (section.ref.current && section.ref.current.getBoundingClientRect().top < scrollOffset) {
          currentSectionId = section.id;
        } else {
          break; // Sections are ordered, so we can break early
        }
      }
      setActiveSection(currentSectionId);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  useEffect(() => {
    const activeButton = buttonRefs.current[activeSection];
    if (activeButton && sliderRef.current) {
      sliderRef.current.style.left = `${activeButton.offsetLeft - 10}px`; // Changed from -4 to -10
      sliderRef.current.style.width = `${activeButton.offsetWidth}px`;
      sliderRef.current.style.height = `${activeButton.offsetHeight}px`;
    }
  }, [activeSection, sections]);

  return (
    <>
      <div className="hidden lg:block fixed top-[60px] left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-2">
          <div className="relative flex space-x-3 justify-center">
            {sections.map((section) => (
              <button
                key={section.id}
                ref={el => (buttonRefs.current[section.id] = el)}
                onClick={() => handleNavClick(section.ref)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 whitespace-nowrap z-10 flex items-center justify-center ${
                  activeSection === section.id ? 'text-purple-700' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {section.label}
              </button>
            ))}
            <div
              ref={sliderRef}
              className="absolute top-0 rounded-full border-2 border-solid border-purple-600 transition-all duration-300 ease-in-out pointer-events-none"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </>
  );
}
