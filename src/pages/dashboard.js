import { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import WalletInfo from "../components/wallet-info";
import Mint from "../dialogs/mint";
// d
const Dashboard = (props) => {
    const [mint_var, mint_func] = useState(false);
    return (
        <section className='w-full h-full bg-white flex flex-col space-y-2'>
        <Header screen_func={props.screen_func} mint_func={mint_func} connected={true}/>
        <WalletInfo mint_func={mint_func} />
        {!mint_var ? <></> : <Mint mint_func={mint_func} />}
        <Footer/>
        {/* {connect_wallet_var ? <Wallets screen_func={props.screen_func} connect_wallet_func={connect_wallet_func}/> : <></>} */}
    </section>
    );
}

export default Dashboard;