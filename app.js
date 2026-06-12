const TIERS = [
  { name: "Warm-Up", range: "Q1-Q3" },
  { name: "Sharp", range: "Q4-Q6" },
  { name: "Elite", range: "Q7-Q9" },
  { name: "Top Tier", range: "Q10-Q12" },
];

function cloneGame(game) {
  return JSON.parse(JSON.stringify(game));
}

const editorParams = new URLSearchParams(window.location.search);
const isBackstageEditor =
  editorParams.get("editor") === "1" || window.location.hash === "#editor";
const requestedDay = Number(editorParams.get("day"));
const initialGameIndex =
  Number.isInteger(requestedDay) && requestedDay >= 1 && requestedDay <= 7
    ? requestedDay - 1
    : 0;
const activeWeekGames = cloneGame(TOP_TIER_WEEK_DRAFTS);
const finalWeekGames = Array(activeWeekGames.length).fill(null);
let activeGameIndex = initialGameIndex;
let activeGame = activeWeekGames[activeGameIndex];
let QUESTIONS = activeGame.questions;

const entryScreen = document.getElementById("entryScreen");
const briefingScreen = document.getElementById("briefingScreen");
const editorScreen = document.getElementById("editorScreen");
const gameScreen = document.getElementById("gameScreen");
const resultsScreen = document.getElementById("resultsScreen");
const logoButton = document.getElementById("logoButton");
const startButton = document.getElementById("startButton");
const editorButton = document.getElementById("editorButton");
const backToBriefingButton = document.getElementById("backToBriefingButton");
const previewDraftButton = document.getElementById("previewDraftButton");
const playtestDraftButton = document.getElementById("playtestDraftButton");
const copyDraftButton = document.getElementById("copyDraftButton");
const submitFinalButton = document.getElementById("submitFinalButton");
const playAgainButton = document.getElementById("playAgainButton");
const modeLabel = document.getElementById("modeLabel");
const questionCounter = document.getElementById("questionCounter");
const timerRing = document.getElementById("timerRing");
const timerText = document.getElementById("timerText");
const tierTrack = document.getElementById("tierTrack");
const tierLabel = document.getElementById("tierLabel");
const typeLabel = document.getElementById("typeLabel");
const promptText = document.getElementById("promptText");
const choiceGrid = document.getElementById("choiceGrid");
const answerState = document.getElementById("answerState");
const nextButton = document.getElementById("nextButton");
const finishButton = document.getElementById("finishButton");
const resultTitle = document.getElementById("resultTitle");
const resultSubtitle = document.getElementById("resultSubtitle");
const officialResult = document.getElementById("officialResult");
const totalScore = document.getElementById("totalScore");
const firstMiss = document.getElementById("firstMiss");
const brainStyle = document.getElementById("brainStyle");
const firstMissMoment = document.getElementById("firstMissMoment");
const pressureRead = document.getElementById("pressureRead");
const tierPath = document.getElementById("tierPath");
const reviewList = document.getElementById("reviewList");
const editorCredit = document.getElementById("editorCredit");
const organizationCredit = document.getElementById("organizationCredit");
const welcomePrompt = document.getElementById("welcomePrompt");
const welcomeFocusList = document.getElementById("welcomeFocusList");
const gameList = document.getElementById("gameList");
const editorGameStatus = document.getElementById("editorGameStatus");
const questionList = document.getElementById("questionList");
const editorNameInput = document.getElementById("editorNameInput");
const editorOrganizationInput = document.getElementById(
  "editorOrganizationInput"
);
const editorType = document.getElementById("editorType");
const editorAnswer = document.getElementById("editorAnswer");
const editorPrompt = document.getElementById("editorPrompt");
const editorExplanation = document.getElementById("editorExplanation");
const editorNotes = document.getElementById("editorNotes");
const editorSavedState = document.getElementById("editorSavedState");
const draftJsonOutput = document.getElementById("draftJsonOutput");
const editorChoices = [0, 1, 2, 3].map((index) =>
  document.getElementById(`editorChoice${index}`)
);

let state = createInitialState();
let editorIndex = 0;

function createInitialState() {
  return {
    index: 0,
    timeLeft: 30,
    timerId: null,
    locked: false,
    officialActive: true,
    officialEnd: null,
    totalCorrect: 0,
    questionStartedAt: null,
    answers: [],
  };
}

