/* =========================
   1) YOUR 8 CHARACTERS
   ========================= */
const CHARACTERS = [
  {
    key: "PROTAGONIST",
    name: "Protagonist",
    preview:
      "Acts as the central force in situations — heroic and inspiring; an ideal to others. Takes initiative and naturally moves life forward.",
    meaning:
      "You act as the central force — heroic, inspiring, and naturally move life forward with initiative.",
    boostTips: [
      "Lead with calm confidence — your energy sets the tone for others.",
      "Move one goal forward daily (small progress = big results).",
      "Share leadership: help others grow too.",
      "Protect your time — focus beats force."
    ],
    supportTips: [
      "Pause 5 seconds before reacting — stay steady.",
      "Ask for help when needed — strong leaders do that.",
      "Rest is part of leadership.",
      "Simplify: one next step is enough."
    ],
  },
  {
    key: "ADVOCATE",
    name: "Advocate",
    preview: "Strongly stands for their beliefs, values, or people.",
    meaning:
      "You stand strongly for your beliefs, values, and people — you defend fairness and speak up when it matters.",
    boostTips: [
      "Use calm words + firm boundaries.",
      "Speak clearly, not loudly.",
      "Choose your battles: protect what matters most.",
      "Ask questions — it reduces tension."
    ],
    supportTips: [
      "Breathe first, then respond in one clear sentence.",
      "Ask: “Solve or win?” Choose solve.",
      "Soft tone, strong boundary.",
      "Write your points if you feel triggered."
    ],
  },
  {
    key: "STRATEGIST",
    name: "Strategist",
    preview: "Thinks long-term and plans before every little action.",
    meaning:
      "You think long-term and plan before even small actions — logical, prepared, and future-focused.",
    boostTips: [
      "Turn one plan into action within 10 minutes.",
      "Use: goal → next step → deadline.",
      "Review weekly, not hourly.",
      "Make a simple checklist."
    ],
    supportTips: [
      "Don’t wait for perfect — start with a draft.",
      "Ask someone for one quick opinion.",
      "Action creates clarity.",
      "Timebox decisions: 5 minutes, then choose."
    ],
  },
  {
    key: "CHAMPION",
    name: "Champion",
    preview: "Competes, pushes limits, and strives to win.",
    meaning:
      "You compete, push limits, and strive to win — driven, energetic, and growth-focused.",
    boostTips: [
      "Compete with your past self.",
      "Train one skill daily (even 15 minutes).",
      "Pressure can be fuel: “I can handle hard things.”",
      "Track small wins."
    ],
    supportTips: [
      "Recovery is part of winning.",
      "Don’t tie self-worth to outcomes.",
      "Celebrate effort, not only results.",
      "Reset: breath + one next step."
    ],
  },
  {
    key: "NURTURER",
    name: "Nurturer",
    preview: "Cares deeply and supports others emotionally.",
    meaning:
      "You care deeply and support others emotionally — kind, comforting, and reliable.",
    boostTips: [
      "Support others, but recharge too.",
      "Kindness + boundaries = strength.",
      "Your care builds safety in groups.",
      "Ask directly: “How can I help?”"
    ],
    supportTips: [
      "Don’t over-give: ask if it’s sustainable.",
      "Practice: “I can help, but not right now.”",
      "Let others carry their part too.",
      "Give yourself the same care."
    ],
  },
  {
    key: "FEEL_DRIVEN",
    name: "Feel-Driven",
    preview: "Sensitive; makes decisions based on emotions.",
    meaning:
      "You’re sensitive and emotion-led — you decide based on feelings and strong inner signals.",
    boostTips: [
      "Use feelings as guidance, then add one practical step.",
      "Name the emotion: “I feel ___.”",
      "Write 5 minutes to clear your mind.",
      "Calm your body first, then choose."
    ],
    supportTips: [
      "Delay big decisions for 30 minutes.",
      "Ask: “Fact or fear-story?”",
      "Do one tiny action (1%) to move forward.",
      "Breathe slowly: 4 in, 6 out (3 times)."
    ],
  },
  {
    key: "ESCAPER",
    name: "Escaper",
    preview:
      "Prioritizes comfort and emotional safety; avoids or withdraws when situations feel overwhelming or risky.",
    meaning:
      "You prioritize comfort and emotional safety — you may avoid or withdraw when situations feel risky or overwhelming.",
    boostTips: [
      "Micro-steps count: 2 minutes is still progress.",
      "Choose one safe person to share thoughts with.",
      "Your pace is valid — slow progress is real.",
      "Celebrate showing up."
    ],
    supportTips: [
      "Try one small brave act today.",
      "Ask: “What am I protecting?” then choose a gentle action.",
      "Reset plan: breathe → write 1 next step → do 5 minutes.",
      "Tiny discomfort builds strength — gently."
    ],
  },
  {
    key: "OBSERVER",
    name: "Observer",
    preview: "Watches, analyzes, and stays internal (introvert).",
    meaning:
      "You watch, analyze, and stay internal — introverted, thoughtful, and quietly aware.",
    boostTips: [
      "Turn one insight into one action.",
      "Speak once in each discussion (even one sentence).",
      "Choose deep connections over many shallow ones.",
      "Write your thoughts — then share one line."
    ],
    supportTips: [
      "Pick one action and do it imperfectly.",
      "Don’t stay invisible — your voice matters.",
      "Set a small social goal, then recharge.",
      "Ground yourself: notice 5 things you can see."
    ],
  },
];

