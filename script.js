// let startTime;
// let finishTime;
// let targetDistance;
// let avgSpeed;
// let distanceUnit


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

    if (totalTimeInMinutes < 0) {
        totalTimeInMinutes += 1440; // 24 hours*60min = 1440min
    };
    console.log('totalTimeInMinutes', totalTimeInMinutes, typeof(totalTimeInMinutes));
};


function getDistance() {
    // Function to get distance from user input (distance field)

    let targetDistance = document.getElementById('distanceValue').value;
    let distanceUnit = document.getElementById('distanceUnit').value;
    console.log(targetDistance, distanceUnit, typeof(targetDistance));
};

