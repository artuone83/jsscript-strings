//Stringi - lancuchy znakow
var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
var dinosaurUpperCased = dinosaur.toUpperCase();
var velociraptorToTriceratop = text.replace('Velociraptor', dinosaurUpperCased)

console.log(dinosaurUpperCased);
console.log(velociraptorToTriceratop);
console.log(velociraptorToTriceratop.length/2);
console.log(velociraptorToTriceratop.slice(0, 72));
