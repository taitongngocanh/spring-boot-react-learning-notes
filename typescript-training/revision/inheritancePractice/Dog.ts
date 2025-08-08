import { Animal } from "./Animal";

export class Dog extends Animal {
     constructor(theName: string, theAge: number, theSpecies:string,
          private _eye: string
     ) {
          super(theName, theAge, theSpecies);
     }

     get eye(): string {
          return this._eye;
     }

     set eye(value: string) {
          this._eye = value;
     }

     getInfo():string {
          return `Name: ${this.name}, 
          Age: ${this.age}, 
          Species: ${this.species}, 
          Eye: ${this.eye}` 
     }
}