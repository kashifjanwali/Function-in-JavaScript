// const PIE = 3.142;

// let colors = ["pink", "red", "black", "blue"];

// for loop with updated syntex

//var element
// for(element of colors)
// for (var element of colors) {
//   console.log(element);
// }

// var boys_names = ['kashif', 'hussain', 'ali', 'ahmed'];
// var girls_names = ['saima', 'aleena', 'hassena'];

// for loop same as above

// var numbers = [20, 22, 25];
// var sum = 0;
// for (var i = 0; i < 3; i++) {
//   sum += numbers[i];
// }
// console.log(sum);

// function sum(...numbers) {
//   let sum = 0;

//   for (let i = 0; i < numbers.length; i++) {

//     sum += numbers[i];

//   }

//   console.log('sum == '+ sum);

// }

// sum(10, 20, 30);

// class Father {
//   constructor(name) {
//     this.name = name;
//   }

//   eat() {
//     console.log(`${this.name} eat apples.`);
//   }
// }

// class Son extends Father {
//   constructor(name) {
//     super(name);
//   }

//   eat() {
//     console.log(`${this.name} eat bananas`);
//   }
// }

// const k = new Son("Son");
// const m = new Father("Father");
// m.eat();
// k.eat();

// ====== Lap Class =====

class Laptop {
//   company;
//   name;
//   model;
//   price;
  constructor(company, name, model, price) {
    this.company = company;
    this.name = name;
    this.model = model;
    this.price = price;
  }

  companyName() {
    console.log(`Company Name: ${this.company}`);
  }

  laptopName() {
    console.log(`Laptop Name: ${this.name}`);
  }

  laptopModel() {
    console.log(`Laptpo Model: ${this.model}`);
  }

  laptopPrice() {
    console.log(`Laptop Price: ${this.price}`);
  }
}

let laptop1 = new Laptop("HP", "EliteBook", "840 G4", "PKR 55,500/_");
laptop1.companyName();
laptop1.laptopName();
laptop1.laptopModel();
L// let laptop1_company = laptop1.companyName();
// console.log(laptop1_company);
// let laptop1_name = laptop1.laptopName();
// console.log(laptop1_name);
// let laptop1_price = L// console.log.apply(laptop1_price);

// let laptop2 = new Laptop("Dell", "Work Station", "1020 G6");
// let laptop2_company = laptop2.companyName();
// console.log(laptop2_company);
// let laptop2_name = laptop2.laptopName();
// console.log(laptop2_name);
// let laptop2_model = laptop2.laptopModel();
// console.log(laptop2_model);

// class Box {
//   constructor(length, width, height) {
//     this.height = height;
//     this.length = length;
//     this.width = width;
//   }

//   getVolume() {
//     return this.length * this.width * this.height;
//   }
// }
// console.log(`volume is `);

// class BoxWeight extends Box {
//   constructor(length, width, height, depth) {
//     super(length, width, height);
//     this.depth = this.depth;
//   }
//   volume() {
//     return super.volume() * this.depth;
//   }
// }
// const box1 = new Box(2, 3, 5);
// let box_volume = box1.getVolume();
// console.log(box_volume);

// ===== Simple Example of a Class =====

// class Person {
//   constructor(name, age, dob, CNIC) {
//     this.name = name;
//     this.age = age;
//     this.dob = dob;
//     this.CNIC = CNIC;
//   }

//   getName() {
//     return `Name of person is ${this.name}`;
//   }

//   getAge() {
//     return `Age of ${this.name} is ${this.age}.`;
//   }

//   getDOB() {
//     return `DOB of ${this.name} is ${this.dob}.`;
//   }

//   cnic() {
//     return `CNIC Number is ${this.CNIC}`;
//   }
// }

// let person1 = new Person(
//   "Kashif Hussain",
//   "21",
//   "Feb 12 2002",
//   "71401-5958458-5"
// );
// let kashif = person1.getName();
// let age_of_kashif = person1.getAge();
// let dob_of_kashif = person1.getDOB();
// let cnic_of_kashif = person1.cnic();
// console.log(kashif);
// console.log(age_of_kashif);
// console.log(dob_of_kashif);
// console.log(cnic_of_kashif);

// let person2 = new Person("Kamran Hussain", "19", "Jan 18 2004");
// let kamran = person2.getName();
// let age_of_kamran = person2.getAge();
// let dob_of_kamran = person2.getDOB();
// console.log(kamran);
// console.log(age_of_kamran);
// console.log(dob_of_kamran);

// let person3 = new Person("Muhammad Waseem", "18", "", "71403-123123-1");
// let waseem = person3.getName();
// let age_of_waseem = person3.getAge();
// let cnic_of_waseem = person3.cnic();
// console.log(waseem);
// console.log(age_of_waseem);
// console.log(cnic_of_waseem);
