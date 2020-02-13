const bigbluebot = require('bigbluebot')

let actions = async page => {
  await bigbluebot.audio.modal.listen(page)
  await bigbluebot.video.join(page)
  await bigbluebot.audio.leave(page)
  await bigbluebot.audio.modal.microphone(page)
  await bigbluebot.audio.mute(page)
  await bigbluebot.chat.send(page)
  await bigbluebot.audio.unmute(page)
}

bigbluebot.run(actions)
