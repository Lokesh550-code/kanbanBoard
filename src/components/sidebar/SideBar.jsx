import { Search, PanelRight, LayersPlus } from "lucide-react"

const SideBar = () => {
    return (
        <div className="h-screen w-[17%] fixed  bg-stone-800 text-stone-50 border-r-2 border-stone-700">
            <div className="h-18 w-[17%] fixed">
                <div className="h-full w-full text-xl px-7 flex justify-between items-center">
                    <h1 className="cursor-pointer">T</h1>
                    <div className="h-full w-1/2 flex gap-4 justify-end items-center">
                        <Search className="h-9 w-9 p-2 cursor-pointer hover:bg-stone-500 hover:rounded transition" size={18} />
                        <PanelRight className="h-9 w-9 p-2 cursor-pointer hover:bg-stone-500 hover:rounded transition" size={18} />
                    </div>
                </div>
            </div>

            <div className="create-boards h-1/2 w-full px-7 py-3 mt-18 border-b-2 text-stone-50 border-stone-700">
                <div className="h-8 cursor-pointer flex justify-center items-center gap-3 hover:bg-stone-700 rounded transition">
                    <LayersPlus  size={24} /> <span>Create new board</span>
                </div>
            </div>

            <div className="Boards h-fit w-full"></div>
        </div>
    )
}

export default SideBar