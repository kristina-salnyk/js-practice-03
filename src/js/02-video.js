import Player from '@vimeo/player';
import localStorageService from './local-storage-service';
import localStorageKeys from './local-storage-keys';
import throttle from 'lodash.throttle';

const iframeRef = document.getElementById('vimeo-player');
const player = new Player(iframeRef);
const playerCurrentTime = localStorageService.load(
  localStorageKeys.VIDEOPLAYER_CURRENT_TIME
);

const playerTimeUpdateHandler = data => {
  localStorageService.save(
    localStorageKeys.VIDEOPLAYER_CURRENT_TIME,
    data.seconds
  );
};

if (playerCurrentTime) {
  player.ready().then(function () {
    player.setCurrentTime(playerCurrentTime).catch(function (error) {
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
}

player.on('timeupdate', throttle(playerTimeUpdateHandler, 1000));
