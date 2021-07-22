# mconf-live-test

Runs automated tests in a mconf-live/bigbluebutton instance using bigbluebot (https://github.com/mconf/bigbluebot) over browserless (https://www.browserless.io).

## setup

At `bot.env`, set:

```
BIGBLUEBOT_HOST=SERVER_URL
BIGBLUEBOT_SECRET=SERVER_SECRET
BIGBLUEBOT_VERSION=SERVER_VERSION
```

## run

```
docker-compose build
docker-compose up
```

## tests

From `run.js`:

```
let actions = async page => {
  // Joins listen only audio
  await bigbluebot.audio.modal.listen(page);


  // Joins video
  await bigbluebot.video.join(page);


  // Shares screenshare
  await bigbluebot.screenshare.share(page);


  // Leaves listen only audio
  await bigbluebot.audio.leave(page);


  // Joins microphone audio
  await bigbluebot.audio.modal.microphone(page);


  // Mutes microphone
  await bigbluebot.audio.mute(page);


  // Send chat messages
  await bigbluebot.chat.send(page);


  // Unmutes microphone audio
  await bigbluebot.audio.unmute(page);


  // Unshares screenshare
  await bigbluebot.screenshare.unshare(page);


  // Leaves microphone audio
  await bigbluebot.audio.leave(page);
}
```

## results

From console log:

```
bot            | INFO   2020-12-06T16:16:31.887Z Bots: 1
bot            | INFO   2020-12-06T16:16:31.889Z Life: 5 seconds
bot            | INFO   2020-12-06T16:16:31.889Z Creating meeting
bot            | INFO   2020-12-06T16:16:32.705Z Fetching en locale
bot            | DEBUG  2020-12-06T16:16:33.520Z Opening browser
bot            | INFO   2020-12-06T16:16:35.572Z Llewellyn Gerhold: join https://server at meeting
bot            | DEBUG  2020-12-06T16:16:41.116Z Llewellyn Gerhold: notice [aria-label^="Options"]
bot            | DEBUG  2020-12-06T16:16:43.129Z Llewellyn Gerhold: [aria-label^="Join audio modal"] is visible
bot            | DEBUG  2020-12-06T16:16:43.129Z Llewellyn Gerhold: skip audio join
bot            | INFO   2020-12-06T16:16:43.129Z Llewellyn Gerhold: perform audio modal listen
bot            | DEBUG  2020-12-06T16:16:43.129Z Llewellyn Gerhold: click [aria-label^="Listen only"]
bot            | DEBUG  2020-12-06T16:16:46.187Z Llewellyn Gerhold: [aria-label^="Leave audio"] is visible
bot            | PASS   2020-12-06T16:16:46.187Z Llewellyn Gerhold: audio modal listen
bot            | DEBUG  2020-12-06T16:16:47.188Z Llewellyn Gerhold: [aria-label^="Join audio modal"] is hidden
bot            | DEBUG  2020-12-06T16:16:47.188Z Llewellyn Gerhold: skip audio modal close
bot            | INFO   2020-12-06T16:16:47.188Z Llewellyn Gerhold: perform video join
bot            | DEBUG  2020-12-06T16:16:47.188Z Llewellyn Gerhold: click [aria-label^="Share webcam"]
bot            | DEBUG  2020-12-06T16:16:49.248Z Llewellyn Gerhold: click [aria-label^="Start sharing"]
bot            | DEBUG  2020-12-06T16:16:54.857Z Llewellyn Gerhold: [aria-label^="Make Llewellyn Gerhold fullscreen"] is visible
bot            | PASS   2020-12-06T16:16:54.858Z Llewellyn Gerhold: video join
bot            | DEBUG  2020-12-06T16:16:55.858Z Llewellyn Gerhold: [aria-label^="Join audio modal"] is hidden
bot            | DEBUG  2020-12-06T16:16:55.858Z Llewellyn Gerhold: skip audio modal close
bot            | INFO   2020-12-06T16:16:55.858Z Llewellyn Gerhold: perform screenshare share
bot            | DEBUG  2020-12-06T16:16:55.858Z Llewellyn Gerhold: click [aria-label^="Share your screen"]
bot            | DEBUG  2020-12-06T16:16:58.903Z Llewellyn Gerhold: [aria-label^="Make Screen share fullscreen"] is visible
bot            | PASS   2020-12-06T16:16:58.903Z Llewellyn Gerhold: screenshare share
bot            | WARN   2020-12-06T16:16:59.905Z Llewellyn Gerhold: [aria-label^="Join audio"] is not visible
bot            | INFO   2020-12-06T16:16:59.905Z Llewellyn Gerhold: perform audio leave
bot            | DEBUG  2020-12-06T16:16:59.905Z Llewellyn Gerhold: click [aria-label^="Leave audio"]
bot            | DEBUG  2020-12-06T16:17:02.996Z Llewellyn Gerhold: [aria-label^="Join audio"] is visible
bot            | PASS   2020-12-06T16:17:02.996Z Llewellyn Gerhold: audio leave
bot            | WARN   2020-12-06T16:17:03.997Z Llewellyn Gerhold: [aria-label^="Join audio modal"] is not visible
bot            | INFO   2020-12-06T16:17:03.997Z Llewellyn Gerhold: perform audio join
bot            | DEBUG  2020-12-06T16:17:03.998Z Llewellyn Gerhold: click [aria-label^="Join audio"]
bot            | DEBUG  2020-12-06T16:17:07.035Z Llewellyn Gerhold: [aria-label^="Join audio modal"] is visible
bot            | PASS   2020-12-06T16:17:07.036Z Llewellyn Gerhold: audio join
bot            | INFO   2020-12-06T16:17:07.036Z Llewellyn Gerhold: perform audio modal microphone
bot            | DEBUG  2020-12-06T16:17:07.036Z Llewellyn Gerhold: click [aria-label^="Microphone"]
bot            | DEBUG  2020-12-06T16:17:09.122Z Llewellyn Gerhold: click [aria-label^="Echo is audible"]
bot            | DEBUG  2020-12-06T16:17:18.008Z Llewellyn Gerhold: [aria-label^="Leave audio"] is visible
bot            | PASS   2020-12-06T16:17:18.008Z Llewellyn Gerhold: audio modal microphone
bot            | DEBUG  2020-12-06T16:17:18.017Z Llewellyn Gerhold: [aria-label^="Unmute"] is visible
bot            | DEBUG  2020-12-06T16:17:18.017Z Llewellyn Gerhold: skip audio mute
bot            | DEBUG  2020-12-06T16:17:19.019Z Llewellyn Gerhold: [aria-label^="Join audio modal"] is hidden
bot            | DEBUG  2020-12-06T16:17:19.019Z Llewellyn Gerhold: skip audio modal close
bot            | DEBUG  2020-12-06T16:17:19.029Z Llewellyn Gerhold: [aria-label^="User list"] is visible
bot            | DEBUG  2020-12-06T16:17:19.029Z Llewellyn Gerhold: skip main panel open
bot            | DEBUG  2020-12-06T16:17:19.041Z Llewellyn Gerhold: [aria-label^="Chat"] is visible
bot            | DEBUG  2020-12-06T16:17:19.041Z Llewellyn Gerhold: skip chat open
bot            | INFO   2020-12-06T16:17:19.041Z Llewellyn Gerhold: perform chat send
bot            | DEBUG  2020-12-06T16:17:19.042Z Llewellyn Gerhold: type Officia eligendi doloribus atque. in [aria-label^="Message input for chat"]
bot            | DEBUG  2020-12-06T16:17:19.410Z Llewellyn Gerhold: click [aria-label^="Send message"]
bot            | DEBUG  2020-12-06T16:17:21.461Z Llewellyn Gerhold: type Recusandae eum qui tempore perspiciatis in rerum corrupti. in [aria-label^="Message input for chat"]
bot            | DEBUG  2020-12-06T16:17:21.992Z Llewellyn Gerhold: click [aria-label^="Send message"]
bot            | DEBUG  2020-12-06T16:17:24.040Z Llewellyn Gerhold: type Qui ducimus sed. in [aria-label^="Message input for chat"]
bot            | DEBUG  2020-12-06T16:17:24.198Z Llewellyn Gerhold: click [aria-label^="Send message"]
bot            | DEBUG  2020-12-06T16:17:26.240Z Llewellyn Gerhold: type Mollitia nostrum dolorem facilis quod temporibus architecto quae sequi. in [aria-label^="Message input for chat"]
bot            | DEBUG  2020-12-06T16:17:26.896Z Llewellyn Gerhold: click [aria-label^="Send message"]
bot            | DEBUG  2020-12-06T16:17:28.925Z Llewellyn Gerhold: type Facilis officia rem non sed animi ipsum qui. in [aria-label^="Message input for chat"]
bot            | DEBUG  2020-12-06T16:17:29.315Z Llewellyn Gerhold: click [aria-label^="Send message"]
bot            | PASS   2020-12-06T16:17:32.354Z Llewellyn Gerhold: chat send
bot            | WARN   2020-12-06T16:17:33.357Z Llewellyn Gerhold: [aria-label^="Mute"] is not visible
bot            | INFO   2020-12-06T16:17:33.357Z Llewellyn Gerhold: perform audio unmute
bot            | DEBUG  2020-12-06T16:17:33.357Z Llewellyn Gerhold: click [aria-label^="Unmute"]
bot            | DEBUG  2020-12-06T16:17:36.428Z Llewellyn Gerhold: [aria-label^="Mute"] is visible
bot            | PASS   2020-12-06T16:17:36.428Z Llewellyn Gerhold: audio unmute
bot            | INFO   2020-12-06T16:17:36.429Z Llewellyn Gerhold: perform screenshare unshare
bot            | DEBUG  2020-12-06T16:17:36.429Z Llewellyn Gerhold: click [aria-label^="Stop sharing your screen"]
bot            | DEBUG  2020-12-06T16:17:39.517Z Llewellyn Gerhold: [aria-label^="Share your screen"] is visible
bot            | PASS   2020-12-06T16:17:39.517Z Llewellyn Gerhold: screenshare unshare
bot            | WARN   2020-12-06T16:17:40.518Z Llewellyn Gerhold: [aria-label^="Join audio"] is not visible
bot            | INFO   2020-12-06T16:17:40.519Z Llewellyn Gerhold: perform audio leave
bot            | DEBUG  2020-12-06T16:17:40.519Z Llewellyn Gerhold: click [aria-label^="Leave audio"]
bot            | DEBUG  2020-12-06T16:17:43.631Z Llewellyn Gerhold: [aria-label^="Join audio"] is visible
bot            | PASS   2020-12-06T16:17:43.632Z Llewellyn Gerhold: audio leave
bot            | INFO   2020-12-06T16:17:48.633Z Llewellyn Gerhold: leaving
```

A successful test will be indicated with the `PASS` index at the logs. Otherwise the log will be described as `FAIL`.

```
bot            | PASS   2020-12-06T16:16:46.187Z Llewellyn Gerhold: audio modal listen
bot            | PASS   2020-12-06T16:16:54.858Z Llewellyn Gerhold: video join
bot            | PASS   2020-12-06T16:16:58.903Z Llewellyn Gerhold: screenshare share
bot            | PASS   2020-12-06T16:17:02.996Z Llewellyn Gerhold: audio leave
bot            | PASS   2020-12-06T16:17:07.036Z Llewellyn Gerhold: audio join
bot            | PASS   2020-12-06T16:17:18.008Z Llewellyn Gerhold: audio modal microphone
bot            | PASS   2020-12-06T16:17:32.354Z Llewellyn Gerhold: chat send
bot            | PASS   2020-12-06T16:17:36.428Z Llewellyn Gerhold: audio unmute
bot            | PASS   2020-12-06T16:17:39.517Z Llewellyn Gerhold: screenshare unshare
bot            | PASS   2020-12-06T16:17:43.632Z Llewellyn Gerhold: audio leave
```
