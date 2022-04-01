require("../settings/config.js");
const {
  WAConnection,
  MessageType,
  Presence,
  MessageOptions,
  Mimetype,
  WALocationMessage,
  WA_MESSAGE_STUB_TYPES,
  WA_DEFAULT_EPHEMERAL,
  ReconnectMode,
  ProxyAgent,
  GroupSettingChange,
  waChatKey,
  mentionedJid,
  processTime,
} = require("@adiwajshing/baileys");

//module exports
const axios = require("axios");
const chalk = require("chalk");
const { exec, spawn, execSync } = require("child_process");
const crypto = require("crypto");
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI();
const fetch = require("node-fetch");
const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
const ffmpeg = require("fluent-ffmpeg");
ffmpeg.setFfmpegPath(ffmpegPath);
const figlet = require("figlet");
const fs = require("fs");
const gis = require("g-i-s");
const hx = require("hxz-api");
const ms = require("parse-ms");
const moment = require("moment-timezone");
const request = require("request");
const speed = require("performance-now");
const util = require("util");
const yts = require("yt-search");
const ytdl = require("ytdl-core");
const zee = require("xfarr-api");

//library
const {
  simih,
  getBuffer,
  h2k,
  generateMessageID,
  getGroupAdmins,
  getRandom,
  banner,
  start,
  info,
  success,
  close,
} = require("../lib/functions");
const { fetchJson, kyun, fetchText } = require("../lib/fetcher");
const { color, bgcolor } = require("../lib/color");
const { yta, ytv } = require("../lib/y2mate");
const simple = require("../lib/simple");
const { uploadImages } = require("../lib/uploadimage");

//json
const antilink = JSON.parse(fs.readFileSync("./database/group/antilink.json"));

const tebakgambar = JSON.parse(
  fs.readFileSync("./database/game/tebakgambar.json")
);

/*
# language
# available now [ind]
*/
const { ind } = require(`./help`);
lang = ind;

//times
const time = moment(Date.now())
  .tz("Asia/Jakarta")
  .locale("id")
  .format("HH:mm:ss z");
const salam = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("a");

