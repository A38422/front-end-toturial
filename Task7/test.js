var _ = require("lodash");

var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred',   'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true }
  ];

_.each(users, function(value) { 
    console.log(value.user);
    console.log(value.age);
    console.log(value.active);
}); 

_.find(users, function(value) {
    if (value.age > 30)
        console.log(value);
});

var active = _.map(users, 'active');
console.log(active);

var arr = [1, 2, 3, 4, 5, 3, 2, 2, 1, 0, 6, 5, 3, 0, 9, 8];

var result = _.without(arr, 3, 2, 1);
console.log(result);

var groups = _.groupBy(['one', 'two', 'three', 'four', 'five', 'six'], 'length');
console.log(groups);

var include = _.includes(arr, 5, 3);
console.log(include);

var reduce = _.reduce([1, 2], function(sum, n) {
    return sum + n;
  }, 0);
console.log(reduce);

var objects = [{ 'a': 1 }, { 'b': 2 }];

var shallow = _.clone(objects);
console.log(shallow[0] === objects[0]);

function Foo() {
    this.a = 1;
}

function Bar() {
    this.c = 3;
}

Foo.prototype.b = 2;
Bar.prototype.d = 4;

console.log(_.assign({ 'a': 0 }, new Foo, new Bar));

console.log(_.isDate(new Date()) ? "yes" : "no");

console.log(_.isNaN(NaN));

console.log(_.isUndefined(undefined));

var arr1;
console.log(_.isEmpty(arr1));

var object = { 'a': 1 };
var other = { 'a': 1 };
 
console.log(_.isEqual(object, other));
 
console.log(_.isObject({}));

console.log(_.isInteger(1));

console.log(_.isArray([]));

console.log(_.isString(""));