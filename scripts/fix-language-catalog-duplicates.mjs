import fs from "node:fs";
const path = "client/src/contexts/LanguageContext.tsx";
const lines = fs.readFileSync(path, "utf8").split("\n");
const mandapaLine = lines.findIndex((line) => line.includes('"Architectural marvels · Archive / 02"'));
if (mandapaLine >= 0) {
  lines[mandapaLine] = lines[mandapaLine].replace(', "Mandapas": "मंडप"', "");
  lines[mandapaLine] = lines[mandapaLine].replace(', "No entries meet this combination. Try a wider path through the archive.": "इस संयोजन से कोई प्रविष्टि नहीं मिली। अभिलेख में कोई व्यापक पथ चुनें।"', "");
}
fs.writeFileSync(path, lines.join("\n"));
console.log(`Cleaned language catalog line ${mandapaLine + 1}.`);
