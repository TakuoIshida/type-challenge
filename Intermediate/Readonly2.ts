interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

// 一旦Omitしてから、第二引数に入れたtypeをReadOnlyにするutilityTypeを継承する
type MyReadonly2<T, K extends keyof T = keyof T> = Omit<T, K> &
  Readonly<Pick<T, K>>;

// Omit を自作して、keyの存在うむで場合分けする方法
// type MyReadonly2<T, K extends keyof T = keyof T> = {
//   readonly [U in keyof T as U extends K ? U : never]: T[U];
// } & {
//   [U in keyof T as U extends K ? never : U]: T[U];
// };

const readonlytodo: MyReadonly2<Todo, "title" | "description"> = {
  title: "Hey",
  description: "foobar",
  completed: false,
};

readonlytodo.title = "Hello"; // Error: cannot reassign a readonly property
readonlytodo.description = "barFoo"; // Error: cannot reassign a readonly property
readonlytodo.completed = true; // OK
