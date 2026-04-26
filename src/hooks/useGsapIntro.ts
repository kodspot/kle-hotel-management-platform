"use client";

import { MutableRefObject, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useGsapIntro(
  containerRef: MutableRefObject<HTMLElement | null>,
  titleRef: MutableRefObject<HTMLElement | null>,
  subtitleRef: MutableRefObject<HTMLElement | null>,
  ctaRef: MutableRefObject<HTMLElement | null>,
) {
  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.inOut" } });
      const heroMedia = containerRef.current?.querySelector<HTMLElement>("[data-hero-media]");
      const heroOverlay = containerRef.current?.querySelector<HTMLElement>("[data-hero-overlay]");

      tl.fromTo(
        containerRef.current,
        { autoAlpha: 0, scale: 1.04 },
        { autoAlpha: 1, scale: 1, duration: 1.05 },
      )
        .fromTo(
          titleRef.current,
          { y: 86, autoAlpha: 0, filter: "blur(10px)" },
          { y: 0, autoAlpha: 1, filter: "blur(0px)", duration: 1.05 },
          "-=0.82",
        )
        .fromTo(
          subtitleRef.current,
          { y: 22, autoAlpha: 0, filter: "blur(6px)" },
          { y: 0, autoAlpha: 1, filter: "blur(0px)", duration: 0.95 },
          "-=0.8",
        )
        .fromTo(
          ctaRef.current,
          { y: 16, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.85 },
          "-=0.72",
        );

      if (heroMedia) {
        gsap.fromTo(
          heroMedia,
          { scale: 1.08, yPercent: -2 },
          {
            scale: 1.16,
            yPercent: 4,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
          },
        );
      }

      if (heroOverlay) {
        gsap.fromTo(
          heroOverlay,
          { opacity: 0.32 },
          {
            opacity: 0.62,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
          },
        );
      }
    });

    return () => ctx.revert();
  }, [containerRef, titleRef, subtitleRef, ctaRef]);
}
