/* coded by sisula welgamage
cobra bot team
2021
*/
const cobra = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
//language
const Language = require('../language');
const Lang = Language.getString('wallpaper');

if (Config.WORKTYPE == 'private') {
cobra.addCommand({pattern: 'logopro', fromMe: true, desc: Lang.TET_DESC}, (async (message, match) => {

    var logoimg = await axios.get(Config.LOGOPK_IMG, { responseType: 'arraybuffer' })

    await message.sendMessage (Buffer.from (logoimg.data), MessageType.image, {mimetype: Mimetype.png, caption: `*━━━━━🐍COBRA LOGO PACK🐍━━━━━*
*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .gstyle
🔹𝙐𝙨𝙚➜ .gstyle (.gstyle cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .smetalic 
🔹𝙐𝙨𝙚➜ (.smetalic  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .swater3d 
🔹𝙐𝙨𝙚➜ (.swater3d  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .cutpaper 
🔹𝙐𝙨𝙚➜ (.cutpaper  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .lshadow 
🔹𝙐𝙨𝙚➜  (.lshadow  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .gedge 
🔹𝙐𝙨𝙚➜ (.gedge  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .anglewing 
🔹𝙐𝙨𝙚➜ (.anglewing  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .fwing  
🔹𝙐𝙨𝙚➜ (.fwing  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .lgream 
🔹𝙐𝙨𝙚➜ (.lgream  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .yasuo 
🔹𝙐𝙨𝙚➜ (.yasuo  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .lstage 
🔹𝙐𝙨𝙚➜ (.lstage  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .vgalaxy  
🔹𝙐𝙨𝙚➜ (.vgalaxy  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .fdragon 
🔹𝙐𝙨𝙚➜ (.fdragon  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .viettel 
🔹𝙐𝙨𝙚➜ Text (.viettel  cobra)
*━━━━━🐍COBRA LOGO PACK🐍━━━*
_*🌍ᴅᴇᴠᴇʟᴏᴘᴇʀ ꜱɪꜱᴜʟᴀ ᴡᴇʟɢᴀᴍᴀɢᴇ*_
`}) 

 }));
}
if (Config.WORKTYPE == 'public') {
cobra.addCommand({pattern: 'logopro', fromMe: true, desc: Lang.TET_DESC}, (async (message, match) => {

    var logoimg = await axios.get(Config.LOGOPK_IMG, { responseType: 'arraybuffer' })

    await message.sendMessage (Buffer.from (logoimg.data), MessageType.image, {mimetype: Mimetype.png, caption: `*━━━━━🐍COBRA LOGO PACK🐍━━━━━*
*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .gstyle
🔹𝙐𝙨𝙚➜ .gstyle (.gstyle cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .smetalic 
🔹𝙐𝙨𝙚➜ (.smetalic  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .swater3d 
🔹𝙐𝙨𝙚➜ (.swater3d  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .cutpaper 
🔹𝙐𝙨𝙚➜ (.cutpaper  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .lshadow 
🔹𝙐𝙨𝙚➜  (.lshadow  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .gedge 
🔹𝙐𝙨𝙚➜ (.gedge  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .anglewing 
🔹𝙐𝙨𝙚➜ (.anglewing  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .fwing  
🔹𝙐𝙨𝙚➜ (.fwing  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .lgream 
🔹𝙐𝙨𝙚➜ (.lgream  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .yasuo 
🔹𝙐𝙨𝙚➜ (.yasuo  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .lstage 
🔹𝙐𝙨𝙚➜ (.lstage  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .vgalaxy  
🔹𝙐𝙨𝙚➜ (.vgalaxy  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .fdragon 
🔹𝙐𝙨𝙚➜ (.fdragon  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .viettel 
🔹𝙐𝙨𝙚➜ Text (.viettel  cobra)
*━━━━━🐍COBRA LOGO PACK🐍━━━*
_*🌍ᴅᴇᴠᴇʟᴏᴘᴇʀ ꜱɪꜱᴜʟᴀ ᴡᴇʟɢᴀᴍᴀɢᴇ*_
`}) 

 }));
}
if (Config.WORKTYPE == 'public') {
cobra.addCommand({pattern: 'logopro', fromMe: false, desc: Lang.TET_DESC}, (async (message, match) => {

    var logoimg = await axios.get(Config.LOGOPK_IMG, { responseType: 'arraybuffer' })

    await message.sendMessage (Buffer.from (logoimg.data), MessageType.image, {mimetype: Mimetype.png, caption: `*━━━━━🐍COBRA LOGO PACK🐍━━━━━*
*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .gstyle
🔹𝙐𝙨𝙚➜ .gstyle (.gstyle cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .smetalic 
🔹𝙐𝙨𝙚➜ (.smetalic  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .swater3d 
🔹𝙐𝙨𝙚➜ (.swater3d  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .cutpaper 
🔹𝙐𝙨𝙚➜ (.cutpaper  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .lshadow 
🔹𝙐𝙨𝙚➜  (.lshadow  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .gedge 
🔹𝙐𝙨𝙚➜ (.gedge  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .anglewing 
🔹𝙐𝙨𝙚➜ (.anglewing  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .fwing  
🔹𝙐𝙨𝙚➜ (.fwing  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .lgream 
🔹𝙐𝙨𝙚➜ (.lgream  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .yasuo 
🔹𝙐𝙨𝙚➜ (.yasuo  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .lstage 
🔹𝙐𝙨𝙚➜ (.lstage  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .vgalaxy  
🔹𝙐𝙨𝙚➜ (.vgalaxy  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .fdragon 
🔹𝙐𝙨𝙚➜ (.fdragon  cobra)

*🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜* .viettel 
🔹𝙐𝙨𝙚➜ Text (.viettel  cobra)
*━━━━━🐍COBRA LOGO PACK🐍━━━*
_*🌍ᴅᴇᴠᴇʟᴏᴘᴇʀ ꜱɪꜱᴜʟᴀ ᴡᴇʟɢᴀᴍᴀɢᴇ*_
`}) 

 }));
}
