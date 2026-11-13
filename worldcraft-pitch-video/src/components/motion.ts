import {Easing, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {OVERLAP} from '../theme';

type SpringConfig = {damping?: number; mass?: number; stiffness?: number};

export const SMOOTH: SpringConfig = {damping: 200};
export const SNAPPY: SpringConfig = {damping: 14, mass: 0.6, stiffness: 140};

/** A 0→1 spring that starts `delay` frames into the current sequence. */
export const useSpring = (delay = 0, config: SpringConfig = SMOOTH) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  return spring({frame: frame - delay, fps, config});
};

/** Opacity for a scene's first frames, while it crossfades over the last one. */
export const useSceneEnter = () => {
  const frame = useCurrentFrame();
  return interpolate(frame, [0, OVERLAP], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.inOut(Easing.cubic),
  });
};
