var providers = "lol";

const addProvider = (provider) => providers = provider;

const getProviders = () => providers;

const getAddress = async () => {
    let signer = providers.getSigner();
    let address = await signer.getAddress();
    return address;
}

module.exports = {addProvider, getProviders, getAddress};