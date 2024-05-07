var Student = /** @class */ (function () {
    function Student(rNumber, name, subject, sClass) {
        this.rNumber = rNumber;
        this.name = name;
        this.subject = subject;
        this.sClass = sClass;
    }
    Student.prototype.display = function () {
        console.log(this.rNumber);
        console.log(this.name);
        console.log(this.subject);
        console.log(this.sClass);
    };
    return Student;
}());
var stud = new Student(10, 'abc', 'xyz', '8th');
stud.display();
