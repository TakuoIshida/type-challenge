type popArr1 = ["a", "b", "c", "d"];
type popArr2 = [3, 2, 1];

type Pop<T extends any[]> = T extends [...infer I, infer _] ? I : never;

type re1 = Pop<popArr1>; // expected to be ['a', 'b', 'c']
type re2 = Pop<popArr2>; // expected to be [3, 2]
