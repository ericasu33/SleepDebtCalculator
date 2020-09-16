const getActualHoursPerDay = () => {
  let day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday", "Sunday"]

  let hoursPerDayArr = [];

  for (let i = 0; i < day.length; i++){
    let hoursPerDay = Number(prompt(`On ${day[i]}, how many hours did you sleep?`));

    hoursPerDayArr.push(hoursPerDay);
  };
  return hoursPerDayArr;
}

const totalHoursPerWeek = () => {
  let hoursPerDayArr = getActualHoursPerDay();
  let totalHours = 0;

  for (let i = 0; i <hoursPerDayArr.length; i++){
    totalHours += hoursPerDayArr[i];
  }
  return totalHours; 
}

const getIdealSleepHoursPerWeek = () => {
  const idealHours = 8;
  return 8 * 7;
}

const calculateSleepDebt = () => {
  console.log("Sleep Debt Calculator\n");
  
  let actualSleepHours = totalHoursPerWeek();
  let idealSleepHours = getIdealSleepHoursPerWeek();

  console.log(`\nThe total hours of actual sleep this week is: ${actualSleepHours}.\nThe ideal sleep hour is: ${idealSleepHours}.`);

  if (actualSleepHours === idealSleepHours) {
    console.log("\nPerfect amount :)");
  } else if (actualSleepHours > idealSleepHours){
    let extraSleep = actualSleepHours - idealSleepHours
    console.log(`\nOverslept: ${extraSleep}hrs. Too much`);
  } else {
    let sleepDebt = idealSleepHours - actualSleepHours;
    console.log(`\nSleep Debt: ${sleepDebt}hrs. Get more rest!`);
  }
}

calculateSleepDebt();



// const getSleepHours = day => {
//   switch (day) {
//     case "monday":
//       return sleepHours;
//       break;
//     case "tuesday":
//       return sleepHours;
//       break;
//     case "wednesday":
//       return sleepHours;
//       break;
//     case "thursday":
//       return sleepHours;
//       break;
//     case "friday":
//       return sleepHours;
//       break;
//     case "saturday":
//       return sleepHours;
//       break;
//     default:
//       return sleepHours;
//       break;
//   }
// };

// const getActualSleepHours = () => getSleepHours("Monday") + getSleepHours("Tuesday") + getSleepHours("Wednesday") + getSleepHours("Thursday") + getSleepHours("Friday") + getSleepHours("Saturday") + getSleepHours("Sunday");

// const getIdealSleepHours = () => {
//   const idealHours = 8;
//   return 8 * 7;
// }

// const calculateSleepDebt = () => {
//   let actualSleepHours = getActualSleepHours();
//   let idealSleepHours = getIdealSleepHours();
//   if (actualSleepHours === idealSleepHours) {
//     console.log("Perfect amount :)");
//   } else if (actualSleepHours > idealSleepHours){
//     let extraSleep = actualSleepHours - idealSleepHours
//     console.log(`Overslept: ${extraSleep}hrs. Too much`);
//   } else {
//     let sleepDebt = idealSleepHours - actualSleepHours;
//     console.log(`Sleep Debt: ${sleepDebt}hrs. Get more rest!`);
//   }
// }

// console.log(getActualSleepHours());
// console.log(getIdealSleepHours());
// calculateSleepDebt();