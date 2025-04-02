// вариант бысрой сортировки с выбором опорного элемента под номером 1 в массиве

export const qSort = (arr: number[]): number[] => {
    if (arr.length < 2) return arr;
    let less = [];
    let greater = [];
    const firstElementArray = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (firstElementArray < arr[i]) {
            greater.push(arr[i]);
        } else {
            less.push(arr[i]);
        }
    }
    return [...qSort(less), firstElementArray, ...qSort(greater)];
};
