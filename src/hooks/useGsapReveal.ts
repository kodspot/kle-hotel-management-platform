"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useGsapReveal() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const chapterSections = gsap.utils.toArray<HTMLElement>("[data-chapter]");
    const revealItems = gsap.utils.toArray<HTMLElement>("[data-reveal]");
    const parallaxItems = gsap.utils.toArray<HTMLElement>("[data-parallax]");
    const sequenceBlocks = gsap.utils.toArray<HTMLElement>("[data-sequence]");
    const transitionVeils = gsap.utils.toArray<HTMLElement>("[data-transition]");
    const wowSections = gsap.utils.toArray<HTMLElement>("[data-wow-section]");
    const mouseLayers = gsap.utils.toArray<HTMLElement>("[data-mouse-layer]");

    chapterSections.forEach((section) => {
      const content = section.querySelector<HTMLElement>("[data-chapter-content]");

      if (!content) {
        return;
      }

      const chapterTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 88%",
          end: "bottom 22%",
          scrub: 1,
        },
      });

      chapterTimeline
        .fromTo(
          content,
          {
            opacity: 0.62,
            scale: 0.985,
            filter: "blur(8px)",
          },
          {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 1,
            ease: "expo.inOut",
          },
        )
        .to(content, {
          opacity: 0.82,
          scale: 0.992,
          duration: 1,
          ease: "expo.inOut",
        });
    });

    revealItems.forEach((item, index) => {
      gsap.fromTo(
        item,
        { y: 42, autoAlpha: 0, filter: "blur(8px)" },
        {
          y: 0,
          autoAlpha: 1,
          filter: "blur(0px)",
          duration: 0.95,
          delay: index % 3 === 0 ? 0.02 : 0,
          ease: "expo.inOut",
          scrollTrigger: {
            trigger: item,
            start: "top 86%",
            once: true,
          },
        },
      );
    });

    sequenceBlocks.forEach((block) => {
      const children = block.querySelectorAll<HTMLElement>("[data-seq-item]");
      if (!children.length) {
        return;
      }

      gsap.fromTo(
        children,
        { y: 34, autoAlpha: 0, scale: 0.985 },
        {
          y: 0,
          autoAlpha: 1,
          scale: 1,
          stagger: 0.14,
          ease: "expo.inOut",
          scrollTrigger: {
            trigger: block,
            start: "top 78%",
            end: "bottom 45%",
            scrub: 0.9,
          },
        },
      );
    });

    parallaxItems.forEach((item) => {
      gsap.fromTo(
        item,
        { yPercent: -6, scale: 1.04 },
        {
          yPercent: 8,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        },
      );
    });

    transitionVeils.forEach((veil) => {
      const veilTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: veil,
          start: "top 92%",
          end: "bottom 8%",
          scrub: 1,
        },
      });

      veilTimeline
        .fromTo(veil, { autoAlpha: 0 }, { autoAlpha: 0.45, duration: 1, ease: "expo.inOut" })
        .to(veil, { autoAlpha: 0, duration: 1, ease: "expo.inOut" });
    });

    wowSections.forEach((section) => {
      const sceneTitle = section.querySelector<HTMLElement>("[data-wow-title]");
      const sceneLine = section.querySelector<HTMLElement>("[data-wow-line]");
      const cards = section.querySelectorAll<HTMLElement>("[data-wow-card]");

      const desktopMode = window.innerWidth >= 1024;
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: desktopMode ? "+=180%" : "+=120%",
          scrub: 1,
          pin: desktopMode,
          anticipatePin: desktopMode ? 1 : 0,
        },
      });

      timeline
        .fromTo(
          sceneTitle,
          { autoAlpha: 0, y: 42, filter: "blur(12px)", scale: 0.96 },
          { autoAlpha: 1, y: 0, filter: "blur(0px)", scale: 1, duration: 1.1, ease: "expo.inOut" },
        )
        .fromTo(
          sceneLine,
          { scaleX: 0, autoAlpha: 0 },
          { scaleX: 1, autoAlpha: 1, transformOrigin: "left center", duration: 0.9, ease: "expo.inOut" },
          "<0.15",
        )
        .fromTo(
          cards,
          { autoAlpha: 0, y: 52, scale: 0.88, filter: "blur(14px)" },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            stagger: 0.25,
            duration: 1.15,
            ease: "expo.inOut",
          },
          "<0.2",
        )
        .to(cards, {
          yPercent: -8,
          opacity: 0.65,
          stagger: 0.2,
          duration: 1,
          ease: "expo.inOut",
        });
    });

    const handleMouseMove = (event: MouseEvent) => {
      if (window.innerWidth < 1024) {
        return;
      }

      const xRatio = (event.clientX / window.innerWidth - 0.5) * 2;
      const yRatio = (event.clientY / window.innerHeight - 0.5) * 2;

      mouseLayers.forEach((layer) => {
        const depth = Number(layer.dataset.depth || "10");
        gsap.to(layer, {
          x: xRatio * depth,
          y: yRatio * depth,
          duration: 1,
          ease: "expo.out",
          overwrite: true,
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
}
