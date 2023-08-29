import { useRef } from "react";

type TimeoutId = ReturnType<typeof setTimeout>;

export function useDebounce(callback: Function, delay: number) {
  const timeoutRef = useRef<TimeoutId | null>(null);

  return (...args: any[]) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}
