 export const playSound = (audioFilePath: string) => {
    const audio = new Audio(audioFilePath);
  
    // Opcional: controla los eventos de reproducción
    audio.onplay = () => console.log('Reproducción de audio iniciada');
    audio.onended = () => console.log('Reproducción de audio finalizada');
  
    audio.play().catch(error => {
      console.error('Error al reproducir el sonido:', error);
    });
  };
  