function getGameHeading(game) {
  return `${game.label} - Day ${game.day}`;
}

function setActiveGame(index) {
  activeGameIndex = index;
  activeGame = activeWeekGames[activeGameIndex];
  QUESTIONS = activeGame.questions;
  editorIndex = 0;
  renderWelcome();
}

function renderWelcome() {
  welcomePrompt.textContent = `Brad Kester, ready for ${activeGame.label}'s ${activeGame.theme.toLowerCase()}?`;
  welcomeFocusList.innerHTML = `
    <li>${getGameHeading(activeGame)}</li>
    <li>Difficulty ${activeGame.difficulty} of 7</li>
    <li>Play the rest for practice</li>
  `;
  renderWelcomeCredits();
}

function getTierIndex(questionIndex) {
  return Math.floor(questionIndex / 3);
}

function getTierName(questionIndex) {
  return TIERS[getTierIndex(questionIndex)].name;
}

function showScreen(screen) {
  [entryScreen, briefingScreen, editorScreen, gameScreen, resultsScreen].forEach(
    (item) => {
      item.classList.toggle("screen-active", item === screen);
    }
  );
}

function enterBriefing() {
  entryScreen.classList.add("entry-transitioning");

  setTimeout(() => {
    entryScreen.classList.remove("entry-transitioning");
    showScreen(briefingScreen);
  }, 950);
}

function startGame() {
  state = createInitialState();
  showScreen(gameScreen);
  renderTierTrack();
  renderQuestion();
}

function openEditor() {
  editorIndex = 0;
  renderEditorMeta();
  renderGameList();
  renderEditor();
  showScreen(editorScreen);
}

function setOptionalCredit(element, text) {
  const value = text.trim();
  element.textContent = value;
  element.hidden = !value;
}

function renderWelcomeCredits() {
  const editor = activeGame.editor || {};

  setOptionalCredit(
    editorCredit,
    editor.name ? `Edited by ${editor.name}` : ""
  );
  setOptionalCredit(
    organizationCredit,
    editor.newsOrganization
      ? `News Organization: ${editor.newsOrganization}`
      : ""
  );
}

function renderEditorMeta() {
  const editor = activeGame.editor || {};

  editorNameInput.value = editor.name || "";
  editorOrganizationInput.value = editor.newsOrganization || "";
}

function saveEditorMeta() {
  activeGame.editor = {
    ...(activeGame.editor || {}),
    name: editorNameInput.value.trim(),
    newsOrganization: editorOrganizationInput.value.trim(),
  };

  renderWelcomeCredits();
}

function renderEditorGameStatus() {
  const status =
    activeGame.status === "final"
      ? `Final submitted for ${getGameHeading(activeGame)}`
      : `Editing draft for ${getGameHeading(activeGame)}`;

  editorGameStatus.textContent = `${status}. ${activeGame.theme}.`;
}

function renderGameList() {
  gameList.innerHTML = "";

  activeWeekGames.forEach((game, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `game-list-item ${
      index === activeGameIndex ? "active" : ""
    } ${game.status === "final" ? "final" : ""}`;
    button.innerHTML = `
      <strong>${game.label}</strong>
      <span>Day ${game.day} - Difficulty ${game.difficulty}</span>
      <em>${game.status === "final" ? "Final" : "Draft"}</em>
    `;
    button.addEventListener("click", () => {
      saveEditorMeta();
      saveEditorQuestion();
      setActiveGame(index);
      renderEditorMeta();
      renderGameList();
      renderEditor();
    });
    gameList.appendChild(button);
  });

  renderEditorGameStatus();
}

function renderTierTrack() {
  tierTrack.innerHTML = "";
  const currentTierIndex = getTierIndex(state.index);

  TIERS.forEach((tier, index) => {
    const step = document.createElement("div");
    step.className = "tier-step";
    step.innerHTML = `<span class="tier-name">${tier.name}</span><span class="tier-range">${tier.range}</span>`;
    if (index < currentTierIndex) step.classList.add("complete");
    if (index === currentTierIndex) step.classList.add("active");
    tierTrack.appendChild(step);
  });
}

