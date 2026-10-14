'use client';

import RevealAnimation from '@/src/components/animation/reveal-animation';
import { AboutVideoPauseIcon, AboutVideoPlayIcon } from '@/src/components/shared/icon';
import { useCallback, useRef, useState } from 'react';

export const AboutVisionVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);

  const toggle = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      void v.play();
    } else {
      v.pause();
    }
  }, []);

  return (
    <section className="lp:pb-44! pb-20 md:pb-25 lg:pb-30" aria-label="Company video">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <div className="group relative h-[400px] overflow-hidden rounded-2xl bg-neutral-800 md:h-[550px] lg:h-[785px]">
            <video
              ref={videoRef}
              className="size-full object-cover"
              src="/video/video.mp4"
              muted
              playsInline
              loop
              autoPlay
              preload="auto"
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
            />
            <button
              type="button"
              data-play={playing ? 'true' : 'false'}
              onClick={toggle}
              className="group/control absolute top-1/2 left-1/2 flex size-18 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white opacity-0 outline-2 outline-[#beab9a] backdrop-blur-xl transition-all duration-300 ease-in-out group-hover:opacity-100 hover:scale-105"
              aria-label={playing ? 'Pause video' : 'Play video'}
            >
              <span className="relative flex size-full items-center justify-center">
                <span
                  className={`absolute transition-all duration-300 ${playing ? 'translate-y-6 opacity-0' : 'translate-y-0 opacity-100'}`}
                >
                  <AboutVideoPlayIcon />
                </span>
                <span
                  className={`absolute transition-all duration-300 ${playing ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
                >
                  <AboutVideoPauseIcon />
                </span>
              </span>
            </button>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};
