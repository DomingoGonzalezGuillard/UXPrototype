let currentAudio: HTMLAudioElement | null = null; // Almacena la instancia actual de audio

export const playSound = (audioFilePath: string) => {
  // Si ya hay un audio reproduciéndose, lo detenemos
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0; // Reinicia el audio para evitar que continúe desde donde se pausó
  }

  // Crea una nueva instancia de audio y la almacena en currentAudio
  const audio = new Audio(audioFilePath);
  currentAudio = audio;

  // Opcional: controla los eventos de reproducción
  audio.onplay = () => console.log('Reproducción de audio iniciada');
  audio.onended = () => {
    console.log('Reproducción de audio finalizada');
    currentAudio = null; // Reinicia currentAudio al finalizar
  };

  audio.play().catch(error => {
    console.error('Error al reproducir el sonido:', error);
  });
};
