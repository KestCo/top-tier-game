const TIERS = [
  { name: "Warm-Up", range: "Q1-Q3" },
  { name: "Sharp", range: "Q4-Q6" },
  { name: "Elite", range: "Q7-Q9" },
  { name: "Top Tier", range: "Q10-Q12" },
];

function cloneGame(game) {
  return JSON.parse(JSON.stringify(game));
}

function trackStudioEvent(eventName, payload = {}) {
  window.KestCoAnalytics?.track(eventName, payload);
}

const DRAFT_STORAGE_KEY = "topTierEditorDraftBranches";

function getSupabaseDraftConfig() {
  const config = window.TOP_TIER_SUPABASE || {};

  if (!config.url || !config.anonKey) {
    return null;
  }

  return {
    url: config.url.replace(/\/$/, ""),
    anonKey: config.anonKey,
  };
}

function readDraftBranches() {
  try {
    const saved = localStorage.getItem(DRAFT_STORAGE_KEY);
    const parsed = saved ? JSON.parse(saved) : {};
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch (error) {
    return {};
  }
}

function writeDraftBranches(branches) {
  try {
    localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(branches));
  } catch (error) {
    console.warn("Top Tier could not save draft branches locally.", error);
  }
}

const editorParams = new URLSearchParams(window.location.search);
const isBackstageEditor =
  editorParams.get("editor") === "1" || window.location.hash === "#editor";
const requestedDay = Number(editorParams.get("day"));
const requestedWeek = Number(editorParams.get("week"));
const requestedGame = Number(editorParams.get("game"));
const launchMonday = new Date("2026-06-15T00:00:00");

function getRequestedGameIndex() {
  if (
    Number.isInteger(requestedGame) &&
    requestedGame >= 1 &&
    requestedGame <= TOP_TIER_WEEK_DRAFTS.length
  ) {
    return requestedGame - 1;
  }

  if (
    Number.isInteger(requestedWeek) &&
    requestedWeek >= 1 &&
    Number.isInteger(requestedDay) &&
    requestedDay >= 1 &&
    requestedDay <= 7
  ) {
    const index = TOP_TIER_WEEK_DRAFTS.findIndex(
      (game) => game.week === requestedWeek && game.day === requestedDay
    );

    if (index >= 0) {
      return index;
    }
  }

  if (Number.isInteger(requestedDay) && requestedDay >= 1 && requestedDay <= 7) {
    return requestedDay - 1;
  }

  return null;
}

function getScheduledGameIndex() {
  const today = new Date();
  const localToday = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );
  const daysSinceLaunch = Math.floor(
    (localToday - launchMonday) / 86400000
  );

  if (daysSinceLaunch < 0) {
    return 0;
  }

  return daysSinceLaunch % TOP_TIER_WEEK_DRAFTS.length;
}

const requestedGameIndex = getRequestedGameIndex();
const initialGameIndex =
  requestedGameIndex === null ? getScheduledGameIndex() : requestedGameIndex;
const activeWeekGames = cloneGame(TOP_TIER_WEEK_DRAFTS);
let draftBranches = readDraftBranches();
applySavedDraftBranches();
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
const saveDraftButton = document.getElementById("saveDraftButton");
const reviewDraftsButton = document.getElementById("reviewDraftsButton");
const workflowGuideButton = document.getElementById("workflowGuideButton");
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
const submitAnswerButton = document.getElementById("submitAnswerButton");
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
const draftWorkflowStatus = document.getElementById("draftWorkflowStatus");
const workflowGuidePanel = document.getElementById("workflowGuidePanel");
const draftReviewPanel = document.getElementById("draftReviewPanel");
const draftReviewList = document.getElementById("draftReviewList");
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
const readinessCheckInputs = Array.from(
  document.querySelectorAll("[data-readiness-check]")
);
const editorReadinessSummary = document.getElementById(
  "editorReadinessSummary"
);
const editorSavedState = document.getElementById("editorSavedState");
const draftJsonOutput = document.getElementById("draftJsonOutput");
const editorChoices = [0, 1, 2, 3].map((index) =>
  document.getElementById(`editorChoice${index}`)
);

