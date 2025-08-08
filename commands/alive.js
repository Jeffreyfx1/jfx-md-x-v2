const fs = require('fs');
const settings = require("../settings");

async function aliveCommand(sock, chatId, message) {
    try {
        const message1 = `*ᴊꜰx ᴍᴅ-xᴠ2 is Active!*\n\n` +
                       `*ᴠᴇʀꜱɪᴏɴ:* ${settings.version}\n` +
                       `*ꜱᴛᴀᴛᴜꜱ:* ᴏɴʟɪɴᴇ\n` +
                       `*ᴍᴏᴅᴇ:* ᴘᴜʙʟɪᴄ\n\n` +
                       `*🌟 ꜰᴇᴀᴛᴜʀᴇꜱ:*\n` +
                      `• ɢʀᴏᴜᴘ ᴍᴀɴᴀɢᴇᴍᴇɴᴛ\n` +
                    `• ᴀɴᴛɪʟɪɴᴋ ᴘʀᴏᴛᴇᴄᴛɪᴏɴ\n` +
                     `• ꜰᴜɴ ᴄᴏᴍᴍᴀɴᴅꜱ\n` +
                    `• ᴀɴᴅ ᴍᴏʀᴇ!\n\n` +
            `ᴛʏᴘᴇ *.menu* ꜰᴏʀ ꜰᴜʟʟ ᴄᴏᴍᴍᴀɴᴅ ʟɪꜱᴛ`;

        await sock.sendMessage(chatId, {
            text: message1,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363420646690174@newsletter',
                    newsletterName: '𝐉𝐅𝐗 𝐌𝐃-𝐗',
                    serverMessageId: -1
                }
            }
        }, { quoted: message });

        // 🔊 Send audio response
        const audioBuffer = fs.readFileSync('./audio/alive.mp3');
        await sock.sendMessage(chatId, {
            audio: audioBuffer,
            mimetype: 'audio/mpeg',
            ptt: true
        }, { quoted: message });

    } catch (error) {
        console.error('Error in alive command:', error);
        await sock.sendMessage(chatId, { text: 'Bot is alive and running!' }, { quoted: message });
    }
}

module.exports = aliveCommand;
