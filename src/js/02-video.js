import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const videoCurrentTimeKey = 'videoplayer-current-time';

if (localStorage.getItem(videoCurrentTimeKey)) {
  player.setCurrentTime(localStorage.getItem(videoCurrentTimeKey));
}

const saveVideoTime = data => {
  localStorage.setItem(videoCurrentTimeKey, data.seconds);
};

player.on('timeupdate', throttle(saveVideoTime, 1000));
