const weeks = [
  ["2026-08-10", "Aug 10-14", "Week 1", "Job 1-3; 12-14; 19; 21-24; 38-40; 42", ["Lesson 162 - Seeking Personal Revelation for My Questions", "Lesson 97 - Job 1-3; 12-13", "Lesson 98 - Job 14, 19", "Lesson 174 - Taking Charge of Technology"]],
  ["2026-08-17", "Aug 17-21", "Week 2", "Psalms 1-2; 8; 19-33; 40; 46", ["Lesson 100/101 - Introduction to Psalms, Parts 1 and 2", "Lesson 102 - Psalm 23", "Lesson 103 - Psalm 24", "Lesson 182 - Caring for Our Physical Body"]],
  ["2026-08-24", "Aug 24-28", "Week 3", "Psalms 49-51; 61-66; 69-72; 77-78; 85-86", ["Lesson 104 - Psalm 51", "Lesson 105 - Psalms 61-86", "Lesson 106 - Doctrinal Mastery Practice 7", "Lesson 192 - Involving the Lord in Your Learning"]],
  ["2026-08-31", "Aug 31-Sept 4", "Week 4", "Psalms 102-3; 110; 116-19; 127-28; 135-39; 146-50", ["Lessons 177/178 - Building Self-Reliance in the Lord's Way", "Lesson 107 - Psalm 119", "Lesson 108 - Psalm 136", "Lesson 179 - Managing Financial Resources Wisely"]],
  ["2026-09-07", "Sept 7-11", "Week 5", "Proverbs 1-4; 15-16; 22; 31; Ecclesiastes 1-3; 11-12", ["No school - Labor Day (Sept 7)", "Lessons 109/110 - Introduction to Proverbs and Proverbs 3", "Lesson 111 - Ecclesiastes", "Lesson 112 - Assess Your Learning 7", "Lesson 180 - Providing for Ourselves and Caring for Those in Need"]],
  ["2026-09-14", "Sept 14-18", "Week 6", "Isaiah 1-12", ["Lesson 113 - Introduction to Isaiah", "Lessons 114/115 - Isaiah 1 and Isaiah 5", "Lesson 193 - Taking Responsibility for Your Learning", "Lesson 116 - Isaiah 11-12"]],
  ["2026-09-21", "Sept 21-25", "Week 7", "Isaiah 13-14; 22; 24-30; 35", ["No school - CCSD Staff Development Day (Sept 21)", "Lesson 117 - Isaiah 25", "Lesson 118 - Isaiah 29", "Lesson 196 - Our Covenant Responsibility to Share the Gospel", "Lesson 166 - Focusing on the Savior While Studying the Scriptures"]],
  ["2026-09-28", "Sept 28-Oct 2", "Week 8", "Isaiah 40-49", ["Lesson 119 - Isaiah 40-43", "Lessons 120/121 - Isaiah 44-47 and Isaiah 49", "Lesson 122 - Doctrinal Mastery Practice 8", "Lesson 205 - Preparing for General Conference"]],
  ["2026-10-05", "Oct 5-9", "Week 9", "Isaiah 50-57", ["Lesson 123 - Isaiah 51-52", "Lesson 194 - Organizing Tasks and Priorities", "Lesson 124 - Isaiah 53", "Lesson 125 - Isaiah 54"]],
  ["2026-10-12", "Oct 12-16", "Week 10", "Isaiah 58-66", ["Lesson 172 - Setting Goals", "Lessons 126/127 - Isaiah 58:1-12 and Isaiah 58:13-14", "Lesson 128 - Isaiah 61", "Lesson 129 - Isaiah 60-66"]],
  ["2026-10-19", "Oct 19-23", "Week 11", "Jeremiah 1-3; 7; 16-18; 20", ["Lesson 197 - Sharing the Gospel in Natural Ways", "Lessons 130/131 - Jeremiah 1 and Jeremiah 2-3", "Lesson 132 - Jeremiah 16", "Lesson 133 - Assess Your Learning 8"]],
  ["2026-10-26", "Oct 26-30", "Week 12", "Jeremiah 31-33; 36-38; Lamentations 1; 3", ["Lesson 137 - Doctrinal Mastery Practice 9", "Lessons 134/135 - Jeremiah 31 and Jeremiah 36", "Lesson 136 - Lamentations 1, 3", "No school - Nevada Day (Oct 30)"]],
  ["2026-11-02", "Nov 2-6", "Week 13", "Ezekiel 1-3; 33-34; 36-37; 47", ["Lesson 138 - Ezekiel 1-3; 33", "No school - Election Day (Nov 3)", "Lessons 140/141 - Ezekiel 37 and Ezekiel 47", "Lesson 204 - Participating in Temple and Family History Work"]],
  ["2026-11-09", "Nov 9-13", "Week 14", "Daniel 1-7", ["Lessons 142/143 - Daniel 1 and Daniel 2", "Lesson 144 - Daniel 3", "No school - Veterans Day (Nov 11)", "Lesson 200 - The Importance of Obedience in Bringing Others to Christ"]],
  ["2026-11-16", "Nov 16-20", "Week 15", "Hosea 1-6; 10-14; Joel", ["Lesson 146 - Hosea", "Lesson 147 - Joel", "Lesson 148 - Assess Your Learning 9", "Lesson 165 - Turning to Divinely Appointed Sources to Help Find Answers"]],
  ["2026-11-23", "Nov 23-27", "Week 16", "Amos; Obadiah; Jonah", ["Lesson 149 - Amos 3; 7", "Lesson 151 - Jonah", "No school - Thanksgiving Break (Nov 25-27)"]],
  ["2026-11-30", "Nov 30-Dec 4", "Week 17", "Micah; Nahum; Habakkuk; Zephaniah", ["Lesson 152 - Micah", "Lesson 191 - Finding a Mentor", "Lesson 153 - Habakkuk", "Lesson 154 - Doctrinal Mastery Practice 10"]],
  ["2026-12-07", "Dec 7-11", "Week 18", "Haggai 1-2; Zechariah 1-4; 7-14", ["Lesson 195 - Overcoming Procrastination", "Lesson 160 - Assess Your Learning 10", "Lesson 155 - Haggai", "Lessons 156/157 - Zechariah 1-8 and Zechariah 7-14"]],
  ["2026-12-14", "Dec 14-18", "Week 19", "Malachi", ["Lessons 158/159 - Malachi 3 and Malachi 4", "Lesson 187 - Developing Healthy Habits", "Finals"]],
].map(([start, dateRange, label, reading, lessons]) => ({ start, dateRange, label, reading, lessons }));

