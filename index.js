function createEmployeeRecord(array) {
    
   const object = {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: [],
 }
 return object
 // Returns an object with content of ONE array ["Gray", "Worm", "Security", 1] passed into it.
}

function createEmployeeRecords(arrayOfArrays) {
return arrayOfArrays.map((array) => createEmployeeRecord(array))
// Returns and converts each nested array into an employee record (object line 3) and accumulates it to a new array.
}

function createTimeInEvent(object, dateStamp) {
    const myObj = {
        type: "TimeIn",
        hour: parseInt(dateStamp.split(" ")[1]),
        date: dateStamp.split(" ")[0],
    }
  object.timeInEvents.push(myObj)
   return object
   // Returns an object with "timeIn" event, which has a punch-in hour and date.
}


function createTimeOutEvent(object, dateStamp) {
  const myObj = {
    type: "TimeOut",
    hour: parseInt(dateStamp.split(" ")[1]),
    date: dateStamp.split(" ")[0],
   }
  
   object.timeOutEvents.push(myObj)
   return object
  // Returns an object with "timeOut" event, which has a punch-out hour and date.
}

function hoursWorkedOnDate(object, dateStamp) {
  console.log(object)
  console.log(dateStamp)
   const clockIn = object.timeInEvents.find((eventObject) => eventObject.date === dateStamp)
   const clockOut = object.timeOutEvents.find((eventObject) => eventObject.date === dateStamp)
   
   return (clockOut.hour - clockIn.hour) / 100
   // Returns amount of hours worked, which equals to (9:00 - 11:00 = 2 hours).
}
hoursWorkedOnDate()

function wagesEarnedOnDate(object, dateStamp) {
  // console.log(object)
   return hoursWorkedOnDate(object, dateStamp) * object.payPerHour 
   // Retuens $27 per hour times 2, which equals to $54.
}
// wagesEarnedOnDate()

function allWagesFor(object) { //map = copy
   const dateWorked = object.timeInEvents.map((obj) => obj.date)
  return dateWorked.reduce((total, counter) => wagesEarnedOnDate(object, counter) + total, 0)
  // Counts multiple days & hours worked, and returns total pay ()
}

function calculatePayroll(array) {
 return array.reduce((total, object) => allWagesFor(object) + total, 0)
 // Returns array, accesses it's nested object, then calculates it's timeInEvents, and payPerHour and gives us a total of $770
}














/* {
    firstName: 'Julius',
    familyName: 'Caesar',
    title: 'General',
    payPerHour: 27,
    timeInEvents: [
      { type: 'TimeIn', hour: 900, date: '0044-03-14' },
      { type: 'TimeIn', hour: 900, date: '0044-03-15' }
    ],
    timeOutEvents: [
      { type: 'TimeOut', hour: 2100, date: '0044-03-14' },
      { type: 'TimeOut', hour: 1100, date: '0044-03-15' }
    ]
  }
          1) calculates that the employee earned 378 dollars */