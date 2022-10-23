export const formatDate = (date: string | number | Date) => {
  if (!date) {
    return null;
  }
  if (typeof date !== "object") {
    date = new Date(date);
  }
  const [day, month, year] = [
    date.getDate(),
    date.getMonth() + 1,
    date.getFullYear(),
  ];

  return `${day >= 10 ? day : "0" + day}.${
    month >= 10 ? month : "0" + month
  }.${year}`;
};

export const formatTime = (date: string | number | Date) => {
  if (!date) {
    return null;
  }
  if (typeof date !== "object") {
    date = new Date(date);
  }
  const [hours, minutes] = [date.getHours(), date.getMinutes()];

  return `${hours >= 10 ? hours : "0" + hours}:${
    minutes >= 10 ? minutes : "0" + minutes
  }`;
};
