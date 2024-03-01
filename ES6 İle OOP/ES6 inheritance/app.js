class Person {
    constructor(name,surname) {
        this.name = name;
        this.surname = surname;
    }
    ShowInfo() {
        return `Name: ${this.name}\nSurname: ${this.surname}`;
    }
}

// const per1 = new Person("İbrahim","Sezer");
// console.log(per1);
// console.log(per1.ShowInfo());


// extends ile Person classının sahip olduğunu özellikleri Employee classına aktardık 
class Employee extends Person { 
    // Employee classı Person'dan türediği için BaseClass veya SuperClass olarak adlandırılır
    // Aynı şekilde Employee classı DerivedClass, Subclass, ChildClass olarak adlandırlır
    constructor(name,surname,age) {
        // this.name = name;
        // this.surname = surname;
        // Bunları bu şekil yazmak yerine super anahtar kelimesi ile Person constructor'ı kullanabiliriz
        super(name,surname);            // Person.call(this,name,surname), Person constructor'a erişim sağladık
        // super.ShowInfo();   // Person prototipleri için kullanımı da böyle
        this.age = age;
    }
    // Employee için kendi ShowInfo prototipini oluşturduk 
    ShowInfo() {
        return `Name: ${this.name}\nSurname: ${this.surname}\nAge: ${this.age}`;
    }

    // Object içinde var olan metodları değiştirmek, kısaca OverRiding
    toString() {
        console.log("This is a new toString method");
    } 

    // Veya farklı farklı işlemler yapabiliriz
    NickName(nickname) {
        return `Nick Name: ${nickname}`;
    }

}

const emp1 = new Employee("İbrahim","Sezer",21);
console.log(emp1);
console.log(emp1.ShowInfo());
console.log(emp1.NickName("Js ibo"));
