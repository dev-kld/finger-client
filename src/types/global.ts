export type Numberish = number | `${number}`;

export type Size = 'small' | 'medium' | 'big';

export type Nullable<T> = { [K in keyof T]: T[K] | null };
export type NonNullable<T> = Exclude<T, null | undefined>;

export interface Currency {
    name: string;
    code: number;
}

export interface AccountType {
    name: string;
    code: number;
}
