import { useRef } from 'react';

export const speakText = (text: string) => {
    const paragraph = "Bienvenido. Buscar por edificio. Humanidades. Ciencias. Biblioteca. Ingenieria.";
  
    // Function to speak the text after voices have been loaded
    const speakOnceVoicesLoaded = () => {
      const voices = window.speechSynthesis.getVoices();
      console.log('Available voices:', voices);
  
      const speech = new SpeechSynthesisUtterance(paragraph);
      // Set the language and try to match the voice
      speech.lang = 'es-US';
      speech.voice = voices.find(voice => voice.lang === 'es-US') || null;
  
      // Log when speech starts and ends
      speech.onstart = () => console.log('Speech started');
      speech.onend = () => console.log('Speech ended');

      console.log(speech);
  
      // Speak the text
      console.log("Antes");
      window.speechSynthesis.speak(speech);
      console.log("Despues");
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
  