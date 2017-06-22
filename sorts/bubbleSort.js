const swap = () => {

}

const bubbleSort = (array) => {
  let sorted = false;
  let arr = [...array];

  while (!sorted) {
    sorted = true;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        sorted = false;
      }
    }
  }

  return arr;
};

module.exports = bubbleSort;