const announcements = [
  { date: "Sept 7", title: "Labor Day", details: "CCSD has no school." },
  { date: "Sept 21", title: "Staff Development Day", details: "CCSD has no school." },
  { date: "Oct 15", title: "Morningside", details: "Special seminary gathering." },
  { date: "Oct 26", title: "Doctrinal Mastery Village", details: "Special seminary day." },
  { date: "Oct 30", title: "Nevada Day", details: "CCSD has no school." },
  { date: "Nov 3", title: "Election Day", details: "CCSD has no school." },
  { date: "Nov 11", title: "Veterans Day", details: "CCSD has no school." },
  { date: "Nov 25-27", title: "Thanksgiving Break", details: "CCSD has no school." },
  { date: "Dec 10", title: "Seminary Breakfast", details: "Come hungry" },
];

const studentManualBase = "https://www.churchofjesuschrist.org/study/manual/old-testament-seminary-student-manual-2026/";
const lessonPages = {
  61:"20-joshua-1-24/201-joshua-1",62:"20-joshua-1-24/202-joshua-2-4",63:"20-joshua-1-24/203-joshua-23-24",67:"21-judges-2-4-judges-6-8/207-assess-your-learning-4",
  97:"32-job/321-job-1-13",98:"32-job/322-job-14-19",100:"33-psalms-1-46/331-intro-to-pslams-1",101:"33-psalms-1-46/332-intro-to-pslams-2",102:"33-psalms-1-46/333-psalm-23",103:"33-psalms-1-46/334-psalm-24",
  104:"34-psalms-49-86/341-psalm-51",105:"34-psalms-49-86/342-psalm-61-86",106:"34-psalms-49-86/343-doctrinal-mastery-practice-7",107:"35-psalms-102-150/351-psalm-119",108:"35-psalms-102-150/352-psalm-136",
  109:"36-proverbs-ecclesiastes/361-intro-proverbs",110:"36-proverbs-ecclesiastes/362-proverbs-3",111:"36-proverbs-ecclesiastes/363-ecclesiastes",112:"36-proverbs-ecclesiastes/364-assess-your-learning-7",
  113:"37-isaiah-1-12/371-intro-to-isaiah",114:"37-isaiah-1-12/372-isaiah-1",115:"37-isaiah-1-12/373-isaiah-5",116:"37-isaiah-1-12/374-isaiah-11-12",117:"38-isaiah-13-35/381-isaiah-25",118:"38-isaiah-13-35/382-isaiah-29",
  119:"39-isaiah-40-49/391-isaiah-40-43",120:"39-isaiah-40-49/392-isaiah-44-47",121:"39-isaiah-40-49/393-isaiah-49",122:"39-isaiah-40-49/394-doctrinal-mastery-practice-8",123:"40-isaiah-50-57/401-isaiah-51-52",124:"40-isaiah-50-57/402-isaiah-53",125:"40-isaiah-50-57/403-isaiah-54",
  126:"41-isaiah-58-66/411-isaiah-58-1-12",127:"41-isaiah-58-66/412-isaiah-58-13-14",128:"41-isaiah-58-66/413-isaiah-61",129:"41-isaiah-58-66/414-isaiah-60-66",
  130:"42-jeremiah-1-20/421-jeremiah-1",131:"42-jeremiah-1-20/422-jeremiah-2-3",132:"42-jeremiah-1-20/423-jeremiah-16",133:"42-jeremiah-1-20/424-assess-your-learning-8",134:"43-jeremiah-lamentations/431-jeremiah-31",135:"43-jeremiah-lamentations/432-jeremiah-36",136:"43-jeremiah-lamentations/433-lamentations",137:"43-jeremiah-lamentations/434-doctrinal-mastery-practice-9",
  138:"44-ezekiel/441-ezekiel-1-3-33",140:"44-ezekiel/443-ezekiel-37",141:"44-ezekiel/444-ezekiel-47",142:"45-daniel/451-daniel-1",143:"45-daniel/452-daniel-2",144:"45-daniel/453-daniel-3",
  146:"46-hosea-joel/461-hosea",147:"46-hosea-joel/462-joel",148:"46-hosea-joel/463-assess-your-learning-9",149:"47-amos-jonah/471-amos-3-7",151:"47-amos-jonah/473-jonah",152:"48-micah-zephaniah/481-micah",153:"48-micah-zephaniah/482-habakkuk",154:"48-micah-zephaniah/483-doctrinal-mastery-practice-10",
  155:"49-haggai-zechariah/491-haggai",156:"49-haggai-zechariah/492-zechariah-1-8",157:"49-haggai-zechariah/493-zechariah-10-14",158:"50-malachi/501-malachi-3",159:"50-malachi/502-malachi-4",160:"50-malachi/503-assess-your-learning-10",
  162:"61-doctrinal-mastery/612-seeking-personal-revelation",165:"61-doctrinal-mastery/615-turning-to-divinely-appointed-sources",166:"62-scripture-study-skills/621-focusing-on-the-savior",172:"63-for-the-strength-of-youth/632-setting-goals",174:"63-for-the-strength-of-youth/634-taking-charge-of-technology",176:"63-for-the-strength-of-youth/636-accepting-and-fulfilling-callings",
  177:"64-building-self-reliance/641-building-self-reliance-in-the-lords-way",178:"64-building-self-reliance/642-exercising-faith",179:"64-building-self-reliance/643-managing-financial-resources-wisely",180:"64-building-self-reliance/644-providing-for-ourselves",182:"65-physical-and-emotional-health/652-caring-for-our-physical-body",187:"65-physical-and-emotional-health/657-developing-healthy-habits",
  191:"66-future-education-and-employment/664-finding-a-mentor",192:"67-succeed-in-school/671-involving-the-lord",193:"67-succeed-in-school/672-taking-responsibility-for-your-learning",194:"67-succeed-in-school/673-organizing-tasks-and-priorities",195:"67-succeed-in-school/674-overcoming-procrastination",196:"68-missionary-preparation/681-covenant-responsibility-to-share-the-gospel",197:"68-missionary-preparation/682-sharing-the-gospel-in-natural-ways",200:"68-missionary-preparation/685-importance-of-obedience",204:"69-temple-preparation/694-participating-in-temple-and-family-history",205:"70-teachings-of-church-leaders/701-preparing-for-general-conference"
};

