const { contextBridge } = require('electron');

const relayArg = process.argv.find((arg) => arg.startsWith('--streamflix-relay-base='));
const relayBase = relayArg ? relayArg.replace('--streamflix-relay-base=', '') : '';

contextBridge.exposeInMainWorld('STREAMFLIX_RELAY_BASE', relayBase);
contextBridge.exposeInMainWorld('streamflixDesktop', {
  relayBase,
  platform: process.platform
});
