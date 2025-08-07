var Student = /** @class */ (function () {
    function Student(id, age) {
        this.studentId = id;
        this.age = age;
    }
    return Student;
}());
var newStudent = new Student("SE1849", 20);
console.log(newStudent);