function lessonUrl(number) { return lessonPages[number] ? `${studentManualBase}${lessonPages[number]}?lang=eng` : studentManualBase + "?lang=eng"; }
function lessonNumbers(text) { const match = text.match(/Lessons?\s+(\d+(?:\s*[\/&]\s*\d+)*)/i); return match ? match[1].split(/[\/&]/).map(Number) : []; }
function lessonLinkMarkup(text) {
  const numbers = lessonNumbers(text);
  if (!numbers.length) return text;
  const prefix = text.match(/Lessons?\s+\d+(?:\s*[\/&]\s*\d+)*/i)[0];
  const links = numbers.map((number) => `<a class="lesson-link" href="${lessonUrl(number)}" target="_blank" rel="noreferrer">Lesson ${number}</a>`).join(" / ");
  return text.replace(prefix, links);
}

const schoolClosures = new Set(["2026-09-07", "2026-09-21", "2026-10-30", "2026-11-03", "2026-11-11", "2026-11-25", "2026-11-26", "2026-11-27"]);
const lessonArtwork = {
  97: "https://www.churchofjesuschrist.org/imgs/https%3A%2F%2Fwww.churchofjesuschrist.org%2Fimgs%2F5936c5b8f60704e11b4e947832235c9eff5f2af9%2Ffull%2F%2521768%252C%2F0%2Fdefault/full/%211200%2C/0/default",
  98: "https://www.churchofjesuschrist.org/imgs/2ab3bf51e0a611ee8041eeeeac1e961b50c1c8c2/full/%211200%2C/0/default",
  162: "https://www.churchofjesuschrist.org/imgs/qs862vf2k8bd9veuvm1iqeqsyfs2y7sm8bptzv39/full/%211200%2C/0/default",
  174: "https://www.churchofjesuschrist.org/imgs/perli565ax8uvxk1rzk4wcq38t8odd73fbq8l8yg/full/%211200%2C/0/default",
};

