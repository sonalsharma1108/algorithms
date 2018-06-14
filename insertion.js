function insertionSort(arr){
var i, len = arr.length, element, j;

for(i = 1; i<len; i++){
    element = arr[i];
    j = i;

    while(j>0 && arr[j-1]>toInsert){
    arr[j] = arr[j-1];
    j--;
    }

    arr[j] = element;
}

return arr;
}
insertionSort([8,6,3,5,4,9]);