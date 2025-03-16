import moment from "moment";

export const TimeUtils = {
  // Get the current time
  getCurrentTime: () => new Date(),
  // Get the time after a certain number of seconds
  getTimeAfterSeconds: (seconds) => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + seconds);
    return time;
  },
  // Get the time after a certain number of minutes
  getTimeAfterMinutes: (minutes) => {
    const time = new Date();
    time.setMinutes(time.getMinutes() + minutes);
    return time;
  },
  // Get the time after a certain number of hours
  getTimeAfterHours: (hours) => {
    const time = new Date();
    time.setHours(time.getHours() + hours);
    return time;
  },
  // Get the time after a certain number of days
  getTimeAfterDays: (days) => {
    const time = new Date();
    time.setDate(time.getDate() + days);
    return time;
  },
  // Get the time after a certain number of months
  getTimeAfterMonths: (months) => {
    const time = new Date();
    time.setMonth(time.getMonth() + months);
    return time;
  },
  // Get the time after a certain number of years
  getTimeAfterYears: (years) => {
    const time = new Date();
    time.setFullYear(time.getFullYear() + years);
    return time;
  },
  // Get the difference between two times in seconds
  getDifferenceInSeconds: (time1, time2) => Math.abs((time1 - time2) / 1000),
  // Get the difference between two times in minutes
  getDifferenceInMinutes: (time1, time2) =>
    Math.abs((time1 - time2) / 1000 / 60),
  //  Get the difference between two times in hours
  getDifferenceInHours: (time1, time2) =>
    Math.abs((time1 - time2) / 1000 / 60 / 60),
  //  Get the difference between two times in days
  getDifferenceInDays: (time1, time2) =>
    Math.abs((time1 - time2) / 1000 / 60 / 60 / 24),
  //  Get the difference between two times in months
  getDifferenceInMonths: (time1, time2) =>
    Math.abs((time1 - time2) / 1000 / 60 / 60 / 24 / 30),
  //  Get the difference between two times in years
  getDifferenceInYears: (time1, time2) =>
    Math.abs((time1 - time2) / 1000 / 60 / 60 / 24 / 365),
  //  Get the time in a specific format
  getTimeInFormat: (time, format) => moment(time).format(format),
  //  Get the time in a specific timezone
  getTimeInTimezone: (time, timezone) => moment(time).tz(timezone),
  //  Get the time in a specific locale
  getTimeInLocale: (time, locale) => moment(time).locale(locale),
  //  Get the time in a specific language
  getTimeInLanguage: (time, language) => moment(time).locale(language),
  //  Get the time in a specific calendar
  getTimeInCalendar: (time, calendar) => moment(time).calendar(calendar),
  //  Get the time in a specific week
  getTimeInWeek: (time, week) => moment(time).week(week),
  //  Get the time in a specific day
  getTimeInDay: (time, day) => moment(time).day(day),
  //  Get the time in a specific month
  getTimeInMonth: (time, month) => moment(time).month(month),
};
