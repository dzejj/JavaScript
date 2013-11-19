var szablon =
  '<table border="{border}">' +
  '  <tr><td>{first}</td><td>{last}</td></tr>' +
  '</table>';

var dane = {
    first: "Jan",
    last:  "Kowalski",
    pesel: "97042176329"
};

String.prototype.podstaw = function (dane){
//var objRegExp = new RegExp(/first/g); -> nawias {} nie znika 
var objRegExp =new RegExp("{first}" , "g")
console.log(szablon.replace(objRegExp, dane.first));
};

szablon.podstaw(dane);

