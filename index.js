
/**
  Дано функция с входными данным и ожидаемыми выходными данным
  необходимо составит функцию, так что бы выходные данные были
  такими же ожидаемым
*/


/**
  Задача первая, реализовать функцию, которая будет принимать строку,
  возвращает сроку без первого и последнего символа
*/

function removeFirstAndLastChar(str) {
  // Your code here
  return str.slice(1, -1);
}

removeFirstAndLastChar('eloquent')  // return 'loquen'
removeFirstAndLastChar('person')  // return 'erso'


/**
  Задача вторая, реализовать функцию, которая будет принимать число,
  возвращает массив со значениями перевернутого числа
*/

function revertToArray(numb) {
  // Your code here

}

revertToArray(348597) // return [7,9,5,8,4,3]
revertToArray(752223401) // return [1,0,4,3,2,2,2,5,7]

/**
  Задача третья, реализовать функцию, которая будет принимать строку,
  вернет эту же строку без пробелов
*/

function noSpaceString(str) {
  // Your code here
}

noSpaceString('8 j 8   mBliB8g  imjB8B8  jl  B') //return '8j8mBliB8gimjB8B8jlB'
noSpaceString('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd') //return '88Bifk8hB8BB8BBBB888chl8BhBfd'
noSpaceString('8aaaaa dddd r     ') //return '8aaaaaddddr'

/**
  Задача четвертая, реализовать функцию, которая принимает строку, в строке
  есть числовые символы, необходимо заменить на строковые аналогичные:
  входное 5, 0, 1 заменить на S, O, I соотвественно
  других значений не прийдет
*/

function removeNumbers(str) {
  // Your code here
}

removeNumbers('L0ND0N') // return 'LONDON'
removeNumbers('DUBL1N') // return 'DUBLIN'
removeNumbers('BUDAPE5T') // return 'BUDAPEST'
removeNumbers('PAR15') // return 'PARIS'

/*---2--------------------------------------------------------------------------------------------*/

/**
  Задача, реализовать функцию, которая будет принимать строку
  и возвращать сроку зеркально перевернутую
*/

function revStr(str) {
  return str.split("").reverse().join("");
}

revStr('eloquent')  // return 'tneuqole'
revStr('person')  // return 'nosrep'
revStr('jackass')  // return 'ssakcaj'


/**
  Задача, реализовать функцию, которая будет принимать массив
  и будет возвращать число (количество булиан значений true в массиве)
*/

function doggy(lol) {
  var q = 0;
  lol.filter(function(x){
	if (x === true) {
        q++;}
	});
	return q;
};

var array1 = [true,  true,  true,  false,
              true,  true,  true,  true ,
              true,  false, true,  false,
              true,  false, false, true ,
              true,  true,  true,  true ,
              false, false, true,  true ],
    array2 = [null,  true,  true,  false,
              true,  true,  true,  true ,
              true,  false, true,  false,
              true,  false, false, true ,
              true,  true,  true,  true ,
              undefined, false, true ],
    array3 = [null,  true,  true,  false,
              true,  true,  true,  true ,
              true,  false, '',  false,
              'true',  false, false, true ,
              true,  true,  true,  true ,
              undefined, false, true,  true ];


doggy(array1) // "There are 17 sheeps in total")
doggy(array2) // "There are 15 sheeps in total")
doggy(array3) // "There are 14 sheeps in total")


/**
  Задача, реализовать функцию, которая будет принимать число
  и будет возвращать день недели (дни с 1 по 7 день недели валидно, все остальное ошибка)
*/

function omg(num) {
  var dat = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  if (num <= 6) {
    num -=1;
    return dat[num];
  } else {
    return 'Wrong, please enter a number between 1 and 7';
  }
};

omg(1); //'Sunday'
omg(2); //'Monday'
omg(3); //'Tuesday'
omg(8); //'Wrong, please enter a number between 1 and 7'
omg(20); //'Wrong, please enter a number between 1 and 7'


/**
  Задача, реализовать функцию, которая будет принимать несколько строк
  и будет возвращать их сумму и если сумму узнать невозможно выводим ошибку
*/

function s(a,b) {
  // тут мол чЕ
}

s("4","5") // "9"
s("34","5") // "39"
s("s34","5") // "Wrong, please put a number in string"
s("5","lol") // "Wrong, please put a number in string"
s("1","9") // "10"


/**
  Задача, реализовать функцию, которая будет принимать массив
  и будет возвращать сумму чисел в массиве
*/

function hanSolo(arrayNumbers) {
  // тут мол чЕ
  // newNumb = arr.reduce(function() {
  // return if (...number...) prev + curr
// })
};

hanSolo([]) // 0
hanSolo([1, 5.2, 4, 0, -1]) // 9.2
hanSolo([1, 5.2, 4, null, -1]) // 9.2
hanSolo(['1', 5.2, 4, 0, -1]) // 9.2

//недопил----------------------------------------------
/*function hanSolo(arrayNumbers) {

    var euros = arrayNumbers;
    console.log(euros);

    var sum = euros
        .reduce(function (a, b) {
        return a + b;
		

        });

};
console.log(sum);
hanSolo([29.76, 41.85, 46.5]) //118.11
*/

/**
  Задача, реализовать функцию, которая будет принимать число (год)
  и будет возвращать век
*/
//to understand <<<<<<<<<<<<<<<<<<<<<<<<<<<<
function c(year) {
    var newYear = year.toString().length;
    var stYear
    if (newYear >= 4){
        stYear = year.toString().substring(0, 2);
        if (year % 100 !== 0){
        return (parseInt(stYear)+1);
        } else {
        return parseInt(stYear);
        };
    } else if (newYear >= 3){
        stYear = year.toString().substring(0,1);
        if (year % 100 !== 0){
        return (parseInt(stYear)+1);
        } else {
        return parseInt(stYear);
        };
    } else if (newYear < 3){
        return 1;
    };
};

c(1705) // 18, 'Testing for year 1705'
c(1900) // 19, 'Testing for year 1900'
c(1601) // 17, 'Testing for year 1601'
c(2000) // 20, 'Testing for year 2000'
c(89) // 1, 'Testing for year 89'
