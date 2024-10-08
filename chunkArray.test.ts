function chunkArray<T>(array: T[], size: number): T[][] {
    const chunkedArr: T[][] = [];
    let index = 0;
    while (index < array.length) {
      chunkedArr.push(array.slice(index, index + size));
      index += size;
    }
    return chunkedArr;
  }
  
  // Example usage
const arr = [1, 2, 3, 4, 5, 6, 7];
  console.log(chunkArray(arr, 3)); // [[1, 2, 3], [4, 5, 6], [7]]
  