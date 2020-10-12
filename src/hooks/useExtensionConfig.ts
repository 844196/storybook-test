import { useEffect, useState } from 'react';

const CONFIG = {
  isDisplayDefault: false,
  enableBackgroundColor: false,
  cacheMaxAge: 60,
};

export type Config = typeof CONFIG;

export const useExtensionConfig = <K extends keyof Config, V extends Config[K]>(key: K) => {
  const [value, setValue] = useState<V>();

  useEffect(() => {
    chrome.storage.local.get({ [key]: CONFIG[key] }, ({ [key]: got }) => setValue(got));
  }, [key]);

  const _setValue = (newValue: V) => {
    chrome.storage.local.set({ [key]: newValue }, () => {
      setValue(newValue);
    });
  };

  return [value, _setValue] as const;
};
