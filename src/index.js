import './index.html';
import './style.scss';

console.log("--------- Hello world --------");

var bool = true;

var count = -1;
console.log("--------- Boolean --------");
console.log(bool === count);

console.log("--------- String --------");
var text = "Text";

console.log("value of text " + text);
console.log("length of text " + text.length);
console.log("char a position 1 " + text.charAt(1));
console.log("index of character t in text " + text.indexOf('t'));
console.log("to upper case " + text.toUpperCase());
console.log("to lower case " + text.toLowerCase());
console.log("split text by e " + text.split('e'));
console.log("concatenate text with text  " + text.concat(text));

console.log("--------- Number --------");
var num = 15.5;
var stringNumber = '15.5';
var nan = 1 * "a";
var inf = Infinity;

console.log("value of num " + num);
console.log("num to string " + num.toString());
console.log("is num integer? " + Number.isInteger(num));

console.log("parse stringNumber as Integer " + parseInt(stringNumber));
console.log("parse stringNumber as Float " + parseFloat(stringNumber));
console.log("is num safeIntegerValue? " + Number.isSafeInteger(num));

console.log("value of nan " + nan);
console.log("type of nan " + typeof (nan));
console.log("isNan " + Number.isNaN(nan));

console.log("is inf finite number " + Number.isFinite(inf));


console.log("--------- Object --------");
var object = {
	attribute: "value",
	anotherAttribute: 15
};

console.log("value of object " + object);
console.log("value of object.attribute " + object.attribute);
console.log("value of object attribute obtained by attribute name " + object['anotherAttribute']);


console.log("--------- Array --------");
var colors = ["red", "green", "blue"];

console.log("value of colors " + colors);
console.log("element with index 1 from colors " + colors[1]);
console.log('push(yellow)');
colors.push("yellow");
console.log('colors.length = "yellow"');
colors[colors.length] = "yellow";
console.log('colors[10] = "brown"');
colors[10] = "brown";
console.log("new value of colors " + colors);
console.log("value of colors[9] " + colors[9]);

console.log("join colors by , " + colors.join(', '));
console.log("get last element of colors using pop " + colors.pop());
console.log("join again " + colors.join(', '));

console.log("--------- Date --------");
var date = new Date();

console.log("value of date " + date);
console.log("toDateString " + date.toDateString());
console.log("toISOString " + date.toISOString());
console.log("toLocaleDateString " + date.toLocaleDateString());
console.log("toLocaDateString with locale " + date.toLocaleDateString('EN'));
console.log("parsing date string value, converting to date and printing " + new Date(Date.parse('2018-01-15')).toDateString());

console.log("--------- Regexp --------");
var reg = /TE/i;

console.log("does reg matches text? " + reg.test('text'));


console.log("--------- Alert --------");

function myAlert(param) {
	param = param || 'No text to display';
	alert(param);
}

myAlert();
myAlert('My text');

console.log("--------- Confirm --------");
var like = confirm('Do you like it?');
console.log(like);


console.log("--------- Prompt --------");
var userMgs = prompt('What do you think?');
console.log(userMgs);

console.log("--------- Generator --------");

function generator(start) {
	var current = start;
	return function () {
		return ++current;
	}
}


var gen = generator(0);

console.log(gen());
console.log(gen());
console.log(gen());

var gen2 = generator(15);
console.log(gen2());


var genArray = function (length) {
	var array = [];
	for (var i = 0; i < length; i++) {
		array.push(Math.random());
	}
	return array;
};

console.log(genArray(5));


var dayInWeek = function () {
	var day = prompt("Type in a number");
	if (!day) {
		return;
	}

	day = parseInt(day);
	if (typeof day !== 'number' || !Number.isInteger(day) || day < 1 || day > 7) {
		console.log("Invalid number");
		return;
	}

	switch (day) {
		case 1:
			return 'monday';
		case 2:
			return 'tuesday';
		case 3:
			return 'wednesday';
		case 4:
			return 'thursday';
		case 5:
			return 'friday';
		case 6:
			return 'saturday';
		case 7:
			return 'sunday';
	}
};

dayInWeek();

function attrsByPattern(obj, pattern) {
	var prop;
	var reg = new RegExp(pattern);
	for (prop in obj) {
		if (reg.test(prop)) {
			console.log(obj[prop]);
		}
	}
}

var pattern = 'newForm';
var obj = {
	'newFormValue': 5, 'newFormNextValue': 'value', 'oldData': 'not print'
};

attrsByPattern(obj, pattern);

function f(obj, fnName, numOfAtts) {
	if (numOfAtts !== arguments.length - 3) {
		return false;
	}

	return obj[fnName].apply(obj, Array.prototype.slice.call(arguments).slice(3));
}

console.log(f(colors, "join", 1, " | "));