function renderQuestion() {
  const question = QUESTIONS[state.index];
  state.locked = false;
  state.timeLeft = 30;
  state.questionStartedAt = Date.now();

  renderTierTrack();
  modeLabel.textContent = state.officialActive ? "Official Run" : "Practice Finish";
  questionCounter.textContent = `Question ${state.index + 1} of ${QUESTIONS.length}`;
  tierLabel.textContent = `Tier ${getTierIndex(state.index) + 1}: ${getTierName(
    state.index
  )}`;
  typeLabel.textContent = question.type;

  if (question.promptHtml) {
    promptText.innerHTML = question.promptHtml;
  } else {
    promptText.textContent = question.prompt;
  }

  answerState.innerHTML = "";
  nextButton.classList.remove("show");
  finishButton.classList.remove("show");
  choiceGrid.innerHTML = "";

  question.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.className = "choice-button";
    button.type = "button";
    button.textContent = choice;
    button.addEventListener("click", () => lockAnswer(choice, false));
    choiceGrid.appendChild(button);
  });

  startTimer();
}

function startTimer() {
  clearInterval(state.timerId);
  updateTimer();

  state.timerId = setInterval(() => {
    state.timeLeft -= 1;
    updateTimer();

    if (state.timeLeft <= 0) {
      lockAnswer(null, true);
    }
  }, 1000);
}

function updateTimer() {
  const remaining = Math.max(state.timeLeft, 0) / 30;
  const elapsed = 1 - remaining;

  timerText.textContent = String(Math.max(state.timeLeft, 0));
  timerRing.style.setProperty("--timer-progress", remaining);
  timerRing.style.setProperty("--timer-elapsed", elapsed);

  if (state.timeLeft <= 8) {
    timerRing.style.setProperty("--timer-color", "var(--red)");
  } else {
    timerRing.style.setProperty("--timer-color", "var(--sand)");
  }
}

function lockAnswer(choice, timedOut) {
  if (state.locked) return;

  clearInterval(state.timerId);
  state.locked = true;

  const question = QUESTIONS[state.index];
  const wasOfficial = state.officialActive;
  const secondsUsed = timedOut
    ? 30
    : Math.max(
        1,
        Math.min(30, Math.ceil((Date.now() - state.questionStartedAt) / 1000))
      );
  const isCorrect = !timedOut && choice === question.answer;

  if (isCorrect) {
    state.totalCorrect += 1;
  }

  const answerRecord = {
    questionNumber: state.index + 1,
    tier: getTierName(state.index),
    type: question.type,
    selected: timedOut ? "Timed out" : choice,
    correctAnswer: question.answer,
    isCorrect,
    timedOut,
    secondsUsed,
    isOfficial: wasOfficial,
  };

  state.answers.push(answerRecord);

  if (state.officialActive && !isCorrect) {
    state.officialActive = false;
    state.officialEnd = answerRecord;
  }

  updateChoiceButtons(choice, question.answer, timedOut);
  renderAnswerState(question, answerRecord);

  nextButton.textContent =
    state.index === QUESTIONS.length - 1
      ? "View Results"
      : state.officialEnd === answerRecord
      ? "Continue For Practice"
      : "Next Question";
  nextButton.classList.add("show");

  if (state.officialEnd === answerRecord && state.index < QUESTIONS.length - 1) {
    finishButton.classList.add("show");
  }
}

function updateChoiceButtons(selected, answer, timedOut) {
  const buttons = choiceGrid.querySelectorAll("button");

  buttons.forEach((button) => {
    button.disabled = true;

    if (button.textContent === answer) {
      button.classList.add("correct");
    }

    if (!timedOut && button.textContent === selected && selected !== answer) {
      button.classList.add("wrong");
    }
  });
}

function renderAnswerState(question, answerRecord) {
  const lead = answerRecord.isCorrect
    ? "Correct."
    : answerRecord.timedOut
    ? "Time."
    : "Not quite.";

  const officialNote =
    state.officialEnd === answerRecord
      ? " Your official run is locked, but the rest still counts for practice."
      : "";

  answerState.innerHTML = `<p><strong>${lead}</strong>${officialNote}</p><p>${question.explanation}</p>`;
}

function goNext() {
  if (!state.locked) return;

  if (state.index === QUESTIONS.length - 1) {
    renderResults();
    return;
  }

  state.index += 1;
  renderQuestion();
}

