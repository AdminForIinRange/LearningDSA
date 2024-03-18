const ArrSum = (Arr) => {
  let ArrSum = 0;

  for (let i = 0; i < Arr.length; i++) {
    ArrSum += Arr[i];
  }

  return console.log(ArrSum);
};

ArrSum([1, 2, 3]);
