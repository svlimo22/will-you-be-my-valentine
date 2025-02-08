"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Bah nn",
      "My rules",
      "other button hermosa",
      "ok stop teasing now",
      "PLEASE",
      "But :(",
      "why crybaby",
      "You're killing me",
      "mdrr ok non serieux",
      "habeltini",
      ":((((",
      "PRETTY PLEASE",
      "Estoy muerto",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGtnZ3AyMTNqOThiM2gzZmhyODJweTBnbWJiOWZkY3E3bHRlODVtMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MDJ9IbxxvDUQM/giphy.gif" />
          <div className="my-4 text-4xl font-bold"TY HERMOSITA<3</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzYwMHE2anFmYzRrZG96NG9yeGQybmxobTEzdmd2MW50ODA2cmhzeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ITacRy2zH4vMQ/giphy.gif"
          />
          <h1 className="my-4 text-4xl">Will you be my Valentine?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
