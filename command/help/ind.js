exports.owner = (botname) => {
  return ` 🙅‍♀️ Command khusus owner ${botname}`;
};
exports.admin = (groupName) => {
  return `🙅‍♀️ Command khusus admin ${groupName}`;
};
exports.adminB = () => {
  return `⚠️ Bot bukan admin grup`;
};
exports.err = () => {
  return `⚠️ Fitur ini sedang eror !`;
};
exports.group = () => {
  return `🙅‍♀️ Command khusus di dalam group`;
};

exports.wait = () => {
  return `⏳ Sedang di proses ~`;
};
exports.ok = () => {
  return ` ✅ Oke done ~`;
};
exports.welcome = () => {
  return `Selamat datang di ${groupName}, Jangan lupa beramal 😇🙏`;
};
exports.leave = () => {
  return `Selamat tinggal, Jangan lupa solat 😇🙏`;
};
exports.menu = (prefix, salam, pushname) => {
  return `Hi ${pushname}, selamat ${salam}

╭─⬣「 List Menu 」
├ • ${prefix}menu
├ • ${prefix}help
├ • ${prefix}Pogam
│
├──「 Islami 」
├ • ${prefix}listsurah
├ • ${prefix}asmaulhusna
├ • ${prefix}alquran no_surah
├ • ${prefix}alquran no_surah/no_ayat
├ • ${prefix}alquranaudio no_surah
├ • ${prefix}alquranaudio no_surah/no_ayat
├ • ${prefix}kisahnabi nama_nabi
├ • ${prefix}jadwalsholat daerah
│
├──「 Downloader 」
├ • ${prefix}play [query]
├ • ${prefix}song [judul lagu]
├ • ${prefix}pinterest [query]
├ • ${prefix}pinterestdl [url]
├ • ${prefix}ytmp3 [url]
├ • ${prefix}ytmp4 [url]
├ • ${prefix}igdl [url]
├ • ${prefix}fbdl [url_video]
├ • ${prefix}soundcloud [url]
├ • ${prefix}telesticker [url]
├ • ${prefix}spotify [url]
├ • ${prefix}spotifysearch [query]
├ • ${prefix}pixiv [query]
├ • ${prefix}pixivdl [url]
├ • ${prefix}zippyshare [url]
│
├──「 Movie 」
├ • ${prefix}lk21 query
│
├──「 Convert 」
├ • ${prefix}stiker [video/image]
├ • ${prefix}memegen [text|text2]
│
├──「 Searching 」
├ • ${prefix}shopee [query]
├ • ${prefix}google [query]
├ • ${prefix}gimage [query]
├ • ${prefix}konachan [query]
├ • ${prefix}playstore [query]
├ • ${prefix}stickerwa [query]
├ • ${prefix}wallpapersearch [query]
│
├──「 Education??????? 」
├ • ${prefix}nuliskiri [text]
├ • ${prefix}nuliskanan [text]
├ • ${prefix}foliokiri [text]
├ • ${prefix}foliokanan [text]
│
├──「 Random Text 」
├ • ${prefix}quotes
├ • ${prefix}quotesanime
├ • ${prefix}quotesimage
├ • ${prefix}faktaunik
├ • ${prefix}katabijak
├ • ${prefix}pantun
├ • ${prefix}randomnama
│
├──「 AniManga 」
├ • ${prefix}manga [query]
├ • ${prefix}anime [query]
├ • ${prefix}character [query]
├ • ${prefix}kusonime [url]
├ • ${prefix}kusonimesearch [query]
├ • ${prefix}otakudesu [url]
├ • ${prefix}otakudesusearch [query]
│
├──「 Information 」
├ • ${prefix}translate [kode_negara] [text]
├ • ${prefix}infogempa
├ • ${prefix}lirik [query]
├ • ${prefix}cuaca [daerah]
│
├──「 Other 」
├ • ${prefix}ssweb [link]
├ • ${prefix}shortlink [link]
├ • ${prefix}spamsms [nomor]
│
├──「 Maker Ephoto360 」
├ • ${prefix}wetglass [text]
├ • ${prefix}multicolor3d [text]
├ • ${prefix}watercolor [text]
├ • ${prefix}luxurygold [text]
├ • ${prefix}galaxywallpaper [text]
├ • ${prefix}lighttext [text]
├ • ${prefix}beautifulflower [text]
├ • ${prefix}puppycute [text]
├ • ${prefix}royaltext [text]
├ • ${prefix}heartshaped [text]
├ • ${prefix}birthdaycake [text]
├ • ${prefix}galaxystyle [text]
├ • ${prefix}hologram3d [text]
├ • ${prefix}greenneon [text]
├ • ${prefix}glossychrome [text]
├ • ${prefix}greenbush [text]
├ • ${prefix}metallogo [text]
├ • ${prefix}noeltext [text]
├ • ${prefix}glittergold [text]
├ • ${prefix}textcake [text]
├ • ${prefix}starsnight [text]
├ • ${prefix}wooden3d [text]
├ • ${prefix}textbyname [text]
├ • ${prefix}writegalacy [text]
├ • ${prefix}galaxybat [text]
├ • ${prefix}snow3d [text]
├ • ${prefix}birthdayday [text]
├ • ${prefix}goldplaybutton [text]
├ • ${prefix}silverplaybutton [text]
├ • ${prefix}freefire [text]
│
├──「 Photo Oxy 」
├ • ${prefix}shadow [text]
├ • ${prefix}cup [text]
├ • ${prefix}cup1 [text]
├ • ${prefix}romance [text]
├ • ${prefix}smoke [text]
├ • ${prefix}burnpaper [text]
├ • ${prefix}lovemessage [text]
├ • ${prefix}undergrass [text]
├ • ${prefix}love [text]
├ • ${prefix}coffe [text]
├ • ${prefix}woodheart [text]
├ • ${prefix}woodenboard [text]
├ • ${prefix}summer3d [text]
├ • ${prefix}wolfmetal [text]
├ • ${prefix}nature3d [text]
├ • ${prefix}underwater [text]
├ • ${prefix}golderrose [text]
├ • ${prefix}summernature [text]
├ • ${prefix}letterleaves [text]
├ • ${prefix}glowingneon [text]
├ • ${prefix}fallleaves [text]
├ • ${prefix}flamming [text]
├ • ${prefix}harrypotter [text]
├ • ${prefix}carvedwood [text]
├ • ${prefix}tiktok text1 [text]
├ • ${prefix}arcade8bit [text1] [text2]
├ • ${prefix}battlefield4 [text1] [text2]
├ • ${prefix}pubg [text1] [text2]
│
├──「 Text Pro Me 」
├ • ${prefix}blackpink [text]
├ • ${prefix}neon [text]
├ • ${prefix}greenneon [text]
├ • ${prefix}advanceglow [text]
├ • ${prefix}futureneon [text]
├ • ${prefix}sandwriting [text]
├ • ${prefix}sandsummer [text]
├ • ${prefix}sandengraved [text]
├ • ${prefix}metaldark [text]
├ • ${prefix}neonlight [text]
├ • ${prefix}holographic [text]
├ • ${prefix}text1917 [text]
├ • ${prefix}minion [text]
├ • ${prefix}deluxesilver [text]
├ • ${prefix}newyearcard [text]
├ • ${prefix}bloodfrosted [text]
├ • ${prefix}halloween [text]
├ • ${prefix}jokerlogo [text]
├ • ${prefix}fireworksparkle [text]
├ • ${prefix}natureleaves [text]
├ • ${prefix}bokeh [text]
├ • ${prefix}toxic [text]
├ • ${prefix}strawberry [text]
├ • ${prefix}box3d [text]
├ • ${prefix}roadwarning [text]
├ • ${prefix}breakwall [text]
├ • ${prefix}icecold [text]
├ • ${prefix}luxury [text]
├ • ${prefix}cloud [text]
├ • ${prefix}summersand [text]
├ • ${prefix}horrorblood [text]
├ • ${prefix}thunder [text]
├ • ${prefix}pornhub [text1] [text2]
├ • ${prefix}glitch [text1] [text2]
├ • ${prefix}avenger [text1] [text2]
├ • ${prefix}space [text1] [text2]
├ • ${prefix}ninjalogo [text1] [text2]
├ • ${prefix}marvelstudio [text1] [text2]
├ • ${prefix}lionlogo [text1] [text2]
├ • ${prefix}wolflogo [text1] [text2]
├ • ${prefix}steel3d [text1] [text2]
├ • ${prefix}wallgravity [text1] [text2]
│
├──「 Game 」
├ • ${prefix}tebakgambar 
│
├──「 Info 」
├ • ${prefix}owner
├ • ${prefix}donate
│
├──「 Owner 」
├ • ${prefix}broadcast [text]
├ • ${prefix}leave
├ • >
├ • $
├ • =>
│
├──「 Group 」
├ • ${prefix}hidetag [text]
├ • ${prefix}linkgrup
├ • ${prefix}tagall
├ • ${prefix}kick @tag
├ • ${prefix}setdesc [text] 
├ • ${prefix}setname [text] 
│
╰─⬣
`;
};

