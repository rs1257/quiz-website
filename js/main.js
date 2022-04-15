// used for unique ids of pages
let pageId = 1;

// Titles of the header pages
let quizTitle = "Random";
let answersTitle = "Answers";
let endTitle = "Finished";

// Data loaded into the quiz
let data = [
  {
    question: {
      title: "What does RAM stand for?",
      body: "",
      img: "ram.jpg",
    },
    answer: {
      title: "Random Access Memory",
      body: "",
      img: "ram.jpg",
    },
    colour: "#ff005d",
  },
  {
    question: {
      title: "What city is this building located in?",
      body: "Burj Khalifa",
      img: "burj.jpg",
    },
    answer: {
      title: "Dubai",
      body: "",
      img: "dubai-skyline.jpg",
    },
    colour: "#ffd700",
  },
  {
    question: {
      title: "How many kilometers is a mile?",
      body: "",
      img: "mile.jpg",
    },
    answer: {
      title: "1.609344",
      body: "",
      img: "kilo-mile.jpg",
    },
    colour: "#a68fbf",
  },
  {
    question: {
      title: "What is the most popular sport?",
      body: "",
      img: "sports.jpg",
    },
    answer: {
      title: "Football",
      body: "",
      img: "football.jpg",
    },
    colour: "#68c7d4",
  },
  {
    question: {
      title: "In which country did Avocados originate?",
      body: "",
      img: "avoc.jpg",
    },
    answer: {
      title: "Mexico",
      body: "",
      img: "mexico.png",
    },
    colour: "#05ffa1",
  },
  {
    question: {
      title: "How many eyes does a honeybee have?",
      body: "",
      img: "bee.jpg",
    },
    answer: {
      title: "5 Eyes",
      body: "",
      img: "honey.jpg",
    },
    colour: "#ff4d00",
  },
  {
    question: {
      title: "How many oscars did the Titanic movie get?",
      body: "",
      img: "Oscars.jpg",
    },
    answer: {
      title: "11 Oscars",
      body: "",
      img: "titanic.jpg",
    },
    colour: "#00ff00",
  },
  {
    question: {
      title: "What is the profession of Popeye?",
      body: "",
      img: "Popeye.jpg",
    },
    answer: {
      title: "Seaman",
      body: "",
      img: "seamen.jpg",
    },
    colour: "#800080",
  },
  {
    question: {
      title: "Which American president appears on a one dollar bill?",
      body: "",
      img: "money.jpg",
    },
    answer: {
      title: "George Washington",
      body: "",
      img: "gw.jpg",
    },
    colour: "#f20505",
  },
  {
    question: {
      title: "In what year was Google launched on the web?",
      body: "",
      img: "google.png",
    },
    answer: {
      title: "1998",
      body: "",
      img: "1998.jpeg",
    },
    colour: "#131a7c",
  },
];

// Calculate the number of pages to render
questions = data.length;

function getSectionHTML(title, prev = true, next = true) {
  html = `
    <section id="page${pageId}" class="page title">
      <h1>${title}</h1>
      <div class="btns">`;

  if (prev) {
    html += `<a href="#page${
      pageId - 1
    }" class="btn previous-page">Previous Page</a>`;
  }
  if (next) {
    html += `<a href="#page${pageId + 1}" class="btn next-page">Next Page</a>`;
  }

  html += `</div>
    </section>
  `;

  pageId++;
  return html;
}

function getQuestionsOrAnswersHTML(isAnswer = false) {
  let type = "question";
  let number = pageId - 1;
  if (isAnswer) {
    type = "answer";
    number = number - (questions + 1);
  }

  let title = data[number - 1][type].title;
  let body = data[number - 1][type].body;
  let img = "assets/" + data[number - 1][type].img;
  let colour = data[number - 1].colour;

  html = `
    <section id="page${pageId}" class="page ${type}" style="background: ${colour};">

    <div class="question">
      <span class="number">${number}</span>
      <h2>${title}</h2>
    </div>

    <div class="body">
      <div class="text">${body}</div>
      <img src="${img}" alt="" />
    </div>

    <div class="btns">
      <a href="#page${pageId - 1}" class="btn previous-page">Previous Page</a>
      <a href="#page${pageId + 1}" class="btn next-page">Next Page</a>
    </div>
    </section>
  `;
  pageId++;
  return html;
}

mainHTML = getSectionHTML(quizTitle, false, true);

for (let i = 0; i < questions; i++) {
  mainHTML += getQuestionsOrAnswersHTML();
}

mainHTML += getSectionHTML(answersTitle);

for (let i = 0; i < questions; i++) {
  mainHTML += getQuestionsOrAnswersHTML(true);
}

mainHTML += getSectionHTML(endTitle, true, false);

document.getElementById("main").innerHTML = mainHTML;

// Smooth scroll to next section
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
