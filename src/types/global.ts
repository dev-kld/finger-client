export type Numberish = number | `${number}`;

export type Size = 'small' | 'medium' | 'big';

export interface Currency {
    name: string;
    code: number;
}

export interface AccountType {
    name: string;
    code: number;
}
