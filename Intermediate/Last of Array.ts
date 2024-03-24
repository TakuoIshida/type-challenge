type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];

// lengthだけだとover flowするため、anyを１つ足してから...Tの最後尾を取得する
type Last<T extends any[]> = [any, ...T][T["length"]];

type tail1 = Last<arr1>; // expected to be 'c'
type tail2 = Last<arr2>; // expected to be 1
type tail3 = Last<[]>; // expected to be 1
