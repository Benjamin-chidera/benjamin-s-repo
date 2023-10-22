import { ArrowUp } from '@phosphor-icons/react';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

export const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Scroll event listener to track the scroll position
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

  return (
    <div>
      <div
        className={`fixed right-4 text-3xl font-bold bottom-4 bg-red-500 p-1 cursor-pointer hover:bg-orange-900 rounded-full z-10 ${isVisible ? "block" : "hidden"}`}
        onClick={scrollToTop}
      >
        
        <ArrowUp/>
      </div>
    </div>
  );
}
