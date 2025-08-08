export class Animal {
     constructor(private _name: string, private _age: number, private _species: string) {}

     public get name(): string {
          return this._name
     }

     public set name(value: string) {
          this._name = value;
     }

     public get age(): number {
          return this._age;
     }

     public set age(value: number) {
          this._age = value;
     }

     public get species(): string {
          return this._species;
     }

     public set species(value: string) {
          this._species = value;
     }

     getInfo(): string {
          return `name: ${this._name}, age: ${this._age}, species: ${this._species}`;
     }
}