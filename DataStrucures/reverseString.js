//Creare a function that reverses a sring;
//'Hi My Name is Laura' should be:
"aruaL si emaN yM iH ";

function reverse(str) {
  // check input
  if (!str || str.length < 2 || typeof str !== "string") {
    return "Something went wrong";
  }
  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  // console.log(backwards)
  //return string
  return backwards.join("");
  // or return backwards.toString
}
// console.log(reverse('Hi my name is Laura'))

function revers2(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "Something went wrong";
  } else {
    //split to strings, revers and join in one string
    return str.split("").reverse().join("");
  }
}
console.log(reverse("Hi my name is Laura"));
