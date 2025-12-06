import type { TextStats } from "../../types";
import { useState } from "react";
import TextInput from "../TextInput/TextInput";
import StatsDisplay from "../StatsDisplay/StatsDisplay";

function CharacterCounter() {
  const [text, setText] = useState("");
  const [stats, setStats] = useState<TextStats>({
    characterCount: 0,
    wordCount: 0,
    readingTime: 0
  });

  function handleTextChange(newText: string) {
  setText(newText);
  const characterCount = newText.length;
  const parts = newText.split(" ");
  let wordCount = 0;

  for (let i = 0; i < parts.length; i++) {
    if (parts[i].trim().length > 0) {
      wordCount++;
    }
  }

  const readingTime = wordCount / 200;
  const updatedStats: TextStats = {
    characterCount: characterCount,
    wordCount: wordCount,
    readingTime: readingTime
  };

  setStats(updatedStats);
}

  return (
    <div>
      <h1>Character Counter</h1>
      <TextInput onTextChange={handleTextChange} />
      <StatsDisplay stats={stats} />
    </div>
  );
}

export default CharacterCounter;






