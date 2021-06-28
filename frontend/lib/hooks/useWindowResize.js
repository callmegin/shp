import { useEffect, useState, useCallback } from 'react';
import _ from 'lodash';

export const isBrowser = typeof window !== 'undefined';

const useResizeEvent = (callback) => {
  useEffect(() => {
    window.addEventListener('resize', callback);
    return () => {
      return window.removeEventListener('resize', callback);
    };
  }, [callback]);
};

export const useWindowResize = () => {
  const [height, setHeight] = useState(isBrowser && window.innerWidth);
  const [width, setWidth] = useState(isBrowser && window.innerWidth);
  const handleResize = useCallback(() => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  });

  // useResizeEvent(_.debounce(handleResize, 100));
  useResizeEvent(handleResize);
  return [width, height];
};
