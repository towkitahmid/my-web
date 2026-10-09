
const herName = "Samira Chowdhury";

const questions = [
  {
    emoji: "💗",
    question: "What should I call you today?",
    answers: [
      ["Kuchupuchu 🧸", "My Kuchupuchu! The cutest name for my favourite person."],
      ["Fluffy Pillow ☁️", "My soft, cozy Fluffy Pillow deserves the biggest hug."],
      ["Josna 🌙", "My Josna makes even the darkest night feel beautiful."],
      ["Nayika 🎬", "Of course, Nayika! You are the main character of my favourite story."]
    ]
  },
  {
    emoji: "🌷",
    question: "If I could give you one thing right now, what would it be?",
    answers: [
      ["A bouquet of flowers", "Flowers for my Shundori, even though none could outshine you."],
      ["A giant teddy bear", "A teddy to hug whenever your Fluffy Pillow needs a cuddle."],
      ["A handwritten love letter", "Some feelings deserve to live on paper forever."],
      ["A whole day together", "The best gift would be more time to make memories with you."]
    ]
  },
  {
    emoji: "🌙",
    question: "What would our perfect little date look like?",
    answers: [
      ["A quiet evening walk", "Just walking beside you while you tell me your little stories."],
      ["Food and endless chatting", "Good food, silly jokes, and conversations that never get boring."],
      ["Watching a movie together", "I might spend more time watching your reactions than the movie."],
      ["A surprise adventure", "Anywhere sounds wonderful when we get to explore it together."]
    ]
  },
  {
    emoji: "🧸",
    question: "What if you are having a really bad day?",
    answers: [
      ["Give me a warm hug", "Hug delivery for Kuchupuchu! No questions asked."],
      ["Listen to me patiently", "I would listen, even if you needed to tell the same story twice."],
      ["Make me laugh", "Challenge accepted. Making my Nayika smile is serious business."],
      ["Give me some quiet time", "Your comfort matters. Sometimes caring means giving you space."]
    ]
  },
  {
    emoji: "✨",
    question: "Which little thing makes a day feel special?",
    answers: [
      ["A sweet good-morning text", "Your mornings deserve a little extra sweetness."],
      ["A random compliment", "A little reminder that you are lovely just as you are."],
      ["An unexpected surprise", "Noted! The surprise department is officially open for you."],
      ["A long conversation", "Losing track of time while talking to you sounds perfect."]
    ]
  },
  {
    emoji: "🌸",
    question: "If you were a flower, which one would you be?",
    answers: [
      ["A rose 🌹", "Beautiful, confident, and impossible to forget."],
      ["Jasmine 🌼", "Gentle, graceful, and full of your own special charm."],
      ["A sunflower 🌻", "Bringing warmth and sunshine wherever you go."],
      ["Cherry blossom 🌸", "Soft, elegant, and beautiful in a way words cannot explain."]
    ]
  },
  {
    emoji: "☁️",
    question: "Choose your ideal lazy-day plan.",
    answers: [
      ["Sleep a little longer", "Approved! My Fluffy Pillow deserves premium sleep privileges."],
      ["Watch something funny", "One funny show, some snacks, and plenty of silly comments."],
      ["Eat my favourite food", "A very important plan. Snacks must never be underestimated."],
      ["Talk about absolutely everything", "From big dreams to random little things. I am in."]
    ]
  },
  {
    emoji: "💌",
    question: "What kind of message would make you smile?",
    answers: [
      ["A cute paragraph", "A paragraph for my Kuchupuchu, with a few extra hearts."],
      ["A silly nickname", "Hello, Fluffy Pillow! Today's cuteness report is officially positive."],
      ["A sincere compliment", "You have a special charm that belongs entirely to you."],
      ["A tiny surprise", "Maybe this entire little website is one oversized surprise."]
    ]
  },
  {
    emoji: "🎀",
    question: "What would you choose for a perfect romantic evening?",
    answers: [
      ["A rooftop under the stars ✨", "Just us, the night sky, and a conversation that never ends."],
      ["A rainy day indoors ☔", "Rain outside, cozy vibes inside, and nowhere else to be."],
      ["A slow dance together 🎶", "No audience, no rush, just a beautiful moment for two."],
      ["A candlelit dinner 🕯️", "Soft lighting, delicious food, and your smile across the table."]
    ]
  },
  {
    emoji: "❤️",
    question: "What do you hope to remember about us?",
    answers: [
      ["All our silly moments 🧸", "The little silly things often become our favourite memories."],
      ["The way we make each other smile 😊", "I hope we always find little reasons to make each other smile."],
      ["The care behind little gestures 🌷", "Love can live in the smallest things we do for each other."],
      ["Every moment that feels like home 🏡", "May the happiest moments always feel warm, safe, and familiar."]
    ]
  }
];

