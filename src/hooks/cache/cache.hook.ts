let _cache: Record<string, any> = {};

const runCache = <ReturnCallbackValue>(
  key: string,
  cb: () => ReturnCallbackValue,
): ReturnCallbackValue => {
  if (_cache[key]) {
    return _cache[key];
  }
  _cache[key] = cb();
  return _cache[key];
};

const runAsyncCache = <ReturnCallbackValue>(
  key: string,
  cb: () => Promise<ReturnCallbackValue>,
): Promise<ReturnCallbackValue> => {
  if (_cache[key]) {
    return Promise.resolve(_cache[key]);
  }
  return cb()
    .then((result) => {
      _cache[key] = result;
      return result;
    })
    .catch((err) => {
      console.error(
        "Произошла ошибка при записи результата асинхронного события в кэш",
      );
      throw err;
    });
};

const clearCache = (key?: string | ""): void => {
  if (key && key !== "") {
    _cache[key] = null;
    return;
  }
  _cache = {};
};

export const useCache = () => {
  return { runCache, runAsyncCache, clearCache };
};
