'use strict';

function Employee(EmId, name, depart, level, img, salary) {
    this.EmployeeID - EmId;
    this.FullName = name;
    this.Department = depart;
    this.Level = level;
    this.ImageURL = img;
    this.Salary = salary;



}
Employee.prototype.calcSalary = function () {




    let sal = 0;
    if (this.Level == "Senior") {


        sal = Math.floor(Math.random() * (2000 - 1500)) + 1500;


    }
    else if (this.Level == "Mid-Senior") {
        sal = Math.floor(Math.random() * (1500 - 1000)) + 1000;

    }
    else if (this.Level == "Junior") {
        sal = Math.floor(Math.random() * (1000 - 500)) + 500;

    }

    let tax = sal * (7.5 / 100);

    this.Salary = sal - tax;

}
Employee.prototype.render = function () {
    document.write(` The name of employee is : ${this.FullName} .  and The salar = ${this.Salary}  <br> `);

}

let emp1 = new Employee(1000, "Ghazi Samer", "Administration", "Senior", 0);
let emp2 = new Employee(1001, "Lana Ali", "Finance", "Senior");
let emp3 = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior");
let emp4 = new Employee(1003, "Safi Walid", "Administration", "Mid-Senior");
let emp5 = new Employee(1004, "Omar Zaid", "Development", "Senior");
let emp6 = new Employee(1005, "Rana Salah", "Development", "Junior");
let emp7 = new Employee(1006, "Hadi Ahmad", "Finace", "Mid-Senior");

emp1.calcSalary();
emp1.render();

emp2.calcSalary();
emp2.render();

emp3.calcSalary();
emp3.render();

emp4.calcSalary();
emp4.render();

emp5.calcSalary();
emp5.render();

emp6.calcSalary();
emp6.render();


