import { atom } from 'recoil';

export const ScreenSizeState = atom<{
  width: number;
  height: number;
  isMobile: boolean;
}>({
  key: 'ScreenSizeState',
  default: {
    width: 0,
    height: 0,
    isMobile: true,
  },
});

export const ThemeState = atom<'light' | 'dark' | ''>({
  key: 'ThemeState',
  default: 'light',
});
