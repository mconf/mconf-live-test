const bigbluebot = require('bigbluebot');

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

bigbluebot.run(actions);