const quotes = [
  {
    text: "Some people make ordinary moments feel like memories worth keeping.",
    author: "A little note for you"
  },
  {
    text: "The sweetest things are often the little things we do without being asked.",
    author: "A thought to remember"
  },
  {
    text: "You do not have to be perfect to be someone's favourite person.",
    author: "For my Kuchupuchu"
  },
  {
    text: "A smile can change the mood of a whole day.",
    author: "A tiny reminder"
  },
  {
    text: "Some stories are made of grand adventures. Others are made of small, happy moments.",
    author: "From this little journal"
  },
  {
    text: "Be gentle with yourself. You are still becoming everything you can be.",
    author: "For Samira"
  },
  {
    text: "If happiness had a little scrapbook, I would save the moments that make you smile.",
    author: "A note from Towki"
  }
];

const resultMessages = [
  "My Kuchupuchu, if I could keep one little moment forever, I would choose one where you are smiling without even realizing it. 💗",
  "Samira, you make ordinary moments feel a little more magical. I hope life gives you that same magic back. 🌷",
  "To my Fluffy Pillow: may your heart feel peaceful, your sleep be cozy, and your dreams be beautiful. ☁️",
  "My Josna, even the moon has competition when you smile. Keep shining in your own lovely way. 🌙",
  "My Shundori, you never need to be perfect to be precious. You deserve kindness on your best and worst days. 🌸",
  "If I could wrap a feeling into a gift, I would give you the comfort of knowing that you matter. 💌",
  "Hey, Nayika! I hope your story is full of unexpected happiness, wonderful adventures, and chapters you never want to end. 🎬",
  "A little reminder for you: you are allowed to rest, take your time, change your mind, and grow at your own pace. 🤍",
  "My Kuchupuchu, may you always find a reason to laugh, someone who listens, and a place where you can be yourself. 🧸",
  "Some gifts are expensive. Some are simple. And some are just someone remembering the little things about you. 🌹",
  "If today feels ordinary, let this be your tiny reminder that you are someone's favourite kind of extraordinary. ✨",
  "My Josna, I hope your happiest memories are still waiting for you somewhere in the future. 🌙",
  "You deserve flowers on random days, kind words without a reason, and happiness that does not need an occasion. 💐",
  "My Shundori, never underestimate the beauty of your laugh, your kindness, or the way you make little things feel special. 💗",
  "If we could save smiles in a little jar, I would save every moment that made you laugh until your cheeks hurt. 😊",
  "Hey, Kuchupuchu. Take life one little step at a time. You do not have to figure everything out today. ☁️",
  "May your days have soft mornings, your evenings have peaceful thoughts, and your life have countless little reasons to smile. 🌷",
  "A beautiful memory does not need a perfect setting. Sometimes, all it needs is a happy heart and the right company. ❤️",
  "My Nayika, keep being curious, playful, ambitious, and wonderfully yourself. The world needs your kind of sparkle. 🎀",
  "And one last thing, Samira: among all the little moments life gives us, I hope there are many that make you genuinely happy. 💌"
];

const finalMessages = [
  "My Kuchupuchu, please keep smiling. The world needs more of your kind of happiness. 💗",
  "To my Fluffy Pillow: may your days be soft, your dreams be big, and your heart be peaceful. ☁️",
  "My Josna, never forget that you deserve kindness, respect, and all the good things life can offer. 🌙",
  "My Shundori, keep being your wonderfully unique self. You do not need to be anyone else. 🌷",
  "My Nayika, I hope your real-life story is filled with beautiful chapters and happy endings. 🎬"
];

let currentQuestion = 0;
let score = 0;
let answered = false;
let lastQuoteIndex = -1;
let lastSurpriseIndex = -1;
let lastResultIndex = -1;
let resultMessageOrder = [];
let resultMessagePosition = 0;
let bloomTimer = null;

function openJournal() {
  const journal = document.getElementById("journal");
  journal.classList.remove("hidden");
  journal.scrollIntoView({ behavior: "smooth" });
  loadQuestion();
}

function goHome() {
  document.getElementById("journal").classList.add("hidden");
  document.getElementById("home").scrollIntoView({ behavior: "smooth" });
}