const CHAR_BY_KEY = Object.fromEntries(CHARACTERS.map((c) => [c.key, c]));
const SUPPORT_TRAITS = new Set(["ESCAPER", "FEEL_DRIVEN"]);

/* =========================
   2) QUESTIONS (20)
   ========================= */
const QUESTIONS = [
  // 10 Scenario
  {
    type: "SCENARIO",
    text: "Your teammate takes credit for your idea in a meeting. Everyone applauds them. What do you do?",
    hint: "Choose what you’d really do.",
    options: [
      { text: "Confront them calmly after the meeting", score: "ADVOCATE" },
      { text: "Stay silent but distance yourself later", score: "OBSERVER" },
      { text: "Speak up immediately and clarify", score: "PROTAGONIST" },
      { text: "Let it go — results matter more", score: "STRATEGIST" },
    ],
  },
  {
    type: "SCENARIO",
    text: "You see a close friend crying alone on campus. They say, “I’m fine.” What do you do?",
    hint: "Follow your first instinct.",
    options: [
      { text: "Sit beside them silently", score: "NURTURER" },
      { text: "Gently push until they open up", score: "ADVOCATE" },
      { text: "Respect their space and leave", score: "OBSERVER" },
      { text: "Try to distract them with humor", score: "PROTAGONIST" },
    ],
  },
  {
    type: "SCENARIO",
    text: "You worked hard for months. Someone less prepared gets the opportunity instead of you. What do you do?",
    hint: "This shows your core drive.",
    options: [
      { text: "Ask for feedback and improve", score: "CHAMPION" },
      { text: "Feel hurt but act unaffected", score: "OBSERVER" },
      { text: "Question the decision boldly", score: "ADVOCATE" },
      { text: "Decide to prove yourself next time", score: "PROTAGONIST" },
    ],
  },
  {
    type: "SCENARIO",
    text: "Your family expects you to choose a safe career. Your heart wants something risky but meaningful. What do you do?",
    hint: "Courage vs comfort.",
    options: [
      { text: "Follow your passion despite fear", score: "PROTAGONIST" },
      { text: "Choose stability to avoid conflict", score: "ESCAPER" },
      { text: "Try convincing them logically", score: "STRATEGIST" },
      { text: "Delay the decision", score: "OBSERVER" },
    ],
  },
  {
    type: "SCENARIO",
    text: "In a group project, no one is taking responsibility. The deadline is close. What do you do?",
    hint: "Lead, support, or observe?",
    options: [
      { text: "Take charge and assign tasks", score: "PROTAGONIST" },
      { text: "Do your part only", score: "OBSERVER" },
      { text: "Motivate everyone emotionally", score: "NURTURER" },
      { text: "Wait and see who steps up", score: "STRATEGIST" },
    ],
  },
  {
    type: "SCENARIO",
    text: "A stranger is being unfairly scolded in public. People are watching silently. What do you do?",
    hint: "Your values show here.",
    options: [
      { text: "Intervene calmly", score: "ADVOCATE" },
      { text: "Record it for evidence", score: "STRATEGIST" },
      { text: "Walk away — not your issue", score: "ESCAPER" },
      { text: "Support the victim afterward", score: "NURTURER" },
    ],
  },
  {
    type: "SCENARIO",
    text: "You fail an important exam unexpectedly. Everyone thought you would top it. What do you do?",
    hint: "How you handle disappointment matters.",
    options: [
      { text: "Analyze mistakes immediately", score: "STRATEGIST" },
      { text: "Hide your disappointment", score: "OBSERVER" },
      { text: "Talk to someone you trust", score: "FEEL_DRIVEN" },
      { text: "Take a break before reacting", score: "ESCAPER" },
    ],
  },
  {
    type: "SCENARIO",
    text: "You are offered a leadership role. It means pressure, criticism, and visibility. What do you do?",
    hint: "Step forward or step back?",
    options: [
      { text: "Accept confidently", score: "PROTAGONIST" },
      { text: "Hesitate but accept", score: "CHAMPION" },
      { text: "Decline — avoid stress", score: "ESCAPER" },
      { text: "Ask for time to decide", score: "STRATEGIST" },
    ],
  },
  {
    type: "SCENARIO",
    text: "A friend shares a secret that could damage someone else’s reputation. You now carry that information. What do you do?",
    hint: "Loyalty vs emotional weight.",
    options: [
      { text: "Keep it strictly confidential", score: "NURTURER" },
      { text: "Advise them to fix it", score: "ADVOCATE" },
      { text: "Share with someone you trust", score: "FEEL_DRIVEN" },
      { text: "Distance yourself from the drama", score: "OBSERVER" },
    ],
  },
  {
    type: "SCENARIO",
    text: "You are alone at night thinking about your future. Uncertainty feels heavy. What do you do?",
    hint: "Quiet moments reveal your style.",
    options: [
      { text: "Plan concrete next steps", score: "STRATEGIST" },
      { text: "Trust that things will work out", score: "PROTAGONIST" },
      { text: "Overthink every possibility", score: "OBSERVER" },
      { text: "Distract yourself and sleep", score: "ESCAPER" },
    ],
  },

  // 6 Pressure
  {
    type: "PRESSURE",
    text: "The deadline is in 30 minutes. Your work is only half done. Your heart is racing. What do you do?",
    hint: "This is your pressure-self.",
    options: [
      { text: "Focus fast and finish whatever is possible", score: "CHAMPION" },
      { text: "Ask someone for quick help", score: "NURTURER" },
      { text: "Freeze and panic internally", score: "FEEL_DRIVEN" },
      { text: "Avoid it and tell yourself you’ll handle it later", score: "ESCAPER" },
    ],
  },
  {
    type: "PRESSURE",
    text: "You are suddenly asked to speak on stage. No preparation. Everyone is watching. What do you do?",
    hint: "Be honest — first instinct.",
    options: [
      { text: "Start speaking and figure it out while talking", score: "PROTAGONIST" },
      { text: "Speak briefly and keep it simple", score: "STRATEGIST" },
      { text: "Refuse or try to escape the spotlight", score: "ESCAPER" },
      { text: "Your emotions take over, and you hesitate", score: "FEEL_DRIVEN" },
    ],
  },
  {
    type: "PRESSURE",
    text: "Two people are arguing loudly. Both demand you take their side. Tension is rising. What do you do?",
    hint: "Pressure reveals your default.",
    options: [
      { text: "Calm them down and protect fairness", score: "ADVOCATE" },
      { text: "Pick a side strongly and speak up", score: "PROTAGONIST" },
      { text: "Step back and observe quietly", score: "OBSERVER" },
      { text: "Exit the situation to feel safe", score: "ESCAPER" },
    ],
  },
  {
    type: "PRESSURE",
    text: "Your parent calls: “Come home immediately.” No explanation. Your mind races. What do you do?",
    hint: "Notice your internal reaction.",
    options: [
      { text: "Stay calm and go immediately", score: "PROTAGONIST" },
      { text: "Ask questions and plan what to do next", score: "STRATEGIST" },
      { text: "Feel anxious and imagine worst-case scenarios", score: "FEEL_DRIVEN" },
      { text: "Try to numb the fear by distracting yourself", score: "ESCAPER" },
    ],
  },
  {
    type: "PRESSURE",
    text: "Your team loses because of your mistake. Everyone knows it. Silence fills the room. What do you do?",
    hint: "This shows courage under pressure.",
    options: [
      { text: "Own it and apologize clearly", score: "ADVOCATE" },
      { text: "Explain what went wrong and fix the process", score: "STRATEGIST" },
      { text: "Feel guilty and shut down emotionally", score: "FEEL_DRIVEN" },
      { text: "Avoid the conversation and withdraw", score: "ESCAPER" },
    ],
  },
  {
    type: "PRESSURE",
    text: "You receive criticism in public. It feels personal. People are watching. What do you do?",
    hint: "Pressure exposes your style.",
    options: [
      { text: "Respond calmly with confidence", score: "CHAMPION" },
      { text: "Speak up firmly and protect your dignity", score: "ADVOCATE" },
      { text: "Stay quiet and analyze it later", score: "OBSERVER" },
      { text: "Feel overwhelmed inside and shut down", score: "FEEL_DRIVEN" },
    ],
  },

  // 4 Image Questions
  {
    type: "IMAGE",
    text: "Choose one image.",
    hint: "Don’t overthink — pick instantly.",
    options: [
      { img: "images/chess.jpg", score: "STRATEGIST" },
      { img: "images/forest.jpg", score: "OBSERVER" },
      { img: "images/mountain.jpg", score: "CHAMPION" },
      { img: "images/wave.jpg", score: "FEEL_DRIVEN" },
    ],
  },
  {
    type: "IMAGE",
    text: "Choose one image.",
    hint: "Pick what pulls you.",
    options: [
      { img: "images/runner.jpg", score: "CHAMPION" },
      { img: "images/help.jpg", score: "NURTURER" },
      { img: "images/rocks.jpg", score: "OBSERVER" },
      { img: "images/hiker.jpg", score: "PROTAGONIST" },
    ],
  },
  {
    type: "IMAGE",
    text: "Choose one image.",
    hint: "Go with your first instinct.",
    options: [
      { img: "images/moon.jpg", score: "OBSERVER" },
      { img: "images/sad.jpg", score: "FEEL_DRIVEN" },
      { img: "images/leaf.jpg", score: "FEEL_DRIVEN" },
      { img: "images/beach.jpg", score: "ESCAPER" },
    ],
  },
  {
    type: "IMAGE",
    text: "Choose one image.",
    hint: "No thinking. Just choose.",
    options: [
      { img: "images/plant.jpg", score: "NURTURER" },
      { img: "images/career.jpg", score: "PROTAGONIST" },
      { img: "images/medal.jpg", score: "CHAMPION" },
      { img: "images/campfire.jpg", score: "ESCAPER" },
    ],
  },
];

