type Replace<
  S extends string,
  From extends string,
  To extends string
> = From extends ""
  ? S
  : S extends `${infer V}${From}${infer R}`
  ? `${V}${To}${R}`
  : S; // 見つからない場合、そのまま処理するか・typeエラーにするかは、仕様の問題
type replaced = Replace<"types are fun!", "fun", "awesome">; // expected to be 'types are awesome!'
