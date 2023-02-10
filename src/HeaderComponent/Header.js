const Header = () => {
    return (
        <div className="bg-slate-700 py-1">
            <div className="max-w-[1024px] m-auto flex justify-between align-middle text-white">
                <h1 className="py-4 ml-1 font-bold">Where In The World?</h1>
                <div className="flex py-4 mr-1">
                    <span className="mr-1">
                        <i className="fa-regular fa-moon"></i>
                    </span>
                    <p className="font-bold">Dark Mode</p>
                </div>
            </div>
        </div>
    )
}

export default Header;

// #202C37