/* =========================
   DOM
   ========================= */
let currentIndex = 0;
const answers = new Array(QUESTIONS.length).fill(null);

const homeScreen = document.getElementById("homeScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");

const qCount = document.getElementById("qCount");
const qType = document.getElementById("qType");
const progressFill = document.getElementById("progressFill");

const startBtn = document.getElementById("startBtn");
const previewBtn = document.getElementById("previewBtn");
const characterChips = document.getElementById("characterChips");

const questionText = document.getElementById("questionText");
const questionHint = document.getElementById("questionHint");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");

const dominantTraitEl = document.getElementById("dominantTrait");
const pressureTraitEl = document.getElementById("pressureTrait");
const dominantMeaningEl = document.getElementById("dominantMeaning");
const pressureMeaningEl = document.getElementById("pressureMeaning");
const tipsTitleEl = document.getElementById("tipsTitle");
const tipsListEl = document.getElementById("tipsList");
const restartBtn = document.getElementById("restartBtn");

/* Preview modal */
const previewModal = document.getElementById("previewModal");
const modalBackdrop = document.getElementById("modalBackdrop");
const closeModalBtn = document.getElementById("closeModalBtn");
const charGrid = document.getElementById("charGrid");
const modalTalkBubble = document.getElementById("modalTalk");

