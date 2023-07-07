const user = {
    name: "John",
    age() {
    }
};
user.age();

const input = prompt("Сколько лет User'у? Введите число");
user.age = input;
console.log(user.age);


let admin = Object.assign({}, user);
admin.role = "admin";
console.log(admin.role);

let { name, age, role } = admin;
console.log(`name: ${name} age: ${age} role: ${role}`)