var housekeeper1 = {
    name: "Mary",
    hourlyWage: 15,
    languages: ['English', 'German'],
    overtime: false,
    avgHours: 7.8
};

var bellboy1 = {
    name: "John",
    hourlyWage: 15,
    languages: ['English', 'French'],
    overtime: true,
    avgHours: 9.6
};

//Constructor Function
function BellBoy (name, age, hasWorkPermit, languages){
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
};

function HouseKeeper (name, hourlyWage, languages, overtime, avgHours){
    this.name = name;
    this.hourlyWage = hourlyWage;
    this.languages = languages;
    this.overtime = overtime;
    this.avgHours = avgHours;
    this.clean = function (){
        alert("Cleaning the Room");
    }
}

var bellBoy2 = new BellBoy("Timmy", 19, true, ["French", "English"]);
var housekeeper2 = new HouseKeeper("Jane", 15, ["English", "Mandarin"], true, 3.6);
housekeeper2.clean;