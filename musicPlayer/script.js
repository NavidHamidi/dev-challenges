// Transform seconds to minuets + seconds
function formatMusicDuration(duration) {
  const minutes = Math.floor(duration / 60);
  const strMin = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const sec = Math.floor(duration - minutes * 60);
  const strSec = sec < 10 ? `0${sec}` : `${sec}`;
  return `${strMin}:${strSec}`;
}

// Play/Pause button behavior
function playStopMusic() {
  const audioPlayer = document.getElementById('audio-player');

  if (audioPlayer.paused) {
    audioPlayer.play();
    document
      .getElementById('play-image')
      .setAttribute('src', './resources/Stop_fill.svg');
  } else {
    audioPlayer.pause();
    document
      .getElementById('play-image')
      .setAttribute('src', './resources/Play_fill.svg');
  }
}

// OnTimeUpdate, update current audio time
function onTimeUpdate(event) {
  document.getElementById('music-time-current').innerText = formatMusicDuration(
    event.currentTime
  );
}

// Previous/Next buttons behavior
function setNextMusic() {
  const playlist = [
    {
      title: 'Lost in the City Lights',
      author: 'Cosmo Sheldrake',
      cover: './resources/cover-1.png',
      source: './resources/lost-in-city-lights-145038.mp3',
      musicId: 0,
    },
    {
      title: 'Forest Lullaby',
      author: 'Lesfm',
      cover: './resources/cover-2.png',
      source: './resources/forest-lullaby-110624.mp3',
      musicId: 1,
    },
  ];

  const audioPlayer = document.getElementById('audio-player');
  const currentSource = document.getElementById('audio-source');

  // Check wich music is playing
  const musicId = currentSource.getAttribute('music-id');
  console.log(musicId);

  if (musicId === '0') {
    document.getElementById('music-title').innerText = playlist[1].title;
    document.getElementById('music-author').innerText = playlist[1].author;
    document.getElementById('music-cover').src = playlist[1].cover;
    currentSource.setAttribute('music-id', playlist[1].musicId);
    currentSource.src = playlist[1].source;
  } else {
    document.getElementById('music-title').innerText = playlist[0].title;
    document.getElementById('music-author').innerText = playlist[0].author;
    document.getElementById('music-cover').src = playlist[0].cover;
    currentSource.setAttribute('music-id', playlist[0].musicId);
    currentSource.src = playlist[0].source;
  }

  audioPlayer.load();
  audioPlayer.onloadedmetadata = function () {
    document.getElementById('music-time-end').innerText = formatMusicDuration(
      audioPlayer.duration
    );
  };
  audioPlayer.pause();
  document
    .getElementById('play-image')
    .setAttribute('src', './resources/Play_fill.svg');
}
