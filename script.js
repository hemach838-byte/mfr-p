let students = [
  { name: "Hema", marks: 80 },
  { name: "Navya", marks: 99 },
  { name: "Lashya", marks: 90 },
  { name: "Harsha", marks: 100 },
  { name: "Ravi", marks: 45 },
];
const display = document.querySelector(".js-display");
const btn1 = document.querySelector(".js-all");
btn1.addEventListener("click", () => {
  const studentName = students.map((student) => ". " + student.name);
  display.innerHTML = studentName.join("<br> ");
});
const btn2 = document.querySelector(".js-pass");
btn2.addEventListener("click", () => {
  const studentName = students
    .filter((student) => student.marks >= 50)
    .map((student) => ". " + student.name);
  display.innerHTML = studentName.join("<br> ");
});
const btn3 = document.querySelector(".js-fail");
btn3.addEventListener("click", () => {
  const studentName = students
    .filter((student) => student.marks < 50)
    .map((student) => ". " + student.name);
  display.innerHTML = studentName.join("<br>");
});
const btn4 = document.querySelector(".js-total");
btn4.addEventListener("click", () => {
  const totalMarks = students.reduce((sum, student) => {
    return sum + student.marks;
  }, 0);

  const avg = totalMarks / students.length;

  display.innerHTML = `Total Marks: ${totalMarks}<br>
                       Average Marks: ${avg}`;
});