const bahasa = () => {
  return `
  List Bahasa :
  af: Afrikaans
  sq: Albanian
  ar: Arabic
  hy: Armenian
  ca: Catalan
  zh: Chinese
  zh-cn: Chinese (Mandarin/China)
  zh-tw: Chinese (Mandarin/Taiwan)
  zh-yue: Chinese (Cantonese)
  hr: Croatian
  cs: Czech
  da: Danish
  nl: Dutch
  en: English
  en-au: English (Australia)
  en-uk: English (United Kingdom)
  en-us: English (United States)
  eo: Esperanto
  fi: Finnish
  fr: French
  de: German
  el: Greek
  ht: Haitian Creole
  hi: Hindi
  hu: Hungarian
  is: Icelandic
  id: Indonesian
  it: Italian
  ja: Japanese
  ko: Korean
  la: Latin
  lv: Latvian
  mk: Macedonian
  no: Norwegian
  pl: Polish
  pt: Portuguese
  pt-br: Portuguese (Brazil)
  ro: Romanian
  ru: Russian
  sr: Serbian
  sk: Slovak
  es: Spanish
  es-es: Spanish (Spain)
  es-us: Spanish (United States)
  sw: Swahili
  sv: Swedish
  ta: Tamil
  th: Thai
  tr: Turkish
  vi: Vietnamese
  cy: Welsh
`;
};
exports.bahasa = bahasa;
