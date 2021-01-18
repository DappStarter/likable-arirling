require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey ensure success shadow shock note magic essay include globe fortune soft'; 
let testAccounts = [
"0xe53254595af899cafc099bdd6ce0f09c08c7f9ff6dfeb709037f20ec0dcff327",
"0xa1c790a7799c521e5777aa0e444f4ca2345ca831c967ab4b2f6da6f36b09f083",
"0xb6ed5cf7ea82bdc8a0a4caed1b5dc563014e253a7741efdc8ee6eb9638a59119",
"0xe7597013c6c85d0c2e8c87c4758ed03998168aadcc2b3298d96366072228a42e",
"0xfb1083b83fb17194efa1df9d4af2b32c972e02f9317fa61df7a05aa621bb238a",
"0x3ff8010e740674dc4a55f491e103ff4837d56be5b1d70d28a43edb839b540bf8",
"0xd7ec63b62e226eeed25564885f65b645efa480b4c762340a11e9e6206de6f145",
"0xd07bc48a0bf04e26d133d8e66a86f39efddf672babc17dabfcef791422e20af8",
"0xb4eebd60ddbf1bc775bbe790b442f0ae035980a22bdcc0e5bf85ec8517a475ed",
"0x26ae9ef8e6a48534deec97255fcf4db79cfaf46fd42ad1ee6ab3fa7e51baf2d3"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
