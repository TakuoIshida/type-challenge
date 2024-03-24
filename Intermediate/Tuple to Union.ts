type Arr = ["1", "2", "3"];

type TupleToUnion<T> = T extends Array<infer Items> ? Items : never;

type OtherAnswer<T extends any[]> = T[number];

type Test = TupleToUnion<Arr>; // expected to be '1' | '2' | '3'
type Other = OtherAnswer<Arr>; // expected to be '1' | '2' | '3'
