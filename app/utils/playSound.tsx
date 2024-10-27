import { Asset } from 'expo-asset';

let currentAudio: HTMLAudioElement | null = null;

export const playSound = async (audioFilePath: any) => {
   // Detenemos el audio actual si hay uno reproduciéndose
   if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
   }

   // Resuelve la URL del archivo usando Asset.fromModule
   const asset = Asset.fromModule(audioFilePath);
   await asset.downloadAsync(); // Asegura que el archivo esté disponible
   const audioUrl = asset.uri; // Obtiene la URL del archivo

   // Crea una nueva instancia de audio y almacénala en currentAudio
   const audio = new Audio(audioUrl);
   currentAudio = audio;

   audio.onplay = () => console.log('Reproducción de audio iniciada');
   audio.onended = () => {
      console.log('Reproducción de audio finalizada');
      currentAudio = null;
   };

   audio.play().catch(error => {
      console.error('Error al reproducir el sonido:', error);
   });
};
