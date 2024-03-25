type StrToArray<S> = S extends `${infer _}${infer xs}`
  ? [1, ...StrToArray<xs>]
  : [];

type LengthOfString<S extends string> = StrToArray<S>["length"];

type HogeLength = LengthOfString<"hoge">;
