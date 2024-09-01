console.log("Chalye shuru karte hai");
//Create object

// let rectangle = {
//     length: 1,
//     breath: 2,

//     draw: function () {
//         console.log('drawing rectangle');
//     }
//     // draw () {
//     //     console.log('drawing rectangle');
//     // }
// };

//Factory function

// function createRectangle(len, bre) {
//     return rectangle = {
//         // length,
//         // breath,
//         length: len,
//         breath: bre,

//         // draw: function () {
//         //     console.log('drawing rectangle');
//         // }
//         draw() {
//             console.log('drawing rectangle');
//         }
//     };
//     //return rectangle;

// }

// let rectangleObj1 = createRectangle(3,6);
// let rectangle1=createRectangle(3,7);
// let rectangle2=createRectangle(11,12);

// let rectangle1 = {
//     length: 1,
//     breath: 2,

//     draw: function () {
//         console.log('drawing rectangle');
//     }
// };
// let rectangle2 = {
//     length: 1,
//     breath: 2,

//     draw: function () {
//         console.log('drawing rectangle');
//     }
// };


//Camalcase -> numberOfStudents
/************Constructor function ***************/
//PASCAL NOTATION -> first letter of every word is Capital ->NumberOfStudent
//counstructor function -> prop/method ->initialize/Define

// function Rectangle(len, bre) {
//     this.length = len;
//     this.breath = bre;
//     this.draw = function () {
//         console.log('Drawing');
//     }
// }



//Object creation using counstructor
// let rectangleObject = new Rectangle(34, 12);

// rectangleObject.color = 'yellow';
// console.log(rectangleObject);

// delete rectangleObject.color;
// console.log(rectangleObject);

// let Rectangle1 = new Function(
//     'length', 'breadth',
//     `this.length = length;
// this.breadth = breadth;
// this.draw = function () {
//     console.log('drawing');
// }`);

//Obeject cteation using Rectangle
// let rect = new Rectangle(2, 5);

// rect.length;

// console.log(rect);

// let a = 10 ;
// let b =  a;

// a++;
// console.log(a);
// console.log(b);

// let a= {value:10};
// let b = a;
// a.value++;

// console.log(a.value);
// console.log(b.value);

// let a = 10;
// function inc(a) {
//     a++;
// }

// inc(a);
// console.log(a);

// let a = {value :10};
// function inc(a)
// {
//     a.value++;
// }
// inc(a);
// console.log(a);

let rectangle = {
    length: 2,
    breadth: 5
};

//For-in Loop
// for (let key in rectangle) {
//     //Keys are reflected trough  rectangle [key]
//     console.log(key, rectangle[key]);
// }

// //For of Loop
// for(let key of Object.entries(rectangle))
// {
//     console.log(key);
// }

// if('breadth' in rectangle)
// {
//     console.log('Present');
// }
// else{
//     console.log('Absent');
// }

/*******COLON  1***********/
// let src = {
//     a:10,
//     b:20,
//     c:30
// };
// let dest = {};

// for(let key in src)
// {
//     dest[key] = src[key];
// }
// console.log(dest);

// src.a++;
// console.log(dest);

/**COLON #2 */
// let src = {
//     a:10,
//     b:20,
//     c:30
// };
// let dest = Object.assign({},src);

// console.log(dest);
// src.a++;
// console.log(dest);

// let src = {
//     a:10,
//     b:20,
//     c:30
// };

// let src2 = {value:25};
// let dest = Object.assign({},src,src2);

// console.log(dest);
// src.a++;
// console.log(dest);


/**COLON #3 */

// let src = {
//     a: 10,
//     b: 20,
//     c: 30
// };
// let dest = {...src};

// console.log(dest);
// src.a++;
// console.log(dest);