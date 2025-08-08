class Student {
     constructor(private _id:string, private _name:string) {
     }

     get id(): string {
          return this._id;
     }

     set id(id: string) {
          this._id = id;
     }

     get name(): string {
          return this._name;
     }

     set name(name: string) {
          this._name = name;
     }
}

let newStudent = new Student("001", "Ngoc Anh Tai");

if (newStudent.id == "001") {
     newStudent.name = "Tong Ngoc Anh Tai";
}

console.log(newStudent);