import fs from "node:fs";
const path = "client/src/contexts/LanguageContext.tsx";
const lines = fs.readFileSync(path, "utf8").split("\n");
const patterns = [
  ', "No entries meet this combination. Try a wider path through the archive.": "इस संयोजन से कोई प्रविष्टि नहीं मिली। अभिलेख में कोई व्यापक पथ चुनें।"',
  ', "No entries meet this combination. Try a wider path through the archive.": "ఈ కలయికకు నమోదులు లేవు. ఆర్కైవ్‌లో విస్తృత మార్గాన్ని ప్రయత్నించండి."',
];
for (let i = 0; i < lines.length; i += 1) {
  if (lines[i].includes('"Page Not Found"')) {
    for (const pattern of patterns) lines[i] = lines[i].replace(pattern, "");
  }
}
fs.writeFileSync(path, lines.join("\n"));
console.log("Removed duplicate no-entry properties from detail-page locales.");