function addDays(isoDate, amount) {
  const date = new Date(`${isoDate}T12:00:00Z`);
  date.setUTCDate(date.getUTCDate() + amount);
  return date.toISOString().slice(0, 10);
}

function isTeachingDay(isoDate) {
  const day = new Date(`${isoDate}T12:00:00Z`).getUTCDay();
  return day >= 1 && day <= 5 && !schoolClosures.has(isoDate);
}

function buildLessonSchedule() {
  const schedule = [];
  weeks.forEach((week) => {
    let date = week.start;
    week.lessons.filter((lesson) => !lesson.startsWith("No school") && lesson !== "Finals").forEach((lesson) => {
      while (!isTeachingDay(date)) date = addDays(date, 1);
      schedule.push({ date, week, lesson, number: lessonNumbers(lesson)[0] });
      date = addDays(date, 1);
    });
  });
  return schedule;
}

function pacificNow() {
  const parts = new Intl.DateTimeFormat("en-US", { timeZone:"America/Los_Angeles", year:"numeric", month:"2-digit", day:"2-digit", hour:"2-digit", hourCycle:"h23" }).formatToParts(new Date());
  const value = (type) => parts.find((part) => part.type === type).value;
  return { date:`${value("year")}-${value("month")}-${value("day")}`, hour:Number(value("hour")) };
}

const lessonSchedule = buildLessonSchedule();
const weekTitle = document.getElementById("weekTitle");
const calendarPanel = document.getElementById("calendarPanel");
const calendarToggle = document.getElementById("calendarToggle");
const readingListPanel = document.getElementById("readingListPanel");
const readingListToggle = document.getElementById("readingListToggle");
const doctrinalMasteryPanel = document.getElementById("doctrinalMasteryPanel");
const doctrinalMasteryToggle = document.getElementById("doctrinalMasteryToggle");
const teachersPanel = document.getElementById("teachersPanel");
const teachersToggle = document.getElementById("teachersToggle");

