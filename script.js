// let startTime;
// let finishTime;
// let targetDistance;
// let avgSpeed;
// let distanceUnit;

function getTime() {
    // Function to get time from user input (start and finish fields)
    
    let startTime = document.getElementById('startTime').value;
    console.log(startTime, typeof(startTime));

    // if (startTime === '') {
    //     startTime = '00:00';
    // }
    
    let finishTime = document.getElementById('finishTime').value;
    console.log(finishTime, typeof(finishTime));
    
    let [startHours, startMinutes] = startTime.split(':');
    let [finishHours, finishMinutes] = finishTime.split(':');
    // console.log(startTime.split(':'), finishTime.split(':'));

    // let checkedInputStartTime = [startHours, startMinutes];

    // newCheckedInputStartTime = checkedInputStartTime.map(item => isNaN(item) ? 0 : item);
    // [finishHours, finishMinutes] = [finishHours, finishMinutes].map(item => isNaN(item) ? 0 : item);

    // [startHours, startMinutes, finishHours, finishMinutes].map(item => isNaN(item) ? 0 : item)
    // console.log([startHours, startMinutes, finishHours, finishMinutes]);


    // checkedInputStartTime.forEach((item, index, arr) => {
    //     if (item == '') {
    //         arr[index] = '0';
    //     }
    //     // else arr[index] = item;
    // });


    // if (checkedInputStartTime.includes(undefined)) {
    //     checkedInputStartTime = [0, 0];
    // }
    // console.log(newCheckedInputStartTime, typeof(newCheckedInputStartTime));

    let startTimeInMinutes = parseInt(startHours) * 60 + parseInt(startMinutes);
    // console.log(startTimeInMinutes, typeof(startTimeInMinutes));

    let finishTimeInMinutes = parseInt(finishHours) * 60 + parseInt(finishMinutes);
    // console.log(finishTimeInMinutes, typeof(finishTimeInMinutes));

    let totalTimeInMinutes = finishTimeInMinutes - startTimeInMinutes;

    if (totalTimeInMinutes <= 0) {
        totalTimeInMinutes += 1440; // 24 hours*60min = 1440min
    };
    console.log('totalTimeInMinutes', totalTimeInMinutes, typeof(totalTimeInMinutes));
    return totalTimeInMinutes;
};


function getDistance() {
    // Function to get distance from user input (distance field)

    let Distance = document.getElementById('distanceValue').value;
    // let distanceUnit = document.getElementById('distanceUnit').value;
    Distance = parseFloat(Distance);
    // console.log(Distance, distanceUnit, typeof(Distance));
    return Distance;
};


function getDistanceUnit() {
    // Function to get distance unit from user input (distance field)

    let distanceUnit = document.getElementById('distanceUnit').value;
    // console.log(distanceUnit, typeof(distanceUnit));
    return distanceUnit;
};


function getAverageSpeed() {
    // Function to get average speed based on time and distance inputs

    let totalTimeInMinutes = getTime();
    let Distance = getDistance();
    let distanceUnit = getDistanceUnit();
    let averageSpeed;

    console.log(Distance, typeof(Distance));
    console.log(totalTimeInMinutes, typeof(totalTimeInMinutes));

    averageSpeed = Distance / (totalTimeInMinutes / 60); //average speed in distanceUnit/hour 
    averageSpeed = parseFloat(averageSpeed.toFixed(1)); //round to 1 decimal places

    console.log(averageSpeed, `${distanceUnit}/h`, typeof(averageSpeed));
    return averageSpeed;
};


function outputResult() {
    // Function to output result to the page

    let averageSpeed = getAverageSpeed();
    let Distance = getDistance();
    let distanceUnit = getDistanceUnit();
    let hoursAndMinutes = getHoursAndMinutes();

    let Result = document.createElement('p');
    Result.textContent = `Average speed has to be ${averageSpeed} ${distanceUnit}/h    [${Distance} ${distanceUnit} within ${hoursAndMinutes}]`;

    let resultsBlock = document.getElementById('resultsBlock');
    resultsBlock.prepend(Result);
    
    return averageSpeed, distanceUnit;
};

function getHoursAndMinutes () {
    let totalTimeInMinutes = getTime();
    let hours = Math.floor(totalTimeInMinutes / 60);
    let minutes = totalTimeInMinutes % 60;
    let hoursAndMinutes = `${hours} hours and ${minutes} minutes`;
    return hoursAndMinutes;
};