function getOfficialResultLabel() {
  if (!state.officialEnd) return "Top Tier Cleared";

  const tierName = state.officialEnd.tier;
  return tierName === "Top Tier" ? "Reached the Top Tier" : `Reached ${tierName}`;
}

function formatSeconds(seconds) {
  return `${seconds}s`;
}

function getQuestionCategory(type) {
  const value = type.toLowerCase();

  if (
    value.includes("logic") ||
    value.includes("must") ||
    value.includes("constraint") ||
    value.includes("order") ||
    value.includes("probability") ||
    value.includes("box") ||
    value.includes("door")
  ) {
    return "logic";
  }

  if (
    value.includes("pattern") ||
    value.includes("sequence") ||
    value.includes("shift") ||
    value.includes("ladder") ||
    value.includes("grid") ||
    value.includes("step") ||
    value.includes("fibonacci") ||
    value.includes("difference") ||
    value.includes("sevens")
  ) {
    return "pattern";
  }

  if (
    value.includes("word") ||
    value.includes("synonym") ||
    value.includes("meaning") ||
    value.includes("prefix") ||
    value.includes("compound") ||
    value.includes("grammar") ||
    value.includes("sound") ||
    value.includes("hidden") ||
    value.includes("alphabet") ||
    value.includes("anagram") ||
    value.includes("ambiguous") ||
    value.includes("literal") ||
    value.includes("reversal") ||
    value.includes("pair") ||
    value.includes("rule")
  ) {
    return "word";
  }

  return "attention";
}

function getBrainStyle() {
  const correctAnswers = state.answers.filter((answer) => answer.isCorrect);

  if (!state.officialEnd && state.answers.length === QUESTIONS.length) {
    return "Top Tier Candidate";
  }

  if (!correctAnswers.length) {
    return "Fresh Climber";
  }

  const averageSeconds =
    correctAnswers.reduce((total, answer) => total + answer.secondsUsed, 0) /
    correctAnswers.length;

  if (correctAnswers.length >= 6 && averageSeconds <= 8) {
    return "Speed Solver";
  }

  const scores = {
    logic: 0,
    pattern: 0,
    word: 0,
    attention: 0,
  };

  correctAnswers.forEach((answer) => {
    scores[getQuestionCategory(answer.type)] += 1;
  });

  const labels = {
    logic: "Logic Anchor",
    pattern: "Pattern Climber",
    word: "Word Sleuth",
    attention: "Detail Spotter",
  };
  const order = ["logic", "pattern", "word", "attention"];
  const bestCategory = order.reduce((best, category) =>
    scores[category] > scores[best] ? category : best
  );

  return labels[bestCategory];
}

function renderPressureRead() {
  const answered = state.answers.filter((answer) => answer.secondsUsed);

  if (!answered.length) {
    pressureRead.innerHTML = `
      <div class="pressure-card">
        <span>Timing</span>
        <strong>No answers yet</strong>
        <p>The clock never got a full read.</p>
      </div>
    `;
    return;
  }

  const fastest = answered.reduce((best, answer) =>
    answer.secondsUsed < best.secondsUsed ? answer : best
  );
  const longest = answered.reduce((best, answer) =>
    answer.secondsUsed > best.secondsUsed ? answer : best
  );
  const average = Math.round(
    answered.reduce((total, answer) => total + answer.secondsUsed, 0) /
      answered.length
  );

  pressureRead.innerHTML = `
    <div class="pressure-card">
      <span>Fastest Answer</span>
      <strong>Q${fastest.questionNumber} in ${formatSeconds(
        fastest.secondsUsed
      )}</strong>
      <p>${fastest.type}</p>
    </div>
    <div class="pressure-card">
      <span>Longest Think</span>
      <strong>Q${longest.questionNumber} in ${formatSeconds(
        longest.secondsUsed
      )}</strong>
      <p>${longest.type}</p>
    </div>
    <div class="pressure-card">
      <span>Average Pace</span>
      <strong>${formatSeconds(average)}</strong>
      <p>${answered.length} answered</p>
    </div>
  `;
}

