// function getDayInfo(date) {
//    let getDate = new Date(date)
//    var options = {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric',
//       weekday: 'long',
//    };
//    return newDate = getDate.toLocaleString("ru", options)
// }

function getWeekDay(date) {
   let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
   return days[date.getDay()];
}

function getMonth(date) {
   let months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
   return months[date.getMonth()];
}

function getWeekNumber(currentdate) {
   const oneJan = new Date(currentdate.getFullYear(), 0, 1);
   const numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
   return crrentWeekNumber = Math.ceil((currentdate.getDay() + 1 + numberOfDays) / 7);
}

function getDayInfo(date) {
   const currentdate = new Date(date)
   const weekNumber = getWeekNumber(currentdate)
   const day = getWeekDay(currentdate)
   const month = getMonth(currentdate)
   const year = currentdate.getFullYear()
   return `${day} ${weekNumber} неделя ${month} ${year} года`
}

console.log(getDayInfo('01.01.2022'))