function growFlowers() {
  const garden = document.getElementById("flowerGarden");
  const message = document.getElementById("flowerMessage");

  // A small, elegant flower arrangement remains in the section.
  garden.innerHTML = "";

  ["🌷", "🌸", "🌹"].forEach(function(symbol, index) {
    const flower = document.createElement("span");
    flower.className = "flower";
    flower.textContent = symbol;
    flower.style.animationDelay = (index * 0.35) + "s";
    garden.appendChild(flower);
  });

  message.textContent = "A little garden, blooming just for you, " + herName + " 🌸";

  // Remove an existing overlay before starting a new bloom.
  const existingOverlay = document.querySelector(".bloom-overlay");
  if (existingOverlay) existingOverlay.remove();

  if (bloomTimer) {
    clearTimeout(bloomTimer);
    bloomTimer = null;
  }

  const overlay = document.createElement("div");
  overlay.className = "bloom-overlay";
  overlay.setAttribute("aria-hidden", "true");

  // Large flowers bloom across the viewport in several waves.
  const flowers = [
    { symbol: "🌸", x: 10, y: 18, size: 115, delay: 0 },
    { symbol: "🌹", x: 83, y: 16, size: 108, delay: 0.15 },
    { symbol: "🌷", x: 48, y: 12, size: 100, delay: 0.3 },
    { symbol: "🌺", x: 23, y: 46, size: 135, delay: 0.45 },
    { symbol: "🌸", x: 73, y: 43, size: 140, delay: 0.55 },
    { symbol: "🌻", x: 50, y: 56, size: 125, delay: 0.7 },
    { symbol: "🌹", x: 8, y: 77, size: 118, delay: 0.85 },
    { symbol: "🌷", x: 88, y: 76, size: 132, delay: 1 },
    { symbol: "🌺", x: 35, y: 88, size: 115, delay: 1.1 },
    { symbol: "🌸", x: 66, y: 88, size: 120, delay: 1.2 },
    { symbol: "💐", x: 52, y: 34, size: 145, delay: 1.35 },
    { symbol: "🌼", x: 94, y: 55, size: 100, delay: 1.45 }
  ];

  flowers.forEach(function(item) {
    const flower = document.createElement("span");
    flower.className = "bloom-flower";
    flower.textContent = item.symbol;
    flower.style.setProperty("--x", item.x + "%");
    flower.style.setProperty("--y", item.y + "%");
    flower.style.setProperty("--size", item.size + "px");
    flower.style.setProperty("--delay", item.delay + "s");
    overlay.appendChild(flower);
  });

  document.body.appendChild(overlay);

  bloomTimer = setTimeout(function() {
    overlay.remove();
    bloomTimer = null;
  }, 7500);
}

function loadQuestion() {
  const counter = document.getElementById("questionCounter");
  const scoreCounter = document.getElementById("scoreCounter");
  const progressBar = document.getElementById("progressBar");
  const emoji = document.getElementById("questionEmoji");
  const questionText = document.getElementById("questionText");
  const options = document.getElementById("answerOptions");
  const feedback = document.getElementById("answerFeedback");
  const nextButton = document.getElementById("nextQuestion");
  const resultBox = document.getElementById("resultMessages");

  answered = false;
  feedback.textContent = "";
  nextButton.classList.add("hidden");
  resultBox.classList.add("hidden");
  options.innerHTML = "";

  if (currentQuestion >= questions.length) {
    showQuizResult();
    return;
  }

  const q = questions[currentQuestion];

  counter.textContent =
    "Question " + (currentQuestion + 1) + " of " + questions.length;

  scoreCounter.textContent = "Score: " + score + "/50";

  progressBar.style.width =
    ((currentQuestion + 1) / questions.length * 100) + "%";

  emoji.textContent = q.emoji;
  questionText.textContent = q.question;

  q.answers.forEach(function(answer, index) {
    const button = document.createElement("button");
    button.className = "answer-btn";
    button.textContent = answer[0];

    button.addEventListener("click", function() {
      chooseAnswer(index);
    });

    options.appendChild(button);
  });
}

function chooseAnswer(index) {
  if (answered) return;

  answered = true;

  const q = questions[currentQuestion];
  const feedback = document.getElementById("answerFeedback");
  const buttons = document.querySelectorAll(".answer-btn");

  score += 5;

  buttons.forEach(function(button) {
    button.disabled = true;
  });

  feedback.textContent = "⭐ 5/5 — " + q.answers[index][1];

  document.getElementById("scoreCounter").textContent =
    "Score: " + score + "/50";

  const nextButton = document.getElementById("nextQuestion");

  nextButton.textContent =
    currentQuestion === questions.length - 1
      ? "See your surprise ✨"
      : "Next question →";

  nextButton.classList.remove("hidden");
}

