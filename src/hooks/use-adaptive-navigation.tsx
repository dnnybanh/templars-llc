import { useState, useEffect, useRef } from "react";

interface UseAdaptiveNavigationOptions {
  /** Minimum space required between logo and navigation items before switching to hamburger */
  minSpace?: number;
  /** Debounce delay for resize events in milliseconds */
  debounceDelay?: number;
}

export function useAdaptiveNavigation({
  minSpace = 200,
  debounceDelay = 100
}: UseAdaptiveNavigationOptions = {}) {
  const [shouldUseHamburger, setShouldUseHamburger] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const logoRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkSpace = () => {
      const windowWidth = window.innerWidth;
      
      // Always use hamburger on mobile screens
      if (windowWidth < 768) {
        setIsMobile(true);
        setShouldUseHamburger(true);
        return;
      }
      
      setIsMobile(false);
      
      // If refs are not available, default to desktop navigation
      if (!logoRef.current || !navRef.current) {
        setShouldUseHamburger(false);
        return;
      }

      const logoRect = logoRef.current.getBoundingClientRect();
      const navRect = navRef.current.getBoundingClientRect();
      
      // Calculate available space between logo and navigation
      const availableSpace = navRect.left - logoRect.right;
      
      // Switch to hamburger if there's not enough space
      setShouldUseHamburger(availableSpace < minSpace);
    };

    // Debounce the resize handler
    let timeoutId: NodeJS.Timeout;
    const debouncedCheckSpace = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkSpace, debounceDelay);
    };

    // Initial check
    checkSpace();

    // Listen for resize events
    window.addEventListener('resize', debouncedCheckSpace);
    
    // Also check when the component mounts or updates
    const observer = new ResizeObserver(debouncedCheckSpace);
    if (logoRef.current) observer.observe(logoRef.current);
    if (navRef.current) observer.observe(navRef.current);

    return () => {
      window.removeEventListener('resize', debouncedCheckSpace);
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [minSpace, debounceDelay]);

  return {
    shouldUseHamburger: shouldUseHamburger || isMobile,
    isMobile,
    logoRef,
    navRef
  };
}