// Syntactic Sugar

/* 
// ES6 öncesi kullanım şekli
function Employee(name,surname,age) {
    if(!(this instanceof Employee)) {
        return new Employee(name,surname,age);
    }
    this.name = name;
    this.surname = surname;
    this.age = age;
}

Employee.prototype.ShowInfo = function() {
    return `Name: ${this.name} Surnmae: ${this.surname} Age: ${this.age}`;
}

// Employe için new anahtarı girilmezse if bloğuna takılıp new Employe şeklinde geri döndürüyoruz
const emp1 = Employee("İbrahim","Sezer",21);
console.log(emp1); 
*/


//ES6 ile kullanımı


//ES6 ile class oluşturalım
class Employee {
    // Bir adet constructor oluşturuyoruz
    constructor(name,surname,age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    // constructor dışına prototipleri yni Employee class'ıan bağlı metodları yazabiliriz
    ShowInfo() {
        return `Name: ${this.name} Surnmae: ${this.surname} Age: ${this.age}`;
    }
}

// Çok daha pratik bir şekilde objelerimizi oluşturabaliriz
const emp1 = new Employee("İbrahim","Sezer",21);
// console.log(emp1);
console.log(emp1.ShowInfo());