
//function expression
// const calAge2 = function (birthYeah){
//         return 2024 - birthYeah;
// }

//arrow function
// const calAge3 = birthYeah => 2037 - birthYeah;
// const age3 = calAge3(2000);

// console.log(age3);


// const yearsUntilRetirement = (birthYeah,firsName) => {
//     const age = 2024 - birthYeah;
//     const retirement = 65 - age;
// // //     return retirement;
// // return `${firsName} retires in ${retirement} years`
// // }
// // console.log(yearsUntilRetirement(2000,'rico'));

// //Functions calling other functions
// // const cutFruit = function (fruit){
// //     return fruit * 4;
// // }


// // function fruitProcessor(apples,oranges){
// //     const applePieces = cutFruit(apples);
// //     const orangePieces = cutFruit(oranges);
// //     const juice = `juice with ${applePieces} apples and ${orangePieces} oranges`;
// //     return juice;
// // }

// // console.log(fruitProcessor(2,3));
// // review fuctions

// // const calcAge = function(birthYeah){
// //       return 2037 - birthYeah;
// // }

// // const yearsUntilRetirement = function  (birthYeah,firsName){
// //          const age = calcAge(birthYeah);
// //          if(retirement > 0){
// //          const retirement = 65 - age;
// //             return retirement;
       
// //          } else{
// //             return -1;
// //          }
  
       
// //     }

// // console.log(yearsUntilRetirement(1991,'rico'));
// // console.log(yearsUntilRetirement(1950,'mike'));
// // //function challenge # 1
// // Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

// // Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

// // Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

// // Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

// // Ignore draws this time. Instead, log No team wins... to the console if there is no winner.
// //Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.
// //Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.



// const calcAverage = (score1,score2,score3) =>{
     
//       return( score1 + score2 + score3) / 3;
// }



//  scoreDolphins = calcAverage(44,23,71);
//  scoreKoalas =  calcAverage(65,54,49);

// function checkWinner(scoreDolphins,scoreKoalas){
//        if(scoreDolphins >=  2 * scoreKoalas){
//         console.log('Koalas win!!!!!!!!')
//        } else if(scoreKoalas  >=  2 *  scoreDolphins){
//         console.log('Dolphins win!!!!!!!!')
//        } else{
//         console.log('Neither win, yall suck')
//        }
// }
// checkWinner(scoreDolphins,scoreKoalas)




