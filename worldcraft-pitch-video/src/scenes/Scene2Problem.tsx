import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {Line} from '../components/Line';
import {Signature} from '../components/Mark';
import {useSceneEnter} from '../components/motion';
import {Photo} from '../components/Photo';
import {COPY, SCENES} from '../theme';

// The five archways share one composition, so cutting between them reads as
// the same doorway opening onto different worlds.
const ARCHES = [
  'brand/arch-stone.jpg',
  'brand/arch-golden.jpg',
  'brand/arch-forest.jpg',
  'brand/arch-aurora.jpg',
  'brand/arch-scifi.jpg',
];
const HOLD = 36;
const FADE = 8;
const WALK_START = SCENES.problem - 28;

export const Scene2Problem = () => {
  const frame = useCurrentFrame();
  const enter = useSceneEnter();

  // One continuous push-in, then a fast move through the doorway at the end.
  const drift = interpolate(frame, [0, WALK_START], [1.0, 1.1]);
  const walk = interpolate(frame, [WALK_START, SCENES.problem], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.in(Easing.cubic),
  });
  const scale = drift + walk * 2.4;

  return (
    <AbsoluteFill style={{opacity: enter}}>
      {ARCHES.map((src, i) => (
        <Photo
          key={src}
          src={src}
          scale={scale}
          opacity={
            i === 0
              ? 1
              : interpolate(frame, [i * HOLD, i * HOLD + FADE], [0, 1], {
                  extrapolateLeft: 'clamp',
                  extrapolateRight: 'clamp',
                })
          }
        />
      ))}
      <AbsoluteFill
        style={{
          opacity: 1 - walk,
          background:
            'linear-gradient(0deg, rgba(8,8,16,0.88) 0%, rgba(8,8,16,0.55) 26%, rgba(8,8,16,0) 50%)',
        }}
      />
      <div style={{opacity: 1 - walk}}>
        <Signature on="dark" />
      </div>
      <div
        className="absolute bottom-[70px] left-0 w-full text-center text-white"
        style={{opacity: 1 - walk * 2}}
      >
        <Line delay={14} className="font-serif text-[92px] leading-[1.1]">
          {COPY.problem.line1}
        </Line>
        <Line delay={86} className="mt-3 text-[40px] font-medium text-gold">
          {COPY.problem.line2}
        </Line>
      </div>
    </AbsoluteFill>
  );
};
