// GSAP & ScrollTrigger (loaded via CDN)
gsap.registerPlugin(ScrollTrigger);

// Unfurl scroll origin
gsap.from('.origin-txt', {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: { trigger: '.origin-txt', start: 'top 80%' }
});

// Five elements stagger
gsap.utils.toArray('.element').forEach((el, i) => {
  gsap.from(el, {
    opacity: 0,
    x: (i % 2 ? -60 : 60),
    scrollTrigger: { trigger: el, start: 'top 75%' }
  });
});

// River parallax
gsap.to('.river-bg', {
  yPercent: -50,
  ease: 'none',
  scrollTrigger: {
    trigger: '.river',
    start: 'top bottom',
    end: 'bottom top',
    scrub: true
  }
});

// Kailasha summit
gsap.from('.kailasha', {
  scale: 0.8,
  opacity: 0,
  duration: 1.2,
  scrollTrigger: { trigger: '.kailasha', start: 'top 70%' }
});