const EDITOR_READINESS_CHECKS = [
  {
    key: "oneCorrectAnswer",
    label: "Exactly one correct answer",
  },
  {
    key: "wordingClear",
    label: "Prompt wording is clear",
  },
  {
    key: "difficultyFitsSlot",
    label: "Difficulty fits this slot",
  },
  {
    key: "distractorsFair",
    label: "Distractors are fair and tempting",
  },
  {
    key: "explanationReady",
    label: "Explanation resolves the answer",
  },
];

let state = createInitialState();
let editorIndex = 0;
let remoteDraftSaveTimer = null;
let latestRemoteDraftRecord = null;

function createInitialState() {
  return {
    index: 0,
    timeLeft: 30,
    timerId: null,
    locked: false,
    selectedChoice: null,
    officialActive: true,
    officialEnd: null,
    totalCorrect: 0,
    questionStartedAt: null,
    answers: [],
    resultsTracked: false,
  };
}

function getSourceGameId(game = activeGame) {
  return game.sourceGameId || game.id;
}

function getDraftId(game = activeGame) {
  return game.draftId || `${getSourceGameId(game)}-editor-draft`;
}

function applyDraftMetadata(game, record) {
  game.sourceGameId = record.sourceGameId;
  game.draftId = record.draftId;
  game.draftStatus = record.status;
  game.draftUpdatedAt = record.updatedAt;
  game.submittedAt = record.submittedAt || "";
  game.status = record.status === "submitted" ? "submitted" : "draft";
}

function applySavedDraftBranches() {
  Object.values(draftBranches).forEach((record) => {
    if (!record || !record.sourceGameId || !record.draft) return;

    const index = activeWeekGames.findIndex(
      (game) => game.id === record.sourceGameId
    );

    if (index < 0) return;

    activeWeekGames[index] = cloneGame(record.draft);
    applyDraftMetadata(activeWeekGames[index], record);
  });
}

function buildDraftRecord(status = activeGame.draftStatus || "draft") {
  const now = new Date().toISOString();
  const sourceGameId = getSourceGameId(activeGame);
  const draft = cloneGame(activeGame);

  draft.sourceGameId = sourceGameId;
  draft.draftId = getDraftId(activeGame);
  draft.draftStatus = status;
  draft.status = status === "submitted" ? "submitted" : "draft";
  draft.draftUpdatedAt = now;

  if (status === "submitted") {
    draft.submittedAt = now;
  }

  return {
    draftId: draft.draftId,
    sourceGameId,
    week: draft.week,
    day: draft.day,
    label: draft.label,
    title: getGameHeading(draft),
    status,
    editorName: draft.editor?.name || "",
    newsOrganization: draft.editor?.newsOrganization || "",
    updatedAt: now,
    submittedAt: status === "submitted" ? now : draft.submittedAt || "",
    draft,
  };
}

function getDraftStatusLabel(status) {
  if (status === "submitted") return "Submitted for review";
  if (status === "approved") return "Approved";
  return "Draft saved";
}

