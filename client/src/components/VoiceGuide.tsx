import { Volume2, VolumeX } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const speechLocales = {
  en: "en-IN",
  hi: "hi-IN",
  te: "te-IN",
} as const;

type VoiceGuideProps = {
  title: string;
  text: string;
  compact?: boolean;
};

export function VoiceGuide({ title, text, compact = false }: VoiceGuideProps) {
  const { language, t } = useLanguage();
  const [isSpeaking, setIsSpeaking] = useState(false);
  const canSpeak = typeof window !== "undefined" && "speechSynthesis" in window;

  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) window.speechSynthesis.cancel();
    };
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window && isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  }, [language]);

  const toggleSpeech = () => {
    if (!canSpeak) return;
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(`${title}. ${text}`);
    utterance.lang = speechLocales[language];
    utterance.rate = 0.92;
    utterance.pitch = 1;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  return (
    <button
      type="button"
      className={`voice-guide ${compact ? "voice-guide--compact" : ""} ${isSpeaking ? "voice-guide--speaking" : ""}`}
      onClick={toggleSpeech}
      disabled={!canSpeak}
      aria-label={t(isSpeaking ? "Stop listening" : "Listen to this place")}
      title={t(isSpeaking ? "Stop listening" : canSpeak ? "Listen to this place" : "Voice guidance is not available in this browser")}
    >
      {isSpeaking ? <VolumeX size={16} /> : <Volume2 size={16} />}
      <span>{t(isSpeaking ? "Stop" : "Listen")}</span>
    </button>
  );
}
