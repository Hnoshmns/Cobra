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
*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .lovemsg  
🔹𝙐𝙨𝙚➜ (.lovemsg  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .horror1  
🔹𝙐𝙨𝙚➜ (.horror1  cobra) 

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .thunder  
🔹𝙐𝙨𝙚➜ (.thunder  cobra/bot)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .cloud  
🔹𝙐𝙨𝙚➜ (.cloud  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .blackpink 
🔹𝙐𝙨𝙚➜ (.blackpink  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .dropwater 
🔹𝙐𝙨𝙚➜ (.dropwater  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .rcloud 
🔹𝙐𝙨𝙚➜ (.rcloud  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .fgraved 
🔹𝙐𝙨𝙚➜ (.light cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .joker
🔹𝙐𝙨𝙚➜ (.fgraved  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .fsand 
🔹𝙐𝙨𝙚➜ (.fsand  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .feach 
🔹𝙐𝙨𝙚➜ (.gerband cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .1917 
🔹𝙐𝙨𝙚➜  (.1917   cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .blood 
🔹𝙐𝙨𝙚➜ (.blood  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .fwindow 
🔹𝙐𝙨𝙚➜ (.fwindow  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .nature  
🔹𝙐𝙨𝙚➜ (.nature  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .spark 
🔹𝙐𝙨𝙚➜ (.spark  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .2blood 
🔹𝙐𝙨𝙚➜ (.2blood  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .xpsure 
🔹𝙐𝙨𝙚➜ (.xpsure  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .magma 
🔹𝙐𝙨𝙚➜ (.magma  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .shadow 
🔹𝙐𝙨𝙚➜ (.shadow  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .smoke
🔹𝙐𝙨𝙚➜ (.smoke cobra)

*━━━━━LOGO PACK━━━*
_*🌍ᴅᴇᴠᴇʟᴏᴘᴇʀ ꜱɪꜱᴜʟᴀ ᴡᴇʟɢᴀᴍᴀɢᴇ*_
`}) 

 }));
}
if (Config.WORKTYPE == 'public') {
cobra.addCommand({pattern: 'prologo', fromMe: true, desc: Lang.TET_DESC}, (async (message, match) => {

    var respoimage = await axios.get(Config.LOGOPK_IMG, { responseType: 'arraybuffer' })

    await message.sendMessage (Buffer.from (respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*━━━━━🐍COBRA LOGO PACK🐍━━━━━*
*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .lovemsg  
🔹𝙐𝙨𝙚➜ (.lovemsg  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .horror1  
🔹𝙐𝙨𝙚➜ (.horror1  cobra) 

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .thunder  
🔹𝙐𝙨𝙚➜ (.thunder  cobra/bot)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .cloud  
🔹𝙐𝙨𝙚➜ (.cloud  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .blackpink 
🔹𝙐𝙨𝙚➜ (.blackpink  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .dropwater 
🔹𝙐𝙨𝙚➜ (.dropwater  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .rcloud 
🔹𝙐𝙨𝙚➜ (.rcloud  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .fgraved 
🔹𝙐𝙨𝙚➜ (.light cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .joker
🔹𝙐𝙨𝙚➜ (.fgraved  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .fsand 
🔹𝙐𝙨𝙚➜ (.fsand  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .feach 
🔹𝙐𝙨𝙚➜ (.gerband cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .1917 
🔹𝙐𝙨𝙚➜  (.1917   cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .blood 
🔹𝙐𝙨𝙚➜ (.blood  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .fwindow 
🔹𝙐𝙨𝙚➜ (.fwindow  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .nature  
🔹𝙐𝙨𝙚➜ (.nature  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .spark 
🔹𝙐𝙨𝙚➜ (.spark  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .2blood 
🔹𝙐𝙨𝙚➜ (.2blood  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .xpsure 
🔹𝙐𝙨𝙚➜ (.xpsure  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .magma 
🔹𝙐𝙨𝙚➜ (.magma  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .shadow 
🔹𝙐𝙨𝙚➜ (.shadow  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .smoke
🔹𝙐𝙨𝙚➜ (.smoke cobra)

*━━━━━LOGO PACK━━━*
_*🌍ᴅᴇᴠᴇʟᴏᴘᴇʀ ꜱɪꜱᴜʟᴀ ᴡᴇʟɢᴀᴍᴀɢᴇ*_
`}) 

 }));
}
if (Config.WORKTYPE == 'public') {
cobra.addCommand({pattern: 'prologo', fromMe: false, desc: Lang.TET_DESC}, (async (message, match) => {

    var respoimage = await axios.get(Config.LOGOPK_IMG, { responseType: 'arraybuffer' })

    await message.sendMessage (Buffer.from (respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*━━━━━🐍COBRA LOGO PACK🐍━━━━━*
*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .lovemsg  
🔹𝙐𝙨𝙚➜ (.lovemsg  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .horror1  
🔹𝙐𝙨𝙚➜ (.horror1  cobra) 

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .thunder  
🔹𝙐𝙨𝙚➜ (.thunder  cobra/bot)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .cloud  
🔹𝙐𝙨𝙚➜ (.cloud  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .blackpink 
🔹𝙐𝙨𝙚➜ (.blackpink  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜*  .dropwater 
🔹𝙐𝙨𝙚➜ (.dropwater  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .rcloud 
🔹𝙐𝙨𝙚➜ (.rcloud  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .fgraved 
🔹𝙐𝙨𝙚➜ (.light cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .joker
🔹𝙐𝙨𝙚➜ (.fgraved  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .fsand 
🔹𝙐𝙨𝙚➜ (.fsand  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .feach 
🔹𝙐𝙨𝙚➜ (.gerband cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .1917 
🔹𝙐𝙨𝙚➜  (.1917   cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .blood 
🔹𝙐𝙨𝙚➜ (.blood  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .fwindow 
🔹𝙐𝙨𝙚➜ (.fwindow  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .nature  
🔹𝙐𝙨𝙚➜ (.nature  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .spark 
🔹𝙐𝙨𝙚➜ (.spark  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .2blood 
🔹𝙐𝙨𝙚➜ (.2blood  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .xpsure 
🔹𝙐𝙨𝙚➜ (.xpsure  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .magma 
🔹𝙐𝙨𝙚➜ (.magma  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .shadow 
🔹𝙐𝙨𝙚➜ (.shadow  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .smoke
🔹𝙐𝙨𝙚➜ (.smoke cobra)

*━━━━━LOGO PACK━━━*
_*🌍ᴅᴇᴠᴇʟᴏᴘᴇʀ ꜱɪꜱᴜʟᴀ ᴡᴇʟɢᴀᴍᴀɢᴇ*_
`}) 

 }));
}
