const listItems = document.querySelector(".ulEl");

// Set Array of Tech Courses
const itemsArray = [
  "Product Design/ Ui/Ux",
  "Digital Marketing",
  "Social Media Management",
  "Software Development",
  "Graphics Design",
  "Cinematography",
  "Project Management",
  "Gen/Ai Automation",
  "Testing",
  "Data Analysis",
];

//Iterate through Items Array
for (i = 0; i < itemsArray.length; i++) {
  const li = document.createElement("li");
  li.textContent += itemsArray[i];
  //Append to the Dom
  listItems.appendChild(li);
}
