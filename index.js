class Student
{
    name;
    age;
    add;
    constructor(name, age, add)
    {
        this.name=name
        this.age=age
        this.add=add
    }
    showInfo()
    {
        console.log(`Student name's ${this.name}`)
        console.log(`Student's age ${this.age}`)
        console.log(`student add's ${this.add}\n`)
    }
}
class StudentCollection
{
    studentList
    constructor()
    {
        this.studentList=[]
    }
    showStudent()
    {
        this.studentList.map((student) => student.showInfo())
    }
    findByName(name)
    {
        this.studentList.filter(student => student.name === name)
        .map(student => student.showInfo())
    }
    addStudent(student)
    {
        this.studentList.push(student)
    }
    findByAge()
    {
         this.studentList.filter(student => student.age===15)
         .map((student)=>student.showInfo())
    }
    findByAgeAdd()
    {
        this.studentList.filter(student => student.age===18 && student.add==='Ha Noi')
        .map((student) => student.showInfo())
    }
}
const Student1 = new Student('Long',15,'Bac giang')
const Student2 = new Student('Trang',18,'Ha Noi')
const Student3 = new Student('Duc', 20, 'Ha Noi')
const newStudentCollection = new StudentCollection()
newStudentCollection.addStudent(Student1)
newStudentCollection.addStudent(Student2)
newStudentCollection.addStudent(Student3)
// newStudentCollection.showStudent()
newStudentCollection.findByAge()
newStudentCollection.findByAgeAdd()
newStudentCollection.findByName('Duc')