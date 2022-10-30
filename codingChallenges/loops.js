const nemo = ['nemo', 'dory'];
function findNemo(array) {
  // let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found Nemo')
      break;
    }
  }
}


const findNemo2 = array => {
  array.forEach(i => {
    if (i === 'nemo')
      console.log('Found Nemo')
  })

}

const findNemo3 = array => {
  for (let i of array) {
    if (i === 'nemo') {
      console.log('Found Nemo')
    }
  }
}

findNemo(nemo);
findNemo2(nemo);
findNemo3(nemo);

