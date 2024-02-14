import { useEffect, useRef } from "react";
import { useIntersectionObserver } from "./useIntersectionObserver";

interface Params {
  distance?: string;
  freezeOnceVisible?: boolean;
}

export const useAnimateOnScroll = ({
  distance = "50px",
  freezeOnceVisible = true,
}: Params) => {
  const elementRef = useRef(null);
  const elementObserver = useIntersectionObserver(elementRef, {
    threshold: 1,
    freezeOnceVisible,
    rootMargin: `0px 0px -${distance} 0px`,
  });

  return {
    ref: elementRef,
    isVisible: !!elementObserver?.isIntersecting,
  };
};