function updateNextLesson() {
  const now = pacificNow();
  const nextLesson = lessonSchedule.find((entry) => entry.date > now.date || (entry.date === now.date && now.hour < 8)) || lessonSchedule[lessonSchedule.length - 1];
  document.getElementById("weekLabel").textContent = "Next Lesson";
  weekTitle.innerHTML = `<a href="${lessonUrl(nextLesson.number)}" target="_blank" rel="noreferrer">${nextLesson.lesson}</a>`;
  document.getElementById("weekReading").textContent = nextLesson.week.reading;
  document.getElementById("weekDate").textContent = `${nextLesson.week.label} · ${nextLesson.week.dateRange}`;
  document.documentElement.style.setProperty("--lesson-artwork", `url("${lessonArtwork[nextLesson.number] || "assets/images/jesus-christ.jpeg"}")`);
}

updateNextLesson();
setInterval(updateNextLesson, 30000);

document.getElementById("announcementsGrid").innerHTML = announcements.map((item) => `<article class="announcement-card"><p class="announcement-card__date">${item.date}</p><h3>${item.title}</h3><p>${item.details}</p></article>`).join("");
document.getElementById("calendarGrid").innerHTML = weeks.map((week) => `<article class="calendar-card"><p class="calendar-card__week">${week.label} · ${week.dateRange}</p><h3>${week.reading}</h3><ul>${week.lessons.map((lesson) => lesson.startsWith("No school") ? `<li class="no-school">${lesson}</li>` : `<li>${lessonLinkMarkup(lesson)}</li>`).join("")}</ul></article>`).join("");
function makeupDate(isoDate) {
  const [, month, day] = isoDate.split("-");
  return `${month}/${day}`;
}

const makeupLessons = lessonSchedule.flatMap(({ date, lesson }) => {
    const description = lesson.replace(/^Lessons?\s+\d+(?:\s*[\/&]\s*\d+)*\s*-\s*/i, "");
    return lessonNumbers(lesson).map((number) => ({ date:makeupDate(date), number, description }));
  });
document.getElementById("lessonSelect").innerHTML = `<option value="">Select a lesson</option>${makeupLessons.map(({ date, number, description }) => `<option value="${date} — Lesson ${number} - ${description}">${date} — Lesson ${number} - ${description}</option>`).join("")}`;