function renderTierPath() {
  tierPath.innerHTML = "";

  QUESTIONS.forEach((question, index) => {
    const answer = state.answers.find(
      (item) => item.questionNumber === index + 1
    );
    const step = document.createElement("div");
    const status = !answer
      ? "Open"
      : answer.isOfficial
      ? answer.isCorrect
        ? "Official"
        : "Miss"
      : answer.isCorrect
      ? "Practice"
      : "Practice Miss";

    step.className = `tier-path-step ${
      answer ? (answer.isCorrect ? "correct" : "wrong") : "skipped"
    } ${answer && !answer.isOfficial ? "practice" : ""}`;
    step.innerHTML = `
      <strong>Q${index + 1}</strong>
      <span>${status}</span>
    `;
    step.title = `${question.type}: ${answer ? answer.correctAnswer : "Open"}`;
    tierPath.appendChild(step);
  });
}

function renderReviewList() {
  reviewList.innerHTML = "";

  state.answers.forEach((answer) => {
    const item = document.createElement("div");
    const statusLabel = answer.isOfficial
      ? answer.isCorrect
        ? "Correct"
        : "Miss"
      : answer.isCorrect
      ? "Practice"
      : "Practice Miss";
    const statusClass = answer.isOfficial
      ? answer.isCorrect
        ? "correct"
        : "wrong"
      : "practice";

    item.className = "review-item";
    item.innerHTML = `
      <span class="review-number">${answer.questionNumber}</span>
      <div>
        <strong>${answer.type}</strong>
        <p>${answer.tier} - Answer: ${answer.correctAnswer} - ${formatSeconds(
      answer.secondsUsed
    )}</p>
      </div>
      <span class="review-status ${statusClass}">
        ${statusLabel}
      </span>
    `;
    reviewList.appendChild(item);
  });

  if (state.answers.length < QUESTIONS.length) {
    const skipped = QUESTIONS.length - state.answers.length;
    const item = document.createElement("div");
    item.className = "review-item";
    item.innerHTML = `
      <span class="review-number">+</span>
      <div>
        <strong>${skipped} unanswered</strong>
        <p>Practice finish was skipped.</p>
      </div>
      <span class="review-status wrong">Open</span>
    `;
    reviewList.appendChild(item);
  }
}

function renderResults() {
  clearInterval(state.timerId);
  showScreen(resultsScreen);

  const resultLabel = getOfficialResultLabel();
  const officialCorrect = state.officialEnd
    ? state.officialEnd.questionNumber - 1
    : QUESTIONS.length;

  resultTitle.textContent =
    resultLabel === "Top Tier Cleared" ? "Top Tier cleared." : resultLabel;
  resultSubtitle.textContent =
    resultLabel === "Top Tier Cleared"
      ? "You answered every question before the clock caught you."
      : "Your official tier is locked at the first miss. The full score includes practice finish answers.";

  officialResult.textContent = resultLabel;
  totalScore.textContent = `${state.totalCorrect} / ${QUESTIONS.length}`;
  firstMiss.textContent = state.officialEnd
    ? `Q${state.officialEnd.questionNumber}`
    : "None";
  brainStyle.textContent = getBrainStyle();
  firstMissMoment.textContent = state.officialEnd
    ? `The climb ended at Q${state.officialEnd.questionNumber}: ${state.officialEnd.type}.`
    : "No first miss. You cleared the whole climb.";

  renderPressureRead();
  renderTierPath();
  renderReviewList();
}

function renderEditor() {
  questionList.innerHTML = "";
  renderEditorGameStatus();

  QUESTIONS.forEach((question, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `question-list-item ${
      index === editorIndex ? "active" : ""
    }`;
    button.innerHTML = `<strong>Q${question.number}</strong><span>Tier ${question.tier} - ${question.type}</span>`;
    button.addEventListener("click", () => {
      saveEditorQuestion();
      editorIndex = index;
      renderEditor();
    });
    questionList.appendChild(button);
  });

  renderEditorFields();
}

function renderEditorFields() {
  const question = QUESTIONS[editorIndex];

  editorType.value = question.type;
  editorPrompt.value = question.prompt;
  editorExplanation.value = question.explanation;
  editorNotes.value = question.editorNotes || "";

  editorChoices.forEach((input, index) => {
    input.value = question.choices[index] || "";
  });

  renderAnswerOptions(question.answer);
  editorSavedState.textContent = `Editing Q${question.number}, Tier ${question.tier}`;
}

