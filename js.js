var a, b, c;
let FindTriangle = () => {
 a = parseInt( document.getElementById('side_a').value);
 b = parseInt(document.getElementById('side_b').value);
 c = parseInt(document.getElementById('side_c').value);
 
if (((a + b) > c) && ((a + c) > b) &&((b + c) > a)) {
  if ((a === b && a !== c) || (a === c && a !== b) || (b === c && b !== a)) {
      alert("This is an Isosceles Triangle")
   }
  else if ((a === b) && (b === c) (a===c)) {
     alert("This is an Equilateral Triangle");
   }
  else {
      alert("This is a Scalene Triangle");
   }
 }
 else {
   alert("This is not a triangle");
 };
}
function(event){
  event.preventDefault()}