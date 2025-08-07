class Student {
     studentId: string;
     age: number;

     constructor(id: string, age: number) {
          this.studentId = id;
          this.age = age;
     }
}

let newStudent = new Student("SE1849", 20);

console.log(newStudent);