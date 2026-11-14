import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {Line} from '../components/Line';
import {Signature} from '../components/Mark';
import {Photo} from '../components/Photo';
import {COPY, SCENES} from '../theme';

/** The hall of doorways, pushing in slowly, with the contradiction on top. */
export const Scene1Hook = () => {
  const frame = useCurrentFrame();
  const scale = interpolate(frame, [0, SCENES.hook], [1.02, 1.12]);

  return (
    <AbsoluteFill>
      <Photo src="brand/hall.jpg" scale={scale} />
      <AbsoluteFill
        style={{
          background:
            'linear-gradient(180deg, rgba(8,8,16,0.85) 0%, rgba(8,8,16,0.6) 42%, rgba(8,8,16,0) 70%)',
        }}
      />
      <Signature on="dark" />
      <div className="absolute left-0 top-[190px] w-full text-center font-serif text-[104px] leading-[1.12] text-white">
        <Line delay={6}>{COPY.hook.line1}</Line>
        <Line delay={44} mode="pop" className="text-gold">
          {COPY.hook.line2}
        </Line>
      </div>
    </AbsoluteFill>
  );
};
