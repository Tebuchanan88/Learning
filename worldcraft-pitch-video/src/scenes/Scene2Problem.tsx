import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {Line} from '../components/Line';
import {Signature} from '../components/Mark';
import {Photo} from '../components/Photo';
import {COPY, SCENES} from '../theme';

// The five archways share one composition, so a hard cut between them reads
// as the same doorway opening onto a different world. Each world is held for
// less time than the one before, so the rhythm speeds up.
const ARCHES = [
  {src: 'brand/arch-stone.jpg', from: 0},
  {src: 'brand/arch-golden.jpg', from: 44},
  {src: 'brand/arch-forest.jpg', from: 80},
  {src: 'brand/arch-aurora.jpg', from: 108},
  {src: 'brand/arch-scifi.jpg', from: 130},
];
const WALK_START = SCENES.problem - 26;

export const Scene2Problem = () => {
  const frame = useCurrentFrame();

  // One continuous push-in, then a fast move through the doorway at the end.
  const drift = interpolate(frame, [0, WALK_START], [1.0, 1.1]);
  const walk = interpolate(frame, [WALK_START, SCENES.problem], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.in(Easing.cubic),
  });
  const scale = drift + walk * 2.4;
  const current = ARCHES.filter((a) => frame >= a.from).pop()!;

  return (
    <AbsoluteFill>
      <Photo src={current.src} scale={scale} />
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
        <Line delay={8} className="font-serif text-[92px] leading-[1.1]">
          {COPY.problem.line1}
        </Line>
        <Line
          delay={80}
          mode="slide"
          className="mt-3 text-[40px] font-medium text-gold"
        >
          {COPY.problem.line2}
        </Line>
      </div>
    </AbsoluteFill>
  );
};
