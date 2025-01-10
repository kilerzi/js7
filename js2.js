var numbers = [2, 4, 5, 7, 8];

var sum = 0;
for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

var numberList = document.getElementById("numberList");
for (var i = 0; i < numbers.length; i++) {
  var listItem = document.createElement("li");
  listItem.textContent = numbers[i];
  numberList.appendChild(listItem);
}

var equation = numbers.join(" + ") + " = " + sum;
document.getElementById("results").textContent = equation;
