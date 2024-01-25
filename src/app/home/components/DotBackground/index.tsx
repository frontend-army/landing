"use client"

import { useEffect, useRef } from "react";
import { DotGrid } from "./utils/DotGrid";
import styles from './styles.module.css';

export const DotBackground: React.FC = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const grid = new DotGrid(ref);
    grid.init();
  }, [ref]);

  return (
    <canvas ref={ref} className={styles.dotBackground} />
  );
} 
