// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(collection, driversName){
    let match = collection.filter(
        array => array.toLowerCase() === driversName.toLowerCase()
        )
    if (match){
        return match
    } else{return undefined}    
}

function fuzzyMatch(collection, letters){    
    let lettersMatch = collection.filter(
        array => array.toLowerCase().indexOf(letters.toLowerCase())===0
        )
    return lettersMatch;
}

console.log(fuzzyMatch(drivers, "Sa"))

const driversObj = [
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


function matchName(collection, driverName){
    return collection.filter(
        obj=>obj.name === driverName)
   
}

console.log(matchName(driversObj, "Bobby"))