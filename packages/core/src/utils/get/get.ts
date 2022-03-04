type GetIndexedField<T, K> = K extends keyof T
  ? T[K]
  : K extends `${number}`
  ? '0' extends keyof T
    ? undefined
    : number extends keyof T
    ? T[number]
    : undefined
  : undefined;

type FieldWithPossiblyUndefined<T, Key> =
  | GetFieldType<Exclude<T, undefined>, Key>
  | Extract<T, undefined>;

type IndexedFieldWithPossiblyUndefined<T, Key> =
  | GetIndexedField<Exclude<T, undefined>, Key>
  | Extract<T, undefined>;

export type GetFieldType<P, T> = P extends `${infer Left}.${infer Right}`
  ? Left extends keyof T
    ? FieldWithPossiblyUndefined<T[Left], Right>
    : Left extends `${infer FieldKey}[${infer IndexKey}]`
    ? FieldKey extends keyof T
      ? FieldWithPossiblyUndefined<IndexedFieldWithPossiblyUndefined<T[FieldKey], IndexKey>, Right>
      : undefined
    : undefined
  : P extends keyof T
  ? T[P]
  : P extends `${infer FieldKey}[${infer IndexKey}]`
  ? FieldKey extends keyof T
    ? IndexedFieldWithPossiblyUndefined<T[FieldKey], IndexKey>
    : undefined
  : undefined;

export function get<TPath extends string | number, TData, TDefault = GetFieldType<TData, TPath>>(
  path: TPath,
  data: TData,
  defaultValue?: TDefault
): GetFieldType<TPath, TData> | TDefault | TPath {
  if (typeof path === 'number') {
    return path;
  }
  const value = path
    .split(/[.[\]]/)
    .filter(Boolean)
    .reduce<GetFieldType<TPath, TData>>((value, key) => (value as any)?.[key], data as any);

  return value !== undefined ? value : (defaultValue as TDefault);
}
