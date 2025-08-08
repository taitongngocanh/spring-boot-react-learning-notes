import { Animal } from "./Animal";
export declare class Dog extends Animal {
    private _eye;
    constructor(theName: string, theAge: number, theSpecies: string, _eye: string);
    get eye(): string;
    set eye(value: string);
    getInfo(): string;
}
//# sourceMappingURL=Dog.d.ts.map