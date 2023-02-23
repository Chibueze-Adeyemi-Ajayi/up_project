import $ from "jquery";
import { getWalletAddress } from "../modules/app_wallet";

const WalletInfo = (props) => { 

    getWalletAddress((address_) => {
        var slice = address_.substring(0, 4) + "..." + address_.substring(address_.length - 4);
        $("#wallet").html(slice);
    }); 
// this
    ( 
        <section className="w-full pt-28 px-12 py-4 flex flex-col space-y-4"> <br></br><br></br>
            <h1 className="text-xl text-black font-semibold">WALLET INFO (<font className="text-gray-800my-auto" id="wallet">xxxxxx</font>)</h1>
            <div className="w-full h-fit border border-yellow-600 p-3 rounded-md grid grid-cols-1 md:grid-cols-3 gap-2">
                <span className="w-full h-fit flex flex-col space-y-3">
                   <font className="mx-auto text-xl">Balance</font>
                   <font className="mx-auto font-bold text-2xl">$0</font> 
                </span>
                <span className="w-full h-fit flex flex-col space-y-3">
                   <font className="mx-auto text-xl">Profit</font>
                   <font className="mx-auto font-bold text-2xl">$0</font> 
                </span>
                <span className="w-full h-fit flex flex-col space-y-3">
                   <font className="mx-auto text-xl">Average APY</font>
                   <font className="mx-auto font-bold text-2xl">34.5%</font> 
                </span>
                <section className="md:px-40 mt-4 w-full py-4 flex">
                <button onClick={() => {props.mint_func(true);}} className="w-48 mx-auto h-10 font-bold text-white bg-yellow-600 rounded-md">MINT</button>
                </section>
            </div>
        </section>
    );
}

export default WalletInfo;
