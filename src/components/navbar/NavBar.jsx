const NavBar = () => {
    return (
        <div className="h-18 w-[83%] px-10 fixed right-0 text-2xl flex justify-between items-center bg-stone-800 text-stone-50 border-b-2 border-stone-600">
            <h1 className="cursor-pointer">Trello</h1>
            <div className="">Settings</div>
        </div>
    )
}

export default NavBar;