import fs from "node:fs";

const path = "client/src/contexts/LanguageContext.tsx";
let source = fs.readFileSync(path, "utf8");

const removals = [
  ', "Mandapas": "मंडप", "Enter the halls of assembly, where processional movement, crafted stone, and shared ceremony give architecture its social life.":',
  ', "No entries meet this combination. Try a wider path through the archive.": "इस संयोजन से कोई प्रविष्टि नहीं मिली। अभिलेख में कोई व्यापक पथ चुनें।", "Page Not Found"',
  ', "No entries meet this combination. Try this wider path through the archive.": "ఈ కలయికకు నమోదులు లేవు. ఆర్కైవ్‌లో విస్తృత మార్గాన్ని ప్రయత్నించండి.", "Page Not Found"',
];

for (const fragment of removals) {
  const index = source.indexOf(fragment);
  if (index >= 0) source = source.slice(0, index) + fragment.replace(/^,/, "") + source.slice(index + fragment.length);
}

// The Telugu no-entry key uses the exact English sentence; remove its later duplicate by targeting the Page Not Found boundary.
const teDuplicate = ', "No entries meet this combination. Try a wider path through the archive.": "ఈ కలయికకు నమోదులు లేవు. ఆర్కైవ్‌లో విస్తృత మార్గాన్ని ప్రయత్నించండి.", "Page Not Found"';
const teIndex = source.lastIndexOf(teDuplicate);
if (teIndex >= 0) source = source.slice(0, teIndex) + source.slice(teIndex + teDuplicate.length - ', "Page Not Found"'.length);

fs.writeFileSync(path, source);
console.log("Language catalog duplicate repair applied.");
