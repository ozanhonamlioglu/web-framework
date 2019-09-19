import { User } from './models/User';

const user = new User({ name: 'Ozan', age: 25 });

user.on('change', () => {
    console.log('Change #1');
});
user.on('change', () => {
    console.log('Change #2');
});
user.on('hover', () => {
    console.log('Hover #1');
});

user.trigger('change');
user.trigger('hover');
user.trigger('click'); // unregistered

console.log(user);
