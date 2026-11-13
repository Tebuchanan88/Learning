import type {CSSProperties, ReactNode} from 'react';
import {SMOOTH, useSpring} from './motion';

/** One line of text that rises and settles on a spring. */
export const Line = ({
  children,
  delay = 0,
  className = '',
  style,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
}) => {
  const p = useSpring(delay, SMOOTH);
  return (
    <div
      className={className}
      style={{
        opacity: p,
        transform: `translateY(${(1 - p) * 36}px)`,
        filter: `blur(${(1 - p) * 6}px)`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
