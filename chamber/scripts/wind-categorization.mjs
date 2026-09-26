// Uses the Beaufort Wind Scale to categorize wind according to its speed

function categorizeWind(windSpeed) {
    let speedInKph = convertSpeed(windSpeed)
    
    if (speedInKph < 1) {
        return "Calm";
    } else if (speedInKph <= 5) {
        return "Light Air";
    } else if (speedInKph <= 11) {
        return "Light Breeze";
    } else if (speedInKph <= 19) {
        return "Gentle Breeze";
    } else if (speedInKph <= 28) {
        return "Moderate Breeze";
    } else if (speedInKph <= 38) {
        return "Fresh Breeze";
    } else if (speedInKph <= 49) {
        return "String Breeze";
    } else if (speedInKph <= 61) {
        return "Near Gale";
    } else if (speedInKph <= 74) {
        return "Gale";
    } else if (speedInKph <= 88) {
        return "Strong Gale";
    } else if (speedInKph <= 102) {
        return "Storm";
    } else if (speedInKph <= 117) {
        return "Violent Storm";
    } else {
        return "Hurricane";
    }
}

function convertSpeed(speedInMps) {
    return speedInMps * 3.6;
}

export default categorizeWind;