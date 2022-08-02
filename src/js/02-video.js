import Player from '@vimeo/player';
import localStorageService from './localStorageService';
import throttle from 'lodash.throttle';

const iframeRef = document.getElementById('vimeo-player');
const player = new Player(iframeRef);
const playerCurrentTime = localStorageService.load('videoplayer-current-time');

const playerTimeUpdateHandler = data => {
  localStorageService.save('videoplayer-current-time', data.seconds);
};

player.ready().then(function () {
  player
    .setCurrentTime(playerCurrentTime)
    .then(function (seconds) {})
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          console.log(
            'Set current time error: ',
            'The time was less than 0 or greater than the video’s duration'
          );
          break;
        default:
          console.log('Set current time error: ', error.message);
          break;
      }
    });
});

player.on('timeupdate', throttle(playerTimeUpdateHandler, 1000));
