import NavBar from "./components/navbar/NavBar.jsx"
import Footer from "./components/footer/Footer.jsx"
import SideBar from "./components/sidebar/SideBar.jsx"

const App = () => {
  return (
    <>
      <div className="h-fit w-fit overflow-x-hidden flex  bg-white text-stone-50">
        <SideBar />
        <NavBar />
        {/* <Footer /> */}
      </div>
    </>
  )
}

export default App;