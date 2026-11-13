import '@fontsource-variable/inter';
import '@fontsource/instrument-serif';
import './index.css';
import {Composition} from 'remotion';
import {PitchComposition} from './Composition';
import {FPS, HEIGHT, TOTAL_FRAMES, WIDTH} from './theme';

export const RemotionRoot = () => {
  return (
    <Composition
      id="WorldcraftPitch"
      component={PitchComposition}
      durationInFrames={TOTAL_FRAMES}
      fps={FPS}
      width={WIDTH}
      height={HEIGHT}
    />
  );
};
