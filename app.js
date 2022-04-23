'use strict';


let formEl = document.getElementById("formID");
let sectionEl = document.getElementById("cardSection");

let allEmployee = [];


constructor
function Employee(EmId, name, depart, level, img, salary) {
    this.EmployeeID = EmId;
    this.FullName = name;
    this.Department = depart;
    this.Level = level;
    this.ImageURL = img;
    this.Salary = salary;
    allEmployee.push(this);



}



//method
Employee.prototype.calcSalary = function () {

    let sal = 0;
    if (this.Level === "Senior") {
        sal = Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500;
    }

    else if (this.Level === "Mid-Senior") {
        sal = Math.floor(Math.random() * (1500 - 1000 + 1)) + 1000;
    }

    else if (this.Level === "Junior") {
        sal = Math.floor(Math.random() * (1000 - 500 + 1)) + 500;
    }

    let tax = sal * (7.5 / 100);

    this.Salary = sal - tax;

}

Employee.prototype.render = function () {
    // document.write(` The name of employee is : ${this.FullName} .  and The salar = ${this.Salary}  <br> `);
    let img = document.createElement('img');
    img.src = this.ImageURL;
    img.style.width = "200px"
    img.style.height = "200px"
    sectionEl.appendChild(img);

    let name = document.createElement("h2");
    name.textContent = `Name : ${this.FullName} -`;
    sectionEl.appendChild(name);

    let Id = document.createElement("p")
    Id.textContent = `ID: ${this.EmployeeID}`;
    sectionEl.appendChild(Id);


    let dep = document.createElement("p");
    dep.textContent = `Department : ${this.Department} -`;
    sectionEl.appendChild(dep);

    let lev = document.createElement("p");
    lev.textContent = `Level: ${this.Level} `;
    sectionEl.appendChild(lev);

    let renderNum = document.createElement("p");
    renderNum.textContent = `${renderIdNum()}`;
    sectionEl.appendChild(renderNum);

    let brake = document.createElement("br");
    sectionEl.appendChild(brake);

    let line = document.createElement("p");
    line.textContent = "______________________________________________";
    sectionEl.appendChild(line);




}



let emp1 = new Employee(1000, "Ghazi Samer", "Administration", "Senior", "assets/Ghazi.jpg");
let emp2 = new Employee(1001, "Lana Ali", "Finance", "Senior", "assets/Lana.jpg");
let emp3 = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior", "assets/Tamara.jpg");
let emp4 = new Employee(1003, "Safi Walid", "Administration", "Mid-Senior", "assets/Safi.jpg");
let emp5 = new Employee(1004, "Omar Zaid", "Development", "Senior", "assets/Omar.jpg");
let emp6 = new Employee(1005, "Rana Salah", "Development", "Junior", "assets/Rana.jpg");
let emp7 = new Employee(1006, "Hadi Ahmad", "Finace", "Mid-Senior", "assets/Hadi.jpg");


for (let i = 0; i < allEmployee.length; i++) {
    allEmployee[i].calcSalary();
    allEmployee[i].render();
}




// emp1.calcSalary();
// emp1.render();

// emp2.calcSalary();
// emp2.render();

// emp3.calcSalary();
// emp3.render();

// emp4.calcSalary();
// emp4.render();

// emp5.calcSalary();
// emp5.render();

// emp6.calcSalary();
// emp6.render();




function renderIdNum() {
    let val = Math.floor(1000 + Math.random() * 9000);
    return val;
}


formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    console.log("Form event", event);
    let fullname = event.target.fullname.value;
    let department = event.target.department.value;
    let level = event.target.level.value;
    let image = event.target.image.value;
    console.log(fullname);
    console.log(department);
    console.log(level);
    console.log(image);
    let newEmp = new Employee(1007, fullname, department, level, image);
    newEmp.render();

}





