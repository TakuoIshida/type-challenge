type Flatten<A extends unknown[]> = A extends [infer H, ...infer R]
  ? [...(H extends unknown[] ? Flatten<H> : [H]), ...Flatten<R>]
  : [];

type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]>; // [1, 2, 3, 4, 5]
