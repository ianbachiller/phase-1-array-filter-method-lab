// Code your solution here


//sample filter method:
// [1, 2, 3, 4, 5].filter(function (num) {
//     return num > 3;
//   });
  // => [4, 5]

//code

const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];

function findMatching(array, name1) {
  return array.filter(function (string){
    return (string.toLowerCase() === name1.toLowerCase());
    // return string.toLowerCase() === name1.toLowerCase();
  });
}
findMatching(drivers, "Bobby");

function fuzzyMatch(array, letter) {
    return array.filter(function (string) {
        const slicedString = string.slice(0, letter.length).toLowerCase();
        return slicedString === letter.toLowerCase();
      },
    );
  }
fuzzyMatch(drivers, "Sa");
  
const driversObject= [
{
    name: 'Bobby',
    hometown: 'Pittsburgh' },
  {
    name: 'Sammy',
    hometown: 'New York' } ,
  {
    name: 'Sally',
    hometown: 'Cleveland' },
  {
    name: 'Annette',
    hometown: 'Los Angeles' },
  {
    name: 'Bobby',
    hometown: 'Tampa Bay' }
];

 function matchName(driverArray, nameToMatch) {
  return driverArray.filter(function (driver) {
    return driver.name.toLowerCase() === nameToMatch.toLowerCase();
  });
}

matchName(driversObject, "Bobby");