/** Night Archive style reminder: temple data supports a photographic, evidence-led heritage archive. */
export type Temple = {
  name: string;
  location: string;
  state: string;
  deity: string;
  style: string;
  summary: string;
  image: string;
  imageAlt: string;
  sourceUrl: string;
  slug?: string;
  status?: string;
};

export const templePhotography = {
  meenakshiPond: "/manus-storage/meenakshi-pond-gopurams_0230e3f5.jpg",
  meenakshiGopuram: "/manus-storage/meenakshi-gopuram_c8af3fc8.jpg",
  meenakshiPillars: "/manus-storage/meenakshi-thousand-pillars_50762979.jpg",
  meenakshiSculpture: "/manus-storage/meenakshi-sculpture_6d411d4b.jpg",
  meenakshiMandapaCorridor: "/manus-storage/meenakshi-mandapa-corridor_a914d5b6.jpg",
  hoysaleshwaraSanctum: "/manus-storage/hoysaleshwara-sanctum_9ceeec28.jpg",
  konark: "/manus-storage/konark-night_e52b3901.jpg",
  kedarnath: "/manus-storage/kedarnath-temple_5d3db40e.jpg",
} as const;

export const archiveArt = {
  mark: "/manus-storage/eternal-heritage-threshold-mark_7b578b3e.png",
  mandala: "/manus-storage/eternal-heritage-mandala-field_29c307b3.jpg",
  bronzeStudy: "/manus-storage/eternal-heritage-bronze-study_7dc238ad.jpg",
  stoneStudy: "/manus-storage/eternal-heritage-stone-study_7551af3f.jpg",
  archiveSky: "/manus-storage/eternal-heritage-archive-sky_c8e6ba15.jpg",
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
    image: templePhotography.kedarnath,
    imageAlt: "Kedarnath Temple set beneath rocky Himalayan slopes.",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Kedarnath_Temple.jpg",
    status: "Archive entry in preparation",
  },
];
