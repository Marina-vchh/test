const array1: number[] = [1, 2, 3]
const array2: number[] = [2, 3, 4]

function findDifference<T> (array1: T[], array2: T[]): T[]{
	return array1.filter(item => !array2.includes(item)).concat(array2.filter(item => !array1.includes(item)))
 }

console.log(findDifference<number>(array1, array2))