let arr = [2, 4, 6]
function mengelompokkanAngka(arr) {
    // you can only write your code here!
    let result = [[], [], []];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 3 === 0) {
        result[2].push(arr[i]);
      } else if ( arr[i] % 2 === 0 ) {
        result[0].push(arr[i]);
      } else {
        result[1].push(arr[i]);
      }
    }
  
    return result;
  }

console.log(mengelompokkanAngka(arr))