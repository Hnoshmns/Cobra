const cobra = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
//language
const Language = require('../language');
const Lang = Language.getString('wallpaper');

if (Config.WORKTYPE == 'private') {
cobra.addCommand({pattern: 'prologo', fromMe: true, desc: Lang.TET_DESC}, (async (message, match) => {

    var respoimage = await axios.get(Config.LOGOPK_IMG, { responseType: 'arraybuffer' })

    await message.sendMessage (Buffer.from (respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*━━━━━🐍COBRA LOGO PACK🐍━━━━━*
*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .devil 
🔹𝙐𝙨𝙚➜ (.devil cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .bear 
🔹𝙐𝙨𝙚➜ (.bear cobra) 

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .wolf 
🔹𝙐𝙨𝙚➜ (.wolf cobra/bot)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .neon 
🔹𝙐𝙨𝙚➜ (.neon cobra/bot)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .future
🔹𝙐𝙨𝙚➜ (.future cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .2neon
🔹𝙐𝙨𝙚➜ (.2neon cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .3neon
🔹𝙐𝙨𝙚➜ (.3neon cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .light
🔹𝙐𝙨𝙚➜ (.light cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .joker
🔹𝙐𝙨𝙚➜ (.joker cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .ninja
🔹𝙐𝙨𝙚➜ (.ninja cobra/bot)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .gerband
🔹𝙐𝙨𝙚➜ (.gerband cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .bokeh
🔹𝙐𝙨𝙚➜  (.bokeh cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .marvel
🔹𝙐𝙨𝙚➜ (.marvel cobra/bot)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .2marvel
🔹𝙐𝙨𝙚➜ (.2marvel cobra/cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .avengers 
🔹𝙐𝙨𝙚➜ (.xmas cobra/cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .graf
🔹𝙐𝙨𝙚➜ (.graf cobra/cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .2graf
🔹𝙐𝙨𝙚➜ (.2graf cobra/cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .lion
🔹𝙐𝙨𝙚➜ (.lion cobra/cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .ice
🔹𝙐𝙨𝙚➜ (.ice cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .space
🔹𝙐𝙨𝙚➜ (.space cobra/cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .smoke
🔹𝙐𝙨𝙚➜ (.smoke cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .glow
🔹𝙐𝙨𝙚➜ (.glow cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .fire
🔹𝙐𝙨𝙚➜ (.fire cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .harry
🔹𝙐𝙨𝙚➜ (.harry cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .cup
🔹𝙐𝙨𝙚➜ (.cup cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .cemetery
🔹𝙐𝙨𝙚➜ (.cemetery cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .glitch
🔹𝙐𝙨𝙚➜ (.glitch cobra/bot)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .cup
🔹𝙐𝙨𝙚➜ (.cup cobra)
*━━━━━LOGO PACK━━━*
_*🌍ᴅᴇᴠᴇʟᴏᴘᴇʀ ꜱɪꜱᴜʟᴀ ᴡᴇʟɢᴀᴍᴀɢᴇ*_
`}) 

 }));
}

if (Config.WORKTYPE == 'public') {
cobra.addCommand({pattern: 'prologo', fromMe: false, desc: Lang.TET_DESC}, (async (message, match) => {

    var respoimage = await axios.get(Config.LOGOPK_IMG, { responseType: 'arraybuffer' })

    await message.sendMessage (Buffer.from (respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*━━━━━🐍COBRA LOGO PACK🐍━━━━━*
*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .devil 
🔹𝙐𝙨𝙚➜ (.devil cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .bear 
🔹𝙐𝙨𝙚➜ (.bear cobra) 

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .wolf 
🔹𝙐𝙨𝙚➜ (.wolf cobra/bot)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .neon 
🔹𝙐𝙨𝙚➜ (.neon cobra/bot)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .future
🔹𝙐𝙨𝙚➜ (.future cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .2neon
🔹𝙐𝙨𝙚➜ (.2neon cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .3neon
🔹𝙐𝙨𝙚➜ (.3neon cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .light
🔹𝙐𝙨𝙚➜ (.light cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .joker
🔹𝙐𝙨𝙚➜ (.joker cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .ninja
🔹𝙐𝙨𝙚➜ (.ninja cobra/bot)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .gerband
🔹𝙐𝙨𝙚➜ (.gerband cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .bokeh
🔹𝙐𝙨𝙚➜  (.bokeh cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .marvel
🔹𝙐𝙨𝙚➜ (.marvel cobra/bot)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .2marvel
🔹𝙐𝙨𝙚➜ (.2marvel cobra/cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .avengers 
🔹𝙐𝙨𝙚➜ (.xmas cobra/cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .graf
🔹𝙐𝙨𝙚➜ (.graf cobra/cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .2graf
🔹𝙐𝙨𝙚➜ (.2graf cobra/cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .lion
🔹𝙐𝙨𝙚➜ (.lion cobra/cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .ice
🔹𝙐𝙨𝙚➜ (.ice cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .space
🔹𝙐𝙨𝙚➜ (.space cobra/cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .smoke
🔹𝙐𝙨𝙚➜ (.smoke cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .glow
🔹𝙐𝙨𝙚➜ (.glow cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .fire
🔹𝙐𝙨𝙚➜ (.fire cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .harry
🔹𝙐𝙨𝙚➜ (.harry cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .cup
🔹𝙐𝙨𝙚➜ (.cup cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .cemetery
🔹𝙐𝙨𝙚➜ (.cemetery cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .glitch
🔹𝙐𝙨𝙚➜ (.glitch cobra/bot)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .cup
🔹𝙐𝙨𝙚➜ (.cup cobra)
*━━━━━LOGO PACK━━━*
_*🌍ᴅᴇᴠᴇʟᴏᴘᴇʀ ꜱɪꜱᴜʟᴀ ᴡᴇʟɢᴀᴍᴀɢᴇ*_
`}) 

 }));
}
