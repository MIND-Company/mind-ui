import React, { FC, useState } from "react";
import miniWidgetStyles from "./ParkingWidgetMini.styles.module.css";
import longWidgetStyles from "./ParkingWidgetLong.styles.module.css";
import { useFormatter } from "../../hooks";
import { IClickabelWithId } from "../../utils";

interface IBaseParkingWidgetProps extends IClickabelWithId {
  price: string | number;
}

interface ILongParkingWidgetProps extends IBaseParkingWidgetProps {
  size: "long";
  date: string | number | Date;
  parkingName: string;
}

interface IMiniUncompletedWidgetProps extends IBaseParkingWidgetProps {
  size: "mini";
}

interface IMiniCompletedWidgetProps extends IBaseParkingWidgetProps {
  size: "mini";
  parkingName: string;
  date: string | number | Date;
}

export type IParkingWidgetProps =
  | ILongParkingWidgetProps
  | IMiniCompletedWidgetProps
  | IMiniUncompletedWidgetProps;

export const ParkingWidget: FC<IParkingWidgetProps> = (data) => {
  const formatter = useFormatter();
  const [isHover, setHover] = useState(false);
  const formattedDate = "date" in data ? formatter("date", data.date) : null;
  const formattedTime = "date" in data ? formatter("time", data.date) : null;

  if (data.size === "mini") {
    return (
      <div className={miniWidgetStyles.wrapper}>
        {"parkingName" in data && data.parkingName && data.date ? (
          <div className={miniWidgetStyles.titleWrapper}>
            <span>{data.parkingName}</span>
            <span>{formattedTime}</span>
            <span>{formattedDate}</span>
          </div>
        ) : (
          <div className={miniWidgetStyles.titleWrapperUnfilled}>
            <span>Вы сейчас на парковке</span>
          </div>
        )}
        <div className={miniWidgetStyles.sum}>{`${data.price}₽`}</div>
        <div
          className={miniWidgetStyles.details}
          onClick={() => data.onClick(data.id)}
        >
          Подробнее
        </div>
      </div>
    );
  }

  return (
    <div
      className={longWidgetStyles.wrapper}
      onMouseEnter={() => setHover(!isHover)}
      onMouseLeave={() => setHover(!isHover)}
    >
      <div className={longWidgetStyles.title}>{data.parkingName}</div>
      <div onClick={() => data.onClick(data.id)}>
        {isHover ? "Подробнее" : `${data.price}₽`}
      </div>
      <div className={longWidgetStyles.date}>{formattedDate}</div>
    </div>
  );
};
