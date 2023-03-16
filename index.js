const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
];

function createFareMultiplier(multiply) {
    return fare=> {
        return multiply*fare;}
}

const fareDoubler=createFareMultiplier(2);

const fareTripler=createFareMultiplier(3);

function selectDifferentDrivers(drivers, driversFunc) {
   if (driversFunc=== returnFirstTwoDrivers) {
    return drivers.slice(0,2); 
 }
    else if (driversFunc === returnLastTwoDrivers){
        return drivers.slice(-2);
    }
}

