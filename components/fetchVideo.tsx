// "use client";
// import { useState, useEffect } from "react";
// import React from "react";

// export default function Emoji() {
//   const [emojiData, setEmojiData] = useState<{
//     emoji: string;
//     type: string;
//   } | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch("");
//       const data = await response.json();
//       setEmojiData(data);
//     };

//     fetchData();
//   }, []);

//   const getEmojiImage = (emojiType: string) => {
//     switch (emojiType) {
//       case "sad":
//         return (
//           <div>
//             <img
//               src="public/emojis/sad.png"
//               alt="Sad emoji"
//               className="w-16 h-16 object-contain"
//             />
//             <h1>{emojiData?.emoji}</h1>
//             <div className="p-4">
//               <audio controls>
//                 <source src="/public/audio/" type="audio/mpeg" />
//               </audio>
//             </div>
//             <div className="p-4">
//               <audio controls>
//                 <source src="/public/audio/sad.mp3" type="audio/mpeg" />
//               </audio>
//             </div>
//           </div>
//         );
//       case "angry":
//         return (
//           <div>
//             <img
//               src="public/emojis/angry.png"
//               alt="Angry emoji"
//               className="w-16 h-16 object-contain"
//             />
//             <h1>{emojiData?.emoji}</h1>
//             <div className="p-4">
//               <audio controls>
//                 <source src="/public/audio/angry.mp3" type="audio/mpeg" />
//               </audio>
//             </div>
//           </div>
//         );
//       case "happy":
//         return (
//           <div>
//             <img
//               src="public/emojis/happy.png"
//               alt="Happy emoji"
//               className="w-16 h-16 object-contain"
//             />
//             <h1>{emojiData?.emoji}</h1>
//             <div className="p-4">
//               <audio controls>
//                 <source src="/public/audio/happy.mp3" type="audio/mpeg" />
//               </audio>
//             </div>
//           </div>
//         );
//       default:
//         return (
//           <div>
//             <div className="text-gray-500">Unknown emoji type</div>
//             <h1>{emojiData?.emoji}</h1>
//             <div className="p-4">
//               <audio controls>
//                 <source src="/public/audio/neutral.mp3" type="audio/mpeg" />
//               </audio>
//             </div>
//           </div>
//         );
//     }
//   };

//   return (
//     <div>
//       {emojiData ? getEmojiImage(emojiData.type) : <div>Loading...</div>}
//     </div>
//   );
// }

"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const emojiStates = [
  {
    type: "neutral",
    emoji: "😐",
    title: "Neutral",
    audioPath: "/audio/neutral.mp3"  // Removed 'public' from path
  },
  {
    type: "sad",
    emoji: "😢",
    title: "Sad",
    audioPath: "/audio/sad.mp3"
  },
  {
    type: "angry",
    emoji: "😠",
    title: "Angry",
    audioPath: "/audio/angry.mp3"
  },
  {
    type: "happy",
    emoji: "😊",
    title: "Happy",
    audioPath: "/audio/happy.mp3"
  }
];

export default function EmojiCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioRef, setAudioRef] = useState<HTMLAudioElement | null>(null);

  const currentEmoji = emojiStates[currentIndex];

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === emojiStates.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? emojiStates.length - 1 : prevIndex - 1
    );
  };

  const handleAudioPlay = () => {
    if (audioRef) {
      if (isPlaying) {
        audioRef.pause();
      } else {
        audioRef.play().catch(error => {
          console.error("Error playing audio:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    // Reset audio when changing emojis
    if (audioRef) {
      audioRef.pause();
      audioRef.currentTime = 0;
      setIsPlaying(false);
    }
  }, [currentIndex]);

  return (
    <div className="flex flex-col items-center max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Carousel Navigation */}
      <div className="flex items-center justify-between w-full mb-6">
        <button 
          onClick={goToPrevious}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Previous emotion"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <h2 className="text-xl font-semibold">{currentEmoji.title}</h2>
        
        <button 
          onClick={goToNext}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Next emotion"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Emoji Content */}
      <div className="flex flex-col items-center space-y-4">
        <div className="relative w-32 h-32 flex items-center justify-center">
          <span className="text-8xl" aria-hidden="true">
            {currentEmoji.emoji}
          </span>
        </div>

        {/* Audio Player */}
        <div className="w-full max-w-xs">
          <audio
            ref={setAudioRef}
            src={currentEmoji.audioPath}
            onEnded={() => setIsPlaying(false)}
          />
          <button
            onClick={handleAudioPlay}
            className={`w-full py-2 px-4 rounded-lg text-white transition-colors ${
              isPlaying ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'
            }`}
            aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
          >
            {isPlaying ? 'Pause Audio' : 'Play Audio'}
          </button>
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center space-x-2 mt-6">
        {emojiStates.map((state, index) => (
          <button
            key={state.type}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'
            }`}
            aria-label={`Go to ${state.title} emotion`}
            aria-current={currentIndex === index ? 'true' : 'false'}
          />
        ))}
      </div>
    </div>
  );
}