// // function outputUser

// const outputDetails = (name) => {
//     let message = 'hello';
// }
// outputDetails('Zachy');
// console.log(message) //reference error - its out of scope

// working 
const outputUser = (name) => {
    let msg = `Hello ${ name }`;
    // inner function
    let userInfo = (msg) => {
        console.log(msg);
    }
    userInfo(msg);
}
outputUser('Zachy');