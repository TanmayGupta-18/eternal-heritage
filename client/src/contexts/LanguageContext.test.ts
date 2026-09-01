import { describe, expect, it } from "vitest";
import { languageOptions } from "./LanguageContext";

describe("language selector", () => {
  it("offers English, Hindi, and Telugu in order", () => {
    expect(languageOptions).toEqual([
      { value: "en", label: "English" },
      { value: "hi", label: "हिन्दी" },
      { value: "te", label: "తెలుగు" },
    ]);
  });
});
