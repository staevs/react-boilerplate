export type ArrayValues<TypeOfArray> = TypeOfArray extends
  | Array<infer Item>
  | ReadonlyArray<infer Item>
  ? Item
  : TypeOfArray;
