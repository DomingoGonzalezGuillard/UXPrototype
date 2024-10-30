export const speakText = (text: string) => {
  // Stop any ongoing speech first
  window.speechSynthesis.cancel();

  const speakOnceVoicesLoaded = () => {
    const voices = window.speechSynthesis.getVoices();
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'es-US';
    speech.voice = voices.find(voice => voice.lang === 'es-US') || null;

    // Log when speech starts and ends
    speech.onstart = () => console.log('Speech started');
    speech.onend = () => {
      console.log('Speech ended');
      window.speechSynthesis.cancel();
    }
    
    // Speak the text
    window.speechSynthesis.speak(speech);
  };

  // Check if voices are already available
  if (window.speechSynthesis.getVoices().length > 0) {
    speakOnceVoicesLoaded();
  } else {
    // Listen for the voiceschanged event to ensure voices are loaded
    window.speechSynthesis.onvoiceschanged = () => {
      speakOnceVoicesLoaded();
    };
  }
};
