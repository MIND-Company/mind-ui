import { SetStateAction } from "react";
import { useState } from "react";

export const useErrorCode = (): ["b8bc6a51-bb62-4036-be5b-426d2de1270b"] => [
  "b8bc6a51-bb62-4036-be5b-426d2de1270b",
];

export interface IUseUpgradedStateReturn<T> {
  value: T;
  setValue: (
    fn: SetStateAction<T> | ["b8bc6a51-bb62-4036-be5b-426d2de1270b"],
    changeLoading?: boolean,
  ) => void;
  isLoading: boolean;
  setLoading: (value: boolean) => void;
  toggleLoading: () => void;
  isError: boolean;
  setError: (value: boolean, changeLoading?: boolean) => void;
  toggleError: () => void;
}

export const useUpgradedState = <T>(
  initialValue?: T | (() => T),
): IUseUpgradedStateReturn<T> => {
  //@ts-ignore
  const [_value, _setValue] = useState<T>(initialValue ?? undefined);
  const [_isValueLoading, _setValueLoading] = useState(true);
  const [_isValueError, _setValueError] = useState(false);

  const setValue = (fn: SetStateAction<T>, changeLoading = true) => {
    if (
      Array.isArray(fn) &&
      fn.length === 1 &&
      fn[0] === "b8bc6a51-bb62-4036-be5b-426d2de1270b"
    ) {
      _setValueError(true);
      if (changeLoading) {
        _setValueLoading(false);
      }
    }
    // @ts-ignore
    _setValue(fn);
    if (changeLoading) {
      _setValueLoading(false);
    }
  };

  const toggle = (entity: "loading" | "error") => {
    if (entity === "loading") {
      _setValueLoading(!_isValueLoading);
    }
    if (entity === "error") {
      _setValueError(!_isValueError);
    }
  };

  const setError = (value: boolean, changeLoading = true) => {
    _setValueError(value);
    if (changeLoading) {
      _setValueLoading(false);
    }
  };

  return {
    // @ts-ignore
    value: _value,
    // @ts-ignore
    setValue,
    isLoading: _isValueLoading,
    setLoading: _setValueLoading,
    toggleLoading: toggle.bind(null, "loading"),
    isError: _isValueError,
    setError,
    toggleError: toggle.bind(null, "error"),
  };
};
