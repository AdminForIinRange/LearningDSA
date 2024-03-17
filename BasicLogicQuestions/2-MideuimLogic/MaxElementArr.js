const MaxArr = (arr) => {
  let Max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > Max) {
      Max = arr[i];
    }
  }
  return Max;
};

console.log(MaxArr([1, 2, 3, 4, 5]));
