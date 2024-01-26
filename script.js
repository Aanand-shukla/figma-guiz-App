const fieldData = [
  {
    para1: "Space",
    para2: "History",
    para3: "Sports",
    img1: "images/Vector1.png",
    img2: "images/Vector2.png",
    img3: "images/Group.png",
  },
  {
    para1: "Space",
    para2: "History",
    para3: "Sports",
    img1: "images/Vector1.png",
    img2: "images/Vector2.png",
    img3: "images/Group.png",
  },
  {
    para1: "Space",
    para2: "History",
    para3: "Sports",
    img1: "images/Vector1.png",
    img2: "images/Vector2.png",
    img3: "images/Group.png",
  },
];
const livequiz = document.querySelector(".livequiz");
const fields = document.querySelector(".fields");
let questions = document.querySelector(".question p");
let timer = document.querySelector(".livequiz__time h3");
let start_question = document.querySelector(".start_time");
let last_question = document.querySelector(".end_time");
let ans1 = document.querySelector(".ans1");
let ans2 = document.querySelector(".ans2");
let ans3 = document.querySelector(".ans3");
let ans4 = document.querySelector(".ans4");
let time = 20;
let i = 0;

livequiz.classList.remove("livehidden");
const htmlContent = fieldData
  .map((fieldSet) => {
    return `
       <div class="field">
    <div class="box">
      <p>${fieldSet.para1}</p>
      <img src="${fieldSet.img1}" alt="" />
    </div>
    <div class="box">
      <p>${fieldSet.para2}</p>
      <img src="${fieldSet.img2}" alt="" />
    </div>
    <div class="box">
      <p>${fieldSet.para3}</p>
      <img src="${fieldSet.img3}" alt="" />
    </div>
    </div>
  `;
  })
  .join(""); // Join the array of HTML content into a single string

fields.innerHTML = htmlContent; // Set the innerHTML of the fields element

fetch(
  `https://opentdb.com/api.php?amount=10&category=17&difficulty=hard&type=multiple `
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    questions.innerHTML = data.results[i].question;
    start_question.innerHTML = i + 1;
    setInterval(() => {
      if (time <= 20 && time >= 0) {
        timer.innerHTML = time;
        last_question.innerHTML = data.results.length;
        time -= 1;
      } else {
        time = 20;
        i += 1;
        questions.innerHTML = data.results[i].question;
        start_question.innerHTML = i;
      }
    }, 1000);
  });
