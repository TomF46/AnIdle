import Fishing from "./components/Fishing";
import Log from "./components/Log/Log";

function App() {

  return (
    <>
      <div className="app-container container mx-auto px-4 lg:px-0 mb-4">
        <div className="grid grid-cols-12">
          <div className="col-span-8 p-8">
            <Fishing />
          </div>
          <div className="col-span-4 p-8">
            <Log />
          </div>
        </div>
      </div>
    </>
  )
}


export default App;
