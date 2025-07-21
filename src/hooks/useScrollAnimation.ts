import { useEffect } from 'react';

const useScrollAnimation = () => {
  useEffect(() => {
    const animateOnScroll = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up-active');
          entry.target.classList.remove('opacity-0', 'translate-y-20');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(animateOnScroll, {
      threshold: 0.1
    });

    // Observe elements with animation classes
    const slideUpElements = document.querySelectorAll('.animate-slide-up');
    const fadeInElements = document.querySelectorAll('.animate-fade-in');

    slideUpElements.forEach(el => {
      el.classList.add('opacity-0', 'translate-y-20');
      observer.observe(el);
    });

    fadeInElements.forEach(el => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
};

export default useScrollAnimation; 