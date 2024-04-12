'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';

interface Props {
  className?: string;
  children: string;
}

export const TypewriterParagraph: React.FC<Props> = ({ children, className= '' }: Props) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const [splitAbout, setSplitAbout] = useState<string[]>([]);
useEffect(() => {
  if (!ref.current) {
    return;
  }
    const spans = [];
    const width = ref.current.offsetWidth - parseInt(getComputedStyle(ref.current).paddingLeft) - parseInt(getComputedStyle(ref.current).paddingRight);
    if(splitAbout.length > 0) {
      return;
    }
    const about = ref.current.getAttribute('data-text');
    const splitted = about!.split(' ');
    let text = '';
    for(let i = 0; i < splitted.length; i++) {
      if(text.length + splitted[i].length < width / 10) {
        if(text.length > 0) {
          text += ' ';
        }
        text += splitted[i];
      } else {
        i = i - 1;
         text;
        spans.push(text);
        text = '';

      }
    }
    if(text.length > 0) {
      spans.push(text);
    }
    setSplitAbout(spans);
  }, []);

  return (
      <p ref={ref} className={`${styles.paragraph} ${className}`} data-text={children}>
        {splitAbout.map((text) => (
          <span className={styles.line} key={text}>{text}</span>
        ))}
      </p>
  );
} 
