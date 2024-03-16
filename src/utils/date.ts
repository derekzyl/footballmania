const weekday = new Array(7);
weekday[0] = 'Sunday';
weekday[1] = 'Monday';
weekday[2] = 'Tuesday';
weekday[3] = 'Wednesday';
weekday[4] = 'Thursday';
weekday[5] = 'Friday';
weekday[6] = 'Saturday';

export const getWeekday = (dt: Date) => {
  const today = new Date();
  const date = new Date(dt);

  const day = date.getDay();
  const tDay = today.getDay();

  if (tDay === day) {
    return 'Today';
  }
  return weekday[day];
};

export const getFormattedTime = (dt: Date) => {
  const date = new Date(dt);

  const hr = date.getHours();
  const min = date.getMinutes();

  const fHr = hr % 12;
  const fMin = min < 10 ? `0${min}` : min;

  const tz = hr >= 12 ? 'pm' : 'am';
  return `${fHr}:${fMin}${tz}`;
};

export const getTimeSpent = (initialTime: Date) => {
  const current = new Date();
  const diff = (current.getTime() - initialTime.getTime()) / 1000;
  return diff;
};