/* Pop-in guide */
const guideCharacter = document.getElementById("guideCharacter");
const guideSpeech = document.getElementById("guideSpeech");
const guideAvatar = document.getElementById("guideAvatar");
let guideTimer = null;

function popGuide(text, avatar = "🧒", ms = 3200){
  if (!guideCharacter) return;

  guideAvatar.textContent = avatar;
  guideSpeech.textContent = text;

  guideCharacter.classList.add("show");

  if (guideTimer) clearTimeout(guideTimer);
  guideTimer = setTimeout(() => {
    guideCharacter.classList.remove("show");
  }, ms);
}

/* =========================
   Helpers
   ========================= */
function emptyScore(){
  const s = {};
  for(const c of CHARACTERS) s[c.key] = 0;
  return s;
}

function getTypeLabel(t){
  if (t === "SCENARIO") return "Scenario";
  if (t === "PRESSURE") return "Pressure";
  return "Image";
}

function updateProgress(){
  const total = QUESTIONS.length;
  qCount.textContent = `${currentIndex + 1} / ${total}`;
  qType.textContent = getTypeLabel(QUESTIONS[currentIndex].type);
  progressFill.style.width = `${(currentIndex / (total - 1)) * 100}%`;
}

function renderChips(){
  characterChips.innerHTML = "";
  for(const c of CHARACTERS){
    const span = document.createElement("span");
    span.className = "chip";
    span.textContent = c.name;
    characterChips.appendChild(span);
  }
}

