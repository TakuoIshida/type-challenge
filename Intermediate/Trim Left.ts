type Space = " " | "\n" | "\t" | "　";
type TrimLeft<T extends string> = T extends `${Space}${infer R}`
  ? TrimLeft<R>
  : T;

type TrimRight<T extends string> = T extends `${infer R}${Space}`
  ? TrimRight<R>
  : T;
type leftTrimed = TrimLeft<"  Hello World  ">; // expected to be 'Hello World  '
type rightTrimed = TrimRight<"  Hello World  ">;

type Trim<T extends string> = T extends
  | `${infer R}${Space}`
  | `${Space}${infer R}`
  ? Trim<R>
  : T;

// type Trim<T extends string> = T extends `${Space}${infer R}${Space}`
//   ? Trim<R>
//   : T;

type trim = Trim<"  Hello World  ">;
