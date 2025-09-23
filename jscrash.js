// function arrSum(arr){
//     let sum = 0
//     for (i = 0; i < arr.length; ++i){
//         sum = sum + arr[i]
//     }
//     return sum
// }

// console.log(arrSum([2, 8, 10, 6]))






// function progressiveSum(num){
//     let sum = 0
//     for (i = 0; i <= num; ++i){
//         sum = sum + i;
//     }
//     return sum
// }

// console.log(progressiveSum(10)







// function calcTime(seconds){
//     let timerMinuets =  Math.floor(seconds / 60)
//     let timerSeconds = seconds % 60;
//      if (timerMinuets.toString().length === 1){
//         timerMinuets = `0` + timerSeconds
//      }

//      return timerMinuets + `:` + timerSeconds;
// }

// console.log(calcTime(70))


// function getMax(arr){
//     let max = arr[0];
//     for (i =0; i < arr.length; ++i){
//         if (arr[i] > max){
//             max = arr[i]
//         }
//     }
//     return max
// }


// console.log(getMax([-600, -1200, 300]))


// function reverseString(str){
//     let reversedString = ``;
//     for (let i = 0; i < str.length; ++i){
//         reversedString = str[i] + reversedString
//     }
//     return reversedString
// }


// console.log(reverseString(`abc`))


// function reverseString(str){
//     return str.split(``).reverse().join(``);
// }

// console.log(reverseString(`Raimey`))


// function covertToZero(arr){
//     let newArr = [];
//     for (let i = 0; i < arr.length; ++i){
//         newArr[i] = 0
//     }
//     return newArr
// }

// console.log(covertToZero([1, 2, 3, 4, 5, 6]))


// function convertToZero(arr){
//     return new Array(arr.length).fill(0);
// }

// console.log(convertToZero([1, 2, 3, 4, 5, 6]))



// function covertToZero(arr){
//     return arr.map(elem => 0)
// }

// console.log(covertToZero([1, 2, 3, 4, 5, 6]))


// function removeApples(arr){
//     let noApples = [];
//     for (let i = 0; i <= arr.length; ++i){
//         if (arr[i] !== `Apple`){
//             noApples.push(arr[i])
//         }
//     }
//     return noApples
// }

// console.log(removeApples([`Banana`, `Orange`, `Apple`, `Banana`]))


// function removeApples(arr){
//     return arr.filter (elem => elem !== `Apple`)
// }

// console.log(removeApples([`Banana`, `Oranges`, `Apple`, `Banana`]))




// function filterOutFalsy(arr){
//     let truthyArr = []
//     for (let i = 0; i < arr.length; ++i){
//         if (!!arr[i] === true){
//             truthyArr.push(arr[i])
//         }
//     }
//     return truthyArr
// }

// console.log(filterOutFalsy([``, [], 0, null, undefined, `0`]))




// function convertToBoolean(arr){
//     return arr.map(elem => !!elem)
// }

// console.log(convertToBoolean([500, 0, ``, []]))



// function showRating(rating){
//     let ratings = ``;
//     for (let i = 0; i < Math.floor(rating); ++i){
//         ratings += `*`
//         if (i !== Math.floor(rating) - 1){
//             ratings += ``
//         }
//     }
//     if (!Number.isInteger(rating)){
//          ratings += `.`
//     }
//     return ratings
// }

// console.log(showRating(4.5))




// function sortLowToHigh(numbers){
//  return numbers.sort((a, b) => a - b);
// }

// console.log(sortLowToHigh([1, 5, 0, 10, 1000]))


// function sortHighToLow(numbers){
//     return numbers.sort((a, b) => {
//         console.log(b.price, a.price)
//         return b.price - a.price
//     })
// }

// console.log(sortHighToLow([
//     {id: 1, price: 50},
//     {id: 2, price: 0},
//     {id: 3, price: 500},
// ]))


// async function postsByUser(userId){
//    const promise = await fetch(`https://jsonplaceholder.typicode.com/posts`);

//     const result = await promise.json();

//     const posts = result.filter(element => element.userId === userId)

//     console.log(posts)
// }

// postsByUser(5);


// async function firstSixIncomplete(userId){
//    const promise = await fetch(`https://jsonplaceholder.typicode.com/todos`);

//     const result = await promise.json();

//     const incompleteTasks = result.filter(elem => !elem.completed).slice(0, 6)

//     console.log(incompleteTasks)
// }

// firstSixIncomplete(6)