function computeScores(){
  const dominant = emptyScore();
  const pressure = emptyScore();

  answers.forEach((ansIdx, qIdx) => {
    if (ansIdx === null) return;
    const q = QUESTIONS[qIdx];
    const key = q.options[ansIdx].score;
    if (q.type === "PRESSURE") pressure[key] += 1;
    else dominant[key] += 1;
  });

  return { dominant, pressure };
}

function topKey(scoreObj){
  return Object.entries(scoreObj).sort((a,b) => b[1]-a[1])[0][0];
}

function renderTips(pressureKey){
  const char = CHAR_BY_KEY[pressureKey];
  const supportMode = SUPPORT_TRAITS.has(pressureKey);

  tipsTitleEl.textContent = supportMode ? "Tips to break that (gently)" : "Tips to boost it";
  const tips = supportMode ? char.supportTips : char.boostTips;

  tipsListEl.innerHTML = "";
  tips.slice(0,4).forEach(t => {
    const li = document.createElement("li");
    li.textContent = t;
    tipsListEl.appendChild(li);
  });
}

/* =========================
   Render question (no guide)
   ========================= */
function renderQuestion(){
  const q = QUESTIONS[currentIndex];
  updateProgress();

  questionText.textContent = q.text;
  questionHint.textContent = q.hint || "";

  optionsEl.innerHTML = "";
  if (q.type === "IMAGE") optionsEl.classList.add("imageGrid");
  else optionsEl.classList.remove("imageGrid");

  const selected = answers[currentIndex];

  q.options.forEach((opt, idx) => {
    const label = document.createElement("label");
    label.className = "option";
    if (q.type === "IMAGE") label.classList.add("image");
    if (selected === idx) label.classList.add("selected");

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "opt";
    input.value = idx;
    input.checked = selected === idx;

    input.addEventListener("change", () => {
      answers[currentIndex] = idx;
      [...optionsEl.querySelectorAll(".option")].forEach(el => el.classList.remove("selected"));
      label.classList.add("selected");
      nextBtn.disabled = false;
    });

    const content = document.createElement("div");
    content.className = "txt";

    if (q.type === "IMAGE") {
      const wrap = document.createElement("div");
      const img = document.createElement("img");
      img.className = "thumb";
      img.src = opt.img;
      img.alt = "Choice image";
      wrap.appendChild(img);
      content.appendChild(wrap);
    } else {
      content.textContent = opt.text;
    }

    label.appendChild(input);
    label.appendChild(content);
    optionsEl.appendChild(label);
  });

  backBtn.disabled = currentIndex === 0;
  nextBtn.disabled = answers[currentIndex] === null;
}

