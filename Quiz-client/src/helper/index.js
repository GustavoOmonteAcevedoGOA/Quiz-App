export const getFormatedTime = (sec) => {
  return (
    Math.floor(sec / 60)
      .toString()
      .padStart(2, '00') +
    ':' +
    Math.floor(sec % 60)
      .toString()
      .padStart(2, '0')
  );
};
