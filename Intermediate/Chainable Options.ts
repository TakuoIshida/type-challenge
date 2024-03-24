declare const config: Chainable;

// type Chainable = {
//   option: (key: string, value: any) => Chainable;
//   get: () => Result;
// };

type Chainable<R = object> = {
  option<K extends keyof any, V>(
    key: K extends keyof R ? (V extends R[K] ? never : K) : K,
    value: V
  ): Chainable<Omit<R, K> & Record<K, V>>;
  get(): R;
};

const result: Result = config
  .option("foo", 123)
  .option("name", "type-challenges")
  .option("bar", { value: "Hello World" })
  .get();

// expect the type of result to be:
interface Result {
  foo: number;
  name: string;
  bar: {
    value: string;
  };
}
