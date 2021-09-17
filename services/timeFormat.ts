export const timeFormat = (() => {
  const num = (val: number) => {
    val = Math.floor(val);
    return val < 10 ? '0' + val : val;
  }

  return (sec: number) => {
    let minutes = sec / 60 % 60,
      seconds = sec % 60;

    return num(minutes) + ":"
      + num(seconds);
  }
})();