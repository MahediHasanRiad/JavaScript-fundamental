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

console.log('Time zone offset: ',getDate.getTimezoneOffset())       //  -360

console.log('UTC date: ', getDate.getUTCDate())     // today date

console.log('date string: ',getDate.toDateString());    // Fri Sep 18 2020

console.log('date string: ',getDate.toLocaleDateString());  // 18/9/2020

console.log('UTC string: ',getDate.toUTCString());  // Fri, 18 Sep 2020 12:38:24 GMT

console.log('ISO string: ', getDate.toISOString());     // 2020-09-18T12:39:32.251Z

const customDate = getDate.toLocaleString('default', {
    weekday: 'long'
})
console.log('customDate: ', customDate) // Friday


