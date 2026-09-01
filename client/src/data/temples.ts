/** Night Archive style reminder: temple data supports a photographic, evidence-led heritage archive. */
export type Temple = {
  name: string;
  location: string;
  state: string;
  deity: string;
  style: string;
  summary: string;
  voiceDescription: string;
  image: string;
  imageAlt: string;
  sourceUrl: string;
  slug?: string;
  status?: string;
};

const commonsFile = (fileName: string, width = 1800) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(fileName)}?width=${width}`;

const mandalaSvg = encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320"><g fill="none" stroke="#d6b25e" stroke-width="1"><circle cx="160" cy="160" r="142"/><circle cx="160" cy="160" r="106"/><circle cx="160" cy="160" r="70"/><path d="M160 18 302 160 160 302 18 160Z"/><path d="M160 54 266 160 160 266 54 160Z"/><path d="m160 88 72 72-72 72-72-72Z"/></g></svg>',
);

export const templePhotography = {
  meenakshiPond: commonsFile("Temple de Mînâkshî01.jpg"),
  meenakshiGopuram: commonsFile("Madurai Meenakshi temple gopuram.jpg"),
  meenakshiPillars: commonsFile("1000 pillars,meenakshi temple,madurai - panoramio.jpg"),
  meenakshiSculpture: commonsFile("Sculpture in Meenakshi Amman Temple madurai.jpg"),
  meenakshiMandapaCorridor: commonsFile("Corridor leading to Mandapa in Meenakshi Amman Temple.jpg"),
  hoysaleshwaraSanctum: commonsFile("A sanctum inside the Hoysaleshwara temple in Halebidu.jpg"),
  konark: commonsFile("Konark at night.jpg"),
  kedarnath: commonsFile("Kedarnath Temple.jpg"),
} as const;

export const archiveArt = {
  mandala: `data:image/svg+xml,${mandalaSvg}`,
  bronzeStudy: commonsFile("Sculpture in Meenakshi Amman Temple madurai.jpg"),
  stoneStudy: commonsFile("A sanctum inside the Hoysaleshwara temple in Halebidu.jpg"),
  archiveSky: commonsFile("Temple de Mînâkshî01.jpg"),
} as const;

export const temples: Temple[] = [
  {
    name: "Meenakshi Amman",
    location: "Madurai, Tamil Nadu",
    state: "Tamil Nadu",
    deity: "Meenakshi & Sundareswarar",
    style: "Dravidian",
    summary:
      "A vast sacred complex shaped by gopurams, water, processional routes, and the continuing ritual life of Madurai.",
    voiceDescription:
      "Meenakshi Amman Temple in Madurai is a living sacred city dedicated to Meenakshi and Sundareswarar. Its towering gopurams, temple tank, sculpted halls, and processional paths are shaped by daily worship and the festivals of Tamil Nadu.",
    image: templePhotography.meenakshiGopuram,
    imageAlt: "A towering gopuram at the Meenakshi Amman Temple in Madurai.",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Madurai_Meenakshi_temple_gopuram.jpg",
    slug: "/temples/meenakshi-amman",
  },
  {
    name: "Konark Sun Temple",
    location: "Konark, Odisha",
    state: "Odisha",
    deity: "Surya",
    style: "Kalinga",
    summary:
      "A monumental thirteenth-century temple known for its sculptural stonework and chariot-like cosmological form.",
    voiceDescription:
      "The Konark Sun Temple in Odisha is a monumental thirteenth-century temple dedicated to Surya. Its carved stone form is imagined as a cosmic chariot, making architecture, astronomy, and sculpture part of one powerful visual story.",
    image: templePhotography.konark,
    imageAlt: "The stone mass of the Konark Sun Temple under a deep blue night sky.",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Konark_at_night.jpg",
    status: "Archive entry in preparation",
  },
  {
    name: "Kedarnath",
    location: "Rudraprayag, Uttarakhand",
    state: "Uttarakhand",
    deity: "Shiva",
    style: "Himalayan stone tradition",
    summary:
      "A high Himalayan shrine whose compact stone architecture is framed by the severe scale of the Garhwal mountains.",
    voiceDescription:
      "Kedarnath is a high Himalayan shrine dedicated to Shiva. Its compact stone architecture stands within the dramatic Garhwal mountains, where pilgrimage, landscape, and enduring sacred tradition meet.",
    image: templePhotography.kedarnath,
    imageAlt: "Kedarnath Temple set beneath rocky Himalayan slopes.",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Kedarnath_Temple.jpg",
    status: "Archive entry in preparation",
  },
];
