class Employee {
  constructor(name, age, salary) {
    this._name = name;
    this._age = age;
    this._salary = salary;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get age() {
    return this._age;
  }

  set age(age) {
    this._age = age;
  }

  get salary() {
    return this._salary;
  }

  set salary(salary) {
    this._salary = salary;
  }
}



class Programmer extends Employee {
  constructor(name, age, salary, lang) {
    super(name, age, salary);
    this._lang = lang;
  }

  get lang() {
    return this._lang;
  }

  set lang(lang) {
    this._lang = lang;
  }

  get salary() {
    return this._salary * 3;
  }
}

const programmer1 = new Programmer("Jack", 30, 15000, ["C++", "JS"]);
const programmer2 = new Programmer("Max", 27, 13000, ["C#", "PHP"]);
console.log(programmer1);
console.log(programmer2);
console.log(programmer1.salary); 
console.log(programmer2.salary); 