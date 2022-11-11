export interface Storage {
  read: (key: string) => string | null;
  write: (key: string, value: string) => void;
}

let defaultStorage = {
  read: (key: string) => {
    return localStorage.getItem(key);
  },
  write: (key: string, value: string) => {
    localStorage.setItem(key, value);
  }
};

export const useStorage = () => {
  return defaultStorage;
}

export const useStorageReplace = (storage: Storage) => {
  defaultStorage = storage;
}