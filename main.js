const menu = {
  _courses: {
    _appetizers:[],
    _mains:[],
    _desserts:[],
  
get appetizers () {
  return this._appetizers;
},
get mains () {
  return this._mains;
},
get desserts () {
  return this._desserts;
},

set appetizers (appetizerIn) {
  this._appetizers = appetizersIn;
},
set mains (mainsIn) {
  this._mains = mainsIn;
},
set desserts (dessertsIn){
  this._desserts = dessertsIn;
},
},

 get courses(){
     return {
       appetizers: this._courses.appetizers, 
       mains: this._courses.mains,
       desserts: this._courses.desserts,
     };
  },

addDishToCourse (courseName, dishName, dishPrice){ 
  const dish = {
    name : dishName,
    price : dishPrice,
  }; 
  this._courses[courseName].push(dish);
},

getRandomDishFromCourse(courseName){
  const dishes = this._courses[courseName];
  const randomIndex = Math.floor(Math.random() * dishes.length);
  return dishes[randomIndex];
},

generateRandomMeal(){
  const appetizer = this.getRandomDishFromCourse('appetizers');
  const main = this.getRandomDishFromCourse('mains');
  const dessert = this.getRandomDishFromCourse('desserts');
  const totalPrice = appetizer.price + main.price + dessert.price;
  return `Your meal is: ${appetizer.name}, ${main.name}, ${dessert.name}, and it cost is $${totalPrice.toFixed(2)} dollars`;
},
};

menu.addDishToCourse('appetizers','fries', 3.00 );
menu.addDishToCourse('appetizers','salad', 4.50 );
menu.addDishToCourse('appetizers','soup', 3.50 );

menu.addDishToCourse('mains','lasagna', 15.00 );
menu.addDishToCourse('mains','pasta bolognesa', 15.50 );
menu.addDishToCourse('mains','pizza', 12.50 );

menu.addDishToCourse('desserts','cake', 3.50 );
menu.addDishToCourse('desserts','budin', 4.00 );
menu.addDishToCourse('desserts','chocolate', 3.50 );


let meal = menu.generateRandomMeal();

console.log(meal);
