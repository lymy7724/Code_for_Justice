const bill = 275;

/* Write your code below. Good luck! 🙂 */
const tip = bill  <=300  && bill >= 50  ? bill * 0.15 : bill * 0.2;
console.log(`The bill is ${bill}, the tip is ${tip}, the total is ${bill + tip}`);

//if bill is less than or equal to 300, or greater or equal to 50, multiply bill * 0.15 else bill * 0.2