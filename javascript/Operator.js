//arithamatic operators
// let x = 10;

// compound Operator
// x+=y; // x=x + y
// x += 1;
// x++
// console.log(x);

// logical operetors

// 1. logical AND &&
//  let happy = true && true;

//  console.log(happy);

// const isLoggedIn = true;
// const hasPermissions = true;

// if(isLoggedIn && hasPermissions ){
//     console.log("your data is sucessfully deleted");
// }else{
//     console.log("there is no permission ");
// }
// console.log("cat" && "dog");

// logical  OR &&
// const happy = true && false;
// console.log(happy);
//   logical NOT !

// const happy = false
// console.log(!happy);

// const  isLoggedIn = false;
// if(!isLoggedIn){
//     console.log("redirect to login page");
// }

// conditional operators (ternary operators)

// const userRole = "admin";
// if(userRole === "admin"){
//     console.log("you are in admin");
// }else{
//     console.log("you are not an admin");
// }

// userRole === "admin"
//   ? console.log("you are in admin")
//   : console.log("you are not an admin");

// comparism operators
// equal (==)
// not equal(!=)
// strict equal (===)
// strict not equal(!==)
// greater than(>)
// greater than eqaual to (>=)
// less than (<)
// less then Eqaul to(<=)

// console.log(4 == 5);
// console.log(5 != 5);
// console.log(5 === 5);
// console.log(5 !== 5);
// console.log(4 <= 5);
// console.log(4 == "4");

// console.log(3 + 10 * 2);
// console.log((3 + 10) *2);

// console.log(3 > 2 && 2 > 1);
// const happy = true
// if(happy === "tableHead"){

// }else{

// }
// const flag = new Boolean(true)
// console.log("to string is", flag.toString());

// const isTrue = "codekul";
// console.log(new Boolean(isTrue));

// const data = [
//     {
//         id:1,
//         name:"codekul",
//         active:true
//     },
//     {
//         id:2,
//         name:"codekul",
//         active:true
//     },
//     {
//         id:3,
//         name:"codekul",
//         active:false
//     }
// ]
// active === "isAction"
// active === "inActive"

const superAdmin = false;
const Admin = true;
const accountant = true;
const normalUser = true;

const user1 = "superAdmin";
const user2 = "admin";
const user3 = "accountant";
const user4 = "normalUser";    

if (superAdmin && user1 ==="superAdmin" && user2 ==="admin" && user3 === "accountant" && user4 === "normalUser"){
  console.log("welcome To Super Admin Page");
} else if (Admin &&  user2 ==="admin" && user3 === "accountant" && user4 === "normalUser") {
  console.log("welcome to admin page");
} else if (accountant && user3 === "accountant" && user4 === "normalUser") {
  console.log("welcome to accountant page");
} else if (normalUser && user4 ==="normalUser") {
  console.log("welcome to user page");
} else {
  console.log("you are not logged in");
}

// if (user1 === "superAdmin") {
//   console.log("welcome To Super Admin Page");
// } else if (user2 === "admin") {
//   console.log("welcome to admin page");
// } else if (user3 === "accountant") {
//   console.log("welcome to accountant page");
// } else if (user3 === "normalUser") {
//   console.log("welcome to user page");
// }
