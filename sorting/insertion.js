const compareArrays = (arr1, arr2) => arr1.length === arr2.length && arr1.every((el, idx) => el === arr2[idx])

function insertionSort(array = []) {
  for (let j = 1; j < array.length; j++) {
    const key = array[j];
    let i  = j - 1;

    while (i >= 0 && array[i] > key) {
      array[i+1] = array[i]
      i -= 1
    }

    array[i+1] = key
  }

  return array
}

const arr1 = [4, 3, 2, 1];
const arr2 = [0, 0, -6, 4, 5, -2];
const arr1_sorted = arr1.sort();
const arr2_sorted = arr2.sort();

console.assert(compareArrays(insertionSort(arr1), arr1_sorted), 'for input %s output should be %s, actual result %s', arr1, arr1_sorted, insertionSort(arr1))
console.assert(compareArrays(insertionSort([]), []), 'for empty array output should be []')
console.assert(compareArrays(insertionSort(arr2), arr2_sorted), 'for input %s output should be %s, actual result %s', arr2, arr2_sorted, insertionSort(arr2))
