class Modifiers{
public name:String;
private rollNumber:number;
protected salary:number;

    constructor(fName:String,rNo:number,salary:number)
    {
        this.name=fName;
        this.rollNumber=rNo;
        this.salary=salary;
    }
}
let person = new Modifiers('sachin',20,20000)
console.log(person.name);

class Modifiers2 extends Modifiers{
    
private surName:String='biradar'
    

    job()
    {
        console.log(this.name)
        console.log(this.salary)
        console.log(this.surName)
    }

}
let person1= new Modifiers2('shiva',20,2000,)
person1.job()
let person2= new Modifiers2('Shivaraj',10,50000)
person2.job()

