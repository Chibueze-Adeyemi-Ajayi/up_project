import metamask from "../metamask.png";

const Wallets = () => {
    return (
        <section className="w-full z-50 fixed -top-2 left-0 p-6 h-full bg-black/80 backdrop-blur-md flex flex-col">
            <section className="w-full h-full flex">
                <div className="w-full h-fit flex flex-col space-y-4 mx-auto my-auto md:w-[400px] bg-white p-6 rounded-sm border border-yellow-600">
                    <div className="w-full border-b border-yellow-600  h-fit flex flex-row space-x-3">
                        <h1 className="text-xl w-full font-semibold pb-2">Connect Wallet</h1>
                        <button className="text-xl font-semibold">x</button>
                    </div>
                    <button className="w-full transform transition-all duration-300 hover:bg-black/20 px-3 py-1 text-left h-fit flex flex-row">
                        <font className="w-full h-fit">Metamask</font>
                        <img className="w-8 my-auto h-8" src={metamask}/>
                    </button>
                </div>  
            </section>
        </section>
    );
}

export default Wallets;