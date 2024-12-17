import { binaryResearch } from './binary-search/binary_search.js';

import { boxCheckerWhile, boxCheckerRecursion } from './recursion/index.js';

const bigBox = [1, 2, [3, 4], [5, 6], [[[[7, ['key']]]]], [8]];
console.log(boxCheckerWhile(bigBox));
