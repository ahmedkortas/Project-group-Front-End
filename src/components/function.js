//create a function that substract time from other time with the format hh:mm:ss
//and return the difference in minutes
//Language: javascript
// import data from "./data.js";
var moment = require("moment");

function substractTime(time1, time2) {
  var time1 = time1.split(":");
  var time2 = time2.split(":");
  var time1 = time1[0] * 60 + time1[1] * 1;
  var time2 = time2[0] * 60 + time2[1] * 1;
  var difference = time1 - time2;
  return difference;
}

function objectOfResults(arr) {
  let arrResult = [];
  for (let i = 0; i < arr.length; i++) {
    let x = JSON.parse(arr[i]["results"]);
    x = flatenTheResultObject(x);
    console.log(x, "this is the flaten the result");
    arrResult.push(x);
  }
  return arrResult;
}

//this will flaten Every result object to get object without nested obejct
let flatenTheResultObject = (obj, finalObj = {}, key = "") => {
  if (Array.isArray(obj)) {
    for (let index = 0; index < obj.length; index++) {
      return flatenTheResultObject(obj[index], finalObj);
    }
  } else if (!Array.isArray(obj) && typeof obj == "object") {
    for (let keys in obj) {
      flatenTheResultObject(obj[keys], finalObj, (key = keys));
    }
  } else {
    finalObj[key] = obj;
  }
  return finalObj;
};

const getAllKeysOfANestedObject = (obj) => {
  let keys = [];
  for (let key in obj) {
    if (obj[key] instanceof Object) {
      keys.push(getAllKeysOfANestedObject(obj[key]));
    }
    keys.push(key);
  }
  return keys;
};

let secondObj = [];
const parseAllResults = (obj) => {
  for (let i = 0; i < obj.length; i++) {
    // let objHold = {};
    // objHold["visits"]=[]
    // objHold["username"] = obj[i]["username"];
    for (let j = 0; j < obj[i]["visits"].length; j++) {
      let objHolder = {};
      let date = moment(obj[i]["visits"][j]["logout"])
        .format("MMMM Do YYYY, h:mm:ss")
        .split(" ");
      let dateLogin = moment(obj[i]["visits"][j]["login"])
        .format("MMMM Do YYYY, h:mm:ss ")
        .split(" ");
      objHolder["visit_id"] = obj[i]["visits"][j]["id"];
      objHolder["username"] = obj[i]["username"];
      objHolder["training_program"] =
        obj[i]["visits"][j]["training_program_id"];
      objHolder["login"] = moment(obj[i]["visits"][j]["login"]).format(
        "MMMM Do YYYY, h:mm:ss "
      );
      objHolder["duration"] = substractTime(date[3], dateLogin[3]);
      objHolder["trainingsaission"] = j + 1;
      objHolder["numberOfResults"] = objectOfResults.length;
      objHolder["results"] = objectOfResults(obj[i]["visits"][j]["results"]);
      //   objHold["visits"].push(objHolder)
      secondObj.push(objHolder);
    }
  }
  //   for(let i = 0; i<secondObj.length;i++){

  //   }
  //   let hold=JSON.parse(secondObj[secondObj.length-2]["results"][0]["results"])
  //   hold['sets'][0]['reps_data']
  //   console.log(hold['sets'])
  //   console.log(hold)
  secondObj.sort(function (a, b) {
    var x = a.username.toLowerCase();
    var y = b.username.toLowerCase();
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  });
  // console.log("this is the parsed array: ", secondObj);
  return secondObj;
};

// let arr = parseAllResults(data);
export default parseAllResults;
