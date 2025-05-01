"use client";
import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react"; // Импортируем иконку ChevronUp из lucide-react

const ButtonScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleScroll = (): void => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="focus:ring-opacity-50 fixed right-5 bottom-5 z-50 cursor-pointer rounded-full bg-violet-600 p-3 text-white shadow-lg transition-all duration-200 ease-in-out hover:bg-violet-700 focus:ring-2 focus:ring-violet-600/70 focus:outline-none"
      >
        <ChevronUp size={24} />
      </button>
    )
  );
};

export default ButtonScrollToTop;
