/* -------------------------------------------------------------------------------------------------
 * Basic Utilities
 * -----------------------------------------------------------------------------------------------*/
export type Prefixed<K extends string, T> = `${K}${Extract<T, boolean | number | string>}`;

export type Primitive = null | undefined | string | number | boolean | symbol | bigint;

export type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

export interface NestedArray<T> extends Array<T | NestedArray<T>> {}

/** Narrowed function. */
export type Function = (...args: any[]) => unknown;

/** Returns an object from the given object assigned with the values of another given object. */
export type Assign<T1 = {}, T2 = {}> = T1 extends any ? Omit<T1, keyof T2> & T2 : never;

/** 
Adds [key: string]: string | number | boolean to all nested objects entries.

Useful for when you wish to keep autocomplete of object keys but also
allow key values that are not defined at the same time as the object type
*/
export type AllowAnyObjectKeys<T> = {
  [key in keyof Extract<T, object>]: {
    [k in LiteralUnion<keyof Extract<T, object>[key], string | number>]: any;
  };
};

/* -------------------------------------------------------------------------------------------------
 * Except Utility
 * -----------------------------------------------------------------------------------------------*/

type Filter<KeyType, ExcludeType> = IsEqual<KeyType, ExcludeType> extends true
  ? never
  : KeyType extends ExcludeType
  ? never
  : KeyType;

export type Except<ObjectType, KeysType extends keyof ObjectType> = {
  [KeyType in keyof ObjectType as Filter<KeyType, KeysType>]: ObjectType[KeyType];
};

/* -------------------------------------------------------------------------------------------------
 * IsEqual Utility
 * -----------------------------------------------------------------------------------------------*/

export type IsEqual<T, U> = (<G>() => G extends T ? 1 : 2) extends <G>() => G extends U ? 1 : 2
  ? true
  : false;

/* -------------------------------------------------------------------------------------------------
 * LiteralUnion Utility
 * -----------------------------------------------------------------------------------------------*/

export type LiteralUnion<LiteralType, BaseType extends Primitive> =
  | LiteralType
  | (BaseType & { _?: never });

/* -------------------------------------------------------------------------------------------------
 * Merge Utility
 * -----------------------------------------------------------------------------------------------*/

type Merge_<FirstType, SecondType> = Except<FirstType, Extract<keyof FirstType, keyof SecondType>> &
  SecondType;

export type Merge<FirstType, SecondType> = Simplify<Merge_<FirstType, SecondType>>;

/* -------------------------------------------------------------------------------------------------
 * PartialDeep Utility
 * -----------------------------------------------------------------------------------------------*/

// Create a type from another type with all keys and nested keys set to optional.
export type PartialDeep<T> = T extends Primitive
  ? Partial<T>
  : T extends Map<infer KeyType, infer ValueType>
  ? PartialMapDeep<KeyType, ValueType>
  : T extends Set<infer ItemType>
  ? PartialSetDeep<ItemType>
  : T extends ReadonlyMap<infer KeyType, infer ValueType>
  ? PartialReadonlyMapDeep<KeyType, ValueType>
  : T extends ReadonlySet<infer ItemType>
  ? PartialReadonlySetDeep<ItemType>
  : T extends (...args: any[]) => unknown
  ? T | undefined
  : T extends object
  ? T extends Array<infer ItemType> // Test for arrays/tuples, per https://github.com/microsoft/TypeScript/issues/35156
    ? ItemType[] extends T // Test for arrays (non-tuples) specifically
      ? Array<PartialDeep<ItemType | undefined>> // Recreate relevant array type to prevent eager evaluation of circular reference
      : PartialObjectDeep<T> // Tuples behave properly
    : PartialObjectDeep<T>
  : unknown;

/**
Same as `PartialDeep`, but accepts only `Map`s and as inputs. Internal helper for `PartialDeep`.
*/
interface PartialMapDeep<KeyType, ValueType>
  extends Map<PartialDeep<KeyType>, PartialDeep<ValueType>> {}

/**
Same as `PartialDeep`, but accepts only `Set`s as inputs. Internal helper for `PartialDeep`.
*/
interface PartialSetDeep<T> extends Set<PartialDeep<T>> {}

/**
Same as `PartialDeep`, but accepts only `ReadonlyMap`s as inputs. Internal helper for `PartialDeep`.
*/
interface PartialReadonlyMapDeep<KeyType, ValueType>
  extends ReadonlyMap<PartialDeep<KeyType>, PartialDeep<ValueType>> {}

/**
Same as `PartialDeep`, but accepts only `ReadonlySet`s as inputs. Internal helper for `PartialDeep`.
*/
interface PartialReadonlySetDeep<T> extends ReadonlySet<PartialDeep<T>> {}

/**
Same as `PartialDeep`, but accepts only `object`s as inputs. Internal helper for `PartialDeep`.
*/
type PartialObjectDeep<ObjectType extends object> = {
  [KeyType in keyof ObjectType]?: PartialDeep<ObjectType[KeyType]>;
};