function renderAnswerOptions(selectedAnswer) {
  editorAnswer.innerHTML = "";

  editorChoices.forEach((input, index) => {
    const value = input.value.trim();
    if (!value) return;

    const option = document.createElement("option");
    option.value = value;
    option.textContent = `${String.fromCharCode(65 + index)}. ${value}`;
    editorAnswer.appendChild(option);
  });

  editorAnswer.value = selectedAnswer;
}

function saveEditorQuestion() {
  const question = QUESTIONS[editorIndex];
  const previousChoices = question.choices || [];
  const previousPrompt = question.prompt;
  const selectedAnswer = editorAnswer.value;
  const selectedIndex = previousChoices.indexOf(selectedAnswer);
  const choices = editorChoices.map((input) => input.value.trim());
  const updatedPrompt = editorPrompt.value.trim();

  question.type = editorType.value.trim() || "Question";
  question.prompt = updatedPrompt;
  question.choices = choices;
  question.answer =
    selectedIndex >= 0 && choices[selectedIndex]
      ? choices[selectedIndex]
      : selectedAnswer && choices.includes(selectedAnswer)
      ? selectedAnswer
      : choices.find(Boolean) || "";
  question.explanation = editorExplanation.value.trim();
  question.editorNotes = editorNotes.value.trim();

  if (question.promptHtml && updatedPrompt !== previousPrompt) {
    delete question.promptHtml;
  }

  editorSavedState.textContent = `Saved Q${question.number}`;
  renderAnswerOptions(question.answer);
  renderEditorGameStatus();
}

function updateEditorDraft() {
  saveEditorQuestion();
}

function saveActiveEditorWork() {
  saveEditorMeta();
  saveEditorQuestion();
}

function previewDraft() {
  saveActiveEditorWork();
  renderWelcome();
  showScreen(briefingScreen);
}

async function copyDraftJson() {
  saveActiveEditorWork();

  const draftJson = JSON.stringify(activeGame, null, 2);
  draftJsonOutput.hidden = false;
  draftJsonOutput.value = draftJson;
  draftJsonOutput.select();

  try {
    await navigator.clipboard.writeText(draftJson);
    editorSavedState.textContent = `Copied ${getGameHeading(activeGame)} draft JSON`;
  } catch (error) {
    document.execCommand("copy");
    editorSavedState.textContent = `Draft JSON selected for ${getGameHeading(activeGame)}`;
  }
}

function submitFinal() {
  saveActiveEditorWork();

  activeGame.status = "final";
  activeGame.finalizedAt = new Date().toISOString();
  finalWeekGames[activeGameIndex] = cloneGame(activeGame);
  editorSavedState.textContent = `Submitted final for ${getGameHeading(activeGame)}`;

  renderGameList();
  renderEditorGameStatus();
}

if (editorButton) {
  editorButton.addEventListener("click", openEditor);
}
backToBriefingButton.addEventListener("click", () => {
  saveActiveEditorWork();
  renderWelcome();
  showScreen(briefingScreen);
});
previewDraftButton.addEventListener("click", previewDraft);
playtestDraftButton.addEventListener("click", () => {
  saveActiveEditorWork();
  startGame();
});
copyDraftButton.addEventListener("click", copyDraftJson);
submitFinalButton.addEventListener("click", submitFinal);
editorNameInput.addEventListener("input", saveEditorMeta);
editorOrganizationInput.addEventListener("input", saveEditorMeta);
editorType.addEventListener("input", updateEditorDraft);
editorPrompt.addEventListener("input", saveEditorQuestion);
editorExplanation.addEventListener("input", saveEditorQuestion);
editorNotes.addEventListener("input", saveEditorQuestion);
editorAnswer.addEventListener("change", saveEditorQuestion);
editorChoices.forEach((input) => input.addEventListener("input", updateEditorDraft));
logoButton.addEventListener("click", enterBriefing);
startButton.addEventListener("click", startGame);
playAgainButton.addEventListener("click", startGame);
nextButton.addEventListener("click", goNext);
finishButton.addEventListener("click", renderResults);

renderWelcome();

if (isBackstageEditor) {
  openEditor();
}
