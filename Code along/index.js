// let newArr = [1,2,3,4,5,6,7,8]


// let modArr = newArr.push('sandwich','fries','peach punch')


// console.log(newArr);


// let groupSixApprentices = ['Beni','Edwin','Ly','Ricardo'];

// // console.log(`The members in my group are ${groupSixApprentices[0]},${groupSixApprentices[1]},${groupSixApprentices[2]},${groupSixApprentices[3]} there are ${groupSixApprentices.length} people in my group`);

// let fruits = ['tomato','mango','pineapple','oranges','mandarins'];


// //push adds an element to the end of an array
// fruits.push('cherry');

// //unshift adds an element to the begining

// fruits.unshift('watermelon');

//pop removes the last element
// fruits.pop() removes cherry

//shift removes the first element


//

// for(let i =0; i<fruits.length; i++){
//     console.log(fruits[i])
// }


// let i = 0, n=5;

// while(i <= n){
//     console.log(i);
//     i += 1;
// }


//array of zoo animals

// let zooAnimals = ['Tiger','Zebra','Elephant','Cheetah'];

// //creating a for loop that prints out each animal

// // for(let i =0; i < zooAnimals.length; i++){
// //     console.log(zooAnimals[i])
// // }
// // //loops from 0 to 4
// // for(let i= 0; i<5; i++){
// //     console.log('I am ' +i)


// let myFarm = ['chickens','cows','horses']

// let arrLennth = myFarm.length;

// console.log(arrLennth);


let moviePratons =  [{name : 'tom', age: 16},
    {name : "ashley", age:23 },
    {name : 'osa', age:24 }]

function canWatchMoive(array){
    for(let i=0; i < array.length; i++){
        if(array[i].age >= 17){
            console.log(`${array[i].name} can watch rated r movies` 
            )
        } else{
            console.log('No!!!, you are too young')
        }
    }
}
canWatchMoive(moviePratons);
