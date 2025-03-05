import { binaryResearch } from './binary-search/binary_search.js';
import { qSort } from './quick-sort/quickSort.js';
import { boxCheckerWhile, boxCheckerRecursion } from './recursion/index.js';

const bigBox = [1, 2, [3, 4], [5, 6], [[[[7, ['key']]]]], [8]];
const randomArray = [1111, 22, 3, 422, 5, 2, 1, 1233, 2123]

console.log(qSort(randomArray));
