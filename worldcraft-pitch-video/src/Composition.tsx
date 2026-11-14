import {AbsoluteFill, Series} from 'remotion';
import {Scene1Hook} from './scenes/Scene1Hook';
import {Scene2Problem} from './scenes/Scene2Problem';
import {Scene3Solution} from './scenes/Scene3Solution';
import {Scene4Proof} from './scenes/Scene4Proof';
import {Scene5CTA} from './scenes/Scene5CTA';
import {OVERLAP, SCENES} from './theme';

export const PitchComposition = () => {
  return (
    <AbsoluteFill className="bg-ink font-sans">
      <Series>
        <Series.Sequence durationInFrames={SCENES.hook}>
          <Scene1Hook />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENES.problem}>
          <Scene2Problem />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENES.solution} offset={-OVERLAP}>
          <Scene3Solution />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENES.proof}>
          <Scene4Proof />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENES.cta} offset={-OVERLAP}>
          <Scene5CTA />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
