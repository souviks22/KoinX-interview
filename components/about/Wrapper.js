const Wrapper = ({ heading, children, divider = true }) => {
    return (<div>
        <p className="font-semibold mb-2">{heading}</p>
        <section className="text-sm space-y-5">
            {children}
        </section>
        {divider && <div className="w-full h-px bg-gray-300 block my-3" />}
    </div>)
}

export default Wrapper