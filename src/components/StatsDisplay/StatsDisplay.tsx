import type { StatsDisplayProps } from "../../types";

function StatsDisplay(props: StatsDisplayProps) {
  const stats = props.stats;

  return (
    <div>
      <p>Characters: {stats.characterCount}</p>
      <p>Words: {stats.wordCount}</p>
      <p>Reading Time: {stats.readingTime} sec</p>
    </div>
  );
}

export default StatsDisplay;
