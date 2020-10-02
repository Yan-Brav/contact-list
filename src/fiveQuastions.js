let dwayne = {};
let daniel = {
    firstName: 'Daniel'
};
let jason = {
    key: 'Jason'
};
dwayne[daniel] = 123;
// dwayne[jason] = 456;

console.log(dwayne[daniel]);
