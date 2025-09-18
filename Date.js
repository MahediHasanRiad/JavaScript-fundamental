import {startOfWeek} from 'date-fns'

const getDate = new Date()

console.log('current date '+ getDate)       // for today date + time

console.log('Date: ' + getDate.getDate())

console.log('Month '+ getDate.getMonth().toString().padStart(2, '0'))       // add '0' in single month example: 04

console.log('Year '+ getDate.getFullYear())

console.log('Hours '+ getDate.getHours())

console.log('Minutes '+ getDate.getMinutes())

console.log('Seconds '+ getDate.getSeconds())

console.log('this ' + getDate.setFullYear(2020))        // if your set the year

console.log('time in sec ' + getDate.getTime())         // show time in second

console.log('Time zone offset: ',getDate.getTimezoneOffset())       //  -360 (minute)

console.log('UTC date: ', getDate.getUTCDate())     // today date

console.log('date string: ',getDate.toDateString());    // Fri Sep 18 2020

console.log('date string: ',getDate.toLocaleDateString());  // 18/9/2020

console.log('UTC string: ',getDate.toUTCString());  // Fri, 18 Sep 2020 12:38:24 GMT

console.log('ISO string: ', getDate.toISOString());     // 2020-09-18T12:39:32.251Z

const customDate = getDate.toLocaleString('default', {
    weekday: 'long'
})
console.log('customDate: ', customDate) // Friday

console.log(Intl.DateTimeFormat('en-GB').format(getDate)) //  18/09/2020
console.log(Intl.DateTimeFormat('en-US').format(getDate)) //  9/18/2020

/**
 * american time
 */
const time = new Date().getTime()

let timeZone = Intl.DateTimeFormat('en-GB', {
    timeZone: 'America/New_York',
    hour12: true,
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
}).format(time)
console.log('timeZone: ', timeZone)  // 18 September 2025 at 09:43:52 am


const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
console.log('start weekend: ', result)