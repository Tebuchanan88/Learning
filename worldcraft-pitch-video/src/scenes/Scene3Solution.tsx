import type {ReactNode} from 'react';
import {
  AbsoluteFill,
  Easing,
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

/**
 * A real product screenshot in a framed card. It arrives on a spring, then
 * the camera pushes in on `focus` (a point on the image, as 0–1 fractions)
 * so the part being talked about is large enough to read.
 */
const Shot = ({
  src,
  width,
  from,
  focus,
  zoom,
  children,
}: {
  src: string;
  width: number;
  from: 'below' | 'right';
  focus: [number, number];
  zoom: number;
  children?: ReactNode;
}) => {
  const frame = useCurrentFrame();
  const p = useSpring(4, {damping: 20, mass: 0.8, stiffness: 100});
  const push = interpolate(frame, [34, 62], [1, zoom], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.inOut(Easing.cubic),
  });
  const offset = (1 - p) * 110;
  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-black/10 shadow-[0_40px_90px_rgba(17,17,17,0.22)]"
      style={{
        width,
        opacity: Math.min(1, p * 1.4),
        transform:
          from === 'below'
            ? `translateY(${offset}px)`
            : `translateX(${offset}px)`,
      }}
    >
      <div
        className="relative"
        style={{
          transform: `scale(${push})`,
          transformOrigin: `${focus[0] * 100}% ${focus[1] * 100}%`,
        }}
      >
        <Img src={staticFile(src)} style={{width: '100%', display: 'block'}} />
        {children}
      </div>
    </div>
  );
};

const Step = ({index, children}: {index: number; children: ReactNode}) => {
  const step = COPY.steps[index];
  return (
    <AbsoluteFill>
      <div className="absolute left-16 top-0 flex h-full w-[640px] flex-col justify-center text-ink">
        <Line
          delay={0}
          mode="slide"
          className="text-[30px] font-semibold tracking-[0.2em] text-gold"
        >
          {step.number}
        </Line>
        <Line
          delay={3}
          mode="slide"
          className="mt-3 font-serif text-[92px] leading-[1.04]"
        >
          {step.title}
        </Line>
        <Line
          delay={12}
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

// Centre of the real Approve button on the 700px-wide crop, as percentages.
const APPROVE = {x: 55.3, y: 71};
const CLICK_AT = 50;

/** A pointer travels to the real Approve button and clicks it. */
const ApproveClick = () => {
  const frame = useCurrentFrame();
  const travel = useSpring(22, {damping: 22, mass: 1, stiffness: 70});
  const ring = useSpring(CLICK_AT, SNAPPY);
  const press = interpolate(
    frame,
    [CLICK_AT - 3, CLICK_AT, CLICK_AT + 5],
    [1, 0.8, 1],
    {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'},
  );
  const x = 92 + (APPROVE.x - 92) * travel;
  const y = 130 + (APPROVE.y - 130) * travel;

  return (
    <>
      <div
        className="absolute rounded-xl"
        style={{
          left: '46.2%',
          top: '53%',
          width: '18.2%',
          height: '36%',
          border: `4px solid ${COLORS.gold}`,
          boxShadow: '0 0 0 9px rgba(191,148,83,0.25)',
          opacity: ring,
          transform: `scale(${1.5 - ring * 0.5})`,
        }}
      />
      <svg
        viewBox="0 0 24 24"
        className="absolute"
        style={{
          left: `${x}%`,
          top: `${y}%`,
          width: 44,
          height: 44,
          transform: `scale(${press})`,
          transformOrigin: '0 0',
          filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.35))',
        }}
      >
        <path
          d="M4 2l15 9-6.5 1.6L9.4 19z"
          fill="#111"
          stroke="#fff"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    </>
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
          <Shot
            src="product/upload.png"
            width={1040}
            from="below"
            focus={[0, 0]}
            zoom={1.16}
          />
        </Step>
      </Sequence>
      <Sequence from={STEP} durationInFrames={STEP}>
        <Step index={1}>
          <Shot
            src="product/found.png"
            width={1100}
            from="right"
            focus={[0, 0.95]}
            zoom={1.55}
          />
        </Step>
      </Sequence>
      <Sequence from={STEP * 2} durationInFrames={STEP}>
        <Step index={2}>
          <Shot
            src="product/approve.png"
            width={1100}
            from="below"
            focus={[0.5, 0.5]}
            zoom={1}
          >
            <ApproveClick />
          </Shot>
        </Step>
      </Sequence>
    </AbsoluteFill>
  );
};
