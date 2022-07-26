var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek[DaysOfWeek["Monday"] = 1] = "Monday";
    DaysOfWeek[DaysOfWeek["Tuesday"] = 2] = "Tuesday";
    DaysOfWeek[DaysOfWeek["Wednesday"] = 3] = "Wednesday";
    DaysOfWeek[DaysOfWeek["Thursday"] = 4] = "Thursday";
    DaysOfWeek[DaysOfWeek["Friday"] = 5] = "Friday";
    DaysOfWeek[DaysOfWeek["Saturday"] = 6] = "Saturday";
    DaysOfWeek[DaysOfWeek["Sunday"] = 7] = "Sunday";
})(DaysOfWeek || (DaysOfWeek = {}));
var WorkedDays = [DaysOfWeek.Monday];
function AddWorkedDays(dayWorked, info) {
    WorkedDays.push(dayWorked);
    var messageInfo = (info !== undefined) ? "- " + info : "";
    return "Se ha agregado ".concat(dayWorked, " ").concat(messageInfo);
}
;
// let Name: string = "Pablo";
// let names: string [] = ["Pablo","Rex"];
// names.push("Enrique")
//console.log(Name+" "+names);
console.log(AddWorkedDays(DaysOfWeek.Tuesday));
console.log(AddWorkedDays(DaysOfWeek.Wednesday, "Miercoles"));
//codigo de Jhoan
var workedDays = [DaysOfWeek.Monday];
var addWorkedDay = function (dayWorked, otroLog, info) {
    if (otroLog === void 0) { otroLog = "Se ha agregado"; }
    workedDays.push(dayWorked);
    var messageInfo = info ? "- " + info : "";
    // let messageInfo:string = "";
    // if(info!==undefined)
    //     messageInfo = "- "+ info;
    // else
    //     messageInfo = "";
    return "".concat(otroLog, " ").concat(dayWorked, " ").concat(messageInfo);
};
console.log(addWorkedDay(DaysOfWeek.Tuesday));
console.log(addWorkedDay(DaysOfWeek.Wednesday, "Dia agregado", "Miercoles"));
var addDays = function (otroParametro) {
    var days = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        days[_i - 1] = arguments[_i];
    }
    console.log(days);
};
addDays("un string", DaysOfWeek.Thursday);
addDays("otro string", DaysOfWeek.Friday, DaysOfWeek.Saturday, DaysOfWeek.Sunday);
