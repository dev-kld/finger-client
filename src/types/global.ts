export type Numberish = number | `${number}`;

export type Nullable<T> = { [K in keyof T]: T[K] | null };

export type NonNullable<T> = Exclude<T, null | undefined>;