function formatDraftTime(value) {
  if (!value) return "Not saved yet";

  return new Date(value).toLocaleString([], {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getQuestionReadinessChecks(question) {
  return question.readinessChecks || {};
}

function getSelectedReadinessChecks() {
  const checks = {};

  readinessCheckInputs.forEach((input) => {
    const key = input.dataset.readinessCheck;
    if (key && input.checked) {
      checks[key] = true;
    }
  });

  return checks;
}

function getCompletedReadinessLabels(question) {
  const checks = getQuestionReadinessChecks(question);

  return EDITOR_READINESS_CHECKS.filter((check) => checks[check.key]).map(
    (check) => check.label
  );
}

function getMissingReadinessLabels(question) {
  const checks = getQuestionReadinessChecks(question);

  return EDITOR_READINESS_CHECKS.filter((check) => !checks[check.key]).map(
    (check) => check.label
  );
}

function isQuestionReady(question) {
  return getMissingReadinessLabels(question).length === 0;
}

function renderReadinessCheckInputs(question) {
  const checks = getQuestionReadinessChecks(question);

  readinessCheckInputs.forEach((input) => {
    input.checked = Boolean(checks[input.dataset.readinessCheck]);
  });
}

function renderEditorReadinessSummary() {
  const readyCount = QUESTIONS.filter(isQuestionReady).length;
  const allReady = readyCount === QUESTIONS.length;

  editorReadinessSummary.innerHTML = `
    <p class="editor-section-title">Final Check Board</p>
    <p class="editor-helper-text ${
      allReady ? "readiness-complete" : "readiness-pending"
    }">
      ${readyCount} of ${QUESTIONS.length} questions ready. ${
    allReady
      ? "This game has satisfied the final checklist."
      : "Refine the remaining questions until every check is satisfied."
  }
    </p>
    <ul>
      ${QUESTIONS.map((question) => {
        const missing = getMissingReadinessLabels(question);
        const ready = missing.length === 0;

        return `
          <li class="${ready ? "ready" : "pending"}">
            <strong>Q${question.number}</strong>
            <span>${
              ready
                ? "Ready"
                : `Needs: ${escapeHtml(missing.join(", "))}`
            }</span>
          </li>
        `;
      })
        .join("")}
    </ul>
  `;
}

function renderDraftWorkflowStatus() {
  const record = draftBranches[getSourceGameId(activeGame)];
  const remoteReady = Boolean(getSupabaseDraftConfig());

  if (!record) {
    draftWorkflowStatus.textContent =
      "Original puzzle loaded. Editing will create a saved draft branch.";
    return;
  }

  const remoteText = remoteReady
    ? "Shared saving is connected."
    : "Shared saving is not connected yet.";

  draftWorkflowStatus.textContent = `${getDraftStatusLabel(
    record.status
  )}. Last saved ${formatDraftTime(record.updatedAt)}. ${remoteText}`;
}

async function saveDraftRecordToSupabase(record) {
  const config = getSupabaseDraftConfig();
  if (!config) return;

  const payload = {
    draft_id: record.draftId,
    source_game_id: record.sourceGameId,
    week: record.week,
    day: record.day,
    label: record.label,
    status: record.status,
    editor_name: record.editorName,
    news_organization: record.newsOrganization,
    updated_at: record.updatedAt,
    submitted_at: record.submittedAt || null,
    draft: record.draft,
  };

  const response = await fetch(
    `${config.url}/rest/v1/top_tier_drafts?on_conflict=draft_id`,
    {
      method: "POST",
      headers: {
        apikey: config.anonKey,
        Authorization: `Bearer ${config.anonKey}`,
        "Content-Type": "application/json",
        Prefer: "resolution=merge-duplicates",
      },
      body: JSON.stringify(payload),
    }
  );

  if (!response.ok) {
    throw new Error(`Draft save failed with status ${response.status}`);
  }
}

function scheduleRemoteDraftSave(record) {
  latestRemoteDraftRecord = record;
  window.clearTimeout(remoteDraftSaveTimer);

  remoteDraftSaveTimer = window.setTimeout(async () => {
    try {
      await saveDraftRecordToSupabase(latestRemoteDraftRecord);
      renderDraftWorkflowStatus();
    } catch (error) {
      console.warn("Top Tier shared draft save failed.", error);

      if (getSupabaseDraftConfig()) {
        draftWorkflowStatus.textContent =
          "Saved on this device. Shared save failed, so Copy Draft JSON is the backup for now.";
      }
    }
  }, 900);
}

function saveDraftBranch(status = "draft", message = "") {
  const record = buildDraftRecord(status);

  draftBranches[record.sourceGameId] = record;
  applyDraftMetadata(activeGame, record);
  writeDraftBranches(draftBranches);
  renderDraftWorkflowStatus();
  renderGameList();
  renderEditorGameStatus();
  if (!draftReviewPanel.hidden) {
    renderDraftReviewList();
  }
  scheduleRemoteDraftSave(record);

  if (message) {
    editorSavedState.textContent = message;
  }

  return record;
}

function markDraftEdited(message = "") {
  saveDraftBranch("draft", message);
}

function renderDraftReviewList() {
  const records = Object.values(draftBranches).sort(
    (a, b) => a.week - b.week || a.day - b.day
  );

  draftReviewList.innerHTML = "";

  if (records.length === 0) {
    draftReviewList.innerHTML =
      '<p class="editor-helper-text">No saved draft branches yet.</p>';
    return;
  }

  records.forEach((record) => {
    const item = document.createElement("div");
    item.className = "draft-review-item";
    const editorLine = `${record.editorName || "No editor name"}${
      record.newsOrganization ? `, ${record.newsOrganization}` : ""
    }`;

    item.innerHTML = `
      <div>
        <strong>${escapeHtml(record.title)}</strong>
        <p>${getDraftStatusLabel(record.status)} - ${formatDraftTime(
      record.updatedAt
    )}</p>
        <p>${escapeHtml(editorLine)}</p>
      </div>
      <button type="button">Open Draft</button>
    `;

    item.querySelector("button").addEventListener("click", () => {
      openDraftBranch(record.sourceGameId);
    });

    draftReviewList.appendChild(item);
  });
}

function openDraftBranch(sourceGameId) {
  const record = draftBranches[sourceGameId];
  const index = activeWeekGames.findIndex((game) => getSourceGameId(game) === sourceGameId);

  if (!record || index < 0) return;

  activeWeekGames[index] = cloneGame(record.draft);
  applyDraftMetadata(activeWeekGames[index], record);
  setActiveGame(index);
  renderEditorMeta();
  renderGameList();
  renderEditor();
  renderDraftWorkflowStatus();
}

function toggleDraftReviewPanel() {
  draftReviewPanel.hidden = !draftReviewPanel.hidden;

  if (!draftReviewPanel.hidden) {
    renderDraftReviewList();
  }
}

function toggleWorkflowGuide() {
  workflowGuidePanel.hidden = !workflowGuidePanel.hidden;
  workflowGuideButton.setAttribute(
    "aria-expanded",
    String(!workflowGuidePanel.hidden)
  );
}

async function syncRemoteDraftBranches() {
  const config = getSupabaseDraftConfig();
  if (!config) return;

  try {
    const response = await fetch(
      `${config.url}/rest/v1/top_tier_drafts?select=*&order=updated_at.desc`,
      {
        headers: {
          apikey: config.anonKey,
          Authorization: `Bearer ${config.anonKey}`,
        },
      }
    );

    if (!response.ok) return;

    const rows = await response.json();

    rows.forEach((row) => {
      if (!row.source_game_id || !row.draft) return;

      draftBranches[row.source_game_id] = {
        draftId: row.draft_id,
        sourceGameId: row.source_game_id,
        week: row.week,
        day: row.day,
        label: row.label,
        title: `Week ${row.week}, ${row.label} - Day ${row.day}`,
        status: row.status || "draft",
        editorName: row.editor_name || "",
        newsOrganization: row.news_organization || "",
        updatedAt: row.updated_at,
        submittedAt: row.submitted_at || "",
        draft: row.draft,
      };
    });

    writeDraftBranches(draftBranches);
    applySavedDraftBranches();
    setActiveGame(activeGameIndex);
    renderGameList();
    renderDraftWorkflowStatus();
  } catch (error) {
    console.warn("Top Tier could not load shared drafts.", error);
  }
}

function getGameHeading(game) {
  return `Week ${game.week}, ${game.label} - Day ${game.day}`;
}

function setActiveGame(index) {
  activeGameIndex = index;
  activeGame = activeWeekGames[activeGameIndex];
  QUESTIONS = activeGame.questions;
  editorIndex = 0;
  renderWelcome();
  renderDraftWorkflowStatus();
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
  trackStudioEvent("game_started", {
    week: activeGame.week,
    day: activeGame.day,
    difficulty: activeGame.difficulty,
    game_label: activeGame.label,
  });
}

function openEditor() {
  editorIndex = 0;
  renderEditorMeta();
  renderGameList();
  renderEditor();
  renderDraftWorkflowStatus();
  showScreen(editorScreen);
  syncRemoteDraftBranches();
  trackStudioEvent("editor_opened", {
    week: activeGame.week,
    day: activeGame.day,
    difficulty: activeGame.difficulty,
  });
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
  const name = editorNameInput.value.trim();
  const newsOrganization = editorOrganizationInput.value.trim();
  const currentEditor = activeGame.editor || {};
  const changed =
    (currentEditor.name || "") !== name ||
    (currentEditor.newsOrganization || "") !== newsOrganization;

  activeGame.editor = {
    ...currentEditor,
    name,
    newsOrganization,
  };

  renderWelcomeCredits();

  if (changed) {
    markDraftEdited("Autosaved editor details");
  }
}

function renderEditorGameStatus() {
  const draftStatus = activeGame.draftStatus || activeGame.status || "draft";
  const status =
    draftStatus === "submitted"
      ? `Submitted for review: ${getGameHeading(activeGame)}`
      : `Editing draft for ${getGameHeading(activeGame)}`;

  editorGameStatus.textContent = `${status}. ${activeGame.theme}.`;
}

function renderGameList() {
  gameList.innerHTML = "";

  activeWeekGames.forEach((game, index) => {
    const button = document.createElement("button");
    button.type = "button";
    const statusClass =
      game.draftStatus === "submitted" || game.status === "submitted"
        ? "submitted"
        : game.draftId
        ? "saved"
        : game.status === "final"
        ? "final"
        : "";
    const statusLabel =
      game.draftStatus === "submitted" || game.status === "submitted"
        ? "Review"
        : game.draftId
        ? "Saved draft"
        : game.status === "final"
        ? "Final"
        : "Original";
    button.className = `game-list-item ${
      index === activeGameIndex ? "active" : ""
    } ${statusClass}`;
    button.innerHTML = `
      <strong>${game.label}</strong>
      <span>Week ${game.week} - Day ${game.day} - Difficulty ${game.difficulty}</span>
      <em>${statusLabel}</em>
    `;
    button.addEventListener("click", () => {
      saveEditorMeta();
      saveEditorQuestion();
      setActiveGame(index);
      renderEditorMeta();
      renderGameList();
      renderEditor();
      renderDraftWorkflowStatus();
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
  state.selectedChoice = null;
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
  submitAnswerButton.disabled = true;
  submitAnswerButton.textContent = "Choose an option";
  submitAnswerButton.classList.remove("hide");
  nextButton.classList.remove("show");
  finishButton.classList.remove("show");
  choiceGrid.innerHTML = "";

  question.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.className = "choice-button";
    button.type = "button";
    button.textContent = choice;
    button.setAttribute("aria-pressed", "false");
    button.addEventListener("click", () => selectAnswer(choice));
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

function selectAnswer(choice) {
  if (state.locked) return;

  state.selectedChoice = choice;
  submitAnswerButton.disabled = false;
  submitAnswerButton.textContent = "Submit Answer";

  choiceGrid.querySelectorAll("button").forEach((button) => {
    const selected = button.textContent === choice;
    button.classList.toggle("selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
}

function submitSelectedAnswer() {
  if (state.locked || !state.selectedChoice) return;

  lockAnswer(state.selectedChoice, false);
}

function lockAnswer(choice, timedOut) {
  if (state.locked) return;

  clearInterval(state.timerId);
  state.locked = true;
  submitAnswerButton.disabled = true;
  submitAnswerButton.classList.add("hide");

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
  trackStudioEvent("question_answered", {
    week: activeGame.week,
    day: activeGame.day,
    difficulty: activeGame.difficulty,
    question_number: answerRecord.questionNumber,
    tier: answerRecord.tier,
    type: answerRecord.type,
    correct: answerRecord.isCorrect,
    timed_out: answerRecord.timedOut,
    seconds_used: answerRecord.secondsUsed,
    official: answerRecord.isOfficial,
  });

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

  if (!state.resultsTracked) {
    state.resultsTracked = true;
    trackStudioEvent("game_completed", {
      week: activeGame.week,
      day: activeGame.day,
      difficulty: activeGame.difficulty,
      official_result: resultLabel,
      official_correct: officialCorrect,
      total_correct: state.totalCorrect,
      answers_count: state.answers.length,
    });
  }

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
  renderQuestionList();
  renderEditorGameStatus();
  renderEditorFields();
}

function renderQuestionList() {
  questionList.innerHTML = "";

  QUESTIONS.forEach((question, index) => {
    const button = document.createElement("button");
    const completedCount = getCompletedReadinessLabels(question).length;
    const ready = isQuestionReady(question);
    button.type = "button";
    button.className = `question-list-item ${
      index === editorIndex ? "active" : ""
    } ${ready ? "ready" : "in-progress"}`;
    button.innerHTML = `<strong>Q${question.number}</strong><span>Tier ${
      question.tier
    } - ${escapeHtml(question.type)}${
      ready
        ? " - Ready"
        : ` - ${completedCount}/${EDITOR_READINESS_CHECKS.length} checks`
    }</span>`;
    button.addEventListener("click", () => {
      saveEditorQuestion();
      editorIndex = index;
      renderEditor();
    });
    questionList.appendChild(button);
  });
}

function renderEditorFields() {
  const question = QUESTIONS[editorIndex];

  editorType.value = question.type;
  editorPrompt.value = question.prompt;
  editorExplanation.value = question.explanation;
  editorNotes.value = question.editorNotes || "";
  renderReadinessCheckInputs(question);

  editorChoices.forEach((input, index) => {
    input.value = question.choices[index] || "";
  });

  renderAnswerOptions(question.answer);
  renderEditorReadinessSummary();
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
  const before = JSON.stringify({
    type: question.type,
    prompt: question.prompt,
    promptHtml: question.promptHtml || "",
    choices: question.choices,
    answer: question.answer,
    explanation: question.explanation,
    editorNotes: question.editorNotes || "",
    readinessChecks: question.readinessChecks || {},
  });
  const selectedAnswer = editorAnswer.value;
  const selectedIndex = previousChoices.indexOf(selectedAnswer);
  const choices = editorChoices.map((input) => input.value.trim());
  const updatedPrompt = editorPrompt.value.trim();
  const readinessChecks = getSelectedReadinessChecks();

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

  if (Object.keys(readinessChecks).length > 0) {
    question.readinessChecks = readinessChecks;
  } else {
    delete question.readinessChecks;
  }

  delete question.qualityFlags;

  if (question.promptHtml && updatedPrompt !== previousPrompt) {
    delete question.promptHtml;
  }

  editorSavedState.textContent = `Saved Q${question.number}`;
  renderAnswerOptions(question.answer);
  renderEditorGameStatus();
  renderQuestionList();
  renderEditorReadinessSummary();

  const after = JSON.stringify({
    type: question.type,
    prompt: question.prompt,
    promptHtml: question.promptHtml || "",
    choices: question.choices,
    answer: question.answer,
    explanation: question.explanation,
    editorNotes: question.editorNotes || "",
    readinessChecks: question.readinessChecks || {},
  });

  if (before !== after) {
    markDraftEdited(`Autosaved Q${question.number}`);
  }
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

function saveDraftManually() {
  saveActiveEditorWork();
  saveDraftBranch("draft", `Saved draft for ${getGameHeading(activeGame)}`);
}

function submitForReview() {
  saveActiveEditorWork();
  const record = saveDraftBranch(
    "submitted",
    `Submitted ${getGameHeading(activeGame)} for review`
  );

  finalWeekGames[activeGameIndex] = cloneGame(record.draft);

  renderDraftReviewList();
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
saveDraftButton.addEventListener("click", saveDraftManually);
reviewDraftsButton.addEventListener("click", toggleDraftReviewPanel);
workflowGuideButton.addEventListener("click", toggleWorkflowGuide);
copyDraftButton.addEventListener("click", copyDraftJson);
submitFinalButton.addEventListener("click", submitForReview);
editorNameInput.addEventListener("input", saveEditorMeta);
editorOrganizationInput.addEventListener("input", saveEditorMeta);
editorType.addEventListener("input", updateEditorDraft);
editorPrompt.addEventListener("input", saveEditorQuestion);
editorExplanation.addEventListener("input", saveEditorQuestion);
editorNotes.addEventListener("input", saveEditorQuestion);
editorAnswer.addEventListener("change", saveEditorQuestion);
readinessCheckInputs.forEach((input) =>
  input.addEventListener("change", saveEditorQuestion)
);
editorChoices.forEach((input) => input.addEventListener("input", updateEditorDraft));
logoButton.addEventListener("click", enterBriefing);
startButton.addEventListener("click", startGame);
playAgainButton.addEventListener("click", startGame);
submitAnswerButton.addEventListener("click", submitSelectedAnswer);
nextButton.addEventListener("click", goNext);
finishButton.addEventListener("click", renderResults);

renderWelcome();

if (isBackstageEditor) {
  openEditor();
}
