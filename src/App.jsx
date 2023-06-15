import Equipment from "./components/Equipment/Equipment";
import Fishing from "./components/Fishing";
import Log from "./components/Log/Log";
import Player from "./components/Player/Player";
import Shop from "./components/Shop/Shop";

function App() {

  return (
    <>
      <div className="app-container container mx-auto px-4 lg:px-0 mb-4">
        <div className="grid grid-cols-12">
          <div className="col-span-8 p-8">
          <div className="grid grid-cols-12">
              <div className="col-span-12">
                <Fishing />
              </div>
              <div className="col-span-12 mt-4">
                <Shop />
              </div>
            </div>
          </div>
          <div className="col-span-4 p-8">
            <div className="grid grid-cols-12">
              <div className="col-span-12">
                <Player />
              </div>
              <div className="col-span-12 mt-4">
                <Equipment />
              </div>
              <div className="col-span-12 mt-4">
                <Log />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default App;
