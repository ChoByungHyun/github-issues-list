import { useEffect, useRef, useState } from 'react';

const useIntersectionObserver = (options?: IntersectionObserverInit) => {
  const observerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const currentRef = observerRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(([entries]) => {
      setInView(entries.isIntersecting);
    }, options);
    observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [options]);

  return [observerRef, inView] as const;
};

export default useIntersectionObserver;
