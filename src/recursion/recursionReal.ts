// А вот в этом примере мы найдем ключ с помощью рекурсии O(n)

export const boxCheckerRecursion = (bigBox: Array<number | string | Array<any>>
) => {
 let key = '';
    for(let value of bigBox){
        if(typeof value === 'string'){
            key = value
            break;
        }
        if(Array.isArray(value)){
           const arr = boxCheckerRecursion([...value]);
           if(arr){
            key = arr
            break;
           }
        }
    }
    return key
}

// если мы хотим найти в массиве ключ [1, 2, [3, 4], [5, 6], [[[[7, ['key']]]]], [8]], сколько нужно операций
/**
1
2
[ 3, 4 ]
3
4
[ 5, 6 ]
5
6
[ [ [ [Array] ] ] ]
[ [ [ 7, [Array] ] ] ]
[ [ 7, [ 'key' ] ] ]
[ 7, [ 'key' ] ]
7
[ 'key' ]
key
key
 */