module.exports = haruka = async (haruka, mek) => {
  try {
    if (!mek.hasNewMessage) return;
    mek = mek.messages.all()[0];
    if (!mek.message) return;
    if (mek.key && mek.key.remoteJid == "status@broadcast") return;
    mek.message =
      Object.keys(mek.message)[0] === "ephemeralMessage"
        ? mek.message.ephemeralMessage.message
        : mek.message;
    const content = JSON.stringify(mek.message);
    const from = mek.key.remoteJid;
    const {
      text,
      extendedText,
      contact,
      location,
      liveLocation,
      image,
      video,
      sticker,
      document,
      audio,
      product,
    } = MessageType;
    const wita = moment(Date.now())
      .tz("Asia/Makassar")
      .locale("id")
      .format("HH:mm:ss z");
    const wit = moment(Date.now())
      .tz("Asia/Jayapura")
      .locale("id")
      .format("HH:mm:ss z");
    const type = Object.keys(mek.message)[0];
    const cmd =
      type === "conversation" && mek.message.conversation
        ? mek.message.conversation
        : type == "imageMessage" && mek.message.imageMessage.caption
        ? mek.message.imageMessage.caption
        : type == "videoMessage" && mek.message.videoMessage.caption
        ? mek.message.videoMessage.caption
        : type == "extendedTextMessage" && mek.message.extendedTextMessage.text
        ? mek.message.extendedTextMessage.text
        : "".slice(1).trim().split(/ +/).shift().toLowerCase();
    const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd)
      ? cmd.match(/^[.]/gi)
      : "-";
    body =
      type === "conversation" && mek.message.conversation.startsWith(prefix)
        ? mek.message.conversation
        : type == "imageMessage" &&
          mek.message.imageMessage.caption.startsWith(prefix)
        ? mek.message.imageMessage.caption
        : type == "videoMessage" &&
          mek.message.videoMessage.caption.startsWith(prefix)
        ? mek.message.videoMessage.caption
        : type == "extendedTextMessage" &&
          mek.message.extendedTextMessage.text.startsWith(prefix)
        ? mek.message.extendedTextMessage.text
        : type == "buttonsResponseMessage" && mek.message[type].selectedButtonId
        ? mek.message[type].selectedButtonId
        : "";
    budy =
      type === "conversation"
        ? mek.message.conversation
        : type === "extendedTextMessage"
        ? mek.message.extendedTextMessage.text
        : "";
    var pes =
      type === "conversation" && mek.message.conversation
        ? mek.message.conversation
        : type == "imageMessage" && mek.message.imageMessage.caption
        ? mek.message.imageMessage.caption
        : type == "videoMessage" && mek.message.videoMessage.caption
        ? mek.message.videoMessage.caption
        : type == "extendedTextMessage" && mek.message.extendedTextMessage.text
        ? mek.message.extendedTextMessage.text
        : "";
    const manti = pes.slice(0).trim().split(/ +/).shift().toLowerCase();
    const command = body.slice(1).trim().split(/ +/).shift().toLowerCase();
    const args = body.trim().split(/ +/).slice(1);
    const isCmd = body.startsWith(prefix);
    const q = args.join(" ");
    const botNumber = haruka.user.jid;
    const botNumberss = haruka.user.jid + "@c.us";
    const isGroup = from.endsWith("@g.us");
    const sender = mek.key.fromMe
      ? haruka.user.jid
      : isGroup
      ? mek.participant
      : mek.key.remoteJid;
    const ownerNumber = [`${ownernumber}@s.whatsapp.net`];
    const isOwner = mek.key.fromMe
      ? haruka.user.jid
      : ownerNumber.includes(sender);
    const totalchat = await haruka.chats.all();
    const groupMetadata = isGroup ? await haruka.groupMetadata(from) : "";
    const groupName = isGroup ? groupMetadata.subject : "";
    const groupId = isGroup ? groupMetadata.jid : "";
    const groupMembers = isGroup ? groupMetadata.participants : "";
    const groupDesc = isGroup ? groupMetadata.desc : "";
    const groupOwner = isGroup ? groupMetadata.owner : "";
    const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : "";
    const isBotGroupAdmins = groupAdmins.includes(botNumber) || false;
    const isGroupAdmins = groupAdmins.includes(sender) || false;
    const conts = mek.key.fromMe
      ? haruka.user.jid
      : haruka.contacts[sender] || { notify: jid.replace(/@.+/, "") };
    const pushname = mek.key.fromMe
      ? haruka.user.name
      : conts.notify || conts.vname || conts.name || "-";

    //apaya
    const isAntiLink = isGroup ? antilink.includes(from) : false;

    //fake reply
    let ftroli = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "6289523258649-1604595598@g.us",
      },
      message: {
        orderMessage: {
          itemCount: 2021,
          status: 200,
          thumbnail: thumbnail,
          surface: 200,
          message: `${botname} 🏟️\nBy ${ownername}`,
          orderTitle: "Nivth",
          sellerJid: "0@s.whatsapp.net",
        },
      },
      sendEphemeral: true,
    };
    let fdoc = {
      key: { participant: "0@s.whatsapp.net" },
      message: {
        documentMessage: { title: `© ${ownername}`, jpegThumbnail: thumbnail },
      },
    };
    let fvn = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}),
      },
      message: {
        audioMessage: {
          mimetype: "audio/ogg; codecs=opus",
          seconds: 99999,
          ptt: "true",
        },
      },
    };
    let fgif = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}),
      },
      message: {
        videoMessage: {
          title: `© ${ownername}`,
          h: `Hmm`,
          seconds: "99999",
          gifPlayback: "true",
          caption: `${botname} 🏟️\nBy ${ownername}`,
          jpegThumbnail: thumbnail,
        },
      },
    };
    let fgclink = {
      key: { participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net" },
      message: {
        groupInviteMessage: {
          groupJid: "6288213840883-1616169743@g.us",
          inviteCode: "m",
          groupName: "P",
          caption: `© ${botname}`,
          jpegThumbnail: thumbnail,
        },
      },
    };
    let fgclink2 = {
      key: { participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net" },
      message: {
        groupInviteMessage: {
          groupJid: "6288213840883-1616169743@g.us",
          inviteCode: "m",
          groupName: "P",
          caption: `© ${botname}`,
          jpegThumbnail: thumbnail,
        },
      },
    };
    let fvideo = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}),
      },
      message: {
        videoMessage: {
          title: `© ${ownername}`,
          h: `Hmm`,
          seconds: "99999",
          caption: `© ${ownername}`,
          jpegThumbnail: thumbnail,
        },
      },
    };
    let floc = {
      contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        stanzaId: "B826873620DD5947E683E3ABE663F263",
        participant: `0@s.whatsapp.net`,
        remoteJid: "6283136505591-1614953337@g.us",
        quotedMessage: {
          locationMessage: {
            degreesLatitude: 41.893714904785156,
            degreesLongitude: -87.63370513916016,
            name: botname,
            jpegThumbnail: thumbnail,
          },
        },
      },
    };
    let fkontak = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}),
      },
      message: {
        contactMessage: {
          displayName: `© ${ownername}`,
          vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername},\nitem1.TEL;waid=${
            sender.split("@")[0]
          }:${sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
          jpegThumbnail: thumbnail,
          thumbnail: thumbnail,
          sendEphemeral: true,
        },
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

    const reply = (teks) => {
      haruka.sendMessage(from, teks, text, { quoted: mek });
    };

    const mentions = (teks, memberr, id) => {
      id == null || id == undefined || id == false
        ? haruka.sendMessage(from, teks.trim(), extendedText, {
            contextInfo: { mentionedJid: memberr },
          })
        : haruka.sendMessage(from, teks.trim(), extendedText, {
            quoted: mek,
            contextInfo: { mentionedJid: memberr },
          });
    };
    const sleep = async (ms) => {
      return new Promise((resolve) => setTimeout(resolve, ms));
    };

    function bytesToSize(bytes) {
      return new Promise((resolve, reject) => {
        const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
        if (bytes === 0) return "n/a";
        const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
        if (i === 0) resolve(`${bytes} ${sizes[i]}`);
        resolve(`${(bytes / 1024 ** i).toFixed(1)} ${sizes[i]}`);
      });
    }

    const sendStickerFromUrl = async (to, url) => {
      var names = Date.now() / 10000;
      var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
          request(uri)
            .pipe(fs.createWriteStream(filename))
            .on("close", callback);
        });
      };
      download(url, "./stik" + names + ".png", async function () {
        console.log("selesai");
        let filess = "./stik" + names + ".png";
        let asw = "./stik" + names + ".webp";
        exec(
          `ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`,
          (err) => {
            let media = fs.readFileSync(asw);
            haruka.sendMessage(to, media, MessageType.sticker, { quoted: mek });
            fs.unlinkSync(filess);
            fs.unlinkSync(asw);
          }
        );
      });
    };

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
        haruka.sendMessage(to, media, type, {
          quoted: mek,
          mimetype: mime,
          caption: text,
          contextInfo: { mentionedJid: mids },
        });

        fs.unlinkSync(filename);
      });
    };
    const sendFileFromUrl = async (from, url, caption, mek, men) => {
      let mime = "";
      let res = await axios.head(url);
      mime = res.headers["content-type"];
      if (mime.split("/")[1] === "gif") {
        return haruka.sendMessage(from, await getBuffer(url), video, {
          caption: caption,
          gifPlayback: true,
          mentions: men ? men : [],
          mimetype: "video/mp4",
          quoted: mek,
        });
      }
      let type = mime.split("/")[0] + "Message";
      if (mime === "application/pdf") {
        return haruka.sendMessage(from, await getBuffer(url), document, {
          mimetype: "application/pdf",
          caption: caption,
          mentions: men ? men : [],
          quoted: mek,
        });
      }
      if (mime.split("/")[0] === "image") {
        return haruka.sendMessage(from, await getBuffer(url), image, {
          caption: caption,
          mentions: men ? men : [],
          quoted: mek,
        });
      }
      if (mime.split("/")[0] === "video") {
        return haruka.sendMessage(from, await getBuffer(url), video, {
          caption: caption,
          mentions: men ? men : [],
          mimetype: "video/mp4",
          quoted: mek,
        });
      }
      if (mime.split("/")[0] === "audio") {
        return haruka.sendMessage(from, await getBuffer(url), audio, {
          caption: caption,
          mentions: men ? men : [],
          mimetype: "audio/mpeg",
          quoted: mek,
        });
      }
    };

    // send message button
    const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      haruka.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
      );
    };
    const sendButLocation = async (
      id,
      text1,
      desc1,
      gam1,
      but = [],
      options = {}
    ) => {
      them = gam1;
      mediaxxaa = await haruka.prepareMessage(id, them, MessageType.location, {
        thumbnail: them,
      });
      locmhan = mediaxxaa.message["ephemeralMessage"]
        ? mediaxxaa.message.ephemeralMessage
        : mediaxxaa;
      const buttonMessages = {
        locationMessage: locmhan.message.locationMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 6,
      };
      haruka.sendMessage(
        id,
        buttonMessages,
        MessageType.buttonsMessage,
        options
      );
    };
    const sendButVideo = async (
      id,
      text1,
      desc1,
      vid1,
      but = [],
      options = {}
    ) => {
      them = vid1;
      mediaxxaa = await haruka.prepareMessage(id, them, MessageType.video);
      vimhan = mediaxxaa.message["ephemeralMessage"]
        ? mediaxxaa.message.ephemeralMessage
        : mediaxxaa;
      const buttonMessages = {
        videoMessage: vimhan.message.videoMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 5,
      };
      haruka.sendMessage(
        id,
        buttonMessages,
        MessageType.buttonsMessage,
        options
      );
    };
    const sendButImage = async (
      id,
      text1,
      desc1,
      vid1,
      but = [],
      options = {}
    ) => {
      them = vid1;
      mediaxxaa = await haruka.prepareMessage(id, them, MessageType.image, {
        thumbnail: Buffer.alloc(0),
      });
      imgmhan = mediaxxaa.message["ephemeralMessage"]
        ? mediaxxaa.message.ephemeralMessage
        : mediaxxaa;
      const buttonMessages = {
        imageMessage: imgmhan.message.imageMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 4,
      };
      haruka.sendMessage(
        id,
        buttonMessages,
        MessageType.buttonsMessage,
        options
      );
    };

    // antilink
    // if (manti.includes("://chat.whatsapp.com/")) {
    //   if (!(isGroup || isAntiLink || isGroupAdmins)) return;
    //   var kic = `${sender.split("@")[0]}@s.whatsapp.net`;
    //   await haruka.sendMessage(
    //     from,
    //     `Hmm maap nih gua kick, dilarang share link di group ini`,
    //     text,
    //     { quoted: mek }
    //   );
    //   haruka.groupRemove(from, [kic]).catch((e) => {
    //     reply(`Bot Harus Jadi Admin`);
    //   });
    // }

    //game
    if (tebakgambar.hasOwnProperty(sender.split("@")[0]) && !isCmd) {
      jawaban = tebakgambar[sender.split("@")[0]];
      if (budy.toLowerCase() == jawaban) {
        sendButMessage(
          from,
          "Selamat 😘 Jawaban kamu benar!",
          `• ${ownername}`,
          [
            {
              buttonId: `.tebakgambar`,
              buttonText: { displayText: "Tebak Gambar" },
              type: "RESPONSE",
            },
          ],
          { quoted: mek }
        );
        delete tebakgambar[sender.split("@")[0]];
        fs.writeFileSync(
          "./database/game/tebakgambar.json",
          JSON.stringify(tebakgambar)
        );
      } else {
        reply("Jawaban Salah!");
      }
    }

    colors = ["red", "pink", "white", "black", "blue", "yellow", "green"];
    // const isPremium = premium.includes(sender) || isOwner;
    const isMedia = type === "imageMessage" || type === "videoMessage";
    const isQuotedImage =
      type === "extendedTextMessage" && content.includes("imageMessage");
    const isQuotedAudio =
      type === "extendedTextMessage" && content.includes("audioMessage");
    const isQuotedVideo =
      type === "extendedTextMessage" && content.includes("videoMessage");
    const isQuotedSticker =
      type === "extendedTextMessage" && content.includes("stickerMessage");
    const isQuotedText =
      type === "extendedTextMessage" && content.includes("extendedTextMessage");

    //console termux
    if (!isCmd) {
      console.log(
        "|\x1b[1;33m MSG \x1b[1;33m|",
        time,
        chalk.yellow(budy),
        "from",
        chalk.green(pushname),
        "args :",
        chalk.green(args.length),
        "in",
        chalk.green(groupName ? groupName : "Private chat")
      );
    }
    if (!(isCmd || mek.key.fromMe)) {
      console.log(
        "|\x1b[1;32m CMD \x1b[1;37m|",
        time,
        chalk.green(command),
        "from",
        chalk.green(pushname),
        "args :",
        chalk.green(args.length),
        "in",
        chalk.green(groupName ? groupName : "Private chat")
      );
    }

    if (!mek.key.fromMe && global.self === true) return;

    switch (command) {
      case "menu":
      case "help":
      case "pogam":
        sendButLocation(
          from,
          lang.menu(prefix, salam, pushname),
          "© " + ownername,
          thumbnail,
          [
            {
              buttonId: ".owner",
              buttonText: { displayText: "Owner" },
              type: 1,
            },
            {
              buttonId: ".infobot",
              buttonText: { displayText: "Infobot" },
              type: 1,
            },
          ],
          { quoted: mek }
        );
        break;
      case "infobot":
        reply(`This bot is created by ${ownername}, and thanks to lord pogam`);
        break;
      case "owner":
        {
          const ownerContact = [
            ownernumber,
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
          ];
          let ini_list = [];
          for (let i of ownerContact.map((v) => v + "@s.whatsapp.net")) {
            const vname =
              haruka.contacts[i] != undefined
                ? haruka.contacts[i].vname || haruka.contacts[i].notify
                : undefined;
            ini_list.push({
              displayName: `${ownername}`,
              vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname}\nitem1.TEL;waid=${
                i.split("@")[0]
              }:${i.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
            });
          }
          hehe = await haruka.sendMessage(
            from,
            {
              displayName: `${ini_list.length} kontak`,
              contacts: ini_list,
            },
            "contactsArrayMessage",
            { quoted: mek }
          );
        }
        break;
      // Islami //
      case "listsurah":
        get_result = await fetchJson(
          `https://api.lolhuman.xyz/api/quran?apikey=${lolkey}`
        );
        get_result = get_result.result;
        ini_txt = "List Surah:\n";
        for (var x in get_result) {
          ini_txt += `${x}. ${get_result[x]}\n`;
        }
        reply(ini_txt);
        break;
      case "alquran":
        if (args.length < 1)
          return reply(
            `Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${
              prefix + command
            } 18/1-10`
          );
        urls = `https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${lolkey}`;
        quran = await fetchJson(urls);
        result = quran.result;
        ayat = result.ayat;
        ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`;
        for (var x of ayat) {
          arab = x.arab;
          nomor = x.ayat;
          latin = x.latin;
          indo = x.indonesia;
          ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`;
        }
        ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "");
        ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "");
        ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "");
        reply(ini_txt);
        break;
      case "alquranaudio":
        if (args.length == 0)
          return reply(
            `Example: ${prefix + command} 18 or ${prefix + command} 18/10`
          );
        surah = args[0];
        ini_buffer = await getBuffer(
          `https://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${lolkey}`
        );
        await haruka.sendMessage(from, ini_buffer, audio, {
          quoted: mek,
          mimetype: "audio/mp4",
        });
        break;
      case "asmaulhusna":
        get_result = await fetchJson(
          `https://api.lolhuman.xyz/api/asmaulhusna?apikey=${lolkey}`
        );
        get_result = get_result.result;
        ini_txt = `No : ${get_result.index}\n`;
        ini_txt += `Latin: ${get_result.latin}\n`;
        ini_txt += `Arab : ${get_result.ar}\n`;
        ini_txt += `Indonesia : ${get_result.id}\n`;
        ini_txt += `English : ${get_result.en}`;
        reply(ini_txt);
        break;
      case "kisahnabi":
        if (args.length == 0)
          return reply(`Example: ${prefix + command} Muhammad`);
        query = args.join(" ");
        get_result = await fetchJson(
          `https://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${lolkey}`
        );
        get_result = get_result.result;
        ini_txt = `Name : ${get_result.name}\n`;
        ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`;
        ini_txt += `Umur : ${get_result.age}\n`;
        ini_txt += `Tempat : ${get_result.place}\n`;
        ini_txt += `Story : \n${get_result.story}`;
        reply(ini_txt);
        break;
      case "jadwalsholat":
        if (args.length == 0)
          return reply(`Example: ${prefix + command} Yogyakarta`);
        daerah = args.join(" ");
        get_result = await fetchJson(
          `https://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${lolkey}`
        );
        get_result = get_result.result;
        ini_txt = `Wilayah : ${get_result.wilayah}\n`;
        ini_txt += `Tanggal : ${get_result.tanggal}\n`;
        ini_txt += `Sahur : ${get_result.sahur}\n`;
        ini_txt += `Imsak : ${get_result.imsak}\n`;
        ini_txt += `Subuh : ${get_result.subuh}\n`;
        ini_txt += `Terbit : ${get_result.terbit}\n`;
        ini_txt += `Dhuha : ${get_result.dhuha}\n`;
        ini_txt += `Dzuhur : ${get_result.dzuhur}\n`;
        ini_txt += `Ashar : ${get_result.ashar}\n`;
        ini_txt += `Maghrib : ${get_result.imsak}\n`;
        ini_txt += `Isya : ${get_result.isya}`;
        reply(ini_txt);
        break;

      case "donate":
        reply("buy me a coffe : https://www.buymeacoffee.com/nivkaiser");
        break;

      case "assalamualaikum":
      case "Assalamualaikum":
        reply("Waalaikumsalam");
        break;

      case "sticker":
      case "stiker":
      case "stickergif":
      case "stikergif":
      case "sgif":
      case "s":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          const encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          const media = await haruka.downloadAndSaveMediaMessage(encmedia);
          ran = getRandom(".webp");
          await ffmpeg(`./${media}`)
            .input(media)
            .on("start", function (cmd) {
              console.log(`Started : ${cmd}`);
            })
            .on("error", function (err) {
              console.log(`Error : ${err}`);
              fs.unlinkSync(media);
              reply("Eror");
            })
            .on("end", function () {
              console.log("Finish");
              haruka.sendMessage(from, fs.readFileSync(ran), sticker, {
                quoted: mek,
              });
              fs.unlinkSync(media);
              fs.unlinkSync(ran);
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(ran);
        } else if (
          ((isMedia && mek.message.videoMessage.seconds < 11) ||
            (isQuotedVideo &&
              mek.message.extendedTextMessage.contextInfo.quotedMessage
                .videoMessage.seconds < 11)) &&
          args.length == 0
        ) {
          const encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          const media = await haruka.downloadAndSaveMediaMessage(encmedia);
          ran = getRandom(".webp");
          await ffmpeg(`./${media}`)
            .inputFormat(media.split(".")[1])
            .on("start", function (cmd) {
              console.log(`Started : ${cmd}`);
            })
            .on("error", function (err) {
              console.log(`Error : ${err}`);
              fs.unlinkSync(media);
              tipe = media.endsWith(".mp4") ? "video" : "gif";
              reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker`);
            })
            .on("end", function () {
              console.log("Finish");
              haruka.sendMessage(from, fs.readFileSync(ran), sticker, {
                quoted: mek,
              });
              fs.unlinkSync(media);
              fs.unlinkSync(ran);
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(ran);
        } else {
          reply(
            `Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim\nDurasi sticker video 1-9 detik...`
          );
        }

        break;

      case "ig":
      case "igdl":
        if (!q) return reply("Linknya?");
        if (!isUrl(args[0]) && !args[0].includes("instagram.com"))
          return reply(mess.errorLink);
        let urlnya = q;
        zee
          .Igdl(urlnya)
          .then(async (result) => {
            for (let i of result.medias) {
              if (i.url.includes("mp4")) {
                let link = await getBuffer(i.url);
                haruka.sendMessage(from, link, video, {
                  thumbnail: Buffer.alloc(0),
                  quoted: mek,
                  caption: `Instagram •  ${i.type}`,
                });
              } else {
                let link = await getBuffer(i.url);
                haruka.sendMessage(from, link, image, {
                  thumbnail: Buffer.alloc(0),
                  quoted: mek,
                  caption: `Instagram • ${i.type}`,
                });
              }
            }
          })
          .catch((err) => reply(`🤲 Server eror`));

        break;
      case "pinterest":
        if (!q) return reply("Masukkan query");
        async function pinterestSearch(query) {
          return new Promise((resolve, reject) => {
            fetch(
              `https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`,
              {
                headers: {
                  accept: "application/json, text/javascript, */*, q=0.01",
                  "accept-language": "en-US,en;q=0.9",
                  "cache-control": "no-cache",
                  pragma: "no-cache",
                  "sec-fetch-dest": "empty",
                  "sec-fetch-mode": "cors",
                  "sec-fetch-site": "same-origin",
                  "sec-gpc": "1",
                  "x-app-version": "9a236a4",
                  "x-pinterest-appstate": "active",
                  "x-requested-with": "XMLHttpRequest",
                },
                referrer: "https://www.pinterest.com/",
                referrerPolicy: "origin",
                body: null,
                method: "GET",
                mode: "cors",
              }
            )
              .then((res) => res.json())
              .then((json) => {
                const generatepin =
                  json.resource_response.data.results[
                    Math.floor(
                      Math.random() * json.resource_response.data.results.length
                    )
                  ];
                var result = [];
                result.push({
                  link: generatepin.images.orig.url,
                });
                resolve(result);
              })
              .catch(reject);
          });
        }

        const pinterest = (query) =>
          new Promise((resolve, reject) => {
            pinterestSearch(query)
              .then((data) => {
                resolve({
                  status: 200,
                  image: data[0].link,
                });
              })
              .catch(reject);
          });

        pinterest(q)
          .then(async (res) => {
            let we = await getBuffer(res.image);
            sendButImage(
              from,
              lang.ok(),
              `© ${ownername}`,
              we,
              [
                {
                  buttonId: `.pinterest ${q}`,
                  buttonText: { displayText: "Next" },
                  type: "RESPONSE",
                },
              ],
              { thumbnail: Buffer.alloc(0), quoted: mek }
            );
          })
          .catch(async (err) => {
            reply("Terjadi kesalahan");
          });

        break;
      case "twtdl":
        if (args.length == 0)
          return reply(
            `Example: ${
              prefix + command
            } https://twitter.com/gofoodindonesia/status/1229369819511709697`
          );
        ini_url = args[0];
        ini_url = await fetchJson(
          `https://api.lolhuman.xyz/api/twitter?apikey=${lolkey}&url=${ini_url}`
        );
        ini_url = ini_url.result;
        ini_url = ini_url[ini_url.length - 1].link;
        ini_buffer = await getBuffer(ini_url);
        await haruka.sendMessage(from, ini_buffer, video, { quoted: mek });
        break;
      case "zippyshare":
        if (args.length == 0)
          return reply(
            `Example: ${
              prefix + command
            } https://www51.zippyshare.com/v/5W0TOBz1/file.html`
          );
        ini_url = args[0];
        ini_url = await fetchJson(
          `https://api.lolhuman.xyz/api/zippyshare?apikey=${lolkey}&url=${ini_url}`
        );
        ini_url = ini_url.result;
        ini_txt = `File Name : ${ini_url.name_file}\n`;
        ini_txt += `Size : ${ini_url.size}\n`;
        ini_txt += `Date Upload : ${ini_url.date_upload}\n`;
        ini_txt += `Download Url : ${ini_url.download_url}`;
        reply(ini_txt);
        break;
      case "pinterestdl":
        if (args.length == 0)
          return reply(
            `Example: ${
              prefix + command
            } https://id.pinterest.com/pin/696580267364426905/`
          );
        ini_url = args[0];
        ini_url = await fetchJson(
          `https://api.lolhuman.xyz/api/pinterestdl?apikey=${lolkey}&url=${ini_url}`
        );
        ini_url = ini_url.result[0];
        ini_buffer = await getBuffer(ini_url);
        await haruka.sendMessage(from, ini_buffer, image, { quoted: mek });
        break;
      case "pixiv":
        if (args.length == 0)
          return reply(`Example: ${prefix + command} loli kawaii`);
        query = args.join(" ");
        ini_buffer = await getBuffer(
          `https://api.lolhuman.xyz/api/pixiv?apikey=${lolkey}&query=${query}`
        );
        await haruka.sendMessage(from, ini_buffer, image, { quoted: mek });
        break;
      case "pixivdl":
        if (args.length == 0)
          return reply(`Example: ${prefix + command} 63456028`);
        query = args[0];
        ini_buffer = await getBuffer(
          `https://api.lolhuman.xyz/api/pixivdl/${pixivid}?apikey=${lolkey}`
        );
        await haruka.sendMessage(from, ini_buffer, image, { quoted: mek });
        break;
      case "play":
      case "song":
        if (args.length === 0)
          return reply(`Kirim perintah *${prefix}play* _Judul lagu_`);
        var srch = args.join(" ");
        aramas = await yts(srch);
        aramat = aramas.all;
        var mulaikah = aramat[0].url;
        try {
          zee.Youtube(mulaikah).then(async (data) => {
            if (Number(data.medias[7].formattedSize) >= 100000)
              return sendMediaURL(
                from,
                thumb,
                `*PLAY MUSIC*\n\n*Title* : ${aramas.videos[0].title}\n*Ext* : MP3\n*Filesize* : ${data.medias[7].formattedSize}\n*Link* : ${aramas.videos[0].url}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`
              );
            const captions = `*---- 「 PLAY MUSIC 」----*
						
• Title : ${aramas.videos[0].title}
• ID : ${aramas.videos[0].videoId}
• Upload : ${aramas.videos[0].ago}
• Size : ${data.medias[7].formattedSize}
• Views: ${aramas.videos[0].views} 
• Duration : ${aramas.videos[0].timestamp}
• Url : ${aramas.videos[0].url}`;
            var thumbyt = await getBuffer(aramas.videos[0].thumbnail);
            sendButLocation(
              from,
              captions,
              "© " + ownername,
              thumbyt,
              [
                {
                  buttonId: `.ytmp4 ${mulaikah}`,
                  buttonText: { displayText: "Video" },
                  type: 1,
                },
                {
                  buttonId: `.ytmp3 ${mulaikah}`,
                  buttonText: { displayText: "Audio" },
                  type: 1,
                },
              ],
              { quoted: mek }
            );
          });
        } catch (err) {
          reply("Terjadi kesalahan");
        }

        break;
      case "spotify":
        {
          if (args.length == 0)
            return reply(
              `Example: ${
                prefix + command
              } https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`
            );
          url = args[0];
          get_result = await fetchJson(
            `https://api.lolhuman.xyz/api/spotify?apikey=${lolkey}&url=${url}`
          );
          get_result = get_result.result;
          ini_txt = `Title : ${get_result.title}\n`;
          ini_txt += `Artists : ${get_result.artists}\n`;
          ini_txt += `Duration : ${get_result.duration}\n`;
          ini_txt += `Popularity : ${get_result.popularity}\n`;
          ini_txt += `Preview : ${get_result.preview_url}\n`;
          thumbnail = await getBuffer(get_result.thumbnail);
          await haruka.sendMessage(from, thumbnail, image, {
            quoted: mek,
            caption: ini_txt,
          });
          get_audio = await getBuffer(get_result.link);
          await haruka.sendMessage(from, get_audio, audio, {
            mimetype: "audio/mpeg",
            filename: `${get_result.title}.mp3`,
            quoted: mek,
          });
        }
        break;
      case "spotifysearch":
        {
          if (args.length == 0)
            return reply(`Example: ${prefix + command} fried noodles`);
          query = args.join(" ");
          get_result = await fetchJson(
            `https://api.lolhuman.xyz/api/spotifysearch?apikey=${lolkey}&query=${query}`
          );
          get_result = get_result.result;
          ini_txt = "";
          for (var x of get_result) {
            ini_txt += `Title : ${x.title}\n`;
            ini_txt += `Artists : ${x.artists}\n`;
            ini_txt += `Duration : ${x.duration}\n`;
            ini_txt += `Link : ${x.link}\n`;
            ini_txt += `Preview : ${x.preview_url}\n\n\n`;
          }
          reply(ini_txt);
        }
        break;
      // AniManga //
      case "character":
        if (args.length == 0)
          return reply(`Example: ${prefix + command} Miku Nakano`);
        query = args.join(" ");
        get_result = await fetchJson(
          `https://api.lolhuman.xyz/api/character?apikey=${lolkey}&query=${query}`
        );
        get_result = get_result.result;
        ini_txt = `Id : ${get_result.id}\n`;
        ini_txt += `Name : ${get_result.name.full}\n`;
        ini_txt += `Native : ${get_result.name.native}\n`;
        ini_txt += `Favorites : ${get_result.favourites}\n`;
        ini_txt += `Media : \n`;
        ini_media = get_result.media.nodes;
        for (var x of ini_media) {
          ini_txt += `- ${x.title.romaji} (${x.title.native})\n`;
        }
        ini_txt += `\nDescription : \n${get_result.description.replace(
          /__/g,
          "_"
        )}`;
        thumbnail = await getBuffer(get_result.image.large);
        await haruka.sendMessage(from, thumbnail, image, {
          quoted: mek,
          caption: ini_txt,
        });
        break;
      case "manga":
        if (args.length == 0)
          return reply(`Example: ${prefix + command} Gotoubun No Hanayome`);
        query = args.join(" ");
        get_result = await fetchJson(
          `https://api.lolhuman.xyz/api/manga?apikey=${lolkey}&query=${query}`
        );
        get_result = get_result.result;
        ini_txt = `Id : ${get_result.id}\n`;
        ini_txt += `Id MAL : ${get_result.idMal}\n`;
        ini_txt += `Title : ${get_result.title.romaji}\n`;
        ini_txt += `English : ${get_result.title.english}\n`;
        ini_txt += `Native : ${get_result.title.native}\n`;
        ini_txt += `Format : ${get_result.format}\n`;
        ini_txt += `Chapters : ${get_result.chapters}\n`;
        ini_txt += `Volume : ${get_result.volumes}\n`;
        ini_txt += `Status : ${get_result.status}\n`;
        ini_txt += `Source : ${get_result.source}\n`;
        ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`;
        ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`;
        ini_txt += `Genre : ${get_result.genres.join(", ")}\n`;
        ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`;
        ini_txt += `Score : ${get_result.averageScore}%\n`;
        ini_txt += `Characters : \n`;
        ini_character = get_result.characters.nodes;
        for (var x of ini_character) {
          ini_txt += `- ${x.name.full} (${x.name.native})\n`;
        }
        ini_txt += `\nDescription : ${get_result.description}`;
        thumbnail = await getBuffer(get_result.coverImage.large);
        await haruka.sendMessage(from, thumbnail, image, {
          quoted: mek,
          caption: ini_txt,
        });
        break;
      case "anime":
        if (args.length == 0)
          return reply(`Example: ${prefix + command} Gotoubun No Hanayome`);
        query = args.join(" ");
        get_result = await fetchJson(
          `https://api.lolhuman.xyz/api/anime?apikey=${lolkey}&query=${query}`
        );
        get_result = get_result.result;
        ini_txt = `Id : ${get_result.id}\n`;
        ini_txt += `Id MAL : ${get_result.idMal}\n`;
        ini_txt += `Title : ${get_result.title.romaji}\n`;
        ini_txt += `English : ${get_result.title.english}\n`;
        ini_txt += `Native : ${get_result.title.native}\n`;
        ini_txt += `Format : ${get_result.format}\n`;
        ini_txt += `Episodes : ${get_result.episodes}\n`;
        ini_txt += `Duration : ${get_result.duration} mins.\n`;
        ini_txt += `Status : ${get_result.status}\n`;
        ini_txt += `Season : ${get_result.season}\n`;
        ini_txt += `Season Year : ${get_result.seasonYear}\n`;
        ini_txt += `Source : ${get_result.source}\n`;
        ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`;
        ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`;
        ini_txt += `Genre : ${get_result.genres.join(", ")}\n`;
        ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`;
        ini_txt += `Score : ${get_result.averageScore}%\n`;
        ini_txt += `Characters : \n`;
        ini_character = get_result.characters.nodes;
        for (var x of ini_character) {
          ini_txt += `- ${x.name.full} (${x.name.native})\n`;
        }
        ini_txt += `\nDescription : ${get_result.description}`;
        thumbnail = await getBuffer(get_result.coverImage.large);
        await haruka.sendMessage(from, thumbnail, image, {
          quoted: mek,
          caption: ini_txt,
        });
        break;
      case "kusonime":
        if (args.length == 0)
          return reply(
            `Example: ${
              prefix + command
            } https://kusonime.com/nanatsu-no-taizai-bd-batch-subtitle-indonesia/`
          );
        ini_url = args[0];
        get_result = await fetchJson(
          `https://api.lolhuman.xyz/api/kusonime?apikey=${lolkey}&url=${ini_url}`
        );
        get_result = get_result.result;
        ini_txt = `Title : ${get_result.title}\n`;
        ini_txt += `Japanese : ${get_result.japanese}\n`;
        ini_txt += `Genre : ${get_result.genre}\n`;
        ini_txt += `Seasons : ${get_result.seasons}\n`;
        ini_txt += `Producers : ${get_result.producers}\n`;
        ini_txt += `Type : ${get_result.type}\n`;
        ini_txt += `Status : ${get_result.status}\n`;
        ini_txt += `Total Episode : ${get_result.total_episode}\n`;
        ini_txt += `Score : ${get_result.score}\n`;
        ini_txt += `Duration : ${get_result.duration}\n`;
        ini_txt += `Released On : ${get_result.released_on}\n`;
        ini_txt += `Desc : ${get_result.desc}\n`;
        link_dl = get_result.link_dl;
        for (var x in link_dl) {
          ini_txt += `\n${x}\n`;
          for (var y in link_dl[x]) {
            ini_txt += `${y} - ${link_dl[x][y]}\n`;
          }
        }
        ini_buffer = await getBuffer(get_result.thumbnail);
        await haruka.sendMessage(from, ini_buffer, image, {
          quoted: mek,
          caption: ini_txt,
        });
        break;
      case "kusonimesearch":
        if (args.length == 0)
          return reply(`Example: ${prefix + command} Gotoubun No Hanayome`);
        query = args.join(" ");
        get_result = await fetchJson(
          `https://api.lolhuman.xyz/api/kusonimesearch?apikey=${lolkey}&query=${query}`
        );
        get_result = get_result.result;
        ini_txt = `Title : ${get_result.title}\n`;
        ini_txt += `Japanese : ${get_result.japanese}\n`;
        ini_txt += `Genre : ${get_result.genre}\n`;
        ini_txt += `Seasons : ${get_result.seasons}\n`;
        ini_txt += `Producers : ${get_result.producers}\n`;
        ini_txt += `Type : ${get_result.type}\n`;
        ini_txt += `Status : ${get_result.status}\n`;
        ini_txt += `Total Episode : ${get_result.total_episode}\n`;
        ini_txt += `Score : ${get_result.score}\n`;
        ini_txt += `Duration : ${get_result.duration}\n`;
        ini_txt += `Released On : ${get_result.released_on}\n`;
        ini_txt += `Desc : ${get_result.desc}\n`;
        link_dl = get_result.link_dl;
        for (var x in link_dl) {
          ini_txt += `\n${x}\n`;
          for (var y in link_dl[x]) {
            ini_txt += `${y} - ${link_dl[x][y]}\n`;
          }
        }
        ini_buffer = await getBuffer(get_result.thumbnail);
        await haruka.sendMessage(from, ini_buffer, image, {
          quoted: mek,
          caption: ini_txt,
        });
        break;
      case "otakudesu":
        if (args.length == 0)
          return reply(
            `Example: ${
              prefix + command
            } https://otakudesu.tv/lengkap/pslcns-sub-indo/`
          );
        ini_url = args[0];
        get_result = await fetchJson(
          `https://api.lolhuman.xyz/api/otakudesu?apikey=${lolkey}&url=${ini_url}`
        );
        get_result = get_result.result;
        ini_txt = `Title : ${get_result.title}\n`;
        ini_txt += `Japanese : ${get_result.japanese}\n`;
        ini_txt += `Judul : ${get_result.judul}\n`;
        ini_txt += `Type : ${get_result.type}\n`;
        ini_txt += `Episode : ${get_result.episodes}\n`;
        ini_txt += `Aired : ${get_result.aired}\n`;
        ini_txt += `Producers : ${get_result.producers}\n`;
        ini_txt += `Genre : ${get_result.genres}\n`;
        ini_txt += `Duration : ${get_result.duration}\n`;
        ini_txt += `Studios : ${get_result.status}\n`;
        ini_txt += `Rating : ${get_result.rating}\n`;
        ini_txt += `Credit : ${get_result.credit}\n`;
        get_link = get_result.link_dl;
        for (var x in get_link) {
          ini_txt += `\n\n*${get_link[x].title}*\n`;
          for (var y in get_link[x].link_dl) {
            ini_info = get_link[x].link_dl[y];
            ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`;
            ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`;
            ini_txt += `\`\`\`Link : \`\`\`\n`;
            down_link = ini_info.link_dl;
            for (var z in down_link) {
              ini_txt += `${z} - ${down_link[z]}\n`;
            }
          }
        }
        reply(ini_txt);
        break;
      case "otakudesusearch":
        if (args.length == 0)
          return reply(`Example: ${prefix + command} Gotoubun No Hanayome`);
        query = args.join(" ");
        get_result = await fetchJson(
          `https://api.lolhuman.xyz/api/otakudesusearch?apikey=${lolkey}&query=${query}`
        );
        get_result = get_result.result;
        ini_txt = `Title : ${get_result.title}\n`;
        ini_txt += `Japanese : ${get_result.japanese}\n`;
        ini_txt += `Judul : ${get_result.judul}\n`;
        ini_txt += `Type : ${get_result.type}\n`;
        ini_txt += `Episode : ${get_result.episodes}\n`;
        ini_txt += `Aired : ${get_result.aired}\n`;
        ini_txt += `Producers : ${get_result.producers}\n`;
        ini_txt += `Genre : ${get_result.genres}\n`;
        ini_txt += `Duration : ${get_result.duration}\n`;
        ini_txt += `Studios : ${get_result.status}\n`;
        ini_txt += `Rating : ${get_result.rating}\n`;
        ini_txt += `Credit : ${get_result.credit}\n`;
        get_link = get_result.link_dl;
        for (var x in get_link) {
          ini_txt += `\n\n*${get_link[x].title}*\n`;
          for (var y in get_link[x].link_dl) {
            ini_info = get_link[x].link_dl[y];
            ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`;
            ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`;
            ini_txt += `\`\`\`Link : \`\`\`\n`;
            down_link = ini_info.link_dl;
            for (var z in down_link) {
              ini_txt += `${z} - ${down_link[z]}\n`;
            }
          }
        }
        reply(ini_txt);
        break;
      // information

      case "translate":
        if (args.length == 0)
          return reply(`Example: ${prefix + command} en Tahu Bacem`);
        kode_negara = args[0];
        args.shift();
        ini_txt = args.join(" ");
        get_result = await fetchJson(
          `https://api.lolhuman.xyz/api/translate/auto/${kode_negara}?apikey=${lolkey}&text=${ini_txt}`
        );
        get_result = get_result.result;
        init_txt = `From : ${get_result.from}\n`;
        init_txt += `To : ${get_result.to}\n`;
        init_txt += `Original : ${get_result.original}\n`;
        init_txt += `Translated : ${get_result.translated}\n`;
        init_txt += `Pronunciation : ${get_result.pronunciation}\n`;
        reply(init_txt);
        break;
      case "infogempa":
        get_result = await fetchJson(
          `https://api.lolhuman.xyz/api/infogempa?apikey=${lolkey}`
        );
        get_result = get_result.result;
        ini_txt = `Lokasi : ${get_result.lokasi}\n`;
        ini_txt += `Waktu : ${get_result.waktu}\n`;
        ini_txt += `Potensi : ${get_result.potensi}\n`;
        ini_txt += `Magnitude : ${get_result.magnitude}\n`;
        ini_txt += `Kedalaman : ${get_result.kedalaman}\n`;
        ini_txt += `Koordinat : ${get_result.koordinat}`;
        get_buffer = await getBuffer(get_result.map);
        await haruka.sendMessage(from, get_buffer, image, {
          quoted: mek,
          caption: ini_txt,
        });
        break;
      case "lirik":
        if (args.length == 0)
          return reply(`Example: ${prefix + command} Melukis Senja`);
        query = args.join(" ");
        get_result = await fetchJson(
          `https://api.lolhuman.xyz/api/lirik?apikey=${lolkey}&query=${query}`
        );
        reply(get_result.result);
        break;
      case "cuaca":
        if (args.length == 0)
          return reply(`Example: ${prefix + command} Yogyakarta`);
        daerah = args[0];
        get_result = await fetchJson(
          `https://api.lolhuman.xyz/api/cuaca/${daerah}?apikey=${lolkey}`
        );
        get_result = get_result.result;
        ini_txt = `Tempat : ${get_result.tempat}\n`;
        ini_txt += `Cuaca : ${get_result.cuaca}\n`;
        ini_txt += `Angin : ${get_result.angin}\n`;
        ini_txt += `Description : ${get_result.description}\n`;
        ini_txt += `Kelembapan : ${get_result.kelembapan}\n`;
        ini_txt += `Suhu : ${get_result.suhu}\n`;
        ini_txt += `Udara : ${get_result.udara}\n`;
        ini_txt += `Permukaan laut : ${get_result.permukaan_laut}\n`;
        await haruka.sendMessage(
          from,
          {
            degreesLatitude: get_result.latitude,
            degreesLongitude: get_result.longitude,
          },
          location,
          { quoted: mek }
        );
        reply(ini_txt);
        break;
      case "covidindo":
        get_result = await fetchJson(
          `https://api.lolhuman.xyz/api/corona/indonesia?apikey=${lolkey}`
        );
        get_result = get_result.result;
        ini_txt = `Positif : ${get_result.positif}\n`;
        ini_txt += `Sembuh : ${get_result.sembuh}\n`;
        ini_txt += `Dirawat : ${get_result.dirawat}\n`;
        ini_txt += `Meninggal : ${get_result.meninggal}`;
        reply(ini_txt);
        break;
      case "covidglobal":
        get_result = await fetchJson(
          `https://api.lolhuman.xyz/api/corona/global?apikey=${lolkey}`
        );
        get_result = get_result.result;
        ini_txt = `Positif : ${get_result.positif}\n`;
        ini_txt += `Sembuh : ${get_result.sembuh}\n`;
        ini_txt += `Dirawat : ${get_result.dirawat}\n`;
        ini_txt += `Meninggal : ${get_result.meninggal}`;
        reply(ini_txt);
        break;

      // Movie & Story
      case "lk21":
        if (args.length == 0)
          return reply(`Example: ${prefix + command} Transformer`);
        query = args.join(" ");
        get_result = await fetchJson(
          `https://api.lolhuman.xyz/api/lk21?apikey=${lolkey}&query=${query}`
        );
        get_result = get_result.result;
        ini_txt = `Title : ${get_result.title}\n`;
        ini_txt += `Link : ${get_result.link}\n`;
        ini_txt += `Genre : ${get_result.genre}\n`;
        ini_txt += `Views : ${get_result.views}\n`;
        ini_txt += `Duration : ${get_result.duration}\n`;
        ini_txt += `Tahun : ${get_result.tahun}\n`;
        ini_txt += `Rating : ${get_result.rating}\n`;
        ini_txt += `Desc : ${get_result.desc}\n`;
        ini_txt += `Actors : ${get_result.actors.join(", ")}\n`;
        ini_txt += `Location : ${get_result.location}\n`;
        ini_txt += `Date Release : ${get_result.date_release}\n`;
        ini_txt += `Language : ${get_result.language}\n`;
        ini_txt += `Link Download : ${get_result.link_dl}`;
        thumbnail = await getBuffer(get_result.thumbnail);
        await haruka.sendMessage(from, thumbnail, image, {
          quoted: mek,
          caption: ini_txt,
        });

        break;

      // Random Text //
      case "quotes":
        quotes = await fetchJson(
          `https://api.lolhuman.xyz/api/random/quotes?apikey=${lolkey}}`
        );
        quotes = quotes.result;
        author = quotes.by;
        quotes = quotes.quote;
        reply(`_${quotes}_\n\n*― ${author}*`);
        break;
      case "quotesanime":
        quotes = await fetchJson(
          `https://api.lolhuman.xyz/api/random/quotesnime?apikey=${lolkey}`
        );
        quotes = quotes.result;
        quote = quotes.quote;
        char = quotes.character;
        anime = quotes.anime;
        episode = quotes.episode;
        reply(`_${quote}_\n\n*― ${char}*\n*― ${anime} ${episode}*`);
        break;

      case "quotesimage":
        get_result = await getBuffer(
          `https://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`
        );
        await haruka.sendMessage(from, get_result, image, { quotes: mek });
        break;
      case "faktaunik":
      case "katabijak":
      case "pantun":
        get_result = await fetchJson(
          `https://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`
        );
        reply(get_result.result);
        break;
      case "randomnama":
        anu = await fetchJson(
          `https://api.lolhuman.xyz/api/random/nama?apikey=${lolkey}`
        );
        reply(anu.result);
        break;

      // Searching
      case "gimage":
        if (args.length == 0)
          return reply(`Example: ${prefix + command} loli kawaii`);
        query = args.join(" ");
        ini_buffer = await getBuffer(
          `https://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=${query}`
        );
        await haruka.sendMessage(from, ini_buffer, image, { quoted: mek });
        break;
      case "konachan":
        if (args.length == 0)
          return reply(`Example: ${prefix + command} azur_lane`);
        query = args.join(" ");
        ini_buffer = await getBuffer(
          `https://api.lolhuman.xyz/api/konachan?apikey=${lolkey}&query=${query}`
        );
        await haruka.sendMessage(from, ini_buffer, image, { quoted: mek });
        break;
      case "wallpapersearch":
        if (args.length == 0)
          return reply(`Example: ${prefix + command} loli kawaii`);
        query = args.join(" ");
        get_result = await fetchJson(
          `https://api.lolhuman.xyz/api/wallpaper?apikey=${lolkey}&query=${query}`
        );
        ini_buffer = await getBuffer(get_result.result);
        await haruka.sendMessage(from, ini_buffer, image, { quoted: mek });
        break;
      case "playstore":
        if (args.length == 0)
          return reply(`Example: ${prefix + command} telegram`);
        query = args.join(" ");
        get_result = await fetchJson(
          `https://api.lolhuman.xyz/api/playstore?apikey=${lolkey}&query=${query}`
        );
        get_result = get_result.result;
        ini_txt = "Play Store Search : \n";
        for (var x of get_result) {
          ini_txt += `Name : ${x.title}\n`;
          ini_txt += `ID : ${x.appId}\n`;
          ini_txt += `Developer : ${x.developer}\n`;
          ini_txt += `Link : ${x.url}\n`;
          ini_txt += `Price : ${x.priceText}\n`;
          ini_txt += `Price : ${x.price}\n\n`;
        }
        reply(ini_txt);
        break;
      case "shopee":
        if (args.length == 0)
          return reply(`Example: ${prefix + command} tas gendong`);
        query = args.join(" ");
        get_result = await fetchJson(
          `https://api.lolhuman.xyz/api/shopee?apikey=${lolkey}&query=${query}`
        );
        get_result = get_result.result;
        ini_txt = "Shopee Search : \n";
        for (var x of get_result) {
          ini_txt += `Name : ${x.name}\n`;
          ini_txt += `Terjual : ${x.sold}\n`;
          ini_txt += `Stock : ${x.stock}\n`;
          ini_txt += `Lokasi : ${x.shop_loc}\n`;
          ini_txt += `Link : ${x.link_produk}\n\n`;
        }
        reply(ini_txt);
        break;
      case "google":
        if (args.length == 0)
          return reply(`Example: ${prefix + command} loli kawaii`);
        query = args.join(" ");
        get_result = await fetchJson(
          `https://api.lolhuman.xyz/api/gsearch?apikey=${lolkey}&query=${query}`
        );
        get_result = get_result.result;
        ini_txt = "Google Search : \n";
        for (var x of get_result) {
          ini_txt += `Title : ${x.title}\n`;
          ini_txt += `Link : ${x.link}\n`;
          ini_txt += `Desc : ${x.desc}\n\n`;
        }
        reply(ini_txt);
        break;

      // Stalk
      case "stalkig":
        if (args.length == 0)
          return reply(`Example: ${prefix + command} jessnolimit`);
        username = args[0];
        ini_result = await fetchJson(
          `https://api.lolhuman.xyz/api/stalkig/${username}?apikey=${lolkey}`
        );
        ini_result = ini_result.result;
        ini_buffer = await getBuffer(ini_result.photo_profile);
        ini_txt = `Username : ${ini_result.username}\n`;
        ini_txt += `Full Name : ${ini_result.fullname}\n`;
        ini_txt += `Posts : ${ini_result.posts}\n`;
        ini_txt += `Followers : ${ini_result.followers}\n`;
        ini_txt += `Following : ${ini_result.following}\n`;
        ini_txt += `Bio : ${ini_result.bio}`;
        haruka.sendMessage(from, ini_buffer, image, { caption: ini_txt });
        break;
      case "stalkgithub":
        if (args.length == 0)
          return reply(`Example: ${prefix + command} LoL-Human`);
        username = args[0];
        ini_result = await fetchJson(
          `https://api.lolhuman.xyz/api/github/${username}?apikey=${lolkey}}`
        );
        ini_result = ini_result.result;
        ini_buffer = await getBuffer(ini_result.avatar);
        ini_txt = `Name : ${ini_result.name}\n`;
        ini_txt += `Link : ${ini_result.url}\n`;
        ini_txt += `Public Repo : ${ini_result.public_repos}\n`;
        ini_txt += `Public Gists : ${ini_result.public_gists}\n`;
        ini_txt += `Followers : ${ini_result.followers}\n`;
        ini_txt += `Following : ${ini_result.following}\n`;
        ini_txt += `Bio : ${ini_result.bio}`;
        haruka.sendMessage(from, ini_buffer, image, { caption: ini_txt });
        break;
      case "stalktwitter":
        if (args.length == 0)
          return reply(`Example: ${prefix + command} jokowi`);
        username = args[0];
        ini_result = await fetchJson(
          `https://api.lolhuman.xyz/api/twitter/${username}?apikey=${lolkey}`
        );
        ini_result = ini_result.result;
        ini_buffer = await getBuffer(ini_result.profile_picture);
        ini_txt = `Username : ${ini_result.screen_name}\n`;
        ini_txt += `Name : ${ini_result.name}\n`;
        ini_txt += `Tweet : ${ini_result.tweet}\n`;
        ini_txt += `Joined : ${ini_result.joined}\n`;
        ini_txt += `Followers : ${ini_result.followers}\n`;
        ini_txt += `Following : ${ini_result.following}\n`;
        ini_txt += `Like : ${ini_result.like}\n`;
        ini_txt += `Description : ${ini_result.description}`;
        haruka.sendMessage(from, ini_buffer, image, { caption: ini_txt });
        break;
      case "stalktiktok":
        if (args.length == 0)
          return reply(`Example: ${prefix + command} bulansutena`);
        stalk_toktok = args[0];
        get_result = await fetchJson(
          `http://lolhuman.herokuapp.com/api/stalktiktok/${stalk_toktok}?apikey=${lolkey}`
        );
        get_result = get_result.result;
        ini_txt = `Username : ${get_result.username}\n`;
        ini_txt += `Nickname : ${get_result.nickname}\n`;
        ini_txt += `Followers : ${get_result.followers}\n`;
        ini_txt += `Followings : ${get_result.followings}\n`;
        ini_txt += `Likes : ${get_result.likes}\n`;
        ini_txt += `Video : ${get_result.video}\n`;
        ini_txt += `Bio : ${get_result.bio}\n`;
        pp_tt = await getBuffer(get_result.user_picture);
        haruka.sendMessage(from, pp_tt, image, {
          quoted: mek,
          caption: ini_txt,
        });
        break;

      // Other
      case "ssweb":
        if (args.length == 0)
          return reply(`Example: ${prefix + command} https://api.lolhuman.xyz`);
        ini_link = args[0];
        ini_buffer = await getBuffer(
          `https://api.lolhuman.xyz/api/sswebfull?apikey=${lolkey}&url=${ini_link}`
        );
        await haruka.sendMessage(from, ini_buffer, image, { quoted: mek });
        break;
      case "shortlink":
        if (args.length == 0)
          return reply(`Example: ${prefix + command} https://api.lolhuman.xyz`);
        ini_link = args[0];
        ini_buffer = await fetchJson(
          `https://api.lolhuman.xyz/api/shortlink?apikey=${lolkey}&url=${ini_link}`
        );
        reply(ini_buffer.result);
        break;
      case "spamsms":
        if (args.length == 0)
          return reply(`Example: ${prefix + command} 08303030303030`);
        nomor = args[0];
        await fetchJson(
          `https://api.lolhuman.xyz/api/sms/spam1?apikey=${lolkey}&nomor=${nomor}`
        );
        await fetchJson(
          `https://api.lolhuman.xyz/api/sms/spam2?apikey=${lolkey}&nomor=${nomor}`
        );
        await fetchJson(
          `https://api.lolhuman.xyz/api/sms/spam3?apikey=${lolkey}&nomor=${nomor}`
        );
        await fetchJson(
          `https://api.lolhuman.xyz/api/sms/spam4?apikey=${lolkey}&nomor=${nomor}`
        );
        await fetchJson(
          `https://api.lolhuman.xyz/api/sms/spam5?apikey=${lolkey}&nomor=${nomor}`
        );
        await fetchJson(
          `https://api.lolhuman.xyz/api/sms/spam6?apikey=${lolkey}&nomor=${nomor}`
        );
        await fetchJson(
          `https://api.lolhuman.xyz/api/sms/spam7?apikey=${lolkey}&nomor=${nomor}`
        );
        await fetchJson(
          `https://api.lolhuman.xyz/api/sms/spam8?apikey=${lolkey}&nomor=${nomor}`
        );
        reply("Success");
        break;

      //maker ephoto
      case "wetglass":
      case "multicolor3d":
      case "watercolor":
      case "luxurygold":
      case "galaxywallpaper":
      case "lighttext":
      case "beautifulflower":
      case "puppycute":
      case "royaltext":
      case "heartshaped":
      case "birthdaycake":
      case "galaxystyle":
      case "hologram3d":
      case "greenneon":
      case "glossychrome":
      case "greenbush":
      case "metallogo":
      case "noeltext":
      case "glittergold":
      case "textcake":
      case "starsnight":
      case "wooden3d":
      case "textbyname":
      case "writegalacy":
      case "galaxybat":
      case "snow3d":
      case "birthdayday":
      case "goldplaybutton":
      case "silverplaybutton":
      case "freefire":
        if (args.length == 0)
          return reply(`Example: ${prefix + command} Pogam Gemink`);
        ini_txt = args.join(" ");
        getBuffer(
          `https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lolkey}&text=${ini_txt}`
        ).then((gambar) => {
          haruka.sendMessage(from, gambar, image, { quoted: mek });
        });
        break;

      // Photo Oxy //
      case "shadow":
      case "cup":
      case "cup1":
      case "romance":
      case "smoke":
      case "burnpaper":
      case "lovemessage":
      case "undergrass":
      case "love":
      case "coffe":
      case "woodheart":
      case "woodenboard":
      case "summer3d":
      case "wolfmetal":
      case "nature3d":
      case "underwater":
      case "golderrose":
      case "summernature":
      case "letterleaves":
      case "glowingneon":
      case "fallleaves":
      case "flamming":
      case "harrypotter":
      case "carvedwood":
        if (args.length == 0)
          return reply(`Example: ${prefix + command} Pogam Gemink`);
        ini_txt = args.join(" ");
        getBuffer(
          `https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${lolkey}&text=${ini_txt}`
        ).then((gambar) => {
          haruka.sendMessage(from, gambar, image, { quoted: mek });
        });
        break;
      case "tiktok":
      case "arcade8bit":
      case "battlefield4":
      case "pubg":
        if (args.length == 0)
          return reply(`Example: ${prefix + command} Pogam Gemink`);
        txt1 = args[0];
        txt2 = args[1];
        getBuffer(
          `https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`
        ).then((gambar) => {
          haruka.sendMessage(from, gambar, image, { quoted: mek });
        });
        break;
      // Textprome //
      case "blackpink":
      case "neon":
      case "greenneon":
      case "advanceglow":
      case "futureneon":
      case "sandwriting":
      case "sandsummer":
      case "sandengraved":
      case "metaldark":
      case "neonlight":
      case "holographic":
      case "text1917":
      case "minion":
      case "deluxesilver":
      case "newyearcard":
      case "bloodfrosted":
      case "halloween":
      case "jokerlogo":
      case "fireworksparkle":
      case "natureleaves":
      case "bokeh":
      case "toxic":
      case "strawberry":
      case "box3d":
      case "roadwarning":
      case "breakwall":
      case "icecold":
      case "luxury":
      case "cloud":
      case "summersand":
      case "horrorblood":
      case "thunder":
        if (args.length == 0)
          return reply(`Example: ${prefix + command} Pogam Gemink`);
        ini_txt = args.join(" ");
        getBuffer(
          `https://api.lolhuman.xyz/api/textprome/${command}?apikey=${lolkey}&text=${ini_txt}`
        ).then((gambar) => {
          haruka.sendMessage(from, gambar, image, { quoted: mek });
        });
        break;
      case "pornhub":
      case "glitch":
      case "avenger":
      case "space":
      case "ninjalogo":
      case "marvelstudio":
      case "lionlogo":
      case "wolflogo":
      case "steel3d":
      case "wallgravity":
        if (args.length == 0)
          return reply(`Example: ${prefix + command} Pogam Gemink`);
        txt1 = args[0];
        txt2 = args[1];
        getBuffer(
          `https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`
        ).then((gambar) => {
          haruka.sendMessage(from, gambar, image, { quoted: mek });
        });
        break;
      case "antilink":
        if (!isGroup) return reply(lang.group());
        if (!isGroupAdmins) return reply(lang.admin(groupName));
        if (!isBotGroupAdmins) return reply(lang.adminB());
        if (Number(args[0]) === 1) {
          if (isAntiLink) return reply("Telah di aktifkan sebelumnya");
          antilink.push(from);
          fs.writeFileSync(
            "./database/group/antilink.json",
            JSON.stringify(antilink)
          );
          reply(`✅ Berhasil mengaktifkan ${command}`);
        } else if (Number(args[0]) === 0) {
          if (!isAntiLink) return reply("Udh mati");
          var ini = anti.botLangsexOf(from);
          antilink.splice(ini, 1);
          fs.writeFileSync(
            "./database/group/antilink.json",
            JSON.stringify(antilink)
          );
          reply(`✅ Berhasil mematikan ${command}`);
        } else {
          reply("1 untuk mengaktifkan, 0 untuk menonaktifkan");
        }
        break;
      case "memegenerator":
      case "memegen":
        {
          if (args.length < 1)
            return reply(
              `Kirim perintah *${prefix + command}* teks atas|teks bawah`
            );
          if (!q.includes("|"))
            return reply(
              `Kirim perintah *${prefix + command}* teks atas|teks bawah`
            );
          try {
            if (!isQuotedImage) return reply(`Reply Gambar!`);
            reply(lang.wait());
            var teks1 = q.split("|")[0] ? q.split("|")[0] : "";
            var teks2 = q.split("|")[1] ? q.split("|")[1] : "";
            var enmedia = isQuotedImage
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
            var mediiia = await haruka.downloadMediaMessage(enmedia);
            var njay = await uploadImages(mediiia);
            var resu = await getBuffer(
              `https://api.memegen.link/images/custom/${teks1}/${teks2}.png?background=${njay}`
            );
            haruka.sendMessage(from, resu, image, {
              caption: ".stikerin bang",
              thumbnail: Buffer.alloc(0),
              quoted: mek,
            });
            fs.unlinkSync(mediiia);
          } catch (e) {
            reply(lang.err());
            console.log(e);
          }
        }
        break;

      case "leave":
        if (!isGroup) return reply(lang.group());
        if (!isOwner) return reply(lang.owner(botname));
        setTimeout(() => {
          haruka.groupLeave(from);
        }, 2000);
        setTimeout(() => {
          haruka.sendMessage(from, "Sayonara👋", text);
        }, 0);
        break;
      case "hidetag":
        if (!isGroup) return reply(lang.group());
        if (!isGroupAdmins) return reply(lang.admin(groupName));
        var value = q;
        var group = await haruka.groupMetadata(from);
        var member = group["participants"];
        var mem = [];
        member.map(async (adm) => {
          mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
        });
        var options = {
          text: value,
          contextInfo: { mentionedJid: mem },
          quoted: mek,
        };
        haruka.sendMessage(from, options, text);
        break;
      case "linkgrup":
      case "linkgroup":
      case "linkgc":
        if (!isGroup) return reply(lang.group());
        linkgc = await haruka.groupInviteCode(from);
        yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`;
        haruka.sendMessage(from, yeh, text, { quoted: mek });
        break;
      case "tagall":
        if (!isGroup) return reply(lang.group());
        if (!isGroupAdmins) return reply(lang.admin(groupName));
        members_id = [];
        taga = args.length > 1 ? body.slice(8).trim() : "";
        taga += "\n\n";
        for (let mem of groupMembers) {
          taga += `➸ @${mem.jid.split("@")[0]}\n`;
          members_id.push(mem.jid);
        }
        mentions(taga, members_id, true);
        break;
      case "setname":
        if (!isGroup) return reply(lang.group());
        if (!isGroupAdmins) return reply(lang.admin(groupName));
        if (!isBotGroupAdmins) return reply(lang.adminB());
        await haruka.groupUpdateSubject(from, `${q}`);
        haruka.sendMessage(
          from,
          `Sukses Mengubah Nama Grup Menjadi ${q}`,
          text,
          { quoted: mek }
        );
        break;
      case "setdesc":
      case "setdesk":
        if (!isGroup) return reply(lang.group());
        if (!isGroupAdmins) return reply(lang.admin(groupName));
        if (!isBotGroupAdmins) return reply(lang.adminB());
        await haruka.groupUpdateDescription(from, `${q}`);
        haruka.sendMessage(
          from,
          `Sukses Mengubah Desk Grup Menjadi ${q}`,
          text,
          { quoted: mek }
        );
        break;
      case "kick":
        if (!isGroup) return reply(lang.group());
        if (!isGroupAdmins) return reply(lang.admin(groupName));
        if (!isBotGroupAdmins) return reply(lang.adminB());
        if (!q)
          return reply(
            `*Format salah!*\n\n*Example : ${prefix + command} @tag*`
          );
        var kickya = q.split("@")[1] + "@s.whatsapp.net";
        await haruka.groupRemove(from, [kickya]);
        reply(`Succses kick target!`);
        break;
      case "bc":
      case "broadcast":
        if (!(mek.key.fromMe && isOwner)) return reply(lang.owner(botname));
        if (args.length === 0)
          return reply(`Kirim perintah *${prefix + command}* text`);
        var bcnya = await haruka.chats.all();
        if ((isMedia && !mek.message.videoMessage) || isQuotedImage) {
          var bcnya2 = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          var bcnya3 = await haruka.downloadMediaMessage(bcnya2);
          for (let _ of bcnya) {
            haruka.sendMessage(_.jid, bcnya3, image, {
              caption: `*----「  BROADCAST 」----*\n\n${q}`,
            });
          }
          reply("Sukses broadcast");
        } else {
          for (let _ of bcnya) {
            sendButLocation(
              _.jid,
              "「 PESAN SIARAN 」\n\n" + q,
              "© " + ownername,
              thumbnail,
              [
                {
                  buttonId: ".owner",
                  buttonText: { displayText: "Owner" },
                  type: 1,
                },
                {
                  buttonId: ".infobot",
                  buttonText: { displayText: "Infobot" },
                  type: 1,
                },
              ],
              { quoted: mek }
            );
          }
          reply("Sukses broadcast");
        }
        break;

      case "nulis":
        reply(
          `*Example*\n${prefix}nuliskiri\n${prefix}nuliskanan\n${prefix}foliokiri\n${prefix}foliokanan`
        );
        break;
      case "toimg":
        {
          if (!isQuotedSticker) return reply("Reply stc nya!");
          reply(lang.wait());
          encmediaa = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
            .message.extendedTextMessage.contextInfo;
          mediaa = await haruka.downloadAndSaveMediaMessage(encmediaa);
          ran = getRandom(".png");
          exec(`ffmpeg -i ${mediaa} ${ran}`, (err) => {
            fs.unlinkSync(mediaa);
            if (err) return reply("Eror");
            buffer = fs.readFileSync(ran);
            haruka.sendMessage(from, buffer, image, {
              quoted: mek,
              thumbnail: Buffer.alloc(0),
              caption: "Done",
            });
            fs.unlinkSync(ran);
          });
        }
        break;
      case "nuliskiri":
        {
          if (args.length < 1)
            return reply(`Kirim perintah *${prefix}nuliskiri* teks`);
          reply(lang.wait());
          const tulisan = q;
          const splitText = tulisan.replace(/(\S+\s*){1,9}/g, "$&\n");
          const fixHeight = splitText.split("\n").slice(0, 31).join("\n");
          spawn("convert", [
            "./database/media/nulis/images/buku/sebelumkiri.jpg",
            "-font",
            "./database/media/nulis/font/Indie-Flower.ttf",
            "-size",
            "960x1280",
            "-pointsize",
            "22",
            "-interline-spacing",
            "2",
            "-annotate",
            "+140+153",
            fixHeight,
            "./database/media/nulis/images/buku/setelahkiri.jpg",
          ])
            .on("error", () => reply(mess.error))
            .on("exit", () => {
              haruka.sendMessage(
                from,
                fs.readFileSync(
                  "./database/media/nulis/images/buku/setelahkiri.jpg"
                ),
                image,
                {
                  thumbnail: Buffer.alloc(0),
                  quoted: mek,
                  caption: `Hati-hati ketahuan!`,
                }
              );
            });
        }
        break;
      case "nuliskanan":
        {
          if (args.length < 1)
            return reply(`Kirim perintah *${prefix}nuliskanan* teks`);
          reply(lang.wait());
          const tulisan = q;
          const splitText = tulisan.replace(/(\S+\s*){1,9}/g, "$&\n");
          const fixHeight = splitText.split("\n").slice(0, 31).join("\n");
          spawn("convert", [
            "./database/media/nulis/images/buku/sebelumkanan.jpg",
            "-font",
            "./database/media/nulis/font/Indie-Flower.ttf",
            "-size",
            "960x1280",
            "-pointsize",
            "23",
            "-interline-spacing",
            "2",
            "-annotate",
            "+128+129",
            fixHeight,
            "./database/media/nulis/images/buku/setelahkanan.jpg",
          ])
            .on("error", () => reply(mess.error))
            .on("exit", () => {
              haruka.sendMessage(
                from,
                fs.readFileSync(
                  "./database/media/nulis/images/buku/setelahkanan.jpg"
                ),
                image,
                {
                  thumbnail: Buffer.alloc(0),
                  quoted: mek,
                  caption: `Hati-hati ketahuan!`,
                }
              );
            });
        }
        break;
      case "foliokiri":
        {
          if (args.length < 1)
            return reply(`Kirim perintah *${prefix}foliokiri* teks`);
          reply(lang.wait());
          const tulisan = q;
          const splitText = tulisan.replace(/(\S+\s*){1,13}/g, "$&\n");
          const fixHeight = splitText.split("\n").slice(0, 38).join("\n");
          spawn("convert", [
            "./media/nulis/images/folio/sebelumkiri.jpg",
            "-font",
            "./database/media/nulis/font/Indie-Flower.ttf",
            "-size",
            "1720x1280",
            "-pointsize",
            "23",
            "-interline-spacing",
            "4",
            "-annotate",
            "+48+185",
            fixHeight,
            "./database/media/nulis/images/folio/setelahkiri.jpg",
          ])
            .on("error", () => reply(mess.error))
            .on("exit", () => {
              haruka.sendMessage(
                from,
                fs.readFileSync(
                  "./database/media/nulis/images/folio/setelahkiri.jpg"
                ),
                image,
                {
                  thumbnail: Buffer.alloc(0),
                  quoted: mek,
                  caption: `Hati-hati ketahuan!`,
                }
              );
            });
        }
        break;
      case "foliokanan":
        {
          if (args.length < 1)
            return reply(`Kirim perintah *${prefix}foliokanan* teks`);
          reply(lang.wait());
          const tulisan = q;
          const splitText = tulisan.replace(/(\S+\s*){1,13}/g, "$&\n");
          const fixHeight = splitText.split("\n").slice(0, 38).join("\n");
          spawn("convert", [
            "./database/media/nulis/images/folio/sebelumkanan.jpg",
            "-font",
            "./database/media/nulis/font/Indie-Flower.ttf",
            "-size",
            "960x1280",
            "-pointsize",
            "23",
            "-interline-spacing",
            "3",
            "-annotate",
            "+89+190",
            fixHeight,
            "./database/media/nulis/images/folio/setelahkanan.jpg",
          ])
            .on("error", () => reply(mess.error))
            .on("exit", () => {
              haruka.sendMessage(
                from,
                fs.readFileSync(
                  "./database/media/nulis/images/folio/setelahkanan.jpg"
                ),
                image,
                {
                  thumbnail: Buffer.alloc(0),
                  quoted: mek,
                  caption: `Hati-hati ketahuan!`,
                }
              );
            });
        }
        break;
      case "facebook":
      case "fb":
      case "fbdl":
      case "facebookdl":
        {
          if (!q) return reply(`Example : ${prefix + command} link Facebook`);
          if (!q.includes("facebook.com") && !q.includes("fb.watch"))
            return reply("Itu bukan link Facebook");
          await reply(lang.wait());
          try {
            zee.Facebook(`${q}`).then(async (data) => {
              let txt = `*----「 FACEBOOK DOWNLOADER 」----*\n\n`;
              txt += `*• Title :* ${data.title}\n`;
              txt += `*• Type :* ${data.medias[0].extension}\n`;
              txt += `*• Quality :* ${data.medias[0].quality}\n`;
              txt += `*• Size HD:* ${data.medias[1].formattedSize}\n`;
              txt += `*• Url :* ${data.url}`;
              let ppfb = await getBuffer(data.medias[1].url);
              haruka.sendMessage(from, ppfb, video, {
                mimetype: "video/mp4",
                quoted: mek,
                caption: txt,
              });
            });
          } catch {
            reply("Fitur sedang error");
          }
        }
        break;
      case "soundcloud":
        if (!q) return reply(`Example : ${prefix + command} link SoundCloud`);
        if (!q.includes("m.soundcloud.com"))
          return reply("Itu bukan link SoundCloud");
        await reply(lang.wait());
        zee.SoundCloud(`${q}`).then(async (data) => {
          let txt = `*----「 SOUNDCLOUD DOWNLOAD 」----*\n\n`;
          txt += `*• Title :* ${data.title}\n`;
          txt += `*• Duration :* ${data.duration}\n`;
          txt += `*• Quality :* ${data.medias[1].quality}\n`;
          txt += `*• Ext :* ${data.medias[0].extension}\n`;
          txt += `*• Size :* ${data.medias[0].formattedSize}\n`;
          txt += `*• Url  :* ${data.url}\n\n`;
          txt += `*Mohon tunggu sebentar, sedang proses pengiriman...*`;
          sendFileFromUrl(from, data.thumbnail, txt, mek);
          haruka.sendMessage(from, await getBuffer(data.medias[0].url), audio, {
            quoted: mek,
            mimetype: "audio/mp4",
          });
        });
        break;
      case "telesticker":
      case "tstiker":
        {
          if (!isGroup) return reply(lang.group());
          if (!q)
            return reply(
              `Contoh: ${
                prefix + command
              } *https://t.me/addstickers/geestickerpack*`
            );
          if (!q.includes("t.me")) return reply("Bukan link telegram stiker");
          var telestc = await zee.Telesticker(`${q}`);
          await reply(lang.wait());
          for (
            let i = 0;
            i < (telestc.length < 10 ? telestc.length : 10);
            i++
          ) {
            haruka.sendMessage(from, await getBuffer(telestc[i].url), sticker, {
              mimetype: "image/webp",
              quoted: mek,
            });
          }
        }
        break;
      case "tebakgambar":
        if (!isGroup) return reply(lang.group());
        if (tebakgambar.hasOwnProperty(sender.split("@")[0]))
          return reply("Masih ada permainan yang sedang berlangsung");
        hx.tebakgambar().then(async (data) => {
          tebakya = await getBuffer(data[0].image);
          jawaban = `${data[0].jawaban.replace("Jawaban ", "")}`;
          tebakgambar[sender.split("@")[0]] = jawaban.toLowerCase();
          fs.writeFileSync(
            "./database/game/tebakgambar.json",
            JSON.stringify(tebakgambar)
          );
          console.log(jawaban);
          haruka.sendMessage(from, tebakya, image, {
            quoted: mek,
            caption: "\n\nTimeout : 120.00 seconds",
          });
          await sleep(120000);
          if (tebakgambar.hasOwnProperty(sender.split("@")[0])) {
            haruka.sendMessage(
              from,
              "Waktu permainan habis" +
                "\n\n" +
                "*Jawaban :*" +
                "\n" +
                "_" +
                jawaban +
                "_",
              text,
              { quoted: mek }
            ); // ur cods
            delete tebakgambar[sender.split("@")[0]];
            fs.writeFileSync(
              "./database/game/tebakgambar.json",
              JSON.stringify(tebakgambar)
            );
          }
        });
        break;

      case "ytmp3":
        {
          if (args.length === 0)
            return reply(`Kirim perintah *${prefix}ytmp3* _Url YouTube_`);
          if (!isUrl(args[0]) && !args[0].includes("youtu"))
            return reply("Link tidak valid!");
          var mulaikah = args.join(" ");
          await reply(lang.wait());
          zee.Youtube(mulaikah).then(async (data) => {
            let txt = `*----「 YOUTUBE AUDIO 」----*\n\n`;
            txt += `*• Quality :* ${data.medias[7].quality}\n`;
            txt += `*• Type :* ${data.medias[7].extension}\n`;
            txt += `*• Size :* ${data.medias[7].formattedSize}\n`;
            txt += `*• Url Source :* ${data.url}\n\n`;
            txt += `_Mohon tunggu sebentar , uploading media..._`;
            sendFileFromUrl(from, data.thumbnail, txt, mek);
            sendFileFromUrl(from, data.medias[7].url, "", mek);
          });
        }
        break;
      case "ytmp4":
        {
          if (args.length === 0)
            return reply(`Kirim perintah *${prefix}ytmp3* _Url YouTube_`);
          if (!isUrl(args[0]) && !args[0].includes("youtu"))
            return reply("Link tidak valid!");
          var mulaikah = args.join(" ");
          zee.Youtube(mulaikah).then(async (data) => {
            let txt = `*----「 YOUTUBE VIDEO 」----*\n\n`;
            txt += `*• Quality :* ${data.medias[1].quality}\n`;
            txt += `*• Type :* ${data.medias[1].extension}\n`;
            txt += `*• Size :* ${data.medias[1].formattedSize}\n`;
            txt += `*• Url Source :* ${data.url}\n\n`;
            txt += `_Mohon tunggu sebentar , uploading media..._`;
            sendFileFromUrl(from, data.thumbnail, txt, mek);
            sendFileFromUrl(from, data.medias[1].url, "", mek);
          });
        }
        break;
      default:
        if (isCmd) {
          reply(
            `Sorry bro, command *${prefix}${command}* gk ada di list *${prefix}help*`
          );
        }
        if (!isGroup && !isCmd && !kuis) {
          await haruka.updatePresence(from, Presence.composing);
          simi = await fetchJson(
            `https://api.lolhuman.xyz/api/simi?apikey=${lolkey}&text=${budy}`
          );
          reply(simi.result);
        }
        if (budy.startsWith(">")) {
          try {
            if (!(mek.key.fromMe && isOwner)) return reply(lang.owner(botname));
            return haruka.sendMessage(
              from,
              JSON.stringify(eval(budy.slice(2)), null, "\t"),
              text,
              { quoted: mek }
            );
          } catch (err) {
            e = String(err);
            reply(e);
          }
        }
        if (budy.startsWith("$")) {
          if (!(mek.key.fromMe && isOwner)) return reply(lang.owner(botname));
          qur = budy.slice(2);
          exec(qur, (err, stdout) => {
            if (err) return reply(`Pogam :~ ${err}`);
            if (stdout) {
              reply(stdout);
            }
          });
        }
        if (budy.startsWith("=>")) {
          if (!(mek.key.fromMe && isOwner)) return reply(lang.owner(botname));
          var konsol = budy.slice(3);
          Return = (sul) => {
            var sat = JSON.stringify(sul, null, 2);
            bang = util.format(sat);
            if (sat == undefined) {
              bang = util.format(sul);
            }
            return reply(bang);
          };
          try {
            reply(util.format(eval(`;(async () => { ${konsol} })()`)));
            console.log(
              "\x1b[1;31m~\x1b[1;37m>",
              "[",
              "\x1b[1;32m EXC \x1b[1;37m",
              "]",
              time,
              chalk.green("=>"),
              "from",
              chalk.green(pushname),
              "args :",
              chalk.green(args.length)
            );
          } catch (e) {
            reply(String(e));
          }
        }
    }
  } catch (e) {
    e = String(e);
    if (!e.includes("this.isZero") && !e.includes("jid")) {
      console.log("Message : %s", chalk.green(e));
    }
  }
};
