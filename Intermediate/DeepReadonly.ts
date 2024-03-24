type X = {
  x: {
    a: 1;
    b: "hi";
  };
  y: "hey";
};

type Expected = {
  readonly x: {
    readonly a: 1;
    readonly b: "hi";
  };
  readonly y: "hey";
};

type ExpectedArr = [
  {
    readonly x: {
      readonly a: 1;
      readonly b: "hi";
    };
    readonly y: "hey";
  }
];

type DeepReadonly<T> = keyof T extends never
  ? T
  : { readonly [k in keyof T]: DeepReadonly<T[k]> };

type DeepReadonlyTodo = DeepReadonly<X>; // should be same as `Expected`
type DeepReadonlyTodos = DeepReadonly<ExpectedArr>; // should be same as `Expected`
