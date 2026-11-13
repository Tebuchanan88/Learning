import {Img, staticFile} from 'remotion';

/**
 * The Worldcraft archway mark. The file is black on white, so on dark footage
 * it is inverted and screen-blended, and on paper it is multiplied.
 */
export const Mark = ({
  on,
  height = 64,
}: {
  on: 'dark' | 'paper';
  height?: number;
}) => {
  return (
    <Img
      src={staticFile('brand/mark.png')}
      style={{
        height,
        filter: on === 'dark' ? 'invert(1)' : undefined,
        mixBlendMode: on === 'dark' ? 'screen' : 'multiply',
      }}
    />
  );
};

/** Mark plus name, pinned top-left as a constant brand signature. */
export const Signature = ({on}: {on: 'dark' | 'paper'}) => {
  return (
    <div className="absolute left-16 top-12 flex items-center gap-4">
      <Mark on={on} height={58} />
      <div
        className="text-[30px] font-semibold tracking-wide"
        style={{color: on === 'dark' ? '#fff' : '#111'}}
      >
        Worldcraft
      </div>
    </div>
  );
};
