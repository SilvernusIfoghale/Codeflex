const display = document.querySelector(".displayEl");

const studentDetails = {
  firstName: "John",
  lastName: "Smith",
  age: "25",
  course: "Computer Science",
  grade: "A+",
};

display.innerHTML = `<ul>
<li>${studentDetails.firstName}</li>
<li>${studentDetails.lastName}</li>
<li>${studentDetails.age}</li>
<li>${studentDetails["course"]}</li>
<li>${studentDetails["grade"]}</li>
</ul>`;
