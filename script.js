let year;
let age;
let name;
let passed;

$(".runBtn").click(function(){
  year = Number($(".year").val())
  name = $(".name").val();
  passed = $(".passed").is(':checked')
  console.log(name)
  console.log(year)
  console.log(passed)
  let currentYear = new Date().getFullYear();
  age = currentYear - year;
  if (!passed){
    age--
  }
  $(".message").text(`${name}, you seem to be ${age} years old.`);
});