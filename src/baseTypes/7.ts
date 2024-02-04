/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum WeekDay {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
}
enum WeekendDay {
  Saturday = "Saturday",
  Sunday = "Sunday",
}

type Day = WeekDay | WeekendDay;

function isWeekend(day: Day): day is WeekendDay {
  return day in WeekendDay;
}
