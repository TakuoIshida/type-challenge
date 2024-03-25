type Fn = (a: number, b: string) => number;

type AppendArgument<Fn, A> = Fn extends (...args: infer R) => infer T
  ? (...args: [...R, A]) => T
  : never;

type Result2 = AppendArgument<Fn, boolean>;
// expected be (a: number, b: string, x: boolean) => number
