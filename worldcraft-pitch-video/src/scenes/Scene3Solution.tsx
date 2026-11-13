import type {ReactNode} from 'react';
import {
  AbsoluteFill,
  Img,
  interpolate,
  Sequence,
  staticFile,
  useCurrentFrame,
} from 'remotion';
import {Line} from '../components/Line';
import {Signature} from '../components/Mark';
import {SNAPPY, useSceneEnter, useSpring} from '../components/motion';
import {COLORS, COPY, SCENES} from '../theme';

const STEP = SCENES.solution / 3;

/** A real product screenshot in a framed card that slides up and drifts. */
const Shot = ({
  src,
  width,
  children,
}: {
  src: string;
  width: number;
  children?: ReactNode;
}) => {
  const frame = useCurrentFrame();
  const p = useSpring(6, {damping: 20, mass: 0.8, stiffness: 100});
  const drift = interpolate(frame, [0, STEP], [1, 1.035]);
  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-black/10 shadow-[0_40px_90px_rgba(17,17,17,0.22)]"
      style={{
        width,
        opacity: Math.min(1, p * 1.4),
        transform: `translateY(${(1 - p) * 90}px) scale(${drift})`,
      }}
    >
      <Img src={staticFile(src)} style={{width: '100%', display: 'block'}} />
      {children}
    </div>
  );
};

const Step = ({index, children}: {index: number; children: ReactNode}) => {
  const frame = useCurrentFrame();
  const step = COPY.steps[index];
  const isLast = index === COPY.steps.length - 1;
  const exit = isLast
    ? 1
    : interpolate(frame, [STEP - 10, STEP], [1, 0], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
      });

  return (
    <AbsoluteFill style={{opacity: exit}}>
      <div className="absolute left-16 top-0 flex h-full w-[640px] flex-col justify-center text-ink">
        <Line
          delay={2}
          className="text-[30px] font-semibold tracking-[0.2em] text-gold"
        >
          {step.number}
        </Line>
        <Line delay={6} className="mt-3 font-serif text-[92px] leading-[1.04]">
          {step.title}
        </Line>
        <Line
          delay={14}
          className="mt-7 text-[32px] leading-[1.4] text-black/60"
        >
          {step.body}
        </Line>
      </div>
      <div className="absolute right-16 top-0 flex h-full w-[1100px] items-center justify-center">
        {children}
      </div>
    </AbsoluteFill>
  );
};

/** A gold ring that lands on the real Approve button. */
const ApproveRing = () => {
  const p = useSpring(34, SNAPPY);
  const frame = useCurrentFrame();
  const pulse = 1 + Math.sin(frame / 5) * 0.03;
  return (
    <div
      className="absolute rounded-xl"
      style={{
        // Button position measured on the 700px-wide crop, as percentages.
        left: '46.2%',
        top: '53%',
        width: '18.2%',
        height: '36%',
        border: `5px solid ${COLORS.gold}`,
        boxShadow: `0 0 0 10px rgba(191,148,83,0.25)`,
        opacity: p,
        transform: `scale(${(1.6 - p * 0.6) * pulse})`,
      }}
    />
  );
};

/** Paper background, three steps, each shown on a real product screen. */
export const Scene3Solution = () => {
  const enter = useSceneEnter();
  return (
    <AbsoluteFill className="bg-paper" style={{opacity: enter}}>
      <Signature on="paper" />
      <Sequence durationInFrames={STEP}>
        <Step index={0}>
          <Shot src="product/upload.png" width={1040} />
        </Step>
      </Sequence>
      <Sequence from={STEP} durationInFrames={STEP}>
        <Step index={1}>
          <Shot src="product/found.png" width={1100} />
        </Step>
      </Sequence>
      <Sequence from={STEP * 2} durationInFrames={STEP}>
        <Step index={2}>
          <Shot src="product/approve.png" width={1100}>
            <ApproveRing />
          </Shot>
        </Step>
      </Sequence>
    </AbsoluteFill>
  );
};
