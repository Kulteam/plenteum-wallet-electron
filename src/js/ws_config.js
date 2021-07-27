var config = {};

// self explanatory, your application name, descriptions, etc
config.appName = 'MONCoinWallet';
config.appDescription = 'MONCoin Wallet for PC';
config.appSlogan = 'Money for free word!';
config.appId = 'com.moncoin.walletelectron';
config.appGitRepo = 'https://github.com/Kulteam/MONCoin-Wallet-Electron/';

// default port number for your daemon (e.g. Plenteumd)
config.daemonDefaultRpcPort = 12898;

// wallet file created by this app will have this extension
config.walletFileDefaultExt = 'wallet';

// change this to match your wallet service executable filename
config.walletServiceBinaryFilename = 'mon-service';

// version of the bundled service (wallet-service)
config.walletServiceBinaryVersion = "v0.4.8";

// config file format supported by wallet service, possible values:
// ini -->  for wallet service (or its forks) version <= v0.8.3
// json --> for wallet service (or its forks) version >= v0.8.4
config.walletServiceConfigFormat = "json";

// default port number for your wallet service (e.g. turtle-service)
config.walletServiceRpcPort = 8070;

// block explorer url, the [[TX_HASH]] will be substituted w/ actual transaction hash
config.blockExplorerUrl = 'https://exp.moncoin.io/block.html?hash=[[TX_HASH]]';

// default remote node to connect to, set this to a known reliable node for 'just works' user experience
config.remoteNodeDefaultHost = 'sv3.moncoin.io';


// remote node list update url, set to null if you don't have one
config.remoteNodeListUpdateUrl = null;

// set to false if using raw/unfiltered node list
config.remoteNodeListFiltered = false;

// fallback remote node list, in case fetching update failed, fill this with known to works remote nodes
config.remoteNodeListFallback = [
    'sv1.moncoin.io:12898',
    'sv2.moncoin.io:12898'
    'node-asian.moncoin.io:12898'
];

// your currency name
config.assetName = 'MONCoin';
// your currency ticker
config.assetTicker = 'MON';
// your currency address prefix, for address validation
config.addressPrefix = 'Ngan';
// standard wallet address length, for address validation
config.addressLength = 99;
// integrated wallet address length, for address validation. Added length is length of payment ID encoded in base58.
config.integratedAddressLength = config.addressLength + ((64 * 11) / 8);

// minimum fee for sending transaction
config.minimumFee = 0.01;
// minimum amount for sending transaction
config.mininumSend = 0.1;
// default mixin/anonimity for transaction
config.defaultMixin = 3;
// to represent human readable value
config.decimalPlaces = 9;
// to convert from atomic unit
config.decimalDivisor = 1000000000;

// obfuscate address book entries, set to false if you want to save it in plain json file.
// not for security because the encryption key is attached here
config.addressBookObfuscateEntries = true;
// key use to obfuscate address book contents
config.addressBookObfuscationKey = '79009fb00ca1b7130832a42de45142cf6c4b7f333fe6fba5';
// initial/sample entries to fill new address book
config.addressBookSampleEntries = [
  {
    name: 'MONCoin Wallet Donation',
        address: 'NganteKaysK6T61AjnRd2Qa4tFxg2mhmyEqwi6nhA1PY39pChT4AJz852xuMX6xm7VSwze7trCK33V3km9NG1zj1Gxid4QwzfL2',
    paymentId: '',
  }
];
// cipher config for private address book
config.addressBookCipherConfig = {
  algorithm: 'aes-256-gcm',
  saltLenght: 128,
  pbkdf2Rounds: 10000,
  pbkdf2Digest: 'sha512'
};

module.exports = config;
