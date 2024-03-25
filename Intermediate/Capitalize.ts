type MyCapitalize<S extends string> = S extends `${infer x}${infer tail}`
  ? `${Uppercase<x>}${tail}`
  : S;
type capitalized = MyCapitalize<"hello world">; // expected to be 'Hello world'
