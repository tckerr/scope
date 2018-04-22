export class Token {
    public readonly _value: string;

    constructor(value: string) {
        this._value = value;
    }

    public get value(): string {
        return this._value;
    }
}
