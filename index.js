const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1160926292934398052')
    .setType('STREAMING')
    .setURL('https://www.twitch.tv/shivfps') //Must be a youtube video link 
    .setState('hmm')
    .setName('Holl')
    .setDetails(`Your Mom`)
    .setStartTimestamp(Date.now())
.setAssetsLargeImage('https://cdn.discordapp.com/attachments/1163535228149702738/1163535367396413520/giphy.gif?ex=660af4c1&is=65f87fc1&hm=caee5727aba2838d08f0ec9cc88222cbfaea448162b1b5a47bf27e9adc503f5a&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('hmm') //Text when you hover the Large image
    .setAssetsSmallImage() //You can put links in tenor or discord and etc.
    .setAssetsSmallText('Hi Stalker') //Text when you hover the Small image
    .addButton('♡ Join Here ♡', 'https://discord.gg/S3V7Znc7DZ')
    .addButton('૮ ˶ᵔ ᵕ ᵔ˶ ა', 'https://discord.gg/S3V7Znc7DZ');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `Your Mom`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
