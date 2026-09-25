export const EASE = {
  outExpo: 'power4.out',
  outQuart: 'power3.out',
  inOutQuart: 'power2.inOut',
  elastic: 'elastic.out(1, 0.5)',
  smooth: 'none',
} as const;

export const DURATION = {
  fast: 0.4,
  normal: 0.8,
  slow: 1.2,
  xslow: 2.0,
} as const;
