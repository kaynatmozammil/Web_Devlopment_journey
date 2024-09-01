// let numbers = [1,4,7,9];
// console.log(numbers);

// console.log(numbers.indexOf(9));

// console.log("Suruuuuu");

// let lastName = 'Kaynat';
// let firstName = new String('Love');


//Refrences array
//Array of object
// let courses = [
//     { no: 1, name: 'Kaynat' },
//     { no: 2, name: 'Mozammil' }
// ];
// console.log(courses);
// //console.log(courses.includes({ no: 1, name: 'Kaynat' }));
// let course= courses.find( course=> course.name === "Kaynat");

// console.log(course);

// let numbers = [1,2,3,4,5,6,7];
// numbers.pop();
// numbers.shift();
// numbers.splice(2,1);
// console.log(numbers);


// let numbers = [1,2,3,4,5];
// let numbers2 = numbers;
// //numbers=[];
// //numbers.length=0;
// numbers.splice(0,numbers.length);

// console.log(numbers);
// console.log(numbers2);

// let first = [1,2,3];
// let second = [4,5,6];

// let combined = first.concat(second);

// console.log(combined);

// let marks = [10,20,30,40,50,60,70,80]
// // let sliced = marks.slice(2,6);
// //let sliced = marks.slice(2);
// let sliced = marks.slice();
// console.log(sliced);

// let first = [1,2,3];
// let second = [4,5,6];

// let combined = [...first,'K',false,...second,'M',true];
// console.log(combined);

// //copy create 
// let another =[...combined];
// console.log(another);

// let arr = [10, 20, 30, 40, 50];
// // for(let value of arr)
// // {
// //     console.log(value);
// // }


// // arr.forEach(function (number) {
// //     console.log(number);
// // })

// //Arraow function
// arr.forEach( number=>console.log(number));


// let numbers = [10,20,30,40,50];
// const joined = numbers.join(',');
// console.log(joined); 

// let message = 'This is my first message';
// let parts = message.split(' ');
// console.log(parts);

// let joined = parts.join('_');
// console.log(joined);

// let numbers = [40,30,10,20,50];

// numbers.sort();
// console.log(numbers);

// numbers.reverse();
// console.log(numbers);

// let numbers = [1,2,-3,4,-7];

// // let filtered =numbers.filter(function(value){
// //     return value>=0;
// // })
// let filtered =numbers.filter(value=>value>=0);
// console.log(filtered);\


// let numbers = [7,8,9,10];
// console.log(numbers);
// // let items = numbers.map(function(value){
// //     return 'student_no'+value;
// // })

// let items = numbers.map(value=>'student_no'+value);
// console.log(items);

let numbers = [1, 2, -6, -9];
// let filtered = numbers.filter(value => value >= 0);

// let items = filtered.map(num =>{ value: num});
// console.log(items);

 

let items = numbers
            .filter(value => value >= 0)
            .map(num =>{ value: num});
console.log(items);