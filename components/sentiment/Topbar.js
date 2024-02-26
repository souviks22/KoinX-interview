const Topbar = ({ active }) => {
    const sections = ['Overview', 'Fundamentals', 'News Insights', 'Sentiment', 'Team', 'Technicals', 'Tokenomics']
    return (<div className="my-5">
        <div className="flex text-sm overflow-auto">
            {sections.map(sec =>
                <section className={`py-3 ${active === sec ? 'border-b-2 border-[#0052FE] text-[#0052FE]' : 'border-trasparent'}`}>
                    <span className="whitespace-nowrap mx-3">{sec}</span>
                </section>
            )}
        </div>
        <div className="w-full h-px bg-gray-300 block" />

    </div>)
}

export default Topbar