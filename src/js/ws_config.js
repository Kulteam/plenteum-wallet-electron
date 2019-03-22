var config = {};

// self explanatory, your application name, descriptions, etc
config.appName = 'PlenteumWallet';
config.appDescription = 'Plenteum Wallet';
config.appSlogan = 'Slow and steady wins the race!';
config.appId = 'com.plenteum.walletelectron';
config.appGitRepo = 'https://github.com/plenteum/plenteum-wallet-electron';

// default port number for your daemon (e.g. Plenteumd)
config.daemonDefaultRpcPort = 44016;

// wallet file created by this app will have this extension
config.walletFileDefaultExt = 'ple';

// change this to match your wallet service executable filename
config.walletServiceBinaryFilename = 'wallet-service';

// version on the bundled service (wallet-service)
config.walletServiceBinaryVersion = "v0.4.0";

// config file format supported by wallet service, possible values:
// ini -->  for turtle service (or its forks) version <= v0.8.3
// json --> for turtle service (or its forks) version >= v0.8.4
config.walletServiceConfigFormat = "json";

// default port number for your wallet service (e.g. wallet-service)
config.walletServiceRpcPort = 8070;

// block explorer url, the [[TX_HASH]] will be substituted w/ actual transaction hash
config.blockExplorerUrl = 'http://block-explorer.plenteum.com/transaction.html?hash=[[TX_HASH]]';

// default remote node to connect to, set this to a known reliable node for 'just works' user experience
config.remoteNodeDefaultHost = 'two.public.plenteum.com';

// remote node list update url, set to null if you don't have one
config.remoteNodeListUpdateUrl = null;

// fallback remote node list, in case fetching update failed, fill this with known to works remote nodes
config.remoteNodeListFallback = [
  'two.public.plenteum.com:44016',
  'three.public.plenteum.com:44016',
  'four.public.plenteum.com:44016',
];

// your currency name
config.assetName = 'Plenteum';
// your currency ticker
config.assetTicker = 'PLE';
// your currency address prefix, for address validation
config.addressPrefix = 'PLe';
// standard wallet address length, for address validation
config.addressLength = 98;
// intergrated wallet address length, for address validation
config.integratedAddressLength = 186;

// minimum fee for sending transaction
config.minimumFee = 0;
// minimum amount for sending transaction
config.mininumSend = 0.1;
// default mixin/anonimity for transaction
config.defaultMixin = 3;
// to convert from atomic unit
config.decimalDivisor = 100000000;
// to represent human readable value
config.decimalPlaces = 2;

// obfuscate address book entries, set to false if you want to save it in plain json file.
// not for security because the encryption key is attached here
config.addressBookObfuscateEntries = true;
// key use to obfuscate address book contents
config.addressBookObfuscationKey = '79009fb00ca1b7120832a42de45342cf6c4b7a331fe6bba5';
// initial/sample entries to fill new address book
config.addressBookSampleEntries = [
  {
    name: 'PlenteumWallet Donation',
    address: '',
        paymentId: 'PLearxtECBsKFLLeX3edPMEk4ncvZGkJQ7FpPyG3ADGtYbFj7FC5ELWXS2B7wRDfjwSqEwZVp7pwjbWCAhmGJp7z94TQzpNUkP',
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