const doctrinalMasteryCourses = [
  ["Old Testament", [
    ["Moses 1:39", "pgp/moses/1", "p39"], ["Moses 7:18", "pgp/moses/7", "p18"], ["Abraham 2:9–11", "pgp/abr/2", "p9"], ["Abraham 3:22–23", "pgp/abr/3", "p22"],
    ["Genesis 1:26–27", "ot/gen/1", "p26"], ["Genesis 2:24", "ot/gen/2", "p24"], ["Genesis 39:9", "ot/gen/39", "p9"], ["Exodus 20:3–17", "ot/ex/20", "p3"],
    ["Joshua 24:15", "ot/josh/24", "p15"], ["Psalm 24:3–4", "ot/ps/24", "p3"], ["Proverbs 3:5–6", "ot/prov/3", "p5"], ["Isaiah 1:18", "ot/isa/1", "p18"],
    ["Isaiah 5:20", "ot/isa/5", "p20"], ["Isaiah 29:13–14", "ot/isa/29", "p13"], ["Isaiah 53:3–5", "ot/isa/53", "p3"], ["Isaiah 58:6–7", "ot/isa/58", "p6"],
    ["Isaiah 58:13–14", "ot/isa/58", "p13"], ["Jeremiah 1:4–5", "ot/jer/1", "p4"], ["Ezekiel 3:16–17", "ot/ezek/3", "p16"], ["Ezekiel 37:15–17", "ot/ezek/37", "p15"],
    ["Daniel 2:44–45", "ot/dan/2", "p44"], ["Amos 3:7", "ot/amos/3", "p7"], ["Malachi 3:8–10", "ot/mal/3", "p8"], ["Malachi 4:5–6", "ot/mal/4", "p5"]
  ]],
  ["New Testament", [
    ["Matthew 5:14–16", "nt/matt/5", "p14"], ["Matthew 11:28–30", "nt/matt/11", "p28"], ["Matthew 16:15–19", "nt/matt/16", "p15"], ["Matthew 22:36–39", "nt/matt/22", "p36"],
    ["Luke 2:10–12", "nt/luke/2", "p10"], ["Luke 22:19–20", "nt/luke/22", "p19"], ["Luke 24:36–39", "nt/luke/24", "p36"], ["John 3:5", "nt/john/3", "p5"],
    ["John 3:16", "nt/john/3", "p16"], ["John 7:17", "nt/john/7", "p17"], ["John 17:3", "nt/john/17", "p3"], ["1 Corinthians 6:19–20", "nt/1-cor/6", "p19"],
    ["1 Corinthians 11:11", "nt/1-cor/11", "p11"], ["1 Corinthians 15:20–22", "nt/1-cor/15", "p20"], ["1 Corinthians 15:40–42", "nt/1-cor/15", "p40"], ["Ephesians 1:10", "nt/eph/1", "p10"],
    ["Ephesians 2:19–20", "nt/eph/2", "p19"], ["2 Thessalonians 2:1–3", "nt/2-thes/2", "p1"], ["2 Timothy 3:15–17", "nt/2-tim/3", "p15"], ["Hebrews 12:9", "nt/heb/12", "p9"],
    ["James 1:5–6", "nt/james/1", "p5"], ["James 2:17–18", "nt/james/2", "p17"], ["1 Peter 4:6", "nt/1-pet/4", "p6"], ["Revelation 20:12", "nt/rev/20", "p12"]
  ]],
  ["Book of Mormon", [
    ["1 Nephi 3:7", "bofm/1-ne/3", "p7"], ["2 Nephi 2:25", "bofm/2-ne/2", "p25"], ["2 Nephi 2:27", "bofm/2-ne/2", "p27"], ["2 Nephi 26:33", "bofm/2-ne/26", "p33"],
    ["2 Nephi 28:30", "bofm/2-ne/28", "p30"], ["2 Nephi 32:3", "bofm/2-ne/32", "p3"], ["2 Nephi 32:8–9", "bofm/2-ne/32", "p8"], ["Mosiah 2:17", "bofm/mosiah/2", "p17"],
    ["Mosiah 2:41", "bofm/mosiah/2", "p41"], ["Mosiah 3:19", "bofm/mosiah/3", "p19"], ["Mosiah 4:9", "bofm/mosiah/4", "p9"], ["Mosiah 18:8–10", "bofm/mosiah/18", "p8"],
    ["Alma 7:11–13", "bofm/alma/7", "p11"], ["Alma 34:9–10", "bofm/alma/34", "p9"], ["Alma 39:9", "bofm/alma/39", "p9"], ["Alma 41:10", "bofm/alma/41", "p10"],
    ["Helaman 5:12", "bofm/hel/5", "p12"], ["3 Nephi 11:10–11", "bofm/3-ne/11", "p10"], ["3 Nephi 12:48", "bofm/3-ne/12", "p48"], ["3 Nephi 27:20", "bofm/3-ne/27", "p20"],
    ["Ether 12:6", "bofm/ether/12", "p6"], ["Ether 12:27", "bofm/ether/12", "p27"], ["Moroni 7:45–48", "bofm/moro/7", "p45"], ["Moroni 10:4–5", "bofm/moro/10", "p4"]
  ]],
  ["Doctrine and Covenants & Church History", [
    ["Joseph Smith—History 1:15–20", "pgp/js-h/1", "p15"], ["Doctrine and Covenants 1:30", "dc-testament/dc/1", "p30"], ["Doctrine and Covenants 1:37–38", "dc-testament/dc/1", "p37"], ["Doctrine and Covenants 6:36", "dc-testament/dc/6", "p36"],
    ["Doctrine and Covenants 8:2–3", "dc-testament/dc/8", "p2"], ["Doctrine and Covenants 13:1", "dc-testament/dc/13", "p1"], ["Doctrine and Covenants 18:10–11", "dc-testament/dc/18", "p10"], ["Doctrine and Covenants 18:15–16", "dc-testament/dc/18", "p15"],
    ["Doctrine and Covenants 19:16–19", "dc-testament/dc/19", "p16"], ["Doctrine and Covenants 21:4–6", "dc-testament/dc/21", "p4"], ["Doctrine and Covenants 29:10–11", "dc-testament/dc/29", "p10"], ["Doctrine and Covenants 49:15–17", "dc-testament/dc/49", "p15"],
    ["Doctrine and Covenants 58:42–43", "dc-testament/dc/58", "p42"], ["Doctrine and Covenants 64:9–11", "dc-testament/dc/64", "p9"], ["Doctrine and Covenants 76:22–24", "dc-testament/dc/76", "p22"], ["Doctrine and Covenants 82:10", "dc-testament/dc/82", "p10"],
    ["Doctrine and Covenants 84:20–22", "dc-testament/dc/84", "p20"], ["Doctrine and Covenants 88:118", "dc-testament/dc/88", "p118"], ["Doctrine and Covenants 89:18–21", "dc-testament/dc/89", "p18"], ["Doctrine and Covenants 107:8", "dc-testament/dc/107", "p8"],
    ["Doctrine and Covenants 121:36, 41–42", "dc-testament/dc/121", "p36"], ["Doctrine and Covenants 130:22–23", "dc-testament/dc/130", "p22"], ["Doctrine and Covenants 131:1–4", "dc-testament/dc/131", "p1"], ["Doctrine and Covenants 135:3", "dc-testament/dc/135", "p3"]
  ]]
];

