import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {Line} from '../components/Line';
import {Signature} from '../components/Mark';
import {Photo} from '../components/Photo';
import {COPY, SCENES} from '../theme';

/** The promise, set against the night archway. */
export const Scene4Proof = () => {
  const frame = useCurrentFrame();
  const scale = interpolate(frame, [0, SCENES.proof], [1.04, 1.12]);

  return (
    <AbsoluteFill>
      <Photo src="brand/arch-aurora.jpg" scale={scale} />
      <AbsoluteFill style={{background: 'rgba(8,8,16,0.5)'}} />
      <Signature on="dark" />
      <AbsoluteFill className="items-center justify-center text-center text-white">
        <Line delay={5} mode="pop" className="font-serif text-[128px] leading-[1.05]">
          {COPY.proof.line1}
        </Line>
        <Line
          delay={32}
          mode="pop"
          className="font-serif text-[128px] leading-[1.05] text-gold"
        >
          {COPY.proof.line2}
        </Line>
        <Line delay={66} className="mt-10 text-[36px] font-medium text-white/85">
          {COPY.proof.note}
        </Line>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