function nextQuestion() {
  if (!answered) return;

  currentQuestion++;
  loadQuestion();
}

function showQuizResult() {
  document.getElementById("questionCounter").textContent =
    "All 10 questions completed!";

  document.getElementById("scoreCounter").textContent =
    "Score: " + score + "/50";

  document.getElementById("progressBar").style.width = "100%";
  document.getElementById("questionEmoji").textContent = "🏆";

  document.getElementById("questionText").textContent =
    "A little message for " + herName + " 💗";

  document.getElementById("answerOptions").innerHTML = "";
  document.getElementById("answerFeedback").textContent =
    "You completed all 10 questions! Your score is " + score + "/50. " +
    "But the sweetest part is still waiting below. 💌";

  document.getElementById("nextQuestion").classList.add("hidden");

  resultMessageOrder = Array.from(
    { length: resultMessages.length },
    function(_, index) { return index; }
  );

  // Shuffle messages so the sequence varies each time the quiz is completed.
  for (let i = resultMessageOrder.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [resultMessageOrder[i], resultMessageOrder[j]] =
      [resultMessageOrder[j], resultMessageOrder[i]];
  }

  resultMessagePosition = 0;
  document.getElementById("resultMessages").classList.remove("hidden");

  showAnotherMessage();
}

function showAnotherMessage() {
  if (!resultMessageOrder.length) return;

  if (resultMessagePosition >= resultMessageOrder.length) {
    // Start a fresh shuffled round after every message has appeared.
    for (let i = resultMessageOrder.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [resultMessageOrder[i], resultMessageOrder[j]] =
        [resultMessageOrder[j], resultMessageOrder[i]];
    }
    resultMessagePosition = 0;
  }

  const messageIndex = resultMessageOrder[resultMessagePosition];
  resultMessagePosition++;

  const messageText = document.getElementById("resultMessageText");

  // Restart the appearance animation for each new message.
  messageText.parentElement.style.animation = "none";
  void messageText.parentElement.offsetWidth;
  messageText.parentElement.style.animation = "";

  messageText.textContent = resultMessages[messageIndex];
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  answered = false;

  document.getElementById("resultMessages").classList.add("hidden");

  loadQuestion();

  document.getElementById("questionCounter").scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}

function newQuote() {
  let index;

  if (quotes.length < 2) {
    index = 0;
  } else {
    do {
      index = Math.floor(Math.random() * quotes.length);
    } while (index === lastQuoteIndex);
  }

  lastQuoteIndex = index;

  document.getElementById("quoteText").textContent = quotes[index].text;
  document.getElementById("quoteAuthor").textContent =
    "— " + quotes[index].author;
}

function toggleLetter() {
  const letter = document.getElementById("loveLetter");
  const button = document.getElementById("letterButton");

  letter.classList.toggle("hidden");

  if (letter.classList.contains("hidden")) {
    button.textContent = "Open your letter 💌";
  } else {
    button.textContent = "Fold your letter ↑";
    letter.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

function showSurprise() {
  let index;

  if (finalMessages.length < 2) {
    index = 0;
  } else {
    do {
      index = Math.floor(Math.random() * finalMessages.length);
    } while (index === lastSurpriseIndex);
  }

  lastSurpriseIndex = index;

  document.getElementById("surpriseMessage").textContent =
    finalMessages[index];
}

// Optional background music: place your own audio file at assets/music.mp3.
(function setupMusic() {
  const musicButton = document.createElement("button");

  musicButton.className = "music-button";
  musicButton.textContent = "♫ Play music";
  musicButton.type = "button";
  musicButton.setAttribute(
    "aria-label",
    "Play or pause background music"
  );

  document.querySelector(".topbar").appendChild(musicButton);

  const audio = new Audio("assets/music.mp3");
  audio.loop = true;
  audio.volume = 0.35;

  musicButton.addEventListener("click", async function() {
    if (audio.paused) {
      try {
        await audio.play();
        musicButton.textContent = "♫ Pause music";
      } catch (error) {
        musicButton.textContent = "Add music file first";
      }
    } else {
      audio.pause();
      musicButton.textContent = "♫ Play music";
    }
  });

  audio.addEventListener("ended", function() {
    musicButton.textContent = "♫ Play music";
  });
})();
