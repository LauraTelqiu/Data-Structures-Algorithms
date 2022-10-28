/*
 The algorithm works by scanning a list of items for the smallest 
 element and then swapping that element for the one in the first 
 position. We start with the first item and we scann for the smallest
 item and once we find it we swap with the first element and we 
 keep going until the items are sorted.
 First element is 99 , we scan the array to find the smallest item
 which is 0 in our case, and we swap 0 with 99, the array becomes 
 [0, 44, 6, 2, 1, 5, 63, 87, 283, 4, 99] then we keep going next 
 first item is 44 we scan for the smallest item which is 1 and we
 swap 44 with 1 [0, 1, 6, 2, 44, 5, 63, 87, 283, 4, 99]
 we keep going until items are sorted

*/

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    //set currentx index as a minimum
    let min = i;
    let temp = array[i];

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        //update minimum if current is lower that what we
        //had previosly
        min = j;
      }
    }
    array[i] = array[min];
    array[min] = temp;
  }
  return
}

selectionSort(numbers);
console.log(numbers);
