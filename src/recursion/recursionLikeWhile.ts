
// В этом пример мы будем рекурсивно проходится по коробкам и складываит пустые коробки в кучу O(n^2)

export const boxCheckerWhile = (bigBox: Array<number | string | Array<any>>
) => {
 let key = '';
 let res = [...bigBox]
 while(!key && res.length > 0){
    for(let i = 0; i < res.length; i++){
        let elemntArr = res[i];
        if(typeof elemntArr === 'string'){
            key = elemntArr
        }
        if(Array.isArray(elemntArr)){
            res.push(...elemntArr)
            res.shift()
            break;
        }
        res.shift()
     }
 }
    return key
}

// если мы хотим найти в массиве ключ [1, 2, [3, 4], [5, 6], [[[[7, ['key']]]]], [8]], сколько нужно операций
/**
 * [ 2, [ 3, 4 ], [ 5, 6 ], [ [ [Array] ] ], [ 8 ] ]
[ [ 3, 4 ], [ 5, 6 ], [ [ [Array] ] ], [ 8 ], 3, 4 ]
[ [ 5, 6 ], [ [ [Array] ] ], [ 8 ], 3, 4, 3, 4 ]
[ [ [ [Array] ] ], [ 8 ], 3, 4, 3, 4, 5, 6 ]
[ [ 8 ], 3, 4, 3, 4, 5, 6, [ [ [Array] ] ] ]
[ 3, 4, 3, 4, 5, 6, [ [ [Array] ] ], 8 ]
[ 4, 3, 4, 5, 6, [ [ [Array] ] ], 8 ]
[ 3, 4, 5, 6, [ [ [Array] ] ], 8 ]
[ 4, 5, 6, [ [ [Array] ] ], 8 ]
[ 5, 6, [ [ [Array] ] ], 8, [ [ 7, [Array] ] ] ]
[ 6, [ [ [Array] ] ], 8, [ [ 7, [Array] ] ] ]
[ [ [ [Array] ] ], 8, [ [ 7, [Array] ] ], [ [ 7, [Array] ] ] ]
[ 8, [ [ 7, [Array] ] ], [ [ 7, [Array] ] ], [ [ 7, [Array] ] ] ]
[ [ [ 7, [Array] ] ], [ [ 7, [Array] ] ], [ [ 7, [Array] ] ] ]
[ [ [ 7, [Array] ] ], [ [ 7, [Array] ] ], [ 7, [ 'key' ] ] ]
[ [ [ 7, [Array] ] ], [ 7, [ 'key' ] ], [ 7, [ 'key' ] ] ]
[ [ 7, [ 'key' ] ], [ 7, [ 'key' ] ], [ 7, [ 'key' ] ] ]
[ [ 7, [ 'key' ] ], [ 7, [ 'key' ] ], 7, [ 'key' ] ]
[ [ 7, [ 'key' ] ], 7, [ 'key' ], 7, [ 'key' ] ]
[ 7, [ 'key' ], 7, [ 'key' ], 7, [ 'key' ] ]
[ [ 'key' ], 7, [ 'key' ], 7, [ 'key' ] ]
[ 7, [ 'key' ], 7, [ 'key' ] ]
[ [ 'key' ], 7, [ 'key' ] ]
[ 7, [ 'key' ], 'key' ]
[ [ 'key' ], 'key' ]
[ 'key' ]
key
 */