const WebSocket = require('ws');
const express = require('express');
const { WS_PORT, IMGS_PORT } = require('./config');
const { NFC } = require('nfc-pcsc');

const osUsername = require('os').userInfo().username;

console.log('osUsername:', osUsername);

const imagesPath =
  process.platform === 'win32'
    ? `C:/Users/${osUsername}/Downloads/chance-images`
    : process.platform === 'darwin' &&
      `/Users/${osUsername}/Downloads/chance-images`;

console.log('imagesPath:', imagesPath)

const app = express();
app.use('/images', express.static(imagesPath));
app.listen(IMGS_PORT);

const nfc = new NFC();

const wsServer = new WebSocket.Server({ port: WS_PORT });

const client = {
  wsClient: null,
  status: null,
  user: null,
  initUser: async (reader) => {
    let user = client.user;
    if (client.status === 'reg_user' && client.user !== null) {
      try {
        const isUserReg = await initUser(JSON.stringify(client.user), reader);
        if (isUserReg) {
          sendStatus('card_connected', null, user);
        }
      } catch (err) {
        sendStatus('error', err.toString());
      }
    }
  },
};

function onConnection(wsClient) {
  console.log(onConnection);

  client.wsClient = wsClient;

  wsClient.on('message', async function incoming(data) {
    client.status = JSON.parse(data).status;
    client.user = JSON.parse(data).user;
    client.initUser(client.reader);
  });
}

wsServer.on('connection', onConnection);

async function initUser(user, reader) {
  console.log('initUser')

  try {
    const data = Buffer.allocUnsafe(300);
    data.fill(0);
    data.write(user);
    await reader.write(4, data);
    return true;
  } catch (err) {
    sendStatus('error', err.toString());
  }
}

function isJSON(str) {
  console.log('isJSON')

  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

function normalizeString(str) {
  console.log('normalizeString')

  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (JSON.stringify(str[i]) !== JSON.stringify('\u0000')) {
      newStr += str[i];
    }
  }

  return isJSON(newStr) ? newStr : '';
}

async function readUser(reader) {
  console.log('readUser')

  try {
    const data = await reader.read(4, 300);
    const payload =
      normalizeString(data.toString()).length > 10
        ? JSON.parse(normalizeString(data.toString()))
        : '';

    return payload;
  } catch (err) {
    sendStatus('error', err.toString());
  }
}

function sendStatus(status, statusText = null, userData = null) {
  console.log('sendStatus')
  
  const interval = setInterval(() => {
    const { wsClient } = client;
    if (wsClient !== null) {
      if (userData !== null) {
        wsClient.send(JSON.stringify({ status, userData }));
      } else if (statusText === null) {
        wsClient.send(JSON.stringify({ status }));
      } else if (statusText !== null) {
        wsClient.send(JSON.stringify({ status, statusText }));
      }
      clearInterval(interval);
    }
  }, 500);
}

nfc.on('reader', (reader) => {
  console.log('nfc.on')

  reader.autoProcessing = false;
  sendStatus('device_connected');

  reader.on('card', async (card) => {
    const data = await readUser(reader);
    if (data !== undefined) {
      sendStatus('card_connected', null, data);
    }
    client.reader = reader;
  });
  reader.on('card.off', () => sendStatus('device_connected'));
  reader.on('error', (err) => sendStatus('error', err));
  reader.on('end', () => sendStatus('connected'));
});

console.log('late')