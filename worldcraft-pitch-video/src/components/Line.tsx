import type {CSSProperties, ReactNode} from 'react';
import {SMOOTH, SNAPPY, useSpring} from './motion';

/**
 * One line of text. Three entrances, so the film does not move the same way
 * every time: `rise` settles gently, `slide` comes in from the left, and
 * `pop` lands hard with a small overshoot.
 */
export const Line = ({
  children,
  delay = 0,
  mode = 'rise',
  className = '',
  style,
}: {
  children: ReactNode;
  delay?: number;
  mode?: 'rise' | 'slide' | 'pop';
  className?: string;
  style?: CSSProperties;
}) => {
  const p = useSpring(delay, mode === 'pop' ? SNAPPY : SMOOTH);
  const motion: CSSProperties =
    mode === 'pop'
      ? {opacity: Math.min(1, p * 3), transform: `scale(${1.18 - p * 0.18})`}
      : mode === 'slide'
        ? {opacity: p, transform: `translateX(${(1 - p) * -70}px)`}
        : {
            opacity: p,
            transform: `translateY(${(1 - p) * 36}px)`,
            filter: `blur(${(1 - p) * 6}px)`,
          };
  return (
    <div className={className} style={{...motion, ...style}}>
      {children}
    </div>
  );
};
