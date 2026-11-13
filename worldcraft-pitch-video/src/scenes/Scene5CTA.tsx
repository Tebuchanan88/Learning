import {AbsoluteFill, Img, staticFile} from 'remotion';
import {Line} from '../components/Line';
import {SNAPPY, useSceneEnter, useSpring} from '../components/motion';
import {COPY} from '../theme';

/** End card: the full logo, the landing-page tagline, and one action. */
export const Scene5CTA = () => {
  const enter = useSceneEnter();
  const logo = useSpring(8, {damping: 16, mass: 0.8, stiffness: 110});
  const button = useSpring(48, SNAPPY);

  return (
    <AbsoluteFill
      className="items-center justify-center bg-paper text-center text-ink"
      style={{opacity: enter}}
    >
      <Img
        src={staticFile('brand/logo.png')}
        style={{
          height: 560,
          marginTop: -70,
          mixBlendMode: 'multiply',
          opacity: Math.min(1, logo * 1.4),
          transform: `scale(${0.86 + logo * 0.14})`,
        }}
      />
      <Line delay={30} className="-mt-6 font-serif text-[58px] leading-[1.15]">
        {COPY.cta.tagline}
      </Line>
      <div
        className="mt-10 flex items-center gap-6 rounded-full bg-ink px-12 py-6 text-[38px] font-semibold text-white"
        style={{
          opacity: Math.min(1, button * 1.5),
          transform: `scale(${0.7 + button * 0.3})`,
        }}
      >
        {COPY.cta.button}
        <span className="h-9 w-[3px] bg-gold" />
        <span className="text-gold">{COPY.cta.url}</span>
      </div>
    </AbsoluteFill>
  );
};
