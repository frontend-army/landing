import { useEffect, useRef } from "react";
import { useIntersectionObserver } from "./useIntersectionObserver";

export const useAnimateOnScroll = (distance: string) => {
  const elementRef = useRef(null);
  const elementObserver = useIntersectionObserver(elementRef, {
    threshold: 1,
    rootMargin: `0px 0px -${distance} 0px`,
  });

  return {
    ref: elementRef,
    isVisible: !!elementObserver?.isIntersecting,
  };
};