const oldTestamentDescriptions = {
  "Moses 1:39": "This is my work and my glory—to bring to pass the immortality and eternal life of man.",
  "Moses 7:18": "The Lord called his people Zion because they were of one heart and one mind.",
  "Abraham 2:9–11": "The Lord promised Abraham that his seed would bear this ministry and Priesthood unto all nations.",
  "Abraham 3:22–23": "As spirits we were organized before the world was.",
  "Genesis 1:26–27": "God created man in his own image.",
  "Genesis 2:24": "A man shall cleave unto his wife, and they shall be one.",
  "Genesis 39:9": "How then can I do this great wickedness, and sin against God?",
  "Exodus 20:3–17": "The Ten Commandments.",
  "Joshua 24:15": "Choose you this day whom ye will serve.",
  "Psalm 24:3–4": "Who shall stand in his holy place? He that hath clean hands, and a pure heart.",
  "Proverbs 3:5–6": "Trust in the Lord with all thine heart, and he shall direct thy paths.",
  "Isaiah 1:18": "Though your sins be as scarlet, they shall be as white as snow.",
  "Isaiah 5:20": "Woe unto them that call evil good, and good evil.",
  "Isaiah 29:13–14": "The restoration of the gospel is a marvellous work and a wonder.",
  "Isaiah 53:3–5": "Surely Jesus Christ hath borne our griefs and carried our sorrows.",
  "Isaiah 58:6–7": "The blessings of a proper fast.",
  "Isaiah 58:13–14": "Turn away from doing thy pleasure on my holy day, and call the sabbath a delight.",
  "Jeremiah 1:4–5": "Before I formed thee in the belly, I ordained thee a prophet unto the nations.",
  "Ezekiel 3:16–17": "The prophet is a watchman unto the house of Israel.",
  "Ezekiel 37:15–17": "The Bible and the Book of Mormon shall become one in thine hand.",
  "Daniel 2:44–45": "God shall set up a kingdom, which shall never be destroyed.",
  "Amos 3:7": "The Lord God revealeth his secret unto his servants the prophets.",
  "Malachi 3:8–10": "The blessings of paying tithing.",
  "Malachi 4:5–6": "Elijah shall turn the heart of the children to their fathers."
};

document.getElementById("doctrinalMasteryGrid").innerHTML = doctrinalMasteryCourses.slice(0, 1).map(([course, passages]) => `<article class="doctrinal-mastery__card"><h3>${course}</h3><ul>${passages.map(([reference, path, verse]) => `<li><a href="https://www.churchofjesuschrist.org/study/scriptures/${path}?lang=eng&id=${verse}#${verse}" target="_blank" rel="noreferrer">${reference}</a><span class="doctrinal-mastery__description">${oldTestamentDescriptions[reference]}</span></li>`).join("")}</ul></article>`).join("");

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.getElementById("siteNavLinks");
navToggle.addEventListener("click", () => { const open = navLinks.classList.toggle("is-open"); navToggle.setAttribute("aria-expanded", String(open)); });
navLinks.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => { navLinks.classList.remove("is-open"); navToggle.setAttribute("aria-expanded", "false"); }));
document.getElementById("backToTop").addEventListener("click", (event) => { event.preventDefault(); window.scrollTo({ top:0, behavior:"smooth" }); });

