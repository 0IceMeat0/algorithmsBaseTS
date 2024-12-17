export const binaryResearch = (list: number[], item: number) => {
    let low = 0;
    let high = list.length - 1;

    while(high >= low){
        const mid = Math.floor((high + low) / 2);
        const quess = list[mid];
        if(quess === item){
            return quess
        } else if (quess > item){
            high = mid - 1
        } else{
            low = mid + 1
        }
    }
    return null
}