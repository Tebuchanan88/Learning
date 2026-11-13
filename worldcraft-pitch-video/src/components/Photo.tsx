import type {CSSProperties} from 'react';
import {AbsoluteFill, Img, staticFile} from 'remotion';

/** A full-frame brand image. `scale` zooms around the archway opening. */
export const Photo = ({
  src,
  scale = 1,
  opacity = 1,
  style,
}: {
  src: string;
  scale?: number;
  opacity?: number;
  style?: CSSProperties;
}) => {
  return (
    <AbsoluteFill style={{opacity}}>
      <Img
        src={staticFile(src)}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: `scale(${scale})`,
          transformOrigin: '50% 56%',
          ...style,
        }}
      />
    </AbsoluteFill>
  );
};
