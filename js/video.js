document.addEventListener(
  'DOMContentLoaded',
  function () {
    initialiseMediaPlayer();
  },
  false
);
var mediaPlayer;

function initialiseMediaPlayer() {
  mediaPlayer = document.getElementById('media-video');
  mediaPlayer.controls = false;
}

function togglePlayPause() {
  var btn = document.getElementById('play-pause-button');
  if (mediaPlayer.paused || mediaPlayer.ended) {
    btn.title = '';
    btn.innerHTML = 'pause';
    btn.className = 'pause';
    mediaPlayer.play();
  } else {
    btn.title = '';
    btn.innerHTML = 'play';
    btn.className = 'play';
    mediaPlayer.pause();
  }
}

// Player

// document.querySelector('#play').onclick = play;
// document.querySelector('#pause').onclick = pause;
// document.querySelector('#stop').onclick = stop;
// document.querySelector('#speed-up').onclick = speedUp;
// document.querySelector('#speed-down').onclick = speedDown;
// document.querySelector('#speed-normal').onclick = speedNormal;
// document.querySelector('#volume').onclick = videoVolume;

// let video;
// let display;
// let progress;

// video = document.querySelector('#video-player');
// progress = document.querySelector('#progress');

// // !!!
// video.ontimeupdate = progressUpdate;
// progress.onclick = videoRewind;

// function play() {
//   video.play();

// }
// function pause() {
//   video.pause();

// }
// function stop() {
//   video.pause();
//   video.currentTime = 0;
// }
// function speedUp(params) {
// video.play();
//   video.playbackRate = 5;

// }
// function speedDown(params) {
//   video.play();
//   video.playbackRate = 0.5;

// }
// function speedNormal(params) {
//   video.play();
//   video.playbackRate = 1;

// }
// function videoVolume(params) {
//   let v = this.value;
//   console.log(v);
//   video.volume = v / 100;

// }

// function progressUpdate(params) {
//   console.log(video.duration);
//   console.log(video.currentTime);
//   let d = video.duration;
//   let c = video.currentTime;
//   progress.value = (100 * c) / d;
//   document.querySelector('#out').innerHTML = video.currentTime;
// }

// function videoRewind(params) {
//   let w = this.offsetWidth;
//   let o = event.offsetX;
//   console.log(w);
//   console.log(o);
//   this.value = 100 * o / w;
//   video.pause();
//   video.currentTime = video.duration * (o / w);
//   video.play();
// }
