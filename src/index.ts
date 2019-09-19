import { User } from "./models/User";

const user = new User({ name: "Ozan", age: 25 });

user.set({ name: "Tester" });

console.log(user.get("name"));
console.log(user.get("age"));