function setPanelState(panel, toggle, expanded, labels) {
  panel.classList.toggle("is-collapsed", !expanded);
  toggle.setAttribute("aria-expanded", String(expanded));
  toggle.textContent = expanded ? labels.hide : labels.show;
}

function expandPanel(panel, toggle, labels) {
  setPanelState(panel, toggle, true, labels);
}

function togglePanel(panel, toggle, labels) {
  const expanded = toggle.getAttribute("aria-expanded") !== "true";
  setPanelState(panel, toggle, expanded, labels);
}

const calendarPanelLabels = { show: "Show Pacing Guide", hide: "Hide Pacing Guide" };
const readingListPanelLabels = { show: "Show Required Reading", hide: "Hide Required Reading" };
const doctrinalMasteryPanelLabels = { show: "Show Doctrinal Mastery Passages", hide: "Hide Doctrinal Mastery Passages" };
const teachersPanelLabels = { show: "Show Teachers & Administration", hide: "Hide Teachers & Administration" };

calendarToggle.addEventListener("click", () => togglePanel(calendarPanel, calendarToggle, calendarPanelLabels));
readingListToggle.addEventListener("click", () => togglePanel(readingListPanel, readingListToggle, readingListPanelLabels));
doctrinalMasteryToggle.addEventListener("click", () => togglePanel(doctrinalMasteryPanel, doctrinalMasteryToggle, doctrinalMasteryPanelLabels));
teachersToggle.addEventListener("click", () => togglePanel(teachersPanel, teachersToggle, teachersPanelLabels));

function expandSectionFromHash(hash) {
  if (hash === "#calendar") {
    expandPanel(calendarPanel, calendarToggle, calendarPanelLabels);
  }
  if (hash === "#reading-list") {
    expandPanel(readingListPanel, readingListToggle, readingListPanelLabels);
  }
  if (hash === "#doctrinal-mastery") {
    expandPanel(doctrinalMasteryPanel, doctrinalMasteryToggle, doctrinalMasteryPanelLabels);
  }
  if (hash === "#teachers") {
    expandPanel(teachersPanel, teachersToggle, teachersPanelLabels);
  }
}

document.querySelectorAll('.site-nav__links a[href="#reading-list"], .site-nav__links a[href="#calendar"], .site-nav__links a[href="#doctrinal-mastery"], .site-nav__links a[href="#teachers"]').forEach((link) => {
  link.addEventListener("click", () => {
    expandSectionFromHash(link.getAttribute("href"));
  });
});

window.addEventListener("hashchange", () => expandSectionFromHash(window.location.hash));
expandSectionFromHash(window.location.hash);

const makeupForm = document.getElementById("makeupForm");
const honorStatement = document.getElementById("honorStatement");
const makeupSubmit = document.getElementById("makeupSubmit");
honorStatement.addEventListener("change", () => { makeupSubmit.disabled = !honorStatement.checked; });
makeupForm.addEventListener("submit", async (event) => { event.preventDefault(); const status = document.getElementById("makeupStatus"); const payload = Object.fromEntries(new FormData(event.currentTarget)); status.textContent = "Submitting makeup work…"; try { const response = await fetch("/.netlify/functions/submit-makeup", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(payload) }); if (!response.ok) throw new Error(); status.textContent = "Makeup work submitted successfully."; makeupForm.reset(); makeupSubmit.disabled = true; } catch { status.textContent = "We couldn't submit your makeup work. Please try again."; } });
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", async (event) => { event.preventDefault(); const status = document.getElementById("contactStatus"); const payload = Object.fromEntries(new FormData(event.currentTarget)); status.textContent = "Sending your message…"; try { const response = await fetch("/.netlify/functions/submit-contact", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(payload) }); if (!response.ok) throw new Error(); status.textContent = "Your message was sent."; contactForm.reset(); } catch { status.textContent = "We couldn't send your message. Please try again."; } });
