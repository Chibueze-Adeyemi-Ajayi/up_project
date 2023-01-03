const Box = (props) => {
    return (
        <section className="w-full h-fit my-auto p-12 border flex flex-col space-y-4 rounded-sm border-yellow-600">
            <h1 className="font-semibold text-xl">{props.heading}</h1>
            <div className=" font-bold my-auto mx-auto text-6xl">{props.message}</div>
        </section>
    );
}

export default Box;
