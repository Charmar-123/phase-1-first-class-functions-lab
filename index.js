// Code your solution in this file!

const returnFirstTwoDrivers = function(driverNames) {
    return driverNames.slice(0,2);
};

const returnLastTwoDrivers = function(driverNames) {

    return driverNames.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(num) {
    return function(fare){
        return fare * num
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, selectingDrivers){

    return selectingDrivers(arrayOfDrivers);

    

}