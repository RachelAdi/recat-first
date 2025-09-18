import React, { useState } from "react";

type Mood = {
  key: "happy" | "sad" | "angry";
  label: string;
  emoji: string;
};

const MOODS: Mood[] = [
  { key: "happy", label: "Happy", emoji: "🤩" },
  { key: "sad", label: "Sad", emoji: "😳" },
  { key: "angry", label: "Angry", emoji: "🤬" },
];

export default function MoodTracker() {
  const [counts, setCounts] = useState<Record<Mood["key"], number>>({
    happy: 0,
    sad: 0,
    angry: 0,
  });

  const [current, setCurrent] = useState<Mood | null>(null);
  const [history, setHistory] = useState<Mood["key"][]>([]);

  const handleClick = (mood: Mood) => {
    setCounts((prev) => ({ ...prev, [mood.key]: prev[mood.key] + 1 }));
    setCurrent(mood);
    setHistory((h) => [mood.key, ...h].slice(0, 3));
  };

  const handleReset = () => {
    setCounts({ happy: 0, sad: 0, angry: 0 });
    setCurrent(null);
    setHistory([]);
  };

  const handleRandom = () => {
    const randomMood = MOODS[Math.floor(Math.random() * MOODS.length)];
    handleClick(randomMood);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-md p-6 space-y-6">
        {/* Current mood */}
        <div className="p-4 border rounded-lg text-center">
          <h2 className="text-lg font-semibold mb-2">Current Mood:</h2>
          {current ? (
            <div className="text-xl">
              {current.label} {current.emoji}
            </div>
          ) : (
            <div className="text-gray-500">No mood selected yet</div>
          )}
        </div>

        {/* Mood buttons and counts */}
        <div className="grid grid-cols-3 gap-4 text-center">
          {MOODS.map((m) => (
            <div key={m.key}>
              <button
                onClick={() => handleClick(m)}
                className="w-full py-2 rounded-lg border hover:bg-gray-100"
              >
                {m.label} {m.emoji}
              </button>
              <div className="mt-2 text-lg">{counts[m.key]}</div>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-col items-center space-y-2">
          <button
            onClick={handleReset}
            className="px-4 py-2 border rounded hover:bg-gray-100"
          >
            Reset
          </button>
          <button
            onClick={handleRandom}
            className="px-4 py-2 border rounded hover:bg-gray-100"
          >
            Random Mood
          </button>
        </div>

        {/* History */}
        <div className="p-4 border rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Mood History:</h2>
          {history.length === 0 ? (
            <div className="text-gray-500">No history yet</div>
          ) : (
            <ul className="list-disc list-inside space-y-1">
              {history.map((h, idx) => (
                <li key={idx}>{h}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
