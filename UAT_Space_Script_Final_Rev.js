// Define Class //
class InputData {
// Initialization //
    constructor(
        time_seconds,
        latitude,
        longitude,
        gps_altitude,
        bmpSensor_altitude,
        bmpSensor_pressure,
        bmpSensor_temp,
        digSensor_temp,
        cssSensor_temp,
        cssSensor_eCO2,
        cssSensor_TVOC,
        UV,
        accelX,
        accelY,
        accelZ,
        magneticX,
        magneticY,
        magneticZ,
        gyroX,
        gyroY,
        gyroZ,
    ) {
        this.time_seconds = time_seconds;
        this.latitude = latitude;
        this.longitude = longitude;
        this.gps_altitude = gps_altitude;
        this.bmpSensor_altitude = bmpSensor_altitude;
        this.bmpSensor_pressure = bmpSensor_pressure;
        this.bmpSensor_temp = bmpSensor_temp;
        this.digSensor_temp = digSensor_temp;
        this.cssSensor_temp = cssSensor_temp;
        this.cssSensor_eCO2 = cssSensor_eCO2;
        this.cssSensor_TVOC = cssSensor_TVOC;
        this.UV = UV;
        this.accelX = accelX;
        this.accelY = accelY;
        this.accelZ = accelZ;
        this.magneticX = magneticX;
        this.magneticY = magneticY;
        this.magneticZ = magneticZ;
        this.gyroX = gyroX;
        this.gyroY = gyroY;
        this.gyroZ = gyroZ;
    }
}

// Functions Start Here //
function getData(){
    var loadedData = loadData();
    return loadedData;
}

/**
 * format the row to display data
 * @param {*} legend 
 * @param {*} value 
 * @param {*} units 
 */
function dataRow(legend, value, units) {
    msg = "<td>";
    msg += legend;
    msg += ": </td><td>";
    msg += value;
    msg += " " + units;
    msg += "</td>";
    return msg;
}


 // Stop the Timer When Stop is Pressed//
 function stop() {
     clearInterval(timer);
     document.getElementById("startButton").disabled = false;
     document.getElementById("stopButton").disabled = true;
 }

 // Start the Timer When Start is Pressed //
 function start() {
     document.getElementById("data").rows["seconds"].innerHTML = "Reading data...";
     index = 0;
     timer = setInterval(updateDisplay, time_interval);
     document.getElementById("startButton").disabled = true;
     document.getElementById("stopButton").disabled = false;
 }