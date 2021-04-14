import { useEffect } from 'react';

enum EventName {
  KeyDown = 'keydown',
  KeyUp = 'keyup'
}

const useKeyEvent = (
  eventName: EventName,
  keys: string[],
  callback: (key: string) => void
) => {
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      const { key } = event;

      if (keys.includes(key.toLowerCase())) {
        callback(key);
      }
    };

    window.addEventListener(eventName, handler);

    return () => {
      window.removeEventListener(eventName, handler);
    };
  }, [callback, eventName, keys]);
};

export { EventName };
export default useKeyEvent;
