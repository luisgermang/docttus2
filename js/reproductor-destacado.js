document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('mainAudio');
  const playPauseBtn = document.getElementById('playPauseBtn');
  const progressContainer = document.getElementById('progressContainer');
  const progressBar = document.getElementById('progressBar');
  const timeDisplay = document.getElementById('timeDisplay');
  const volumeSlider = document.getElementById('volumeSlider');
  const volDown = document.getElementById('volDown');
  const volUp = document.getElementById('volUp');

  // Reproducir/Pausar
  playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
      audio.pause();
      playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
  });

  // Actualizar barra de progreso
  audio.addEventListener('timeupdate', () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${progress}%`;

    // Mostrar tiempo
    const currentTime = formatTime(audio.currentTime);
    const duration = formatTime(audio.duration);
    timeDisplay.textContent = `${currentTime} / ${duration}`;
  });

  // Hacer clic en la barra de progreso
  progressContainer.addEventListener('click', (e) => {
    const rect = progressContainer.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const newTime = (clickX / width) * audio.duration;
    audio.currentTime = newTime;
  });

  // Controlar volumen
  volumeSlider.addEventListener('input', () => {
    audio.volume = volumeSlider.value;
    updateVolumeIcons();
  });

  volDown.addEventListener('click', () => {
    audio.volume = Math.max(0, audio.volume - 0.1);
    volumeSlider.value = audio.volume;
    updateVolumeIcons();
  });

  volUp.addEventListener('click', () => {
    audio.volume = Math.min(1, audio.volume + 0.1);
    volumeSlider.value = audio.volume;
    updateVolumeIcons();
  });

  // Formatear tiempo (mm:ss)
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  }

  // Actualizar íconos de volumen
  function updateVolumeIcons() {
    if (audio.volume === 0) {
      volDown.style.color = '#fff';
      volUp.style.color = '#fff';
    } else if (audio.volume < 0.5) {
      volDown.style.color = '#00ff8f';
      volUp.style.color = '#fff';
    } else {
      volDown.style.color = '#00ff8f';
      volUp.style.color = '#00ff8f';
    }
  }
});