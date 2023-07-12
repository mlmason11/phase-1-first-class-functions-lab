// Code your solution in this file!

// const driverList = []

const returnFirstTwoDrivers = (driverList) => driverList.slice(0, 2);

const returnLastTwoDrivers = (driverList) => driverList.slice(driverList.length - 2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return multipliedFare = (fare) => fare * multiplier;
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(driverList, funct) {
    // if (funct = returnFirstTwoDrivers) {
    //      return driverSelection = returnFirstTwoDrivers(driverList);
    // }
    // else {
    //     return driverSelection = returnLastTwoDrivers(driverList);
    // }
    return funct(driverList);
}