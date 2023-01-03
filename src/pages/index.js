import { useState } from "react"
import Banner from "../components/banner"
import Footer from "../components/footer"
import Header from "../components/header"
import Wallets from "../dialogs/wallet-alert"
import { getProviders } from "../web3/wallet-connect"

const Index = (props) => { 
    const [connect_wallet_var, connect_wallet_func] = useState(false);
    return (
        <section className='w-full h-full bg-white flex flex-col space-y-2'>
            <Header connect_wallet_func={connect_wallet_func}/>
            <Banner connect_wallet_func={connect_wallet_func}/>
            <Footer/>
            {connect_wallet_var ? <Wallets screen_func={props.screen_func} connect_wallet_func={connect_wallet_func}/> : <></>}
        </section>
    )
}

export default Index;