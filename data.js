const TOP_TIER_WEEK_DRAFTS = [
  {
    id: "top-tier-week-1-day-1-draft",
    title: "Top Tier",
    week: 1,
    day: 1,
    label: "Monday",
    difficulty: 1,
    theme: "Starter Signals",
    tagline: "12 questions. 4 tiers. 30 seconds each.",
    catchphrase: "Can you reach the Top Tier?",
    status: "draft",
    finalizedAt: "",
    editor: {
      name: "",
      newsOrganization: "",
      notes: "",
    },
    questions: [
      {
        number: 1,
        tier: 1,
        type: "Odd One Out",
        prompt: "Which option does not belong?",
        choices: ["Copper", "Silver", "Quartz", "Gold"],
        answer: "Quartz",
        explanation: "Copper, silver, and gold are metals. Quartz is a mineral.",
        editorNotes: "Friendly opener. Clean category split.",
      },
      {
        number: 2,
        tier: 1,
        type: "Sequence",
        prompt: "What comes next? 3, 6, 12, 24, ?",
        choices: ["30", "36", "48", "60"],
        answer: "48",
        explanation: "Each number doubles: 3, 6, 12, 24, 48.",
        editorNotes: "Basic sequence slot.",
      },
      {
        number: 3,
        tier: 1,
        type: "Word Fix",
        prompt: "Which word can mean \"brief\"?",
        choices: ["Short", "Rapid", "Small", "Thin"],
        answer: "Short",
        explanation:
          "Brief and short can both describe something that lasts only a little while. Rapid means fast, small means little, and thin means narrow.",
        editorNotes: "Vocabulary question with related but not exact distractors.",
      },
      {
        number: 4,
        tier: 2,
        type: "Code Shift",
        prompt: "If BIRD becomes CJSE, what does FISH become?",
        choices: ["GJTI", "EHRG", "GJSH", "FJTI"],
        answer: "GJTI",
        explanation:
          "Each letter moves forward one place in the alphabet: F-I-S-H becomes G-J-T-I.",
        editorNotes: "Teaches simple code-shift logic.",
      },
      {
        number: 5,
        tier: 2,
        type: "Number Word",
        prompt: "Which written number has the most letters?",
        choices: ["Four", "Nine", "Twelve", "Sixteen"],
        answer: "Sixteen",
        explanation:
          "Sixteen has seven letters. Twelve has six, while four and nine each have four.",
        editorNotes: "Good attention shift from number value to word length.",
      },
      {
        number: 6,
        tier: 2,
        type: "Written Forms",
        prompt: "Which option does not belong?",
        choices: ["Novel", "Poem", "Essay", "Violin"],
        answer: "Violin",
        explanation:
          "Novel, poem, and essay are written forms. Violin is a musical instrument.",
        editorNotes: "Clean Q6, though maybe a little school-like.",
      },
      {
        number: 7,
        tier: 3,
        type: "Square Pattern",
        prompt: "What comes next? 1, 4, 9, 16, ?",
        choices: ["20", "24", "25", "32"],
        answer: "25",
        explanation:
          "These are square numbers: 1 squared, 2 squared, 3 squared, 4 squared, then 5 squared.",
        editorNotes: "Classic enough to replace later.",
      },
      {
        number: 8,
        tier: 3,
        type: "Hidden Signal",
        promptHtml:
          "Read only the blue letters.<br><span class=\"signal-line\" aria-label=\"Colored letters\"><span class=\"letter-red\">T</span><span class=\"letter-blue\">C</span><span class=\"letter-green\">R</span><span class=\"letter-blue\">A</span><span class=\"letter-amber\">S</span><span class=\"letter-blue\">L</span><span class=\"letter-red\">P</span><span class=\"letter-blue\">M</span></span>",
        prompt: "Read only the blue letters: T C R A S L P M",
        choices: ["Calm", "Clam", "Claim", "Call"],
        answer: "Calm",
        explanation: "The blue letters spell C-A-L-M.",
        editorNotes: "Good visual question type. Needs richer prompt editing later.",
      },
      {
        number: 9,
        tier: 3,
        type: "Age Logic",
        prompt: "Maya is older than Leo. Leo is older than Nora. Who is youngest?",
        choices: ["Maya", "Leo", "Nora", "Cannot tell"],
        answer: "Nora",
        explanation: "The order is Maya, then Leo, then Nora. Nora is youngest.",
        editorNotes: "Clean but maybe too easy for Q9.",
      },
      {
        number: 10,
        tier: 4,
        type: "Literal Reading",
        prompt:
          "What is the unintended literal meaning of \"I turned into my driveway\"?",
        choices: [
          "I drove onto my driveway",
          "I became my driveway",
          "I repaired my driveway",
          "I missed my driveway",
        ],
        answer: "I became my driveway",
        explanation:
          "In normal speech it means entering the driveway, but \"turned into\" can also mean changed into.",
        editorNotes: "This has the Top Tier wink.",
      },
      {
        number: 11,
        tier: 4,
        type: "Cost Puzzle",
        prompt:
          "A notebook and pen cost $6 together. The notebook costs $4 more than the pen. How much is the pen?",
        choices: ["$1", "$2", "$3", "$4"],
        answer: "$1",
        explanation:
          "If the pen is $1, the notebook is $5. Together they cost $6.",
        editorNotes: "Relationship math. Good format, maybe too familiar.",
      },
      {
        number: 12,
        tier: 4,
        type: "Word Reversal",
        prompt: "Which word becomes a different word when read backward?",
        choices: ["Level", "Drawer", "Civic", "Radar"],
        answer: "Drawer",
        explanation:
          "Drawer backward is reward. Level, civic, and radar are palindromes.",
        editorNotes: "Strong final precision seed.",
      },
    ],
  },
  {
    id: "top-tier-week-1-day-2-draft",
    title: "Top Tier",
    week: 1,
    day: 2,
    label: "Tuesday",
    difficulty: 2,
    theme: "Patterns and Comparisons",
    tagline: "12 questions. 4 tiers. 30 seconds each.",
    catchphrase: "Can you reach the Top Tier?",
    status: "draft",
    finalizedAt: "",
    editor: {
      name: "",
      newsOrganization: "",
      notes: "",
    },
    questions: [
      {
        number: 1,
        tier: 1,
        type: "Category Break",
        prompt: "Which option does not belong?",
        choices: ["Oak", "Maple", "Pine", "Tulip"],
        answer: "Tulip",
        explanation: "Oak, maple, and pine are trees. A tulip is a flower.",
        editorNotes: "Soft start with nature categories.",
      },
      {
        number: 2,
        tier: 1,
        type: "Counting Pattern",
        prompt: "What comes next? 5, 10, 15, 20, ?",
        choices: ["22", "24", "25", "30"],
        answer: "25",
        explanation: "The numbers increase by 5 each time.",
        editorNotes: "Basic arithmetic warm-up.",
      },
      {
        number: 3,
        tier: 1,
        type: "Word Pair",
        prompt: "Which pair means nearly the same thing?",
        choices: ["Tiny / Small", "Narrow / Small", "Brief / Small", "Young / Small"],
        answer: "Tiny / Small",
        explanation: "Tiny and small are close in meaning.",
        editorNotes: "Similar-looking pair choices, but only one true synonym pair.",
      },
      {
        number: 4,
        tier: 2,
        type: "Shape Count",
        prompt: "A triangle, square, and pentagon have how many sides total?",
        choices: ["10", "11", "12", "13"],
        answer: "12",
        explanation:
          "A triangle has 3 sides, a square has 4, and a pentagon has 5. Together that is 12.",
        editorNotes: "Varies Tuesday away from another code-shift slot.",
      },
      {
        number: 5,
        tier: 2,
        type: "Month Length",
        prompt: "Which month name has the fewest letters?",
        choices: ["March", "April", "May", "June"],
        answer: "May",
        explanation: "May has three letters. The others have five.",
        editorNotes: "Attention is on the word, not the calendar.",
      },
      {
        number: 6,
        tier: 2,
        type: "Material Sort",
        prompt: "Which option does not belong?",
        choices: ["Ruby", "Emerald", "Sapphire", "Granite"],
        answer: "Granite",
        explanation:
          "Ruby, emerald, and sapphire are gemstones. Granite is a rock.",
        editorNotes: "Good visual vocabulary.",
      },
      {
        number: 7,
        tier: 3,
        type: "Growing Difference",
        prompt: "What comes next? 2, 5, 10, 17, ?",
        choices: ["24", "26", "28", "30"],
        answer: "26",
        explanation:
          "The increases are 3, 5, 7, then 9. So 17 plus 9 is 26.",
        editorNotes: "Introduces odd-number differences.",
      },
      {
        number: 8,
        tier: 3,
        type: "Order Logic",
        prompt:
          "Ava finished before Ben. Ben finished before Cole. Who finished last?",
        choices: ["Ava", "Ben", "Cole", "Cannot tell"],
        answer: "Cole",
        explanation: "The order is Ava, then Ben, then Cole.",
        editorNotes: "Clear ordering question.",
      },
      {
        number: 9,
        tier: 3,
        type: "Letter Count",
        prompt: "Which choice contains exactly two vowels?",
        choices: ["Storm", "Banana", "River", "Piano"],
        answer: "River",
        explanation:
          "River has two vowels: i and e. Storm has one vowel, while banana and piano each have three.",
        editorNotes: "Clean single-answer vowel count with one low-count and two high-count distractors.",
      },
      {
        number: 10,
        tier: 4,
        type: "Ambiguous Sentence",
        prompt: "Which sentence can accidentally sound impossible?",
        choices: [
          "I saw her duck",
          "I closed the door",
          "I held the cup",
          "I found my keys",
        ],
        answer: "I saw her duck",
        explanation:
          "Duck can be a bird or an action, so the sentence has two readings.",
        editorNotes: "Nice ambiguity seed.",
      },
      {
        number: 11,
        tier: 4,
        type: "Attention Trap",
        prompt:
          "You pass the person in second place during a race. What place are you in?",
        choices: ["First", "Second", "Third", "Fourth"],
        answer: "Second",
        explanation:
          "If you pass the person in second place, you take second place. You have not passed the person in first.",
        editorNotes: "Classic attention trap. Easier than later Top Tier questions.",
      },
      {
        number: 12,
        tier: 4,
        type: "Letter Addition",
        prompt: "Which word changes meaning when one letter is added to the front?",
        choices: ["Ring", "Chair", "Apple", "Stone"],
        answer: "Ring",
        explanation:
          "Adding w to ring makes wring, which sounds the same but means something different.",
        editorNotes: "Good homophone-style final.",
      },
    ],
  },
  {
    id: "top-tier-week-1-day-3-draft",
    title: "Top Tier",
    week: 1,
    day: 3,
    label: "Wednesday",
    difficulty: 3,
    theme: "Careful Reading",
    tagline: "12 questions. 4 tiers. 30 seconds each.",
    catchphrase: "Can you reach the Top Tier?",
    status: "draft",
    finalizedAt: "",
    editor: {
      name: "",
      newsOrganization: "",
      notes: "",
    },
    questions: [
      {
        number: 1,
        tier: 1,
        type: "Set Break",
        prompt: "Which option does not belong?",
        choices: ["Circle", "Square", "Triangle", "Pencil"],
        answer: "Pencil",
        explanation: "Circle, square, and triangle are shapes.",
        editorNotes: "Easy visual category.",
      },
      {
        number: 2,
        tier: 1,
        type: "Word Meaning",
        prompt: "Which word means the opposite of increase?",
        choices: ["Decrease", "Expand", "Improve", "Grow"],
        answer: "Decrease",
        explanation:
          "To decrease is to become less. Expand, improve, and grow all move closer to increasing.",
        editorNotes: "Vocabulary slot with related growth/change distractors.",
      },
      {
        number: 3,
        tier: 1,
        type: "Sound-Alike",
        prompt: "Which word sounds like a letter of the alphabet?",
        choices: ["Sea", "Tree", "Stone", "Cloud"],
        answer: "Sea",
        explanation: "Sea sounds like the letter C.",
        editorNotes: "Adds a sound-based question family.",
      },
      {
        number: 4,
        tier: 2,
        type: "Alphabet Scan",
        prompt: "Which word is alphabetically first?",
        choices: ["Marker", "Marble", "Market", "Margin"],
        answer: "Marble",
        explanation:
          "All begin with mar. The fourth letters are k, b, k, and g. B comes first.",
        editorNotes: "A bit more precise than the warm-up.",
      },
      {
        number: 5,
        tier: 2,
        type: "Animal Sort",
        prompt: "Which option does not belong?",
        choices: ["Eagle", "Robin", "Sparrow", "Dolphin"],
        answer: "Dolphin",
        explanation: "The first three are birds. A dolphin is a mammal.",
        editorNotes: "Classic but reliable.",
      },
      {
        number: 6,
        tier: 2,
        type: "Step Pattern",
        prompt: "What comes next? 3, 4, 6, 9, 13, ?",
        choices: ["16", "18", "19", "21"],
        answer: "18",
        explanation:
          "The increases are 1, 2, 3, 4, then 5. So 13 plus 5 is 18.",
        editorNotes: "Stair-step increases.",
      },
      {
        number: 7,
        tier: 3,
        type: "Missing Letter",
        prompt: "Which letter completes this pattern? A, C, E, G, ?",
        choices: ["H", "I", "J", "K"],
        answer: "I",
        explanation: "The pattern skips one letter each time: A, C, E, G, I.",
        editorNotes: "Moved later so the day ramps more gently before the skip-letter pattern.",
      },
      {
        number: 8,
        tier: 3,
        type: "Attention Trap",
        prompt: "How many times does the letter e appear in this sentence?",
        choices: ["7", "8", "9", "10"],
        answer: "10",
        explanation:
          "The sentence is: How many times does the letter e appear in this sentence? There are ten e's.",
        editorNotes: "Verify count if prompt changes.",
      },
      {
        number: 9,
        tier: 3,
        type: "Box Order",
        prompt:
          "Three boxes are labeled Red, Blue, and Green. The green box is not first. The red box is after the blue box. Which box is first?",
        choices: ["Red", "Blue", "Green", "Cannot tell"],
        answer: "Blue",
        explanation:
          "Green is not first, and red is after blue, so blue must be first.",
        editorNotes: "Good compact logic.",
      },
      {
        number: 10,
        tier: 4,
        type: "Double Meaning",
        prompt: "Which sentence has a hidden second meaning?",
        choices: [
          "The coach saw the pitcher",
          "The dog slept outside",
          "The rain stopped early",
          "The chair was wooden",
        ],
        answer: "The coach saw the pitcher",
        explanation:
          "Pitcher can mean a baseball player or a container for pouring.",
        editorNotes: "Ambiguity category.",
      },
      {
        number: 11,
        tier: 4,
        type: "Spatial Logic",
        prompt:
          "Four seats are in a row, numbered 1 to 4 from left to right. Leo is in seat 2. Nora sits next to Leo and is three seats away from Maya. Which seat is empty?",
        choices: ["Seat 1", "Seat 2", "Seat 3", "Seat 4"],
        answer: "Seat 3",
        explanation:
          "Nora must be in seat 1 so she is next to Leo and three seats away from Maya in seat 4. That leaves seat 3 empty.",
        editorNotes: "Concrete seat-placement puzzle with one open seat.",
      },
      {
        number: 12,
        tier: 4,
        type: "Word Shift",
        prompt: "Which word can become a new word by changing only its first letter?",
        choices: ["Light", "Orange", "Window", "Bottle"],
        answer: "Light",
        explanation:
          "Light can become sight, might, right, or night by changing the first letter.",
        editorNotes: "Open-ended but answer choice is strongest.",
      },
    ],
  },
  {
    id: "top-tier-week-1-day-4-draft",
    title: "Top Tier",
    week: 1,
    day: 4,
    label: "Thursday",
    difficulty: 4,
    theme: "Hidden Rules",
    tagline: "12 questions. 4 tiers. 30 seconds each.",
    catchphrase: "Can you reach the Top Tier?",
    status: "draft",
    finalizedAt: "",
    editor: {
      name: "",
      newsOrganization: "",
      notes: "",
    },
    questions: [
      {
        number: 1,
        tier: 1,
        type: "Outlier",
        prompt: "Which option does not belong?",
        choices: ["Hammer", "Wrench", "Screwdriver", "Blanket"],
        answer: "Blanket",
        explanation: "The first three are tools.",
        editorNotes: "Simple opener.",
      },
      {
        number: 2,
        tier: 1,
        type: "Hidden Word",
        prompt: "Which word hides a number inside it?",
        choices: ["Alone", "Planet", "Bridge", "Window"],
        answer: "Alone",
        explanation: "Alone contains one: al-ONE.",
        editorNotes: "Early signal for Thursday's hidden-rules theme.",
      },
      {
        number: 3,
        tier: 1,
        type: "Synonym",
        prompt: "Which word best means moving at high speed?",
        choices: ["Fast", "Brief", "Eager", "Sudden"],
        answer: "Fast",
        explanation:
          "Fast means moving quickly. Brief is short in time, eager means ready or excited, and sudden means unexpected.",
        editorNotes: "Language warm-up with nearby but not exact distractors.",
      },
      {
        number: 4,
        tier: 2,
        type: "Rule Breaker",
        prompt: "Which choice breaks the rule: each word starts and ends with the same letter?",
        choices: ["Radar", "Level", "Civic", "Apple"],
        answer: "Apple",
        explanation:
          "Radar, level, and civic start and end with the same letter. Apple starts with a and ends with e.",
        editorNotes: "Moved earlier because this is a clean but lighter rule-check question.",
      },
      {
        number: 5,
        tier: 2,
        type: "Alphabet Rule",
        prompt: "Which choice has letters in alphabetical order?",
        choices: ["Almost", "Ghost", "Adept", "Began"],
        answer: "Adept",
        explanation: "A, d, e, p, t appear in alphabetical order.",
        editorNotes: "Nice letter-order attention.",
      },
      {
        number: 6,
        tier: 2,
        type: "Planet Check",
        prompt: "Which option does not belong?",
        choices: ["Mercury", "Venus", "Mars", "Pluto"],
        answer: "Pluto",
        explanation:
          "Mercury, Venus, and Mars are planets. Pluto is classified as a dwarf planet.",
        editorNotes: "May invite debate, but useful as a trap.",
      },
      {
        number: 7,
        tier: 3,
        type: "Letter Shift",
        prompt: "If COLD becomes EQNF, what does WARM become?",
        choices: ["YCTO", "XBSN", "VZQL", "YBSO"],
        answer: "YCTO",
        explanation: "Each letter moves forward two places.",
        editorNotes: "Moved later to give Tier 3 a stronger pattern challenge.",
      },
      {
        number: 8,
        tier: 3,
        type: "Hidden Rule",
        prompt: "Which number belongs with this set? 14, 23, 32, 41",
        choices: ["50", "52", "61", "70"],
        answer: "50",
        explanation:
          "In each number, the two digits add to 5. In 50, 5 plus 0 also equals 5.",
        editorNotes: "Clear hidden rule with a mild trap.",
      },
      {
        number: 9,
        tier: 3,
        type: "Door Logic",
        prompt:
          "No silver keys open the blue door. This key opens the blue door. What must be true?",
        choices: [
          "The key is silver",
          "The key is not silver",
          "The key is blue",
          "The door is silver",
        ],
        answer: "The key is not silver",
        explanation:
          "If no silver keys open the blue door, a key that opens it cannot be silver.",
        editorNotes: "Good deductive logic.",
      },
      {
        number: 10,
        tier: 4,
        type: "Ambiguous Phrase",
        prompt: "Which phrase can mean two different things?",
        choices: ["Flying planes", "Broken pencil", "Cold soup", "Red apple"],
        answer: "Flying planes",
        explanation:
          "It can mean planes that are flying or the act of flying planes.",
        editorNotes: "Strong language trap.",
      },
      {
        number: 11,
        tier: 4,
        type: "Rule Logic",
        prompt:
          "A code accepts words with exactly one doubled letter. Which word would the code accept?",
        choices: ["Apple", "Balloon", "Coffee", "River"],
        answer: "Apple",
        explanation:
          "Apple has exactly one doubled letter: pp. Balloon and coffee each have two doubled pairs, and river has none.",
        editorNotes: "Harder rule-checking question.",
      },
      {
        number: 12,
        tier: 4,
        type: "Compound Bridge",
        prompt:
          "Which word can follow both \"book\" and \"water\" to make common compound words?",
        choices: ["Mark", "Fall", "Light", "Stone"],
        answer: "Mark",
        explanation: "Bookmark and watermark are both common words.",
        editorNotes: "Elegant compound-word final.",
      },
    ],
  },
  {
    id: "top-tier-week-1-day-5-draft",
    title: "Top Tier",
    week: 1,
    day: 5,
    label: "Friday",
    difficulty: 5,
    theme: "Traps and Turns",
    tagline: "12 questions. 4 tiers. 30 seconds each.",
    catchphrase: "Can you reach the Top Tier?",
    status: "draft",
    finalizedAt: "",
    editor: {
      name: "",
      newsOrganization: "",
      notes: "",
    },
    questions: [
      {
        number: 1,
        tier: 1,
        type: "Odd One Out",
        prompt: "Which option does not belong?",
        choices: ["Bass", "Drum", "Flute", "Canvas"],
        answer: "Canvas",
        explanation: "Bass, drum, and flute are musical instruments.",
        editorNotes: "Easy but not too plain.",
      },
      {
        number: 2,
        tier: 1,
        type: "Even Step",
        prompt: "What comes next? 4, 8, 12, 16, ?",
        choices: ["18", "20", "22", "24"],
        answer: "20",
        explanation: "The numbers increase by 4.",
        editorNotes: "Warm-up sequence.",
      },
      {
        number: 3,
        tier: 1,
        type: "Synonym",
        prompt: "Which word best describes someone calm under pressure?",
        choices: ["Steady", "Quiet", "Still", "Careful"],
        answer: "Steady",
        explanation:
          "Steady can describe someone calm and controlled under pressure. Quiet, still, and careful are related qualities but do not capture the pressure part as well.",
        editorNotes: "Good emotional vocabulary with plausible distractors.",
      },
      {
        number: 4,
        tier: 2,
        type: "Word Ladder",
        prompt: "Change one letter in cold to make something valuable.",
        choices: ["Gold", "Bold", "Cord", "Fold"],
        answer: "Gold",
        explanation: "Changing c to g turns cold into gold.",
        editorNotes: "Friday gets a word-transformation slot instead of code shift.",
      },
      {
        number: 5,
        tier: 2,
        type: "Repeat Check",
        prompt: "Which word contains no repeated letters?",
        choices: ["Letter", "Mirror", "Planet", "Bubble"],
        answer: "Planet",
        explanation: "Planet uses each letter once.",
        editorNotes: "Good scanning question.",
      },
      {
        number: 6,
        tier: 2,
        type: "Substance Sort",
        prompt: "Which option does not belong?",
        choices: ["Ice", "Steam", "Water", "Smoke"],
        answer: "Smoke",
        explanation: "Ice, steam, and water are forms of water. Smoke is not.",
        editorNotes: "Clean science category.",
      },
      {
        number: 7,
        tier: 3,
        type: "Add-One Pattern",
        prompt: "What comes next? 2, 3, 5, 8, 12, ?",
        choices: ["15", "16", "17", "18"],
        answer: "17",
        explanation:
          "The increases are 1, 2, 3, 4, then 5. So 12 plus 5 is 17.",
        editorNotes: "Good Friday mid-game.",
      },
      {
        number: 8,
        tier: 3,
        type: "Hidden Signal",
        prompt: "Which word hides an animal inside it?",
        choices: ["Scattered", "Column", "Window", "Planet"],
        answer: "Scattered",
        explanation:
          "Scattered contains cat in consecutive letters: s-CAT-tered.",
        editorNotes: "Cleaner hidden-word question with one animal hidden in consecutive letters.",
      },
      {
        number: 9,
        tier: 3,
        type: "Color Logic",
        prompt:
          "Every marble in the bag is blue or green. None are green. What color are they?",
        choices: ["Blue", "Green", "Red", "Cannot tell"],
        answer: "Blue",
        explanation:
          "If each marble is blue or green, and none are green, they must be blue.",
        editorNotes: "Good clean logic.",
      },
      {
        number: 10,
        tier: 4,
        type: "Comma Trap",
        prompt: "Which sentence changes meaning if you pause after the first word?",
        choices: ["Let's eat, Grandma", "I read books", "The sun rose", "He closed it"],
        answer: "Let's eat, Grandma",
        explanation:
          "Without the pause, it can sound like Grandma is being eaten. With it, Grandma is being addressed.",
        editorNotes: "Punctuation-based trap.",
      },
      {
        number: 11,
        tier: 4,
        type: "Probability Check",
        prompt:
          "A bag has 1 blue tile and 3 red tiles. You draw one tile. What is the probability of drawing the blue tile?",
        choices: ["66%", "33%", "75%", "25%"],
        answer: "25%",
        explanation:
          "There are 4 tiles total, and 1 of them is blue. That makes the chance of drawing blue 1 out of 4, or 25%.",
        editorNotes: "Percentage-based probability check with plausible distractors.",
      },
      {
        number: 12,
        tier: 4,
        type: "Prefix Trap",
        prompt: "Which word does not become its opposite when a two-letter prefix is added?",
        choices: ["Possible", "Known", "Legal", "Flammable"],
        answer: "Flammable",
        explanation:
          "Impossible, unknown, and illegal are opposites. Inflammable means flammable, not the opposite.",
        editorNotes: "Harder prefix trap for the final question.",
      },
    ],
  },
  {
    id: "top-tier-week-1-day-6-draft",
    title: "Top Tier",
    week: 1,
    day: 6,
    label: "Saturday",
    difficulty: 6,
    theme: "Weekend Stretch",
    tagline: "12 questions. 4 tiers. 30 seconds each.",
    catchphrase: "Can you reach the Top Tier?",
    status: "draft",
    finalizedAt: "",
    editor: {
      name: "",
      newsOrganization: "",
      notes: "",
    },
    questions: [
      {
        number: 1,
        tier: 1,
        type: "Position Sort",
        prompt: "Which option does not belong?",
        choices: ["North", "South", "Center", "East"],
        answer: "Center",
        explanation: "North, south, and east are compass directions.",
        editorNotes: "Good Saturday opener.",
      },
      {
        number: 2,
        tier: 1,
        type: "Weekend Warm-Up",
        prompt: "What comes next? 6, 12, 18, 24, ?",
        choices: ["28", "30", "32", "36"],
        answer: "30",
        explanation: "The numbers increase by 6.",
        editorNotes: "Warm but slightly bigger numbers.",
      },
      {
        number: 3,
        tier: 1,
        type: "Word Meaning",
        prompt: "Which word means almost the same as exact?",
        choices: ["Precise", "Careful", "Detailed", "Close"],
        answer: "Precise",
        explanation:
          "Exact and precise both mean very accurate. Careful, detailed, and close can help accuracy, but they do not mean exact.",
        editorNotes: "Good tone for harder day with stronger vocabulary distractors.",
      },
      {
        number: 4,
        tier: 2,
        type: "Anagram",
        prompt: "Which choice can be made from the letters in LISTEN?",
        choices: ["Silent", "Inlets", "Tinsel", "All of these"],
        answer: "All of these",
        explanation:
          "Silent, inlets, and tinsel all use the same six letters as listen.",
        editorNotes: "Adds an anagram family for the weekend.",
      },
      {
        number: 5,
        tier: 2,
        type: "Alphabet Order",
        prompt: "Which choice is not in alphabetical order?",
        choices: ["Almost", "Begin", "Ghost", "Zebra"],
        answer: "Zebra",
        explanation:
          "Almost, begin, and ghost move forward alphabetically. Zebra starts with z and then moves backward to e.",
        editorNotes: "Fixed answer and explanation.",
      },
      {
        number: 6,
        tier: 2,
        type: "Three Clue",
        prompt: "Which option does not belong?",
        choices: ["Triangle", "Tripod", "Trio", "Trickle"],
        answer: "Trickle",
        explanation:
          "Triangle, tripod, and trio all connect to three. Trickle does not.",
        editorNotes: "Nice prefix/meaning category.",
      },
      {
        number: 7,
        tier: 3,
        type: "Fibonacci Pattern",
        prompt: "What comes next? 1, 1, 2, 3, 5, 8, ?",
        choices: ["11", "12", "13", "15"],
        answer: "13",
        explanation: "Each number is the sum of the two before it.",
        editorNotes: "Fibonacci seed.",
      },
      {
        number: 8,
        tier: 3,
        type: "Attention Trap",
        prompt: "Which choice has the same number of letters as its number?",
        choices: ["One", "Two", "Three", "Four"],
        answer: "Four",
        explanation: "Four has four letters.",
        editorNotes: "Fun clean attention question.",
      },
      {
        number: 9,
        tier: 3,
        type: "Formal Logic",
        prompt:
          "If all glips are nords, and no nords are blins, can a glip be a blin?",
        choices: ["Yes", "No", "Only sometimes", "Cannot tell"],
        answer: "No",
        explanation:
          "Every glip is a nord, and no nord is a blin, so no glip can be a blin.",
        editorNotes: "Abstract logic for harder day.",
      },
      {
        number: 10,
        tier: 4,
        type: "Grammar Trap",
        prompt:
          "Which sentence can mean either ownership or action?",
        choices: [
          "The man's painting hangs on the wall",
          "The glass is empty",
          "The road is narrow",
          "The bell is loud",
        ],
        answer: "The man's painting hangs on the wall",
        explanation:
          "It can mean a painting owned by the man, or a painting made by the man, hanging on the wall.",
        editorNotes: "Strong ambiguity.",
      },
      {
        number: 11,
        tier: 4,
        type: "Grid Logic",
        prompt:
          "A 2 by 3 rectangle is made of unit squares. How many unit squares does it contain?",
        choices: ["5", "6", "8", "9"],
        answer: "6",
        explanation: "Two rows of three squares make 2 x 3, or 6 unit squares.",
        editorNotes: "Spatial numeric reasoning instead of another price trap.",
      },
      {
        number: 12,
        tier: 4,
        type: "Compound Pair",
        prompt:
          "Which word can follow both \"over\" and \"under\" to make common roadway words?",
        choices: ["Pass", "Path", "Light", "Stone"],
        answer: "Pass",
        explanation: "Overpass and underpass are both common roadway words.",
        editorNotes: "Roadway-specific compound-word final to avoid overline and underline.",
      },
    ],
  },
  {
    id: "top-tier-week-1-day-7-draft",
    title: "Top Tier",
    week: 1,
    day: 7,
    label: "Sunday",
    difficulty: 7,
    theme: "Top Tier Trial",
    tagline: "12 questions. 4 tiers. 30 seconds each.",
    catchphrase: "Can you reach the Top Tier?",
    status: "draft",
    finalizedAt: "",
    editor: {
      name: "",
      newsOrganization: "",
      notes: "",
    },
    questions: [
      {
        number: 1,
        tier: 1,
        type: "Reflection Set",
        prompt: "Which option does not belong?",
        choices: ["Echo", "Shadow", "Reflection", "Candle"],
        answer: "Candle",
        explanation:
          "Echo, shadow, and reflection are effects or copies. A candle is an object.",
        editorNotes: "Harder opening category.",
      },
      {
        number: 2,
        tier: 1,
        type: "Sevens Pattern",
        prompt: "What comes next? 7, 14, 21, 28, ?",
        choices: ["32", "35", "36", "42"],
        answer: "35",
        explanation: "The numbers increase by 7.",
        editorNotes: "Still accessible.",
      },
      {
        number: 3,
        tier: 1,
        type: "Word Meaning",
        prompt: "Which word means to look briefly?",
        choices: ["Glance", "Study", "Peruse", "Analyze"],
        answer: "Glance",
        explanation:
          "To glance is to look quickly or briefly. Study, peruse, and analyze all suggest a more careful look.",
        editorNotes: "Vocabulary warm-up with close but wrong reading-related distractors.",
      },
      {
        number: 4,
        tier: 2,
        type: "Hidden Signal",
        prompt: "Read the even-position letters: S T A O R N E E",
        choices: ["Tone", "Stone", "Torn", "Stare"],
        answer: "Tone",
        explanation:
          "The even-position letters are T-O-N-E.",
        editorNotes: "Harder hidden-signal prompt for Sunday.",
      },
      {
        number: 5,
        tier: 2,
        type: "Reverse Order",
        prompt: "Which word has its letters in reverse alphabetical order?",
        choices: ["Told", "Spoon", "Wolf", "Tone"],
        answer: "Told",
        explanation: "T-o-l-d moves backward alphabetically at each step.",
        editorNotes: "Nice precise reading.",
      },
      {
        number: 6,
        tier: 2,
        type: "Prefix Trap",
        prompt: "Which option does not belong?",
        choices: ["Prefix", "Preheat", "Preview", "Prevent"],
        answer: "Prevent",
        explanation:
          "Prefix, preheat, and preview use pre to mean before. Prevent does not mean before-vent.",
        editorNotes: "Good language trap.",
      },
      {
        number: 7,
        tier: 3,
        type: "Difference Ladder",
        prompt: "What comes next? 2, 4, 8, 14, 22, ?",
        choices: ["30", "32", "34", "36"],
        answer: "32",
        explanation:
          "The increases are 2, 4, 6, 8, then 10. So 22 plus 10 is 32.",
        editorNotes: "Strong Q7.",
      },
      {
        number: 8,
        tier: 3,
        type: "Hidden Sound",
        prompt: "Which choice does not hide a sound-related word inside it?",
        choices: ["Stone", "Cloud", "Bring", "Brave"],
        answer: "Brave",
        explanation:
          "Stone hides tone, cloud hides loud, and bring hides ring. Brave does not hide a sound-related word.",
        editorNotes: "Hidden-sound clue with one clean exception.",
      },
      {
        number: 9,
        tier: 3,
        type: "Must-Be-True",
        prompt:
          "Every zarn is a veek. No veeks are loms. What cannot be true?",
        choices: [
          "A zarn is a veek",
          "A veek is not a zarn",
          "A zarn is a lom",
          "A lom is not a veek",
        ],
        answer: "A zarn is a lom",
        explanation:
          "Every zarn is a veek, and no veeks are loms. So a zarn cannot be a lom.",
        editorNotes: "Stronger counter-logic question that requires inference.",
      },
      {
        number: 10,
        tier: 4,
        type: "Role Ambiguity",
        prompt: "Which phrase can describe both a person and a job?",
        choices: ["Fast runner", "Heavy sleeper", "Light sleeper", "Sound engineer"],
        answer: "Sound engineer",
        explanation:
          "It can mean an engineer who works with sound, or a reliable engineer.",
        editorNotes: "May be subtle; good Top Tier feel.",
      },
      {
        number: 11,
        tier: 4,
        type: "Constraint Logic",
        prompt:
          "A code must contain exactly one vowel, one even digit, and one compass direction. Which code works?",
        choices: ["A-4-North", "B-4-North", "A-5-North", "A-4-Table"],
        answer: "B-4-North",
        explanation:
          "B-4-North has exactly one vowel, the o in North. It also has the even digit 4 and the compass direction North.",
        editorNotes: "Top Tier-style checklist logic with A-4-North as the vowel-count trap.",
      },
      {
        number: 12,
        tier: 4,
        type: "Part of Speech Shift",
        prompt:
          "Which word changes from a noun to a verb when one silent letter is added to the front?",
        choices: ["Rite", "Road", "Rain", "Roof"],
        answer: "Rite",
        explanation:
          "Adding w makes write, a verb that sounds like rite but has a different meaning.",
        editorNotes: "Harder homophone-style final without repeating Tuesday's answer.",
      },
    ],
  },
  {
    id: "top-tier-week-2-day-1-draft",
    title: "Top Tier",
    week: 2,
    day: 1,
    label: "Monday",
    difficulty: 1,
    theme: "Clean Starts",
    tagline: "12 questions. 4 tiers. 30 seconds each.",
    catchphrase: "Can you reach the Top Tier?",
    status: "draft",
    finalizedAt: "",
    editor: {
      name: "",
      newsOrganization: "",
      notes: "",
    },
    questions: [
      {
        number: 1,
        tier: 1,
        type: "Odd One Out",
        prompt: "Which option does not belong?",
        choices: ["Lemon", "Lime", "Orange", "Carrot"],
        answer: "Carrot",
        explanation: "Lemon, lime, and orange are citrus fruits. Carrot is a vegetable.",
        editorNotes: "Friendly category opener.",
      },
      {
        number: 2,
        tier: 1,
        type: "Even Step",
        prompt: "What comes next? 4, 8, 12, 16, ?",
        choices: ["18", "20", "22", "24"],
        answer: "20",
        explanation: "The pattern adds 4 each time.",
        editorNotes: "Simple number rhythm.",
      },
      {
        number: 3,
        tier: 1,
        type: "Word Meaning",
        prompt: "Which word means to repair?",
        choices: ["Mend", "Break", "Hide", "Carry"],
        answer: "Mend",
        explanation: "To mend something is to repair it.",
        editorNotes: "Clean vocabulary warm-up.",
      },
      {
        number: 4,
        tier: 2,
        type: "Letter Count",
        prompt: "Which word has exactly four letters?",
        choices: ["Rose", "Stone", "Pebble", "Flower"],
        answer: "Rose",
        explanation: "Rose has four letters.",
        editorNotes: "Easy counting check.",
      },
      {
        number: 5,
        tier: 2,
        type: "Sound-Alike",
        prompt: "Which word sounds like sea?",
        choices: ["See", "Seed", "Seat", "Sink"],
        answer: "See",
        explanation: "See and sea sound alike.",
        editorNotes: "Simple homophone slot.",
      },
      {
        number: 6,
        tier: 2,
        type: "Shape Count",
        prompt: "Which shape has the most sides?",
        choices: ["Triangle", "Square", "Pentagon", "Hexagon"],
        answer: "Hexagon",
        explanation: "A hexagon has six sides, more than the other choices.",
        editorNotes: "Visual-count reasoning.",
      },
      {
        number: 7,
        tier: 3,
        type: "Hidden Number",
        prompt: "Which choice hides a number inside it?",
        choices: ["Planet", "Alone", "Garden", "Window"],
        answer: "Alone",
        explanation: "Alone contains one: al-ONE.",
        editorNotes: "First hidden-word moment of the week.",
      },
      {
        number: 8,
        tier: 3,
        type: "Category Split",
        prompt: "Which is not a kitchen tool?",
        choices: ["Spoon", "Whisk", "Ladle", "Pillow"],
        answer: "Pillow",
        explanation: "Spoon, whisk, and ladle are kitchen tools. Pillow is not.",
        editorNotes: "Still fair, slightly later placement.",
      },
      {
        number: 9,
        tier: 3,
        type: "Calendar Order",
        prompt: "Which month comes immediately after September?",
        choices: ["August", "October", "November", "December"],
        answer: "October",
        explanation: "October comes right after September.",
        editorNotes: "Quick order check.",
      },
      {
        number: 10,
        tier: 4,
        type: "Probability",
        prompt: "A jar has 2 blue marbles and 6 red marbles. What fraction of the marbles are blue?",
        choices: ["1/2", "1/3", "1/4", "2/3"],
        answer: "1/4",
        explanation: "There are 8 marbles total, and 2 are blue. 2 out of 8 simplifies to 1/4.",
        editorNotes: "Gentle math for the first Top Tier slot.",
      },
      {
        number: 11,
        tier: 4,
        type: "Grammar Trap",
        prompt: "Which sentence can mean two different things?",
        choices: [
          "I saw the bird with binoculars",
          "The lamp is bright",
          "She opened the door",
          "The book is red",
        ],
        answer: "I saw the bird with binoculars",
        explanation:
          "It can mean you used binoculars, or that the bird had binoculars.",
        editorNotes: "Classic ambiguity with playful payoff.",
      },
      {
        number: 12,
        tier: 4,
        type: "Letter Flip",
        prompt: "Which phrase changes into a different common phrase by changing one letter?",
        choices: ["Marital arts", "Quiet room", "Green light", "Cold drink"],
        answer: "Marital arts",
        explanation:
          "Changing marital to martial gives martial arts, a different common phrase.",
        editorNotes: "Nice final because one letter changes the whole meaning.",
      },
    ],
  },
  {
    id: "top-tier-week-2-day-2-draft",
    title: "Top Tier",
    week: 2,
    day: 2,
    label: "Tuesday",
    difficulty: 2,
    theme: "Second Looks",
    tagline: "12 questions. 4 tiers. 30 seconds each.",
    catchphrase: "Can you reach the Top Tier?",
    status: "draft",
    finalizedAt: "",
    editor: {
      name: "",
      newsOrganization: "",
      notes: "",
    },
    questions: [
      {
        number: 1,
        tier: 1,
        type: "Odd One Out",
        prompt: "Which option does not belong?",
        choices: ["Violin", "Piano", "Guitar", "Pencil"],
        answer: "Pencil",
        explanation: "Violin, piano, and guitar are musical instruments. Pencil is not.",
        editorNotes: "Comfortable start.",
      },
      {
        number: 2,
        tier: 1,
        type: "Square Pattern",
        prompt: "What comes next? 1, 4, 9, 16, ?",
        choices: ["20", "24", "25", "36"],
        answer: "25",
        explanation: "These are square numbers: 1, 4, 9, 16, 25.",
        editorNotes: "Slightly more interesting than a straight count.",
      },
      {
        number: 3,
        tier: 1,
        type: "Word Meaning",
        prompt: "Which word means completely correct, with no difference from the target?",
        choices: ["Exact", "Careful", "Close", "Neat"],
        answer: "Exact",
        explanation: "Exact means completely correct or matching the target. Close is nearby, but it still allows a difference.",
        editorNotes: "Cleaner vocabulary item with nearby distractors.",
      },
      {
        number: 4,
        tier: 2,
        type: "Hidden Word",
        prompt: "Which of these words hides where a lion sleeps?",
        choices: ["Educate", "Window", "Garden", "Planet"],
        answer: "Garden",
        explanation: "Garden hides den, where a lion might sleep: gar-DEN.",
        editorNotes: "Cleaner hidden-word clue with one fair answer.",
      },
      {
        number: 5,
        tier: 2,
        type: "Homophone",
        prompt: "Which word completes this sentence: I need a ___ of cake.",
        choices: ["Piece", "Peace", "Peas", "Pairs"],
        answer: "Piece",
        explanation: "A piece of cake is a portion of cake.",
        editorNotes: "Sound-alike with real spelling choice.",
      },
      {
        number: 6,
        tier: 2,
        type: "Alphabet Step",
        prompt: "Which letter completes this pattern? A, D, G, J, ?",
        choices: ["K", "L", "M", "N"],
        answer: "M",
        explanation: "The pattern skips two letters each time: A, D, G, J, M.",
        editorNotes: "Moves alphabet logic into the middle tier.",
      },
      {
        number: 7,
        tier: 3,
        type: "Measurement Trap",
        prompt: "Which item is not usually measured in degrees?",
        choices: ["Angle", "Temperature", "Circle", "Distance"],
        answer: "Distance",
        explanation: "Angles, temperatures, and circles can involve degrees. Distance is usually measured in units like feet or miles.",
        editorNotes: "Good second-look category trap.",
      },
      {
        number: 8,
        tier: 3,
        type: "Attention Count",
        prompt: "In the phrase \"Tiny turtles take turns today,\" how many times does the letter t appear?",
        choices: ["4", "5", "6", "7"],
        answer: "6",
        explanation:
          "Counting uppercase and lowercase t's in the quoted phrase gives six.",
        editorNotes: "Verify count if prompt changes.",
      },
      {
        number: 9,
        tier: 3,
        type: "Seat Logic",
        prompt:
          "Five seats are in a row. Alex is in seat 2. Bea is two seats to the right of Alex. Cam is in seat 5. Dia is in seat 1. Which seat is empty?",
        choices: ["Seat 2", "Seat 3", "Seat 4", "Seat 5"],
        answer: "Seat 3",
        explanation:
          "Alex is in seat 2, Bea is in seat 4, Cam is in seat 5, and Dia is in seat 1. Seat 3 is empty.",
        editorNotes: "Concrete spatial logic.",
      },
      {
        number: 10,
        tier: 4,
        type: "Compound Pair",
        prompt: "Which word can follow both head and dead to make common words?",
        choices: ["Line", "Stone", "Room", "Mark"],
        answer: "Line",
        explanation: "Headline and deadline are both common words.",
        editorNotes: "Fresh compound-word clue that avoids repeating Week 1.",
      },
      {
        number: 11,
        tier: 4,
        type: "Must-Be-False",
        prompt:
          "Every nim is a vor. No vors are reks. What cannot be true?",
        choices: [
          "A nim is a rek",
          "A nim is a vor",
          "Some vors are nims",
          "No vors are reks",
        ],
        answer: "A nim is a rek",
        explanation:
          "If every nim is a vor, and no vors are reks, then a nim cannot be a rek.",
        editorNotes: "Counter-logic, but still readable.",
      },
      {
        number: 12,
        tier: 4,
        type: "Word Number",
        prompt: "If TOP = 51, what does TIER equal?",
        choices: ["48", "51", "52", "57"],
        answer: "52",
        explanation:
          "Use alphabet positions and add them: T = 20, I = 9, E = 5, and R = 18. TIER equals 52.",
        editorNotes: "Fresh word-to-number final replacing the repeated letter-shift pattern.",
      },
    ],
  },
  {
    id: "top-tier-week-2-day-3-draft",
    title: "Top Tier",
    week: 2,
    day: 3,
    label: "Wednesday",
    difficulty: 3,
    theme: "Pattern Shifts",
    tagline: "12 questions. 4 tiers. 30 seconds each.",
    catchphrase: "Can you reach the Top Tier?",
    status: "draft",
    finalizedAt: "",
    editor: {
      name: "",
      newsOrganization: "",
      notes: "",
    },
    questions: [
      {
        number: 1,
        tier: 1,
        type: "Odd One Out",
        prompt: "Which option does not belong?",
        choices: ["North", "South", "East", "Summer"],
        answer: "Summer",
        explanation: "North, south, and east are directions. Summer is a season.",
        editorNotes: "Fast opener.",
      },
      {
        number: 2,
        tier: 1,
        type: "Difference Ladder",
        prompt: "What comes next? 2, 4, 8, 14, 22, ?",
        choices: ["30", "32", "34", "36"],
        answer: "32",
        explanation: "The differences grow by 2: +2, +4, +6, +8, then +10.",
        editorNotes: "Good early pattern with a little lift.",
      },
      {
        number: 3,
        tier: 1,
        type: "Word Meaning",
        prompt: "Which word means uncertain?",
        choices: ["Unsure", "Certain", "Direct", "Frequent"],
        answer: "Unsure",
        explanation: "Unsure means uncertain.",
        editorNotes: "Straight vocabulary anchor.",
      },
      {
        number: 4,
        tier: 2,
        type: "Hidden Sound",
        prompt: "Which choice hides a sound word inside it?",
        choices: ["Clapboard", "Window", "Planet", "Garden"],
        answer: "Clapboard",
        explanation: "Clapboard contains clap, a sound word.",
        editorNotes: "Hidden sound-family question.",
      },
      {
        number: 5,
        tier: 2,
        type: "Reverse Order",
        prompt: "Which choice starts with three letters moving backward in the alphabet?",
        choices: ["Fedora", "Baker", "Lumen", "Alpha"],
        answer: "Fedora",
        explanation: "Fedora starts with f, e, d, which move backward alphabetically.",
        editorNotes: "Nice letter-order check.",
      },
      {
        number: 6,
        tier: 2,
        type: "Multiplication Pattern",
        prompt: "What comes next? 3, 6, 18, 72, ?",
        choices: ["180", "240", "300", "360"],
        answer: "360",
        explanation: "The pattern multiplies by 2, then 3, then 4, then 5.",
        editorNotes: "A bigger-looking number with a clean rule.",
      },
      {
        number: 7,
        tier: 3,
        type: "Prefix Trap",
        prompt: "Which word can become its opposite by adding un?",
        choices: ["Known", "Legal", "Possible", "Honest"],
        answer: "Known",
        explanation: "Adding un to known makes unknown.",
        editorNotes: "Legal and possible are tempting but use different prefixes.",
      },
      {
        number: 8,
        tier: 3,
        type: "Spatial Logic",
        prompt:
          "Four books are in a row. Atlas is immediately left of Beacon. Cipher is right of Beacon. Who cannot be second?",
        choices: ["Atlas", "Beacon", "Cipher", "Cannot tell"],
        answer: "Cipher",
        explanation:
          "Cipher must be to the right of Beacon, and Beacon must be to the right of Atlas. Cipher cannot be second.",
        editorNotes: "Good compact row logic.",
      },
      {
        number: 9,
        tier: 3,
        type: "Vowel Count",
        prompt: "Which choice contains exactly three vowels?",
        choices: ["Market", "Ocean", "Cloud", "Rhythm"],
        answer: "Ocean",
        explanation: "Ocean has three vowels: o, e, and a.",
        editorNotes: "Clean vowel-count question.",
      },
      {
        number: 10,
        tier: 4,
        type: "Grammar Trap",
        prompt: "Which sentence can mean two different things?",
        choices: [
          "The chicken is ready to eat",
          "The window is closed",
          "The music is loud",
          "The road is straight",
        ],
        answer: "The chicken is ready to eat",
        explanation:
          "It can mean the chicken is ready to eat food, or that the chicken is ready to be eaten.",
        editorNotes: "Classic ambiguity. Funny enough to land.",
      },
      {
        number: 11,
        tier: 4,
        type: "Constraint Logic",
        prompt: "A code must include a color, an odd digit, and a direction. Which code works?",
        choices: ["Red-7-East", "Blue-8-East", "Red-7-Table", "Road-7-East"],
        answer: "Red-7-East",
        explanation:
          "Red is a color, 7 is odd, and East is a direction.",
        editorNotes: "Checklist logic with close traps.",
      },
      {
        number: 12,
        tier: 4,
        type: "Must-Be-True",
        prompt:
          "Every zup is a lorn. Every lorn is a mep. What must be true?",
        choices: [
          "Every zup is a mep",
          "Every mep is a zup",
          "No zups are lorns",
          "Some meps are not lorns",
        ],
        answer: "Every zup is a mep",
        explanation:
          "If every zup is inside the lorn group, and every lorn is inside the mep group, then every zup is a mep.",
        editorNotes: "Strong Wednesday final.",
      },
    ],
  },
  {
    id: "top-tier-week-2-day-4-draft",
    title: "Top Tier",
    week: 2,
    day: 4,
    label: "Thursday",
    difficulty: 4,
    theme: "Hidden Rules",
    tagline: "12 questions. 4 tiers. 30 seconds each.",
    catchphrase: "Can you reach the Top Tier?",
    status: "draft",
    finalizedAt: "",
    editor: {
      name: "",
      newsOrganization: "",
      notes: "",
    },
    questions: [
      {
        number: 1,
        tier: 1,
        type: "Odd One Out",
        prompt: "Which option does not belong?",
        choices: ["Rain", "Snow", "Wind", "Carpet"],
        answer: "Carpet",
        explanation: "Rain, snow, and wind are weather words. Carpet is not.",
        editorNotes: "Simple open.",
      },
      {
        number: 2,
        tier: 1,
        type: "Equal Step",
        prompt: "What comes next? 7, 14, 21, 28, ?",
        choices: ["32", "35", "36", "42"],
        answer: "35",
        explanation: "The pattern adds 7 each time.",
        editorNotes: "Keeps early confidence.",
      },
      {
        number: 3,
        tier: 1,
        type: "Word Meaning",
        prompt: "Which word means to calm or comfort?",
        choices: ["Soothe", "Stir", "Rush", "Raise"],
        answer: "Soothe",
        explanation: "To soothe is to calm or comfort.",
        editorNotes: "Useful vocabulary slot.",
      },
      {
        number: 4,
        tier: 2,
        type: "Hidden Animal",
        prompt: "Which word hides ant inside it?",
        choices: ["Plant", "River", "Cloud", "Stone"],
        answer: "Plant",
        explanation: "Plant contains ant: pl-ANT.",
        editorNotes: "Good hidden-word check.",
      },
      {
        number: 5,
        tier: 2,
        type: "Alphabet Rule",
        prompt: "Which word's letters are in alphabetical order?",
        choices: ["Almost", "Baker", "Lumpy", "Train"],
        answer: "Almost",
        explanation: "A, l, m, o, s, t appear in alphabetical order.",
        editorNotes: "Clean single answer.",
      },
      {
        number: 6,
        tier: 2,
        type: "Compound Pair",
        prompt: "Which word can follow both snow and rain to make common words?",
        choices: ["Fall", "Stone", "Table", "Door"],
        answer: "Fall",
        explanation: "Snowfall and rainfall are both common words.",
        editorNotes: "Nice compound-word family.",
      },
      {
        number: 7,
        tier: 3,
        type: "Letter Shift",
        prompt: "If RING becomes SJOH, what does CAKE become?",
        choices: ["DBLF", "DBKE", "CALF", "ECLG"],
        answer: "DBLF",
        explanation:
          "Each letter moves forward one place: C to D, A to B, K to L, E to F.",
        editorNotes: "Mid-game code pattern.",
      },
      {
        number: 8,
        tier: 3,
        type: "Hidden Number",
        prompt: "Which word hides ten inside it?",
        choices: ["Often", "River", "Cloud", "Planet"],
        answer: "Often",
        explanation: "Often contains ten: of-TEN.",
        editorNotes: "Short and satisfying.",
      },
      {
        number: 9,
        tier: 3,
        type: "Rule Breaker",
        prompt: "Which choice breaks the rule: each word contains a double letter?",
        choices: ["Balloon", "Coffee", "Letter", "Planet"],
        answer: "Planet",
        explanation: "Balloon, coffee, and letter have double letters. Planet does not.",
        editorNotes: "Good hidden-rule question.",
      },
      {
        number: 10,
        tier: 4,
        type: "Must-Be-True",
        prompt:
          "Some blins are crofs. Every crof is a dain. What must be true?",
        choices: [
          "Some blins are dains",
          "Every dain is a crof",
          "No blins are dains",
          "Every blin is a crof",
        ],
        answer: "Some blins are dains",
        explanation:
          "The blins that are crofs must also be dains, because every crof is a dain.",
        editorNotes: "Good formal logic progression.",
      },
      {
        number: 11,
        tier: 4,
        type: "Grammar Ambiguity",
        prompt: "Which phrase can describe two different groups?",
        choices: [
          "Old men and women",
          "The red car",
          "Bright morning sky",
          "Four empty chairs",
        ],
        answer: "Old men and women",
        explanation:
          "It can mean old men plus women, or old men plus old women.",
        editorNotes: "Editor can decide if this is too grammar-ish.",
      },
      {
        number: 12,
        tier: 4,
        type: "Color Scan",
        prompt: "Read only the blue letters. What word do they spell?",
        promptHtml:
          'Read only the blue letters: <span class="letter-red">T</span><span class="letter-blue">L</span><span class="letter-amber">R</span><span class="letter-blue">O</span><span class="letter-green">A</span><span class="letter-blue">G</span><span class="letter-red">S</span><span class="letter-blue">I</span><span class="letter-amber">N</span><span class="letter-blue">C</span>',
        choices: ["LOGIC", "LODGE", "MAGIC", "TOPIC"],
        answer: "LOGIC",
        explanation: "The blue letters spell L-O-G-I-C.",
        editorNotes: "Visual attention final.",
      },
    ],
  },
  {
    id: "top-tier-week-2-day-5-draft",
    title: "Top Tier",
    week: 2,
    day: 5,
    label: "Friday",
    difficulty: 5,
    theme: "False Trails",
    tagline: "12 questions. 4 tiers. 30 seconds each.",
    catchphrase: "Can you reach the Top Tier?",
    status: "draft",
    finalizedAt: "",
    editor: {
      name: "",
      newsOrganization: "",
      notes: "",
    },
    questions: [
      {
        number: 1,
        tier: 1,
        type: "Odd One Out",
        prompt: "Which option does not belong?",
        choices: ["Mercury", "Venus", "Mars", "Moon"],
        answer: "Moon",
        explanation: "Mercury, Venus, and Mars are planets. The moon is not a planet.",
        editorNotes: "Friday starts familiar.",
      },
      {
        number: 2,
        tier: 1,
        type: "Difference Ladder",
        prompt: "What comes next? 6, 11, 18, 27, ?",
        choices: ["36", "38", "40", "42"],
        answer: "38",
        explanation: "The differences are +5, +7, +9, then +11.",
        editorNotes: "Slightly trickier early number pattern.",
      },
      {
        number: 3,
        tier: 1,
        type: "Word Meaning",
        prompt: "Which word means sharp or biting in tone?",
        choices: ["Acerbic", "Gentle", "Silent", "Brief"],
        answer: "Acerbic",
        explanation: "Acerbic means sharp, biting, or harsh in tone.",
        editorNotes: "Harder word, but the distractors help.",
      },
      {
        number: 4,
        tier: 2,
        type: "Hidden Word",
        prompt: "Which word hides head inside it?",
        choices: ["Ahead", "Window", "Planet", "Garden"],
        answer: "Ahead",
        explanation: "Ahead contains head: a-HEAD.",
        editorNotes: "Quick hidden-word solve.",
      },
      {
        number: 5,
        tier: 2,
        type: "Homophone",
        prompt: "Which word completes this sentence: The team will ___ the game.",
        choices: ["Win", "When", "One", "Won"],
        answer: "Win",
        explanation: "The team will win the game.",
        editorNotes: "Spelling under pressure.",
      },
      {
        number: 6,
        tier: 2,
        type: "Dual Use",
        prompt: "Which word can most clearly be both a noun and a verb?",
        choices: ["Brush", "Yellow", "Silent", "Early"],
        answer: "Brush",
        explanation: "A brush is an object, and to brush is an action.",
        editorNotes: "Good language-flex question.",
      },
      {
        number: 7,
        tier: 3,
        type: "Fibonacci Pattern",
        prompt: "What comes next? 1, 1, 2, 3, 5, 8, ?",
        choices: ["11", "12", "13", "16"],
        answer: "13",
        explanation: "Each number is the sum of the two before it.",
        editorNotes: "Known pattern but still a nice climb.",
      },
      {
        number: 8,
        tier: 3,
        type: "Hidden Signal",
        prompt: "Which word hides red inside it?",
        choices: ["Credible", "Planet", "Window", "Basket"],
        answer: "Credible",
        explanation: "Credible contains red: c-RED-ible.",
        editorNotes: "Looks harder than it is.",
      },
      {
        number: 9,
        tier: 3,
        type: "Probability",
        prompt:
          "A bag has 5 green tiles, 3 yellow tiles, and 2 blue tiles. What is the probability of drawing yellow?",
        choices: ["1/5", "3/10", "1/2", "2/5"],
        answer: "3/10",
        explanation:
          "There are 10 tiles total, and 3 are yellow, so the probability is 3/10.",
        editorNotes: "Math slot with clean answer choices.",
      },
      {
        number: 10,
        tier: 4,
        type: "Must-Be-True",
        prompt:
          "All artists are makers. Some makers are editors. What must be true?",
        choices: [
          "Some artists are editors",
          "Every editor is a maker",
          "Every artist is a maker",
          "No makers are artists",
        ],
        answer: "Every artist is a maker",
        explanation:
          "That statement is directly given. The others do not necessarily follow.",
        editorNotes: "Counter-logic style question.",
      },
      {
        number: 11,
        tier: 4,
        type: "Constraint Logic",
        prompt: "A code must include an animal, an even digit, and exactly two vowels. Which code works?",
        choices: ["Tiger-6", "Tiger-5", "River-6", "Tgr-6"],
        answer: "Tiger-6",
        explanation:
          "Tiger is an animal with exactly two vowels, i and e. The digit 6 is even.",
        editorNotes: "Checklist with a vowel trap.",
      },
      {
        number: 12,
        tier: 4,
        type: "Prefix Pair",
        prompt: "Which word can take both pre and re to make common words?",
        choices: ["View", "Legal", "Possible", "Kind"],
        answer: "View",
        explanation: "Preview and review are both common words.",
        editorNotes: "Clean Friday final.",
      },
    ],
  },
  {
    id: "top-tier-week-2-day-6-draft",
    title: "Top Tier",
    week: 2,
    day: 6,
    label: "Saturday",
    difficulty: 6,
    theme: "Weekend Climb",
    tagline: "12 questions. 4 tiers. 30 seconds each.",
    catchphrase: "Can you reach the Top Tier?",
    status: "draft",
    finalizedAt: "",
    editor: {
      name: "",
      newsOrganization: "",
      notes: "",
    },
    questions: [
      {
        number: 1,
        tier: 1,
        type: "Position Sort",
        prompt: "Which letter is in the middle of A, B, C, D, E?",
        choices: ["A", "B", "C", "D"],
        answer: "C",
        explanation: "C is the middle letter in A, B, C, D, E.",
        editorNotes: "Fast weekend opener.",
      },
      {
        number: 2,
        tier: 1,
        type: "Equal Step",
        prompt: "What comes next? 9, 18, 27, 36, ?",
        choices: ["42", "45", "48", "54"],
        answer: "45",
        explanation: "The pattern adds 9 each time.",
        editorNotes: "Easy but still timed.",
      },
      {
        number: 3,
        tier: 1,
        type: "Word Meaning",
        prompt: "Which word means a short sleep?",
        choices: ["Nap", "Map", "Rest", "Dream"],
        answer: "Nap",
        explanation: "A nap is a short sleep.",
        editorNotes: "Simple vocabulary with near distractors.",
      },
      {
        number: 4,
        tier: 2,
        type: "Anagram",
        prompt: "Which choice can be made from the letters in CARE?",
        choices: ["Race", "Trace", "Clear", "Reach"],
        answer: "Race",
        explanation: "Race uses the same letters as care.",
        editorNotes: "Anagram family returns.",
      },
      {
        number: 5,
        tier: 2,
        type: "Hidden Word",
        prompt: "Which word hides ear inside it?",
        choices: ["Search", "Planet", "Window", "Basket"],
        answer: "Search",
        explanation: "Search contains ear: s-EAR-ch.",
        editorNotes: "Fresh hidden-word clue after Friday's red question.",
      },
      {
        number: 6,
        tier: 2,
        type: "Three Clue",
        prompt: "Which choice can be a fruit, a color, and a flavor?",
        choices: ["Orange", "Circle", "Paper", "Silver"],
        answer: "Orange",
        explanation: "Orange can name a fruit, a color, and a flavor.",
        editorNotes: "Good multi-meaning question.",
      },
      {
        number: 7,
        tier: 3,
        type: "Growing Step",
        prompt: "What comes next? 2, 3, 5, 8, 12, ?",
        choices: ["15", "16", "17", "18"],
        answer: "17",
        explanation: "The pattern adds 1, then 2, then 3, then 4, then 5.",
        editorNotes: "Weekend pattern step.",
      },
      {
        number: 8,
        tier: 3,
        type: "Rule Breaker",
        prompt: "Which choice breaks the rule: each word starts and ends with the same letter?",
        choices: ["Level", "Radar", "Civic", "River"],
        answer: "River",
        explanation: "Level, radar, and civic start and end with the same letter. River does not.",
        editorNotes: "Familiar rule in a new position.",
      },
      {
        number: 9,
        tier: 3,
        type: "Must-Be-False",
        prompt:
          "No drims are plones. Every plone is a caret. What cannot be true?",
        choices: [
          "A drim is a plone",
          "A plone is a caret",
          "Some carets are plones",
          "No drims are plones",
        ],
        answer: "A drim is a plone",
        explanation:
          "The first statement says no drims are plones, so a drim cannot be a plone.",
        editorNotes: "Clear logic with invented terms.",
      },
      {
        number: 10,
        tier: 4,
        type: "Grammar Ambiguity",
        prompt: "Which sentence can mean two different things?",
        choices: [
          "Visiting relatives can be boring",
          "The chair is wooden",
          "She closed the window",
          "The clock is round",
        ],
        answer: "Visiting relatives can be boring",
        explanation:
          "It can mean the act of visiting relatives is boring, or that relatives who visit can be boring.",
        editorNotes: "Strong ambiguity clue.",
      },
      {
        number: 11,
        tier: 4,
        type: "Seat Logic",
        prompt:
          "Six seats are in a row. Ana is in seat 2. Bo is two seats to Ana's right. The empty seat is to Bo's right. Cy is immediately left of the empty seat. Where is the empty seat?",
        choices: ["Seat 3", "Seat 4", "Seat 5", "Seat 6"],
        answer: "Seat 6",
        explanation:
          "Ana is in seat 2, so Bo is in seat 4. The empty seat is right of Bo. If Cy is immediately left of it, the empty seat must be seat 6.",
        editorNotes: "Good Saturday spatial challenge.",
      },
      {
        number: 12,
        tier: 4,
        type: "Constraint Logic",
        prompt:
          "A password must include a color word, one prime digit, and no repeated letters. Which password works?",
        choices: ["Red-5", "Blue-4", "Green-3", "Gray-9"],
        answer: "Red-5",
        explanation:
          "Red is a color with no repeated letters, and 5 is a prime digit.",
        editorNotes: "Weekend checklist final.",
      },
    ],
  },
  {
    id: "top-tier-week-2-day-7-draft",
    title: "Top Tier",
    week: 2,
    day: 7,
    label: "Sunday",
    difficulty: 7,
    theme: "Peak Trial",
    tagline: "12 questions. 4 tiers. 30 seconds each.",
    catchphrase: "Can you reach the Top Tier?",
    status: "draft",
    finalizedAt: "",
    editor: {
      name: "",
      newsOrganization: "",
      notes: "",
    },
    questions: [
      {
        number: 1,
        tier: 1,
        type: "Reflection Set",
        prompt: "Which is usually not seen in a mirror?",
        choices: ["Face", "Shadow", "Reflection", "Echo"],
        answer: "Echo",
        explanation: "A mirror shows visual things. An echo is heard, not seen.",
        editorNotes: "Sunday opener with a little twist.",
      },
      {
        number: 2,
        tier: 1,
        type: "Growth Pattern",
        prompt: "What comes next? 1, 4, 10, 22, 46, ?",
        choices: ["90", "92", "94", "96"],
        answer: "94",
        explanation: "Each number is doubled, then 2 is added.",
        editorNotes: "Harder pattern early, fitting Sunday.",
      },
      {
        number: 3,
        tier: 1,
        type: "Word Meaning",
        prompt: "Which word means to hint or suggest without saying directly?",
        choices: ["Imply", "Announce", "Deny", "Repeat"],
        answer: "Imply",
        explanation: "To imply is to suggest something indirectly.",
        editorNotes: "Vocabulary with close reasoning.",
      },
      {
        number: 4,
        tier: 2,
        type: "Hidden Sound",
        prompt: "Which word hides tone inside it?",
        choices: ["Atoned", "Brave", "Cloud", "Spark"],
        answer: "Atoned",
        explanation: "Atoned contains tone: a-TONE-d.",
        editorNotes: "Hidden sound-family clue.",
      },
      {
        number: 5,
        tier: 2,
        type: "Reverse Order",
        prompt: "Which choice starts with three letters moving backward in the alphabet?",
        choices: ["Trove", "Cabin", "Lumen", "Alpha"],
        answer: "Trove",
        explanation: "Trove starts with t, r, o, which move backward alphabetically.",
        editorNotes: "Not consecutive, but clearly descending.",
      },
      {
        number: 6,
        tier: 2,
        type: "Prefix Trap",
        prompt: "Which word can become its opposite by adding dis?",
        choices: ["Agree", "Legal", "Possible", "Known"],
        answer: "Agree",
        explanation: "Adding dis to agree makes disagree.",
        editorNotes: "Different prefix family from earlier days.",
      },
      {
        number: 7,
        tier: 3,
        type: "Square Pattern",
        prompt: "What comes next? 4, 9, 16, 25, 36, ?",
        choices: ["42", "45", "49", "64"],
        answer: "49",
        explanation: "These are square numbers: 2 squared through 7 squared.",
        editorNotes: "Known pattern, but Sunday timing adds pressure.",
      },
      {
        number: 8,
        tier: 3,
        type: "Hidden Month",
        prompt: "Which word hides a month inside it?",
        choices: ["Marching", "Lantern", "Puzzle", "Garden"],
        answer: "Marching",
        explanation: "Marching begins with March.",
        editorNotes: "Nice hidden-calendar clue.",
      },
      {
        number: 9,
        tier: 3,
        type: "Must-Be-False",
        prompt:
          "Every larp is a tave. Every tave is a noll. No noll is a vesh. What cannot be true?",
        choices: [
          "A larp is a vesh",
          "A larp is a noll",
          "A tave is a noll",
          "No noll is a vesh",
        ],
        answer: "A larp is a vesh",
        explanation:
          "Every larp is a noll, and no noll is a vesh, so a larp cannot be a vesh.",
        editorNotes: "Sunday logic climb.",
      },
      {
        number: 10,
        tier: 4,
        type: "Grammar Ambiguity",
        prompt: "Which sentence can mean either ownership or action?",
        choices: [
          "The woman's drawing is framed",
          "The door is open",
          "The coffee is hot",
          "She tied her shoes",
        ],
        answer: "The woman's drawing is framed",
        explanation:
          "It can mean a drawing owned by the woman, or a drawing made by the woman.",
        editorNotes: "Good Top Tier ambiguity without repeating the visiting phrase.",
      },
      {
        number: 11,
        tier: 4,
        type: "Color Scan",
        prompt: "Read only the red letters. What word do they spell?",
        promptHtml:
          'Read only the red letters: <span class="letter-blue">P</span><span class="letter-red">T</span><span class="letter-green">A</span><span class="letter-red">I</span><span class="letter-amber">R</span><span class="letter-red">E</span><span class="letter-blue">S</span><span class="letter-red">R</span>',
        choices: ["TIER", "TIES", "TIRE", "RISE"],
        answer: "TIER",
        explanation: "The red letters spell T-I-E-R.",
        editorNotes: "Visual attention right before the final.",
      },
      {
        number: 12,
        tier: 4,
        type: "Constraint Logic",
        prompt:
          "Which option satisfies all three rules: starts and ends with the same letter, has exactly two vowels, and can be a verb?",
        choices: ["Level", "Radar", "Civic", "Enter"],
        answer: "Level",
        explanation:
          "Level starts and ends with l, has two vowels, and can be a verb.",
        editorNotes: "Strong Sunday final with tempting near-matches.",
      },
    ],
  },
  {
    "id": "top-tier-week-3-day-1-draft",
    "title": "Top Tier",
    "week": 3,
    "day": 1,
    "label": "Monday",
    "difficulty": 1,
    "theme": "First Switches",
    "tagline": "12 questions. 4 tiers. 30 seconds each.",
    "catchphrase": "Can you reach the Top Tier?",
    "status": "draft",
    "finalizedAt": "",
    "editor": {
      "name": "",
      "newsOrganization": "",
      "notes": ""
    },
    "questions": [
{
        "number": 1,
        "tier": 1,
        "type": "Animal Equation",
        "prompt": "What animal is made by this word equation? GOAL - L + T = ?",
        "promptHtml": "<span class=\"rebus-question\">What animal is made by this word equation?</span><span class=\"rebus-clue\" aria-label=\"GOAL minus L plus T equals question mark\"><span class=\"rebus-letter\">GOAL</span><span class=\"rebus-plus\">- L</span><span class=\"rebus-plus\">+ T</span><span class=\"rebus-plus\">= ?</span></span>",
        "choices": [
          "Goat",
          "Gnat",
          "Colt",
          "Toad"
        ],
        "answer": "Goat",
        "explanation": "GOAL minus L leaves GOA. Add T to make GOAT.",
        "editorNotes": "Replaces a repeated flip-card question with an animal word-equation puzzle."
      },
{
        "number": 2,
        "tier": 1,
        "type": "Odd One Out",
        "prompt": "Which option does not belong?",
        "choices": [
          "Cotton",
          "Silk",
          "Linen",
          "Hammer"
        ],
        "answer": "Hammer",
        "explanation": "Cotton, silk, and linen are materials used for fabric. A hammer is a tool.",
        "editorNotes": "Fresh opener that avoids repeating the tree/flower split."
      },
{
        "number": 3,
        "tier": 1,
        "type": "Flip Count",
        "prompt": "Four cards show U, D, U, D. U means face up; D means face down. Every card is flipped. How many are face up now?",
        "choices": [
          "0",
          "1",
          "2",
          "3"
        ],
        "answer": "2",
        "explanation": "After the flip, the two D cards become face up, so two cards are face up.",
        "editorNotes": "Introduces the face-up/face-down flip idea in its simplest form."
      },
{
        "number": 4,
        "tier": 2,
        "type": "Word Meaning",
        "prompt": "Which word means to speak clearly?",
        "choices": [
          "Murmur",
          "Enunciate",
          "Wander",
          "Polish"
        ],
        "answer": "Enunciate",
        "explanation": "To enunciate is to pronounce or speak words clearly.",
        "editorNotes": "Vocabulary warm-up with nearby but not equal distractors."
      },
{
        "number": 5,
        "tier": 2,
        "type": "Step Pattern",
        "prompt": "What comes next? 2, 5, 8, 11, ?",
        "choices": [
          "12",
          "13",
          "14",
          "16"
        ],
        "answer": "14",
        "explanation": "The pattern adds 3 each time: 2, 5, 8, 11, 14.",
        "editorNotes": "Simple arithmetic step for Tier 2."
      },
{
        "number": 6,
        "tier": 2,
        "type": "Hidden Art Material",
        "prompt": "Which word has an art material inside of it?",
        "choices": [
          "Thinking",
          "Meadow",
          "Lantern",
          "Puzzle"
        ],
        "answer": "Thinking",
        "explanation": "Thinking contains ink in consecutive letters: th-INK-ing.",
        "editorNotes": "Uses a broader art-material clue so players have to search for the hidden supply."
      },
{
        "number": 7,
        "tier": 3,
        "type": "Word Build",
        "prompt": "Which build is incorrect?",
        "choices": [
          "S + MILE = SMILE",
          "B + RUSH = BRUSH",
          "C + LOCK = CLOCK",
          "P + LANT = PLANE"
        ],
        "answer": "P + LANT = PLANE",
        "explanation": "P + LANT makes plant, not plane.",
        "editorNotes": "Early version of the picture-word build idea in text form."
      },
{
        "number": 8,
        "tier": 3,
        "type": "Vowel Count",
        "prompt": "Which choice has exactly one vowel?",
        "choices": [
          "Flint",
          "Marble",
          "Ocean",
          "Sprout"
        ],
        "answer": "Flint",
        "explanation": "Flint has one vowel: i. The other choices have more than one vowel.",
        "editorNotes": "A tidy attention-count question."
      },
{
        "number": 9,
        "tier": 3,
        "type": "Order Logic",
        "prompt": "Ivy finished before Omar. Omar finished before June. Who finished last?",
        "choices": [
          "Ivy",
          "Omar",
          "June",
          "Cannot tell"
        ],
        "answer": "June",
        "explanation": "The order is Ivy, then Omar, then June, so June finished last.",
        "editorNotes": "Straight order logic before later harder versions."
      },
{
        "number": 10,
        "tier": 4,
        "type": "Must Be True",
        "prompt": "Every ziff is a lorn. No lorns are square. What must be true?",
        "choices": [
          "No ziffs are square",
          "Some lorns are ziffs",
          "All squares are ziffs",
          "Some ziffs are square"
        ],
        "answer": "No ziffs are square",
        "explanation": "If every ziff is a lorn, and no lorns are square, then no ziffs can be square.",
        "editorNotes": "First formal-logic final."
      },
{
        "number": 11,
        "tier": 4,
        "type": "Letter Removal",
        "prompt": "Which word becomes a common word after removing its first and last letters?",
        "choices": [
          "Crown",
          "Lantern",
          "Pebble",
          "Harvest"
        ],
        "answer": "Crown",
        "explanation": "Crown without its first and last letters leaves row, which is a common word.",
        "editorNotes": "Replaces the circle-flip repeat with a compact letter-removal puzzle."
      },
{
        "number": 12,
        "tier": 4,
        "type": "Letter Move",
        "prompt": "Move the last letter to the front. Which word becomes a new common word?",
        "choices": [
          "Evil",
          "Stone",
          "Paper",
          "Cloud"
        ],
        "answer": "Evil",
        "explanation": "Moving the last letter of evil to the front makes vile.",
        "editorNotes": "Fresh Monday final instead of another ownership/creation ambiguity."
      }
    ]
  },
  {
    "id": "top-tier-week-3-day-2-draft",
    "title": "Top Tier",
    "week": 3,
    "day": 2,
    "label": "Tuesday",
    "difficulty": 2,
    "theme": "Careful Counts",
    "tagline": "12 questions. 4 tiers. 30 seconds each.",
    "catchphrase": "Can you reach the Top Tier?",
    "status": "draft",
    "finalizedAt": "",
    "editor": {
      "name": "",
      "newsOrganization": "",
      "notes": ""
    },
    "questions": [
      {
        "number": 1,
        "tier": 1,
        "type": "Odd One Out",
        "prompt": "Which option does not belong?",
        "choices": [
          "Piano",
          "Guitar",
          "Drum",
          "Easel"
        ],
        "answer": "Easel",
        "explanation": "Piano, guitar, and drum are musical instruments. An easel holds art.",
        "editorNotes": "Friendly category opener."
      },
      {
        "number": 2,
        "tier": 1,
        "type": "Shrinking Pattern",
        "prompt": "What comes next? 10, 9, 7, 4, ?",
        "choices": [
          "0",
          "1",
          "2",
          "3"
        ],
        "answer": "0",
        "explanation": "The pattern subtracts 1, then 2, then 3, so the next step subtracts 4.",
        "editorNotes": "Avoids another straight doubling pattern."
      },
      {
        "number": 3,
        "tier": 1,
        "type": "Word Meaning",
        "prompt": "Which word means to reach a conclusion from clues?",
        "choices": [
          "Deduce",
          "Decorate",
          "Delay",
          "Divide"
        ],
        "answer": "Deduce",
        "explanation": "To deduce is to figure something out from evidence or clues.",
        "editorNotes": "Useful reasoning vocabulary."
      },
      {
        "number": 4,
        "tier": 2,
        "type": "Compound Pair",
        "prompt": "Which word can follow both fire and play to make common words?",
        "choices": [
          "House",
          "Stone",
          "River",
          "Cloud"
        ],
        "answer": "House",
        "explanation": "Firehouse and playhouse are both common words.",
        "editorNotes": "Clean compound-word pair."
      },
      {
        "number": 5,
        "tier": 2,
        "type": "Flip Count",
        "prompt": "Six cards show D, U, D, D, U, U. U means face up; D means face down. Every card is flipped. How many are face down now?",
        "choices": [
          "2",
          "3",
          "4",
          "5"
        ],
        "answer": "3",
        "explanation": "After the flip, the three U cards become face down.",
        "editorNotes": "Same mechanic, but asks for face-down cards instead of face-up cards."
      },
      {
        "number": 6,
        "tier": 2,
        "type": "Color Path",
        "prompt": "What color word replaces the question mark? RED -> ORANGE -> YELLOW -> ? -> BLUE -> INDIGO -> VIOLET",
        "promptHtml": "<span class=\"color-path-question\">What color word replaces the question mark?</span><span class=\"color-path\" aria-label=\"RED to ORANGE to YELLOW to question mark to BLUE to INDIGO to VIOLET\"><span class=\"color-tile red\">RED</span><span class=\"color-arrow\">&rarr;</span><span class=\"color-tile orange\">ORANGE</span><span class=\"color-arrow\">&rarr;</span><span class=\"color-tile yellow\">YELLOW</span><span class=\"color-arrow\">&rarr;</span><span class=\"color-tile mystery\">?</span><span class=\"color-arrow\">&rarr;</span><span class=\"color-tile blue\">BLUE</span><span class=\"color-arrow\">&rarr;</span><span class=\"color-tile indigo\">INDIGO</span><span class=\"color-arrow\">&rarr;</span><span class=\"color-tile violet\">VIOLET</span></span>",
        "choices": [
          "Green",
          "Purple",
          "Black",
          "Grey"
        ],
        "answer": "Green",
        "explanation": "The path follows rainbow order: red, orange, yellow, green, blue, indigo, violet.",
        "editorNotes": "Replaces the hidden-note clue with a visual color-path pattern."
      },
      {
        "number": 7,
        "tier": 3,
        "type": "Word Build",
        "prompt": "Which build is incorrect?",
        "choices": [
          "F + LAME = FLAME",
          "C + RANE = CRANE",
          "T + RAIL = TRAIL",
          "B + OAT = BOAST"
        ],
        "answer": "B + OAT = BOAST",
        "explanation": "B + OAT makes boat, not boast.",
        "editorNotes": "Text-only version of image-plus-word assembly."
      },
      {
        "number": 8,
        "tier": 3,
        "type": "Attention Count",
        "prompt": "In the phrase \"Brave riders rarely rest,\" how many lowercase r's appear?",
        "choices": [
          "4",
          "5",
          "6",
          "7"
        ],
        "answer": "6",
        "explanation": "Brave has one r, riders has two, rarely has two, and rest has one, for six lowercase r's.",
        "editorNotes": "Avoids repeating the Tiny turtles wording from Week 2."
      },
      {
        "number": 9,
        "tier": 3,
        "type": "Probability Check",
        "prompt": "A spinner has 8 equal sections: 3 blue, 3 red, and 2 yellow. What is the chance of landing on yellow?",
        "choices": [
          "1/8",
          "1/4",
          "3/8",
          "1/2"
        ],
        "answer": "1/4",
        "explanation": "Two of the eight sections are yellow, so the chance is 2/8, which simplifies to 1/4.",
        "editorNotes": "Keeps probability but avoids the repeated one-blue-three-red tile setup."
      },
      {
        "number": 10,
        "tier": 4,
        "type": "Shape Rule",
        "prompt": "Lee always paints exactly one circle, never paints squares, and always paints exactly four triangles. Which painting could be Lee's?",
        "choices": [
          "One circle, four triangles, no squares",
          "One circle, four triangles, one square",
          "One circle, three triangles, no squares",
          "Four triangles, no circle, no squares"
        ],
        "answer": "One circle, four triangles, no squares",
        "explanation": "The correct painting has exactly one circle, exactly four triangles, and no squares.",
        "editorNotes": "Text version of a visual shape-constraint question."
      },
      {
        "number": 11,
        "tier": 4,
        "type": "Endpoint Shift",
        "prompt": "Change the first letter to the next alphabet letter and the last letter to the previous alphabet letter. Which choice becomes another common word?",
        "choices": [
          "Line",
          "Lake",
          "Card",
          "Pine"
        ],
        "answer": "Line",
        "explanation": "Line becomes mind: l moves forward to m, e moves back to d, and the middle letters stay in place.",
        "editorNotes": "Fresh letter-rule variation; only the endpoints change."
      },
      {
        "number": 12,
        "tier": 4,
        "type": "Letter Sum",
        "prompt": "If TEAM = 39 by adding letter positions, what does GAME equal?",
        "choices": [
          "24",
          "26",
          "28",
          "30"
        ],
        "answer": "26",
        "explanation": "G is 7, A is 1, M is 13, and E is 5. Together they make 26.",
        "editorNotes": "First alphabet-value final of the week."
      }
    ]
  },
  {
    "id": "top-tier-week-3-day-3-draft",
    "title": "Top Tier",
    "week": 3,
    "day": 3,
    "label": "Wednesday",
    "difficulty": 3,
    "theme": "Hidden Signals",
    "tagline": "12 questions. 4 tiers. 30 seconds each.",
    "catchphrase": "Can you reach the Top Tier?",
    "status": "draft",
    "finalizedAt": "",
    "editor": {
      "name": "",
      "newsOrganization": "",
      "notes": ""
    },
    "questions": [
      {
        "number": 1,
        "tier": 1,
        "type": "Odd One Out",
        "prompt": "Which option does not belong?",
        "choices": [
          "Penny",
          "Nickel",
          "Dime",
          "Folder"
        ],
        "answer": "Folder",
        "explanation": "Penny, nickel, and dime are coins. A folder is not a coin.",
        "editorNotes": "Fresh odd-one-out set; avoids repeating the compass-direction group."
      },
      {
        "number": 2,
        "tier": 1,
        "type": "Step Pattern",
        "prompt": "What comes next? 1, 5, 9, 13, ?",
        "choices": [
          "15",
          "16",
          "17",
          "18"
        ],
        "answer": "17",
        "explanation": "The pattern adds 4 each time.",
        "editorNotes": "Clean numeric warm-up."
      },
      {
        "number": 3,
        "tier": 1,
        "type": "Word Meaning",
        "prompt": "Which word means to make something less intense?",
        "choices": [
          "Soften",
          "Shatter",
          "Invite",
          "Repeat"
        ],
        "answer": "Soften",
        "explanation": "To soften can mean to make something gentler, weaker, or less intense.",
        "editorNotes": "Vocabulary with close emotional use."
      },
      {
        "number": 4,
        "tier": 2,
        "type": "Prefix Pair",
        "prompt": "What two letters can be placed in front of all five word pieces to make five common words? __AVE  __ICK  __USH  __EAD  __ING",
        "choices": [
          "BR",
          "CR",
          "DR",
          "TR"
        ],
        "answer": "BR",
        "explanation": "BR makes brave, brick, brush, bread, and bring.",
        "editorNotes": "Fresh two-letter prefix puzzle; only one pair completes all five words."
      },
      {
        "number": 5,
        "tier": 2,
        "type": "Comparison Logic",
        "prompt": "A shelf has more blue books than red books, and fewer blue books than green books. Which statement must be true?",
        "choices": [
          "There are more green books than blue books",
          "There are more red books than green books",
          "There are equal numbers of red and blue books",
          "There are fewer green books than red books"
        ],
        "answer": "There are more green books than blue books",
        "explanation": "Blue is fewer than green, so green must be greater than blue.",
        "editorNotes": "Moved earlier as a midweek logic check."
      },
      {
        "number": 6,
        "tier": 2,
        "type": "Double Meaning",
        "prompt": "Which word can mean both a season and a sudden jump?",
        "choices": [
          "Spring",
          "Autumn",
          "Winter",
          "Summer"
        ],
        "answer": "Spring",
        "explanation": "Spring can name a season, and it can also mean to jump suddenly.",
        "editorNotes": "Moved earlier so the final tier can carry fresher twists."
      },
      {
        "number": 7,
        "tier": 3,
        "type": "Flip Count",
        "prompt": "Eight cards show D, U, D, U, U, D, D, U. U means face up; D means face down. Every card is flipped. How many are face up now?",
        "choices": [
          "3",
          "4",
          "5",
          "6"
        ],
        "answer": "4",
        "explanation": "There were four D cards, and those become face up after the flip.",
        "editorNotes": "Kept as one of the three weekly flip questions, now in Tier 3."
      },
      {
        "number": 8,
        "tier": 3,
        "type": "Letter Sum",
        "prompt": "If CAT = 24 by adding letter positions, what does DOG equal?",
        "choices": [
          "24",
          "25",
          "26",
          "27"
        ],
        "answer": "26",
        "explanation": "D is 4, O is 15, and G is 7. The total is 26.",
        "editorNotes": "Simple alphabet math in the middle climb."
      },
      {
        "number": 9,
        "tier": 3,
        "type": "Word Equation",
        "prompt": "Which word equation is incorrect? Read the numbers by sound.",
        "choices": [
          "H + 8 - E = HAT",
          "GR + 8 = GREAT",
          "L + 8 + R = LATER",
          "B + 4 + E = BRAVE"
        ],
        "answer": "B + 4 + E = BRAVE",
        "explanation": "B + 4 + E sounds like before, not brave. The other equations work by using number sounds.",
        "editorNotes": "Adds number sounds and subtraction, so this belongs in Tier 3."
      },
      {
        "number": 10,
        "tier": 4,
        "type": "Order Logic",
        "prompt": "Cole finished before Nia. Nia finished before Theo. Theo finished before Mara. Who finished first?",
        "choices": [
          "Cole",
          "Nia",
          "Theo",
          "Mara"
        ],
        "answer": "Cole",
        "explanation": "The order given is Cole, Nia, Theo, Mara.",
        "editorNotes": "Moved up into the final tier as a quick logic setup before the attention finale."
      },
      {
        "number": 11,
        "tier": 4,
        "type": "Attention Count",
        "prompt": "In the phrase \"seven clever levels,\" how many e's appear directly next to an l?",
        "choices": [
          "2",
          "3",
          "4",
          "5"
        ],
        "answer": "3",
        "explanation": "Clever has one e next to l. Levels has two e's next to l's: the first e follows l, and the second e comes before l. That makes three.",
        "editorNotes": "Sharper attention count: players must count only e's touching l's."
      },
      {
        "number": 12,
        "tier": 4,
        "type": "Missing Letter Sentence",
        "prompt": "What one letter replaces every asterisk to complete this sentence? *uby's b*ave *ebels ca**ied *ed *ibbons ove* the *idge.",
        "choices": [
          "R",
          "L",
          "B",
          "P"
        ],
        "answer": "R",
        "explanation": "R completes the sentence: Ruby's brave rebels carried red ribbons over the ridge.",
        "editorNotes": "Final question: a sentence-wide missing-letter puzzle."
      }
    ]
  },
  {
    "id": "top-tier-week-3-day-4-draft",
    "title": "Top Tier",
    "week": 3,
    "day": 4,
    "label": "Thursday",
    "difficulty": 4,
    "theme": "Second Looks",
    "tagline": "12 questions. 4 tiers. 30 seconds each.",
    "catchphrase": "Can you reach the Top Tier?",
    "status": "draft",
    "finalizedAt": "",
    "editor": {
      "name": "",
      "newsOrganization": "",
      "notes": ""
    },
    "questions": [
      {
        "number": 1,
        "tier": 1,
        "type": "Odd One Out",
        "prompt": "Which option does not belong?",
        "choices": [
          "Cedar",
          "Willow",
          "Birch",
          "Velvet"
        ],
        "answer": "Velvet",
        "explanation": "Cedar, willow, and birch are trees. Velvet is a fabric.",
        "editorNotes": "Simple but not childish opener."
      },
      {
        "number": 2,
        "tier": 1,
        "type": "Growing Pattern",
        "prompt": "What comes next? 1, 2, 4, 7, 11, ?",
        "choices": [
          "14",
          "15",
          "16",
          "18"
        ],
        "answer": "16",
        "explanation": "The differences grow by one: +1, +2, +3, +4, then +5.",
        "editorNotes": "Ramps beyond a straight add pattern."
      },
      {
        "number": 3,
        "tier": 1,
        "type": "Word Meaning",
        "prompt": "Which word means to make something known publicly?",
        "choices": [
          "Announce",
          "Hide",
          "Borrow",
          "Fold"
        ],
        "answer": "Announce",
        "explanation": "To announce is to make something known or public.",
        "editorNotes": "Direct vocabulary slot."
      },
      {
        "number": 4,
        "tier": 2,
        "type": "Calendar Logic",
        "prompt": "Two days after tomorrow is Monday. What day is today?",
        "choices": [
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "answer": "Friday",
        "explanation": "If two days after tomorrow is Monday, then tomorrow is Saturday, so today is Friday.",
        "editorNotes": "Replaces an extra flip question with a compact calendar puzzle."
      },
      {
        "number": 5,
        "tier": 2,
        "type": "Compound Pair",
        "prompt": "Which word can follow both sun and moon to make common words?",
        "choices": [
          "Light",
          "Stone",
          "Cloud",
          "Frame"
        ],
        "answer": "Light",
        "explanation": "Sunlight and moonlight are both common words.",
        "editorNotes": "Keeps compound logic without repeating the over/under setup."
      },
      {
        "number": 6,
        "tier": 2,
        "type": "Hidden Direction",
        "prompt": "Which word hides a compass direction inside it?",
        "choices": [
          "Western",
          "Marble",
          "Planet",
          "Cloud"
        ],
        "answer": "Western",
        "explanation": "Western contains west, a compass direction.",
        "editorNotes": "Replaces another hidden-number question."
      },
      {
        "number": 7,
        "tier": 3,
        "type": "Silent Letter",
        "prompt": "Which word can gain one letter at the front and still sound the same?",
        "choices": [
          "Ring",
          "Plant",
          "Stone",
          "Light"
        ],
        "answer": "Ring",
        "explanation": "Adding w makes wring, which is pronounced like ring.",
        "editorNotes": "Replaces a plain word-build clue with a sound/spelling trap."
      },
      {
        "number": 8,
        "tier": 3,
        "type": "Vowel Set",
        "prompt": "Which word contains all five vowels exactly once?",
        "choices": [
          "Sequoia",
          "Ocean",
          "Planet",
          "Rhythm"
        ],
        "answer": "Sequoia",
        "explanation": "Sequoia contains a, e, i, o, and u exactly once each.",
        "editorNotes": "Fresh letter-attention question instead of another alphabet-order word."
      },
      {
        "number": 9,
        "tier": 3,
        "type": "Must Be True",
        "prompt": "Every blue card is round. No round cards are small. What must be true?",
        "choices": [
          "No blue cards are small",
          "All small cards are blue",
          "Some round cards are small",
          "Every card is round"
        ],
        "answer": "No blue cards are small",
        "explanation": "Blue cards are round, and round cards are not small, so blue cards cannot be small.",
        "editorNotes": "Clear formal logic."
      },
      {
        "number": 10,
        "tier": 4,
        "type": "Letter Move",
        "prompt": "Move the first letter to the end. Which word becomes another common word?",
        "choices": [
          "Heart",
          "Stone",
          "Chair",
          "Plant"
        ],
        "answer": "Heart",
        "explanation": "Moving h from the front of heart to the end makes earth.",
        "editorNotes": "Replaces a plain letter-sum slot with a compact letter-move puzzle."
      },
      {
        "number": 11,
        "tier": 4,
        "type": "Constraint Logic",
        "prompt": "Which option has exactly two vowels, starts with a consonant, and can be a noun or a verb?",
        "choices": [
          "Market",
          "Idea",
          "Silver",
          "Planet"
        ],
        "answer": "Market",
        "explanation": "Market has two vowels, starts with m, and can be both a noun and a verb.",
        "editorNotes": "Good checklist-style Top Tier question."
      },
      {
        "number": 12,
        "tier": 4,
        "type": "Sentence Trap",
        "prompt": "Which sentence changes meaning most if only the word only moves to the front?",
        "choices": [
          "Mara only invited Leo",
          "The lamp is on",
          "The snow fell quietly",
          "The clock struck noon"
        ],
        "answer": "Mara only invited Leo",
        "explanation": "Mara only invited Leo means she invited him and did nothing else, while Only Mara invited Leo means nobody else invited him.",
        "editorNotes": "Careful wording final."
      }
    ]
  },
  {
    "id": "top-tier-week-3-day-5-draft",
    "title": "Top Tier",
    "week": 3,
    "day": 5,
    "label": "Friday",
    "difficulty": 5,
    "theme": "Sharper Turns",
    "tagline": "12 questions. 4 tiers. 30 seconds each.",
    "catchphrase": "Can you reach the Top Tier?",
    "status": "draft",
    "finalizedAt": "",
    "editor": {
      "name": "",
      "newsOrganization": "",
      "notes": ""
    },
    "questions": [
      {
        "number": 1,
        "tier": 1,
        "type": "Odd One Out",
        "prompt": "Which option does not belong?",
        "choices": [
          "Circle",
          "Square",
          "Triangle",
          "Friday"
        ],
        "answer": "Friday",
        "explanation": "Circle, square, and triangle are shapes. Friday is a day.",
        "editorNotes": "Quick Friday opener."
      },
      {
        "number": 2,
        "tier": 1,
        "type": "Growing Pattern",
        "prompt": "What comes next? 5, 6, 8, 11, 15, ?",
        "choices": [
          "19",
          "20",
          "21",
          "22"
        ],
        "answer": "20",
        "explanation": "The differences are +1, +2, +3, +4, so the next difference is +5.",
        "editorNotes": "Same family, but avoids the exact Week 1 sequence."
      },
      {
        "number": 3,
        "tier": 1,
        "type": "Word Meaning",
        "prompt": "Which word means refusing to bend or change?",
        "choices": [
          "Rigid",
          "Flexible",
          "Gentle",
          "Brief"
        ],
        "answer": "Rigid",
        "explanation": "Rigid can mean stiff or unwilling to change.",
        "editorNotes": "Accessible vocabulary with conceptual meaning."
      },
      {
        "number": 4,
        "tier": 2,
        "type": "One-Letter Change",
        "prompt": "Change one letter in COLD to make a word meaning courageous. Which word works?",
        "choices": [
          "Bold",
          "Gold",
          "Fold",
          "Told"
        ],
        "answer": "Bold",
        "explanation": "Changing c to b turns cold into bold, which can mean courageous.",
        "editorNotes": "Replaces an extra flip question with a word-change clue."
      },
      {
        "number": 5,
        "tier": 2,
        "type": "Hidden Object",
        "prompt": "Which word has a writing utensil inside of it?",
        "choices": [
          "Carpenter",
          "Lantern",
          "Harvest",
          "Pebble"
        ],
        "answer": "Carpenter",
        "explanation": "Carpenter contains pen in consecutive letters: car-PEN-ter.",
        "editorNotes": "Fresh hidden-object question with a broader clue so players have to search for the utensil."
      },
      {
        "number": 6,
        "tier": 2,
        "type": "Compound Pair",
        "prompt": "Which word can follow both black and white to make common words?",
        "choices": [
          "Board",
          "Stone",
          "River",
          "Tower"
        ],
        "answer": "Board",
        "explanation": "Blackboard and whiteboard are both common words.",
        "editorNotes": "Clean compound pair."
      },
      {
        "number": 7,
        "tier": 3,
        "type": "Letter Shift",
        "prompt": "If MOTH becomes NPUI, what does RAIN become?",
        "choices": [
          "SBJO",
          "QZHM",
          "SCHO",
          "RBJO"
        ],
        "answer": "SBJO",
        "explanation": "Each letter moves forward one place: R-A-I-N becomes S-B-J-O.",
        "editorNotes": "Friday code-shift question."
      },
      {
        "number": 8,
        "tier": 3,
        "type": "Doubled Letters",
        "prompt": "How many doubled-letter pairs are in bookkeeper?",
        "choices": [
          "2",
          "3",
          "4",
          "5"
        ],
        "answer": "3",
        "explanation": "Bookkeeper has oo, kk, and ee: three doubled-letter pairs.",
        "editorNotes": "Nice word-attention count."
      },
      {
        "number": 9,
        "tier": 3,
        "type": "Order Logic",
        "prompt": "Rae is taller than Finn. Finn is taller than Sol. Bea is shorter than Sol. Who is tallest?",
        "choices": [
          "Rae",
          "Finn",
          "Sol",
          "Bea"
        ],
        "answer": "Rae",
        "explanation": "The order is Rae, Finn, Sol, Bea from tallest to shortest.",
        "editorNotes": "Multi-step comparison."
      },
      {
        "number": 10,
        "tier": 4,
        "type": "Probability Trap",
        "prompt": "A fair coin is flipped twice. Which exact outcome is most likely?",
        "choices": [
          "HH",
          "HT",
          "TH",
          "All equally likely"
        ],
        "answer": "All equally likely",
        "explanation": "HH, HT, TH, and TT are each equally likely exact outcomes. None of the listed exact outcomes is more likely than another.",
        "editorNotes": "Fresh probability trap instead of another colored-tile draw."
      },
      {
        "number": 11,
        "tier": 4,
        "type": "Initial Pattern",
        "prompt": "Maya's dream dinner party would include Olivia Parker, Quinn Reed, and Stella Thomas. What is Maya's surname?",
        "choices": [
          "Noble",
          "Parker",
          "River",
          "Stone"
        ],
        "answer": "Noble",
        "explanation": "The guests' initials form consecutive letter pairs: O-P, Q-R, and S-T. Maya needs M-N, so her surname must begin with N.",
        "editorNotes": "Inspired by a dinner-party initials pattern, but rebuilt with original names."
      },
      {
        "number": 12,
        "tier": 4,
        "type": "Sound Rebus",
        "prompt": "Say the visual clue aloud. What word is represented?",
        "promptHtml": "<span class=\"rebus-question\">Say the visual clue aloud. What word is represented?</span><span class=\"rebus-clue\" aria-label=\"S plus crib plus L\"><span class=\"rebus-letter\">S</span><span class=\"rebus-plus\">+</span><span class=\"rebus-crib\" aria-hidden=\"true\"><span></span><span></span><span></span><span></span><span></span></span><span class=\"rebus-plus\">+</span><span class=\"rebus-letter\">L</span></span>",
        "choices": [
          "Scribble",
          "Scrabble",
          "Scramble",
          "Symbol"
        ],
        "answer": "Scribble",
        "explanation": "S + crib + L sounds like scribble when the pieces are said together.",
        "editorNotes": "Original visual sound-rebus; uses a crib clue instead of copying the board-game example."
      }
    ]
  },
  {
    "id": "top-tier-week-3-day-6-draft",
    "title": "Top Tier",
    "week": 3,
    "day": 6,
    "label": "Saturday",
    "difficulty": 6,
    "theme": "Weekend Pressure",
    "tagline": "12 questions. 4 tiers. 30 seconds each.",
    "catchphrase": "Can you reach the Top Tier?",
    "status": "draft",
    "finalizedAt": "",
    "editor": {
      "name": "",
      "newsOrganization": "",
      "notes": ""
    },
    "questions": [
      {
        "number": 1,
        "tier": 1,
        "type": "Odd One Out",
        "prompt": "Which option does not belong?",
        "choices": [
          "Inhale",
          "Exhale",
          "Breathe",
          "Lantern"
        ],
        "answer": "Lantern",
        "explanation": "Inhale, exhale, and breathe are actions related to breathing. Lantern is an object.",
        "editorNotes": "Fast weekend opener."
      },
      {
        "number": 2,
        "tier": 1,
        "type": "Growing Pattern",
        "prompt": "What comes next? 2, 4, 7, 11, 16, ?",
        "choices": [
          "20",
          "21",
          "22",
          "23"
        ],
        "answer": "22",
        "explanation": "The differences are +2, +3, +4, +5, so the next difference is +6.",
        "editorNotes": "Avoids repeating the exact 2, 3, 5, 8, 12 pattern."
      },
      {
        "number": 3,
        "tier": 1,
        "type": "Word Meaning",
        "prompt": "Which word means to wear away gradually?",
        "choices": [
          "Erode",
          "Ignite",
          "Gather",
          "Polish"
        ],
        "answer": "Erode",
        "explanation": "To erode is to wear away gradually, often through time or pressure.",
        "editorNotes": "Good weekend vocabulary."
      },
      {
        "number": 4,
        "tier": 2,
        "type": "Direction Turn",
        "prompt": "You are facing west. You turn right, turn around, then turn left. Which direction are you facing?",
        "choices": [
          "North",
          "East",
          "South",
          "West"
        ],
        "answer": "East",
        "explanation": "Facing west, a right turn points north. Turning around points south. A left turn from south points east.",
        "editorNotes": "Replaces an extra flip question with spatial direction logic."
      },
      {
        "number": 5,
        "tier": 2,
        "type": "Word Build",
        "prompt": "Which build is incorrect?",
        "choices": [
          "C + LUE = CLUE",
          "B + LEND = BLEND",
          "G + RAIN = GRAIN",
          "S + PEAK = SPECK"
        ],
        "answer": "S + PEAK = SPECK",
        "explanation": "S + PEAK makes speak, not speck.",
        "editorNotes": "Sound-alike visual trap."
      },
      {
        "number": 6,
        "tier": 2,
        "type": "Suffix Pair",
        "prompt": "What two letters can follow all four pieces to make common words? HI__  BE__  WA__  STI__",
        "choices": [
          "LL",
          "CK",
          "ND",
          "SH"
        ],
        "answer": "LL",
        "explanation": "LL makes hill, bell, wall, and still.",
        "editorNotes": "Replaces an obvious hidden-place clue with a suffix pattern."
      },
      {
        "number": 7,
        "tier": 3,
        "type": "Letter Sum",
        "prompt": "If EAST = 45 by adding letter positions, what does WEST equal?",
        "choices": [
          "61",
          "65",
          "67",
          "70"
        ],
        "answer": "67",
        "explanation": "W is 23, E is 5, S is 19, and T is 20. The total is 67.",
        "editorNotes": "Letter-value climb."
      },
      {
        "number": 8,
        "tier": 3,
        "type": "Attention Count",
        "prompt": "In the phrase \"Start strong, stay steady,\" how many lowercase s's appear?",
        "choices": [
          "2",
          "3",
          "4",
          "5"
        ],
        "answer": "3",
        "explanation": "The capital S in Start does not count. Strong, stay, and steady each add one lowercase s.",
        "editorNotes": "Capitalization trap."
      },
      {
        "number": 9,
        "tier": 3,
        "type": "Logic Chain",
        "prompt": "Some lums are nays. All nays are veks. What must be true?",
        "choices": [
          "Some lums are veks",
          "All veks are lums",
          "No lums are veks",
          "All lums are nays"
        ],
        "answer": "Some lums are veks",
        "explanation": "The lums that are nays must also be veks because all nays are veks.",
        "editorNotes": "Harder formal logic."
      },
      {
        "number": 10,
        "tier": 4,
        "type": "Code Constraint",
        "prompt": "Which code has a Roman numeral, an odd digit, and a compass direction?",
        "choices": [
          "IV-7-East",
          "AB-8-West",
          "VX-4-Table",
          "MO-2-North"
        ],
        "answer": "IV-7-East",
        "explanation": "IV is a Roman numeral, 7 is odd, and East is a compass direction.",
        "editorNotes": "Checklist logic with traps."
      },
      {
        "number": 11,
        "tier": 4,
        "type": "Shape Rule",
        "prompt": "A logo must contain exactly one circle, exactly two triangles, and no squares. Which option could be the logo?",
        "choices": [
          "1 circle, 2 triangles, 0 squares",
          "1 circle, 2 triangles, 1 square",
          "2 circles, 2 triangles, 0 squares",
          "1 circle, 1 triangle, 0 squares"
        ],
        "answer": "1 circle, 2 triangles, 0 squares",
        "explanation": "Only that option has exactly one circle, exactly two triangles, and no squares.",
        "editorNotes": "Replaces a repeated letter-sum top-tier slot with a shape-constraint check."
      },
      {
        "number": 12,
        "tier": 4,
        "type": "Hidden Letters",
        "prompt": "Read the capital letter hidden inside each word: sCale fLight brIght caMera taBle. What word appears?",
        "choices": [
          "CLIMB",
          "CLAIM",
          "BLIMP",
          "LIMBO"
        ],
        "answer": "CLIMB",
        "explanation": "The hidden capital letters are C, L, I, M, and B.",
        "editorNotes": "Visual extraction final with a Top Tier phrase."
      }
    ]
  },
  {
    "id": "top-tier-week-3-day-7-draft",
    "title": "Top Tier",
    "week": 3,
    "day": 7,
    "label": "Sunday",
    "difficulty": 7,
    "theme": "Top Tier Tricks",
    "tagline": "12 questions. 4 tiers. 30 seconds each.",
    "catchphrase": "Can you reach the Top Tier?",
    "status": "draft",
    "finalizedAt": "",
    "editor": {
      "name": "",
      "newsOrganization": "",
      "notes": ""
    },
    "questions": [
      {
        "number": 1,
        "tier": 1,
        "type": "Odd One Out",
        "prompt": "Which option does not belong?",
        "choices": [
          "Comet",
          "Asteroid",
          "Meteor",
          "Compass"
        ],
        "answer": "Compass",
        "explanation": "Comets, asteroids, and meteors are objects associated with space. A compass is a navigation tool.",
        "editorNotes": "Fresh Sunday opener before the harder climb."
      },
      {
        "number": 2,
        "tier": 1,
        "type": "Pattern Jump",
        "prompt": "What comes next? 1, 4, 10, 19, 31, ?",
        "choices": [
          "43",
          "45",
          "46",
          "49"
        ],
        "answer": "46",
        "explanation": "The differences are +3, +6, +9, +12, so the next difference is +15.",
        "editorNotes": "Harder difference pattern."
      },
      {
        "number": 3,
        "tier": 1,
        "type": "Word Meaning",
        "prompt": "Which word means to hint indirectly?",
        "choices": [
          "Allude",
          "Elude",
          "Exude",
          "Include"
        ],
        "answer": "Allude",
        "explanation": "To allude is to refer to something indirectly.",
        "editorNotes": "Good Sunday vocabulary; allude/elude trap."
      },
      {
        "number": 4,
        "tier": 2,
        "type": "Number Rule",
        "prompt": "Use this rule: first number plus last number, then subtract the middle number. If 4-3-8 becomes 9, what does 6-5-7 become?",
        "choices": [
          "6",
          "8",
          "10",
          "12"
        ],
        "answer": "8",
        "explanation": "Use the rule on 6-5-7: 6 plus 7 is 13, and 13 minus 5 is 8.",
        "editorNotes": "Replaces an extra flip question with a short number-rule puzzle."
      },
      {
        "number": 5,
        "tier": 2,
        "type": "Hidden Body Part",
        "prompt": "Which word hides a body part inside it?",
        "choices": [
          "Clearly",
          "Puzzle",
          "Mountain",
          "Bright"
        ],
        "answer": "Clearly",
        "explanation": "Clearly contains ear in consecutive letters: cl-EAR-ly.",
        "editorNotes": "Avoids repeating Search as the hidden-ear answer."
      },
      {
        "number": 6,
        "tier": 2,
        "type": "Word Build",
        "prompt": "Which build is incorrect?",
        "choices": [
          "C + OUNT = COUNT",
          "F + LOUR = FLOUR",
          "S + CENT = SCENT",
          "B + RIGHT = BRIDGE"
        ],
        "answer": "B + RIGHT = BRIDGE",
        "explanation": "B + RIGHT makes bright, not bridge.",
        "editorNotes": "Good high-pressure word-build trap."
      },
      {
        "number": 7,
        "tier": 3,
        "type": "Letter Sum",
        "prompt": "If LOGIC = 46 by adding letter positions, what does BRAIN equal?",
        "choices": [
          "40",
          "42",
          "44",
          "46"
        ],
        "answer": "44",
        "explanation": "B is 2, R is 18, A is 1, I is 9, and N is 14. The total is 44.",
        "editorNotes": "Longer alphabet-value calculation."
      },
      {
        "number": 8,
        "tier": 3,
        "type": "Must Be True",
        "prompt": "All raths are meens. No meens are dols. Some nids are raths. What must be true?",
        "choices": [
          "Some nids are not dols",
          "All nids are dols",
          "No raths are meens",
          "Some dols are raths"
        ],
        "answer": "Some nids are not dols",
        "explanation": "Some nids are raths, all raths are meens, and no meens are dols. So those nids are not dols.",
        "editorNotes": "Strong multi-step logic."
      },
      {
        "number": 9,
        "tier": 3,
        "type": "Attention Count",
        "prompt": "In the phrase \"calm columns collect clues,\" how many c's are immediately followed by o?",
        "choices": [
          "1",
          "2",
          "3",
          "4"
        ],
        "answer": "2",
        "explanation": "Columns and collect each start with co. Calm starts with ca, and clues starts with cl.",
        "editorNotes": "Replaces an easy hidden-direction clue with a tighter attention count."
      },
      {
        "number": 10,
        "tier": 4,
        "type": "Extraction",
        "prompt": "Read the letters after each dash: A-M, B-I, C-N, D-D. What word appears?",
        "choices": [
          "MIND",
          "MINE",
          "DIME",
          "NINE"
        ],
        "answer": "MIND",
        "explanation": "The letters after the dashes are M, I, N, and D.",
        "editorNotes": "Fresh extraction answer instead of another TIER clue."
      },
      {
        "number": 11,
        "tier": 4,
        "type": "Constraint Logic",
        "prompt": "Which option has exactly two vowels, starts and ends with consonants, and can be a verb?",
        "choices": [
          "Render",
          "Idea",
          "Orange",
          "Almost"
        ],
        "answer": "Render",
        "explanation": "Render has two vowels, starts with r, ends with r, and can be a verb.",
        "editorNotes": "Removes the hidden-number overlap from the constraint question."
      },
      {
        "number": 12,
        "tier": 4,
        "type": "Number Insight",
        "prompt": "Seven consecutive odd numbers starting with 5 add up to 77. What do the seven even numbers immediately after them add up to?",
        "choices": [
          "77",
          "82",
          "84",
          "91"
        ],
        "answer": "84",
        "explanation": "Each matching even number is 1 higher than its odd number, and there are seven numbers. Add 7 to 77 to get 84.",
        "editorNotes": "Uses the odd/even sum insight, but with shifted numbers so it is less recognizable."
      }
    ]
  }
];

const TOP_TIER_DRAFT_GAME = TOP_TIER_WEEK_DRAFTS[0];
