
//[[john, 1] [maria 1] [john,5]]

function chatLota(arr) {
  let log = {}

  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {

      if (arr[i][0] === arr[j][0]) {
        log.name = arr[i][0]
        log.numberOfChats = arr[i][1] + arr[j][1]
        log++

      } else {
        log.name = arr[i][0]
        log.numberOfChats = arr[i][1]
        log++

      }

    }

  }


}
function chatLota([[john, 1], [maria 1], [john, 5]])








// for (let i = 0; i < nums.length; i++) {
//   let value = nums[i];
//   const pair = target - value;
//   if (map[pair] !== undefined) {
//     return [map[pair], i];
//   } else {
//     map[value] = i;
//   }
// }
// }