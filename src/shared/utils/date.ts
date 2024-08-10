export const timeToTimestamp = (time: number) => {
  return Number((time / 1000).toFixed(0));
};

export const timestampToTime = (time: number) => {
  return time * 1000;
};
