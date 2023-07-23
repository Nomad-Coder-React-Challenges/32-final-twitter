import { DESKTOP_SCREEN_SIZE } from '#constants';

export const breakpoints = {
  desktop: DESKTOP_SCREEN_SIZE,
};

export const mq = (n: keyof typeof breakpoints) => {
  return `@media (min-width: ${breakpoints[n]}px)`;
};
