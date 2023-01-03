import Box from "./box";

const Banner = (props) => {
    return (
        <section className="w-full pt-28 md:pt-0 h-full p-12 grid md:grid-cols-2">
            <div className="w-full h-fit my-auto flex flex-col space-y-8">
                <h1 className="md:text-6xl text-6xl uppercase font-bold text-yellow-600">UP Finance</h1>
                <font className="text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </font>
                <button onClick={()=>{
                    props.connect_wallet_func(true);
                }} className="lg:w-fit w-full h-fit px-8 my-auto font-bold py-4 text-white bg-yellow-600 rounded-md">LAUNCH DAPP</button>
            </div>
            <div className="w-full h-full lg:flex flex-col lg:space-y-0 hidden md:flex pt-12 px-12">
                <Box heading="Average USD+ APY" message="30.8%"/>
                <Box heading="USD+ TVL" message="$6,123,456"/>
            </div>
        </section>
    );
}

export default Banner;