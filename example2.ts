class Student{
 private rNumber:number;
 public name:String;
 protected sClass:String;
 subject:String;
 constructor(rNumber:number,name:String,subject:String,sClass:string)
 {
    this.rNumber=rNumber;
    this.name=name;
    this.subject=subject;
    this.sClass=sClass;
 }

 display()
 {
    console.log(this.rNumber);
    console.log(this.name);
    console.log(this.subject)
    console.log(this.sClass)
 }
}
let stud = new Student(10,'abc','xyz','8th')
stud.display()
