
const Mint = (props) => {
    return (
        <section className="w-full z-50 fixed -top-2 left-0 p-6 h-full bg-black/80 backdrop-blur-md flex flex-col">
            <section className="w-full h-full flex">
                <div className="w-full h-fit flex flex-col space-y-4 mx-auto my-auto md:w-[500px] bg-white p-6 rounded-sm border border-yellow-600">
                    <div className="w-full border-b-2 border-yellow-600  h-fit flex flex-row space-x-3">
                        <h1 className="text-xl w-full font-semibold pb-2">Mint</h1>
                        <button onClick={()=>{
                            props.mint_func(false);
                        }} className="text-xl font-semibold">x</button>
                    </div>
                    <font>Balance</font>
                    <section className="w-full grid grid-cols-3 h-fit p-6 rounded-lg border border-gray-200">
                        <font className="text-3xl ">
                            $<input className="w-24" placeholder="0.00"/>
                        </font> 
                        <span></span> 
                        <font className="text-xl">USD+</font>
                    </section>
                    <section className="w-full h-fit flex">
                    <svg className="w-6 h-6 mx-auto my-auto rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path className="fill-gray-600" d="M0 168v-16c0-13.255 10.745-24 24-24h360V80c0-21.367 25.899-32.042 40.971-16.971l80 80c9.372 9.373 9.372 24.569 0 33.941l-80 80C409.956 271.982 384 261.456 384 240v-48H24c-13.255 0-24-10.745-24-24zm488 152H128v-48c0-21.314-25.862-32.08-40.971-16.971l-80 80c-9.372 9.373-9.372 24.569 0 33.941l80 80C102.057 463.997 128 453.437 128 432v-48h360c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24z"/>
                    </svg>
                    </section>
                    <section className="w-full grid grid-cols-3 h-fit p-6 rounded-lg border border-gray-200">
                        <font className="text-3xl ">0.00</font> 
                        <span></span> 
                        <font className="text-xl">USDC</font>
                    </section>
                    <font className="w-full text-right">1USD+ = 1USDC</font>
                    <button className="w-full h-fit bg-yellow-600 text-white rounded-md py-3">REDEEM</button>
                </div>  
            </section>
        </section>
    );
}

export default Mint;