/* =========================
   Results
   ========================= */
function showResults(){
  const { dominant, pressure } = computeScores();
  const dominantKey = topKey(dominant);
  const pressureKey = topKey(pressure);

  dominantTraitEl.textContent = CHAR_BY_KEY[dominantKey].name;
  pressureTraitEl.textContent = CHAR_BY_KEY[pressureKey].name;

  dominantMeaningEl.textContent = CHAR_BY_KEY[dominantKey].meaning;
  pressureMeaningEl.textContent = CHAR_BY_KEY[pressureKey].meaning;

  renderTips(pressureKey);

  // pop-in message only
  popGuide(
    `Surprise! Dominant: ${CHAR_BY_KEY[dominantKey].name}. Under pressure: ${CHAR_BY_KEY[pressureKey].name}.`,
    "😄",
    4200
  );

  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
}

/* =========================
   Flow
   ========================= */
function startQuiz(){
  homeScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  currentIndex = 0;

  // quick pop-in then it goes
  popGuide("Answer honestly. Don’t overthink. Finish all questions to reveal your result ✨", "🧒", 2800);

  renderQuestion();
}

function resetAll(){
  for(let i=0;i<answers.length;i++) answers[i] = null;
  currentIndex = 0;

  resultScreen.classList.add("hidden");
  quizScreen.classList.add("hidden");
  homeScreen.classList.remove("hidden");

  qCount.textContent = `0 / ${QUESTIONS.length}`;
  qType.textContent = "Home";
  progressFill.style.width = "0%";

  popGuide("Welcome! Start the assessment and answer honestly 🙂", "🧒", 3200);
}

/* =========================
   Preview Modal
   ========================= */
function openModal(){
  charGrid.innerHTML = "";
  CHARACTERS.forEach(c => {
    const card = document.createElement("div");
    card.className = "charCard";
    card.innerHTML = `
      <div class="charName">${c.name}</div>
      <p class="charText">${c.preview}</p>
    `;
    charGrid.appendChild(card);
  });

  modalTalkBubble.textContent = "These are your 8 inner traits.";
  previewModal.classList.remove("hidden");
}

function closeModal(){
  previewModal.classList.add("hidden");
}

previewBtn.addEventListener("click", openModal);
modalBackdrop.addEventListener("click", closeModal);
closeModalBtn.addEventListener("click", closeModal);

/* =========================
   Buttons
   ========================= */
startBtn.addEventListener("click", startQuiz);

nextBtn.addEventListener("click", () => {
  if (answers[currentIndex] === null) return;
  if (currentIndex < QUESTIONS.length - 1) {
    currentIndex++;
    renderQuestion();
  } else {
    showResults();
  }
});

backBtn.addEventListener("click", () => {
  if (currentIndex === 0) return;
  currentIndex--;
  renderQuestion();
});

restartBtn.addEventListener("click", resetAll);

/* =========================
   Init
   ========================= */
renderChips();
qCount.textContent = `0 / ${QUESTIONS.length}`;
qType.textContent = "Home";
progressFill.style.width = "0%";

// Show once on page load, then it goes away
popGuide("Welcome! Start the assessment and answer honestly 🙂", "🧒", 3200);