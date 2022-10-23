import * as utils from "./formatter.utils";

export type FormatType = "date" | "time";

const invalidMessage = "Неправильный формат";

export const useFormatter = () => {
  return (type: FormatType, unformattedValue: any): string => {
    switch (type) {
      case "date":
        return utils.formatDate(unformattedValue) ?? invalidMessage;
      case "time":
        return utils.formatTime(unformattedValue) ?? invalidMessage;
      default:
        return "Неверный тип для форматирования";
    }
  };
};
