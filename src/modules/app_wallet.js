let provider;

const addWalletProvider = (network) => {
    provider = network;
}

const getWalletProvider = () => {
    return provider;
}

const getWalletAddress = (callback) => {
    var my_provider = provider.getSigner();
     my_provider.getAddress().then((address) => {
        callback(address);
    });
}

module.exports = {addWalletProvider, getWalletProvider, getWalletAddress}