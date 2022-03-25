require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'gesture roast frame ski strong radar six puppy give prize slot gate'; 
let testAccounts = [
"0xf33b26ff7988da08542a4e1369decb04e73a1c65e6ab85c1c5ab426e41e01d11",
"0x31b42250bb4bd9c69e0cebab572e011a58fc764839f228941933719083ea2f28",
"0xc266bc1a0b501a785d3bb0ee30117a705334a411f258696eff377f0c4d1d18dd",
"0x97b68fec0879a79941456e93e11974e5607e3e0a9770153e2e5d004fca2e8024",
"0x505fbc655d1b73cdf16b6c153647670040fede7dd289681aec555e8a8213e38d",
"0xf86fe7c63d73d85bd38ee59c6004631ac92293f21af4734b67149c0a7d3e73b1",
"0xe73ec4daa2acf6e1426421de5e24e75387436ec23cf9abfb5f52a9cb026e9fae",
"0x0fa4a7b35dcf88c4f3a55ece42c935785bac3b8f1f15fb7e003817a49ca3e51d",
"0xe08506a7fdd04ff0b24a5125e0a7502f628b5cbfd9d37688aa21073a456ddf63",
"0x91956a1de22eb57854566af70ffb530aec86d88a6e3901606f2007482be1d546"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


