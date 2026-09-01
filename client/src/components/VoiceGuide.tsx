import { Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const speechLocales = {
  en: "en-IN",
  hi: "hi-IN",
  te: "te-IN",
} as const;

const remoteTtsLocales = {
  en: "en",
  hi: "hi",
  te: "te",
} as const;

type VoiceGuideProps = {
  title: string;
  text: string;
  compact?: boolean;
};

function findVoice(voices: SpeechSynthesisVoice[], locale: string) {
  const normalizedLocale = locale.toLowerCase().replace("_", "-");
  const language = normalizedLocale.split("-")[0];
  return voices.find((voice) => voice.lang.toLowerCase().replace("_", "-") === normalizedLocale)
    ?? voices.find((voice) => voice.lang.toLowerCase().replace("_", "-").split("-")[0] === language);
}

function splitForRemoteTts(text: string) {
  const sentences = text.match(/[^.!?।]+[.!?।]+|[^.!?।]+$/g) ?? [text];
  const chunks: string[] = [];
  let current = "";

  for (const sentence of sentences) {
    const candidate = `${current} ${sentence}`.trim();
    if (candidate.length > 180 && current) {
      chunks.push(current);
      current = sentence.trim();
    } else {
      current = candidate;
    }
  }
  if (current) chunks.push(current);
  return chunks;
}

function remoteTtsUrl(text: string, locale: keyof typeof remoteTtsLocales) {
  const params = new URLSearchParams({
    ie: "UTF-8",
    client: "tw-ob",
    tl: remoteTtsLocales[locale],
    q: text,
  });
  return `https://translate.google.com/translate_tts?${params.toString()}`;
}

export function VoiceGuide({ title, text, compact = false }: VoiceGuideProps) {
  const { language, t } = useLanguage();
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const canSpeak = typeof window !== "undefined" && ("speechSynthesis" in window || "Audio" in window);
  const locale = speechLocales[language];

  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    const updateVoices = () => setVoices(window.speechSynthesis.getVoices());
    updateVoices();
    window.speechSynthesis.addEventListener("voiceschanged", updateVoices);
    return () => window.speechSynthesis.removeEventListener("voiceschanged", updateVoices);
  }, []);

  const stopPlayback = () => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) window.speechSynthesis.cancel();
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
    }
    setIsSpeaking(false);
  };

  useEffect(() => {
    return () => stopPlayback();
  }, []);

  useEffect(() => {
    if (isSpeaking) stopPlayback();
  }, [language]);

  const speakWithRemoteAudio = async (spokenText: string) => {
    const chunks = splitForRemoteTts(spokenText);
    for (const chunk of chunks) {
      if (!audioRef.current && chunks.indexOf(chunk) > 0) return;
      const audio = new Audio(remoteTtsUrl(chunk, language));
      audioRef.current = audio;
      await new Promise<void>((resolve, reject) => {
        audio.onended = () => resolve();
        audio.onerror = () => reject(new Error("Remote voice playback failed"));
        void audio.play().catch(reject);
      });
    }
  };

  const speakWithNativeVoice = (spokenText: string, voice: SpeechSynthesisVoice) => {
    const utterance = new SpeechSynthesisUtterance(spokenText);
    utterance.lang = locale;
    utterance.voice = voice;
    utterance.rate = 0.92;
    utterance.pitch = 1;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  const toggleSpeech = async () => {
    if (!canSpeak) return;
    if (isSpeaking) {
      stopPlayback();
      return;
    }

    const spokenText = `${title}. ${text}`;
    stopPlayback();
    setIsSpeaking(true);
    const nativeVoice = findVoice(voices, locale);

    if (nativeVoice && "speechSynthesis" in window) {
      speakWithNativeVoice(spokenText, nativeVoice);
      return;
    }

    try {
      await speakWithRemoteAudio(spokenText);
      if (audioRef.current) audioRef.current = null;
      setIsSpeaking(false);
    } catch {
      stopPlayback();
    }
  };

  return (
    <button
      type="button"
      className={`voice-guide ${compact ? "voice-guide--compact" : ""} ${isSpeaking ? "voice-guide--speaking" : ""}`}
      onClick={() => void toggleSpeech()}
      disabled={!canSpeak}
      aria-label={t(isSpeaking ? "Stop listening" : "Listen to this place")}
      title={t(isSpeaking ? "Stop listening" : canSpeak ? "Listen to this place" : "Voice guidance is not available in this browser")}
    >
      {isSpeaking ? <VolumeX size={16} /> : <Volume2 size={16} />}
      <span>{t(isSpeaking ? "Stop" : "Listen")}</span>
    </button>
  );
}
