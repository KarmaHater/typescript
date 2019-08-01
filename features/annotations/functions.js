var add = function (a, b) {
    return a + b;
};
var logger = function (message) {
    console.log(message);
};
var throwError = function (message) {
    throw new Error(message);
};
// because it does not return undefined.
var forecast = {
    date: new Date(),
    weather: "sunny"
};
var logWeather = function (_a) {
    var date = _a.date, weather = _a.weather;
    console.log(date);
    console.log(weather);
};
logWeather(forecast);
