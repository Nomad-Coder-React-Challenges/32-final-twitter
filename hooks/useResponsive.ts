import { useCallback, useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';

import instance from '#apis/instance';
import { DESKTOP_SCREEN_SIZE } from '#constants';
import { useMobileDetect } from '#hooks';
import { ScreenSizeState } from '#stores/appStateStore';

const useResponsive = () => {
  const { isMobile } = useMobileDetect();

  const setScreenSize = useSetRecoilState(ScreenSizeState);

  const [windowSize, setWindowSize] = useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });

  const handleResize = useCallback(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    setScreenSize({
      width: windowSize.width,
      height: windowSize.height,
      isMobile: windowSize.width < DESKTOP_SCREEN_SIZE,
    });
  }, [windowSize, setScreenSize]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);
  useEffect(() => {
    instance.defaults.headers['device-type'] = isMobile() ? 'Mobile' : 'PC';
  }, [isMobile]);
};

export default useResponsive;
